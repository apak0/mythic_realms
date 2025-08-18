import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
import SignInModal from "../modals/SignInModal";
import BeginJourneyModal from "../modals/BeginJourneyModal";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isBeginJourneyOpen, setIsBeginJourneyOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const openSignIn = () => {
    setIsBeginJourneyOpen(false);
    setIsSignInOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const openBeginJourney = () => {
    setIsSignInOpen(false);
    setIsBeginJourneyOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeModals = () => {
    setIsSignInOpen(false);
    setIsBeginJourneyOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (isProfileMenuOpen && !event.target.closest(".profile-menu")) {
        setIsProfileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const navigationItems = [
    { path: "/portal-home", label: "Portal Home", icon: "Home" },
    { path: "/world-atlas", label: "World Atlas", icon: "Map" },
    { path: "/community-hub", label: "Community Hub", icon: "Users" },
    { path: "/competitive-arena", label: "Arena", icon: "Sword" },
    { path: "/chronicles", label: "Chronicles", icon: "BookOpen" },
  ];

  const secondaryItems = [
    { path: "/player-sanctum", label: "Player Sanctum", icon: "User" },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-mystical border-b border-border shadow-cinematic"
          : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link
            to="/portal-home"
            className="flex items-center space-x-3 group smooth-transition"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow group-hover:scale-105 smooth-transition">
                <Icon
                  name="Crown"
                  size={24}
                  className="text-primary-foreground"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-semibold text-xl text-foreground group-hover:text-primary smooth-transition">
                Mythic Realms
              </span>
              <span className="font-mono text-xs text-muted-foreground -mt-1">
                Legendary Gateway
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                  isActivePath(item?.path)
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-inter font-medium text-sm">
                  {item?.label}
                </span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-inter font-medium text-sm">More</span>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-muted/50 smooth-transition ${
                        isActivePath(item?.path)
                          ? "text-primary"
                          : "text-popover-foreground"
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span className="font-inter text-sm">{item?.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative profile-menu">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 smooth-transition profile-menu"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <span className="font-inter text-sm text-foreground">
                    {user.email?.split("@")[0]}
                  </span>
                  <Icon
                    name={isProfileMenuOpen ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-muted-foreground"
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-popover border border-border rounded-lg shadow-floating">
                    <Link
                      to="/player-sanctum"
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted/50 smooth-transition"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <Icon name="User" size={16} />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/player-sanctum/settings"
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted/50 smooth-transition"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <Icon name="Settings" size={16} />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsProfileMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-500 hover:bg-muted/50 smooth-transition"
                    >
                      <Icon name="LogOut" size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={openSignIn}>
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Sign In
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="legendary-button"
                  onClick={openBeginJourney}
                >
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Begin Journey
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-mystical border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActivePath(item?.path)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-inter font-medium">{item?.label}</span>
                </Link>
              ))}

              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActivePath(item?.path)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-inter font-medium">{item?.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            {!user && (
              <div className="px-6 pb-6 pt-2 space-y-3 border-t border-border">
                <Button variant="outline" fullWidth onClick={openSignIn}>
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Sign In
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="legendary-button"
                  onClick={openBeginJourney}
                >
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Begin Journey
                </Button>
              </div>
            )}
            {user && (
              <div className="px-6 pb-6 pt-2 space-y-2 border-t border-border">
                <div className="flex items-center space-x-3 px-4 py-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-inter font-medium text-foreground">
                      {user.email?.split("@")[0]}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                </div>
                <Link
                  to="/player-sanctum"
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg smooth-transition"
                >
                  <Icon name="User" size={20} />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/player-sanctum/settings"
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg smooth-transition"
                >
                  <Icon name="Settings" size={20} />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-muted/50 rounded-lg smooth-transition"
                >
                  <Icon name="LogOut" size={20} />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeModals}
        onSwitchToSignUp={openBeginJourney}
      />

      <BeginJourneyModal
        isOpen={isBeginJourneyOpen}
        onClose={closeModals}
        onSwitchToSignIn={openSignIn}
      />
    </header>
  );
};

export default Header;
