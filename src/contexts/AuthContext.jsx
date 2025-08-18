import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for changes on auth state (signed in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Will be passed down to Providers children
  const value = {
    signUp: async (data) => {
      try {
        const { error: signUpError } = await supabase.auth.signUp(data);
        if (signUpError) throw signUpError;

        // Immediately sign in after successful signup
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
          });

        if (signInError) throw signInError;
        return { data: signInData, error: null };
      } catch (error) {
        console.error("Auth error:", error.message);
        return { data: null, error };
      }
    },
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
