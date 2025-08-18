import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import SignInModal from "../../../components/modals/SignInModal";
import BeginJourneyModal from "../../../components/modals/BeginJourneyModal";

const PathSelection = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isBeginJourneyOpen, setIsBeginJourneyOpen] = useState(false);

  const handlePathClick = (e, path) => {
    e.preventDefault();
    openSignIn();
  };

  const openSignIn = () => {
    setIsBeginJourneyOpen(false);
    setIsSignInOpen(true);
  };

  const openBeginJourney = () => {
    setIsSignInOpen(false);
    setIsBeginJourneyOpen(true);
  };

  const closeModals = () => {
    setIsSignInOpen(false);
    setIsBeginJourneyOpen(false);
  };

  const paths = [
    {
      id: "world-atlas",
      title: "World Atlas",
      subtitle: "Discover Ancient Lore",
      description:
        "Explore the rich history, mystical locations, and legendary tales that shape the realms. Uncover secrets hidden in ancient texts and maps.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      icon: "Map",
      route: "/world-atlas",
      stats: "15 Realms",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      id: "community-hub",
      title: "Community Hub",
      subtitle: "Join Fellow Heroes",
      description:
        "Connect with adventurers from across all realms. Form guilds, share epic moments, and forge friendships that transcend worlds.",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop",
      icon: "Users",
      route: "/community-hub",
      stats: "2.4M+ Players",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      id: "competitive-arena",
      title: "Competitive Arena",
      subtitle: "Prove Your Might",
      description:
        "Rise through the ranks and claim your place among legends. Compete in tournaments, climb leaderboards, and earn eternal glory.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      icon: "Sword",
      route: "/competitive-arena",
      stats: "Live Rankings",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="font-inter text-sm text-primary">
              Choose Your Destiny
            </span>
          </div>

          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Paths to <span className="gold-gradient-text">Legend</span>
          </h2>

          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Every great adventure begins with a choice. Which path calls to your
            heroic spirit?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths?.map((path, index) => (
            <div
              key={path?.id}
              onClick={(e) => handlePathClick(e, path)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 smooth-transition mystical-hover cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={path?.image}
                  alt={path?.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${path?.color} to-transparent`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center border ${path?.borderColor}`}
                  >
                    <Icon
                      name={path?.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-border">
                    <Icon name="Star" size={14} className="text-primary" />
                    <span className="font-inter text-xs text-foreground">
                      {path?.stats}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-cinzel text-2xl font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">
                    {path?.title}
                  </h3>
                  <p className="font-inter text-sm text-primary font-medium">
                    {path?.subtitle}
                  </p>
                </div>

                <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                  {path?.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-muted-foreground">
                    Explore Path
                  </span>
                  <div className="flex items-center space-x-2 text-primary group-hover:translate-x-2 smooth-transition">
                    <span className="font-inter text-sm font-medium">
                      Enter
                    </span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 smooth-transition pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-6">
            Not sure where to start? Take our quick assessment to find your
            ideal path.
          </p>
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-muted/50 border border-border rounded-lg text-foreground hover:bg-muted hover:border-primary/50 smooth-transition">
            <Icon name="HelpCircle" size={20} />
            <span className="font-inter font-medium">Find My Path</span>
          </button>
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
    </section>
  );
};

export default PathSelection;
