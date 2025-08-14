import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PlayerSpotlight = () => {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);

  const spotlightPlayers = [
    {
      id: 1,
      name: 'DragonHeart_Aria',
      title: 'The Realm Protector',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      coverImage: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=800&h=400&fit=crop',
      level: 60,
      class: 'Paladin',
      guild: 'Guardians of Light',
      joinDate: '2023-01-15',
      playtime: '2,847 hours',
      story: `Aria began her journey as a humble village guard, but her unwavering dedication to protecting others quickly set her apart. Through countless battles against the forces of darkness, she has become a beacon of hope for all who fight alongside her.\n\nHer legendary defense of Silverhold during the Great Siege earned her the title "Realm Protector" and the eternal gratitude of thousands of players. Today, she leads the largest guild in the realm and mentors new players daily.`,
      achievements: [
        { name: 'Realm Protector', rarity: 'legendary', icon: 'Shield' },
        { name: 'Dragon Slayer', rarity: 'epic', icon: 'Sword' },
        { name: 'Master Mentor', rarity: 'rare', icon: 'Users' },
        { name: 'Siege Hero', rarity: 'epic', icon: 'Castle' }
      ],
      stats: {
        'Players Helped': '1,247',
        'Dungeons Cleared': '892',
        'PvP Victories': '456',
        'Guild Members': '89'
      },
      contributions: [
        'Led the defense of Silverhold during the Great Siege',
        'Mentored over 1,000 new players',
        'Created comprehensive Paladin guide series',
        'Organized weekly community events'
      ],
      quote: "Every legend starts with someone willing to take the first step. Be that someone for another player today."
    },
    {
      id: 2,
      name: 'ShadowWeaver_Kael',
      title: 'Master of the Arcane',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      coverImage: 'https://images.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg?w=800&h=400&fit=crop',
      level: 58,
      class: 'Arcane Mage',
      guild: 'Mystic Scholars',
      joinDate: '2023-02-20',
      playtime: '2,156 hours',
      story: `Kael's fascination with ancient magic led him to discover forgotten spells that changed the very fabric of magical combat in Mythic Realms. His research into the Ethereal Codex unlocked new possibilities for all mage players.\n\nBeyond his magical prowess, Kael is renowned for his detailed lore analysis and theory crafting. His guides have helped thousands of players understand the deeper mysteries of the realm's magic system.`,
      achievements: [
        { name: 'Arcane Master', rarity: 'legendary', icon: 'Zap' },
        { name: 'Lore Keeper', rarity: 'epic', icon: 'BookOpen' },
        { name: 'Spell Innovator', rarity: 'rare', icon: 'Sparkles' },
        { name: 'Theory Crafter', rarity: 'epic', icon: 'Brain' }
      ],
      stats: {
        'Spells Discovered': '23',
        'Guides Written': '47',
        'Magic Damage': '2.8M',
        'Research Hours': '892'
      },
      contributions: [
        'Discovered the lost Ethereal Codex spells',
        'Authored the definitive Arcane Magic guide',
        'Led the Mystic Scholars to victory in the Mage Tournament',
        'Contributed to game balance discussions with developers'
      ],
      quote: "Magic is not just about power—it\'s about understanding the very essence of reality itself."
    },
    {
      id: 3,
      name: 'IronForge_Thane',
      title: 'The Legendary Craftsman',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      level: 55,
      class: 'Master Smith',
      guild: 'Forge Masters',
      joinDate: '2023-03-10',
      playtime: '1,923 hours',
      story: `Thane transformed from a simple blacksmith into the realm's most sought-after craftsman. His legendary weapons and armor have equipped heroes for the greatest battles in Mythic Realms history.\n\nHis innovation in combining rare materials led to the creation of the first Mythic-tier equipment, setting new standards for craftsmanship. He freely shares his knowledge, elevating the entire crafting community.`,
      achievements: [
        { name: 'Legendary Craftsman', rarity: 'legendary', icon: 'Hammer' },
        { name: 'Mythic Creator', rarity: 'epic', icon: 'Crown' },
        { name: 'Master Teacher', rarity: 'rare', icon: 'GraduationCap' },
        { name: 'Innovation Pioneer', rarity: 'epic', icon: 'Lightbulb' }
      ],
      stats: {
        'Items Crafted': '5,847','Mythic Items': '127','Students Taught': '234','Recipes Created': '89'
      },
      contributions: [
        'Created the first Mythic-tier equipment','Established the Crafting Academy','Developed innovative material combination techniques','Mentored hundreds of aspiring craftsmen'
      ],
      quote: "True mastery comes not from hoarding knowledge, but from sharing it with those who hunger to learn."
    }
  ];

  const currentPlayer = spotlightPlayers?.[currentSpotlight];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'epic': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      case 'rare': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      default: return 'text-green-400 border-green-400/30 bg-green-400/10';
    }
  };

  const nextSpotlight = () => {
    setCurrentSpotlight((prev) => (prev + 1) % spotlightPlayers?.length);
  };

  const prevSpotlight = () => {
    setCurrentSpotlight((prev) => (prev - 1 + spotlightPlayers?.length) % spotlightPlayers?.length);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="font-cinzel font-bold text-2xl text-foreground">Legends of the Realm</h2>
        <p className="text-muted-foreground">Celebrating exceptional community members and their legendary journeys</p>
      </div>
      {/* Main Spotlight */}
      <div className="realm-card overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={currentPlayer?.coverImage} 
            alt={`${currentPlayer?.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Navigation */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={prevSpotlight}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:bg-background smooth-transition"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button 
              onClick={nextSpotlight}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:bg-background smooth-transition"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Player Info Overlay */}
          <div className="absolute bottom-6 left-6 flex items-end space-x-4">
            <div className="relative">
              <Image 
                src={currentPlayer?.avatar} 
                alt={currentPlayer?.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary mystical-glow"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                {currentPlayer?.level}
              </div>
            </div>
            
            <div>
              <h3 className="font-cinzel font-bold text-2xl text-foreground">{currentPlayer?.name}</h3>
              <p className="text-primary font-medium">{currentPlayer?.title}</p>
              <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                <span>{currentPlayer?.class}</span>
                <span>•</span>
                <span>{currentPlayer?.guild}</span>
                <span>•</span>
                <span>{currentPlayer?.playtime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Story */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-foreground mb-3">Their Legend</h4>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{currentPlayer?.story}</p>
          </div>

          {/* Quote */}
          <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg">
            <blockquote className="text-foreground italic">"{currentPlayer?.quote}"</blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">— {currentPlayer?.name}</cite>
          </div>

          {/* Stats Grid */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-foreground mb-3">Epic Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(currentPlayer?.stats)?.map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-muted/30 rounded-lg border border-border">
                  <div className="text-xl font-bold text-primary">{value}</div>
                  <div className="text-sm text-muted-foreground">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-foreground mb-3">Legendary Achievements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentPlayer?.achievements?.map((achievement, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${getRarityColor(achievement?.rarity)}`}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mystical-glow">
                    <Icon name={achievement?.icon} size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-foreground">{achievement?.name}</div>
                    <div className="text-xs capitalize">{achievement?.rarity} Achievement</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contributions */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-foreground mb-3">Community Contributions</h4>
            <div className="space-y-2">
              {currentPlayer?.contributions?.map((contribution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{contribution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                View Profile
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Send Message
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Heart" size={18} />
              </button>
              <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Share2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Spotlight Navigation */}
      <div className="flex items-center justify-center space-x-2">
        {spotlightPlayers?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSpotlight(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${
              index === currentSpotlight ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      {/* Nomination CTA */}
      <div className="text-center p-6 bg-muted/30 rounded-lg border border-border">
        <h3 className="font-inter font-semibold text-lg text-foreground mb-2">Know a Legend?</h3>
        <p className="text-muted-foreground mb-4">
          Nominate exceptional community members for our monthly spotlight feature
        </p>
        <Button variant="default" className="legendary-button">
          <Icon name="Star" size={16} className="mr-2" />
          Nominate a Player
        </Button>
      </div>
    </div>
  );
};

export default PlayerSpotlight;