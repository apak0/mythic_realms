import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ userStatus = 'new' }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroVideos = [
    {
      id: 1,
      title: "Mystic Forests",
      url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
    },
    {
      id: 2,
      title: "Ancient Citadels",
      url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
    },
    {
      id: 3,
      title: "Ethereal Realms",
      url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentVideo = heroVideos?.[currentVideoIndex];

  if (userStatus === 'returning') {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-midnight to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90 z-10" />
        <Image
          src={currentVideo?.thumbnail}
          alt={currentVideo?.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Crown" size={16} className="text-primary" />
              <span className="font-inter text-sm text-primary">Welcome Back, Champion</span>
            </div>
            
            <h1 className="font-cinzel text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your <span className="gold-gradient-text">Legend</span> Continues
            </h1>
            
            <p className="font-inter text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The realms await your return. Your guild has been active, new challenges have emerged, and your destiny calls once more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg" className="legendary-button">
              <Icon name="Play" size={20} className="mr-2" />
              Continue Adventure
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Users" size={20} className="mr-2" />
              Check Guild Activity
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="realm-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Sword" size={24} className="text-primary" />
              </div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">Active Quests</h3>
              <p className="font-inter text-sm text-muted-foreground">3 epic adventures await</p>
            </div>
            
            <div className="realm-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">Guild Updates</h3>
              <p className="font-inter text-sm text-muted-foreground">7 new messages</p>
            </div>
            
            <div className="realm-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-primary" />
              </div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">Achievements</h3>
              <p className="font-inter text-sm text-muted-foreground">2 new unlocked</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button className="animate-bounce p-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 smooth-transition">
            <Icon name="ChevronDown" size={24} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-midnight to-background">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-background/90 z-10" />
      <Image
        src={currentVideo?.thumbnail}
        alt={currentVideo?.title}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="font-inter text-sm text-primary">Enter the Legendary Realm</span>
            </div>
            
            <h1 className="font-cinzel text-6xl lg:text-8xl font-bold text-foreground mb-6 leading-tight text-shadow-lg">
              Your <span className="gold-gradient-text">Legend</span> Awaits
            </h1>
            
            <p className="font-inter text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Step into a world where heroes are forged, legends are born, and every choice shapes the destiny of entire realms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg" className="legendary-button">
              <Icon name="Sword" size={20} className="mr-2" />
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Map" size={20} className="mr-2" />
              Explore the Realms
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="font-inter text-sm">2.4M+ Heroes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} className="text-primary" />
              <span className="font-inter text-sm">15 Epic Realms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Crown" size={20} className="text-primary" />
              <span className="font-inter text-sm">Endless Adventures</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button className="animate-bounce p-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 smooth-transition">
          <Icon name="ChevronDown" size={24} />
        </button>
      </div>
      <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
        {heroVideos?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentVideoIndex ? 'bg-primary' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;