import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const features = [
    {
      icon: 'Sword',
      title: 'Epic Adventures',
      description: 'Embark on legendary quests across 15 unique realms'
    },
    {
      icon: 'Users',
      title: 'Guild System',
      description: 'Form alliances and conquer challenges together'
    },
    {
      icon: 'Trophy',
      title: 'Competitive Play',
      description: 'Climb leaderboards and earn eternal glory'
    },
    {
      icon: 'Sparkles',
      title: 'Magic System',
      description: 'Master ancient spells and mystical abilities'
    }
  ];

  const stats = [
    { label: 'Active Heroes', value: '2.4M+', icon: 'Users' },
    { label: 'Epic Realms', value: '15', icon: 'Globe' },
    { label: 'Guilds Formed', value: '45K+', icon: 'Shield' },
    { label: 'Legends Created', value: '∞', icon: 'Crown' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-midnight to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Epic background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="font-inter text-sm text-primary">Begin Your Legend</span>
          </div>
          
          <h2 className="font-cinzel text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your <span className="gold-gradient-text">Epic Journey</span><br />
            Starts Here
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join millions of heroes in the most immersive fantasy MMORPG ever created. 
            Forge your destiny, build lasting friendships, and become the legend you were meant to be.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features?.map((feature, index) => (
                <div key={index} className="realm-card p-6 text-center hover:border-primary/50 smooth-transition">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">
                    {feature?.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    {feature?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="realm-card p-8 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 mystical-glow">
                <Icon name="Crown" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-foreground mb-4">
                Ready to Begin?
              </h3>
              <p className="font-inter text-muted-foreground mb-8">
                Create your account and start your legendary adventure today. 
                The realms are waiting for their next hero.
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="default" size="lg" fullWidth className="legendary-button">
                <Icon name="Sword" size={20} className="mr-2" />
                Create Your Hero
              </Button>
              
              <Button variant="outline" size="lg" fullWidth>
                <Icon name="Play" size={20} className="mr-2" />
                Watch Trailer
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-inter text-sm text-muted-foreground mb-4">
                Stay updated with the latest news and events
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-inter font-medium">Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" variant="outline">
                    <Icon name="Mail" size={16} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="font-cinzel text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="font-inter text-sm">Secure & Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="font-inter text-sm">Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={16} className="text-primary" />
              <span className="font-inter text-sm">Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;