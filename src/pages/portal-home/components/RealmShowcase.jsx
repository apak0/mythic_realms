import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RealmShowcase = () => {
  const [activeRealm, setActiveRealm] = useState(0);

  const realms = [
    {
      id: 1,
      name: 'Eldoria Prime',
      subtitle: 'The First Kingdom',
      description: 'A majestic realm where ancient magic flows through crystal spires and golden meadows. Home to the legendary Council of Mages and the Great Library of Eternal Knowledge.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      features: ['Ancient Magic', 'Crystal Spires', 'Eternal Library'],
      difficulty: 'Beginner Friendly',
      population: '847K',
      climate: 'Temperate',
      icon: 'Crown'
    },
    {
      id: 2,
      name: 'Shadowmere Depths',
      subtitle: 'The Dark Expanse',
      description: 'A mysterious underwater realm shrouded in eternal twilight. Bioluminescent creatures illuminate the depths while ancient sea gods slumber in forgotten temples.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
      features: ['Underwater Cities', 'Bioluminescence', 'Sea Temples'],
      difficulty: 'Advanced',
      population: '234K',
      climate: 'Aquatic',
      icon: 'Waves'
    },
    {
      id: 3,
      name: 'Skyborne Citadel',
      subtitle: 'The Floating Empire',
      description: 'Magnificent cities suspended among the clouds, connected by bridges of pure light. Sky pirates and wind mages soar through endless azure skies.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
      features: ['Floating Cities', 'Sky Pirates', 'Wind Magic'],
      difficulty: 'Intermediate',
      population: '456K',
      climate: 'Aerial',
      icon: 'Cloud'
    },
    {
      id: 4,
      name: 'Infernal Wastes',
      subtitle: 'The Burning Realm',
      description: 'A harsh volcanic landscape where fire elementals roam and molten rivers carve through obsidian mountains. Only the bravest heroes dare venture here.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      features: ['Volcanic Terrain', 'Fire Elementals', 'Obsidian Peaks'],
      difficulty: 'Expert',
      population: '123K',
      climate: 'Volcanic',
      icon: 'Flame'
    }
  ];

  const currentRealm = realms?.[activeRealm];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner Friendly': 'text-green-400 bg-green-400/10',
      'Intermediate': 'text-yellow-400 bg-yellow-400/10',
      'Advanced': 'text-orange-400 bg-orange-400/10',
      'Expert': 'text-red-400 bg-red-400/10'
    };
    return colors?.[difficulty] || 'text-gray-400 bg-gray-400/10';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Globe" size={16} className="text-primary" />
            <span className="font-inter text-sm text-primary">Explore Realms</span>
          </div>
          
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover <span className="gold-gradient-text">Infinite</span> Worlds
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Each realm offers unique adventures, challenges, and mysteries waiting to be uncovered by brave heroes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden mystical-glow">
              <Image
                src={currentRealm?.image}
                alt={currentRealm?.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentRealm?.difficulty)}`}>
                    {currentRealm?.difficulty}
                  </div>
                  <div className="flex items-center space-x-2 text-foreground">
                    <Icon name="Users" size={16} />
                    <span className="font-inter text-sm">{currentRealm?.population} Heroes</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {currentRealm?.features?.map((feature, index) => (
                    <div key={index} className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-border">
                      <span className="font-inter text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {realms?.map((realm, index) => (
                <div
                  key={realm?.id}
                  onClick={() => setActiveRealm(index)}
                  className={`p-6 rounded-xl cursor-pointer smooth-transition ${
                    activeRealm === index
                      ? 'bg-primary/10 border border-primary/20 mystical-glow' :'bg-card border border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeRealm === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={realm?.icon} size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-cinzel text-xl font-bold ${
                          activeRealm === index ? 'text-primary' : 'text-foreground'
                        }`}>
                          {realm?.name}
                        </h3>
                        {activeRealm === index && (
                          <Icon name="ChevronRight" size={20} className="text-primary" />
                        )}
                      </div>
                      
                      <p className="font-inter text-sm text-primary font-medium mb-3">
                        {realm?.subtitle}
                      </p>
                      
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                        {realm?.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Thermometer" size={12} />
                            <span>{realm?.climate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={12} />
                            <span>{realm?.population}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/world-atlas"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 smooth-transition"
          >
            <Icon name="Map" size={20} />
            <span className="font-inter font-medium">Explore All Realms</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealmShowcase;