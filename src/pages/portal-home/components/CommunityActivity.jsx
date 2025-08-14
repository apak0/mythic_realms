import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityActivity = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [activities, setActivities] = useState([]);

  const mockActivities = {
    achievements: [
      {
        id: 1,
        type: 'achievement',
        player: 'DragonSlayer_Alex',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
        action: 'unlocked the legendary achievement',
        target: 'Realm Conqueror',
        timestamp: new Date(Date.now() - 300000),
        rarity: 'legendary',
        icon: 'Crown'
      },
      {
        id: 2,
        type: 'achievement',
        player: 'MysticMage_Luna',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        action: 'completed the epic quest',
        target: 'Shadows of the Ancient Temple',
        timestamp: new Date(Date.now() - 600000),
        rarity: 'epic',
        icon: 'Sparkles'
      },
      {
        id: 3,
        type: 'achievement',
        player: 'SteelWarrior_Khan',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        action: 'reached level 50 in',
        target: 'Competitive Arena',
        timestamp: new Date(Date.now() - 900000),
        rarity: 'rare',
        icon: 'Sword'
      },
      {
        id: 4,
        type: 'achievement',
        player: 'NatureGuardian_Sage',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        action: 'discovered the hidden realm',
        target: 'Whispering Grove Sanctuary',
        timestamp: new Date(Date.now() - 1200000),
        rarity: 'mythic',
        icon: 'Map'
      }
    ],
    guilds: [
      {
        id: 1,
        type: 'guild',
        guild: 'Crimson Phoenix',
        leader: 'Phoenix_Commander',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        action: 'formed a new guild',
        members: 47,
        timestamp: new Date(Date.now() - 450000),
        icon: 'Users'
      },
      {
        id: 2,
        type: 'guild',
        guild: 'Moonlight Sentinels',
        leader: 'Luna_Guardian',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
        action: 'completed guild raid',
        target: 'Dragon\'s Lair Fortress',
        members: 89,
        timestamp: new Date(Date.now() - 750000),
        icon: 'Shield'
      },
      {
        id: 3,
        type: 'guild',
        guild: 'Storm Riders',
        leader: 'Thunder_Chief',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        action: 'won the weekly tournament',
        target: 'Arena Championship',
        members: 156,
        timestamp: new Date(Date.now() - 1050000),
        icon: 'Trophy'
      }
    ],
    moments: [
      {
        id: 1,
        type: 'moment',
        player: 'EpicExplorer_Zara',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
        action: 'shared an epic screenshot',
        target: 'Sunset over Crystal Mountains',
        timestamp: new Date(Date.now() - 180000),
        likes: 234,
        comments: 45,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        icon: 'Camera'
      },
      {
        id: 2,
        type: 'moment',
        player: 'ArtisticSoul_Maya',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
        action: 'created fan art',
        target: 'The Great Dragon of Eldoria',
        timestamp: new Date(Date.now() - 480000),
        likes: 567,
        comments: 89,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        icon: 'Palette'
      }
    ]
  };

  const tabs = [
    { id: 'achievements', label: 'Epic Achievements', icon: 'Trophy' },
    { id: 'guilds', label: 'Guild Activity', icon: 'Users' },
    { id: 'moments', label: 'Epic Moments', icon: 'Camera' }
  ];

  useEffect(() => {
    setActivities(mockActivities?.[activeTab]);
  }, [activeTab]);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  const getRarityColor = (rarity) => {
    const colors = {
      common: 'text-gray-400',
      rare: 'text-blue-400',
      epic: 'text-purple-400',
      legendary: 'text-yellow-400',
      mythic: 'text-red-400'
    };
    return colors?.[rarity] || 'text-gray-400';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-midnight to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Activity" size={16} className="text-primary" />
            <span className="font-inter text-sm text-primary">Live Community</span>
          </div>
          
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Heroes in <span className="gold-gradient-text">Action</span>
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the epic moments, legendary achievements, and heroic deeds happening right now across all realms.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-inter font-medium smooth-transition ${
                  activeTab === tab?.id
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {activities?.map((activity) => (
            <div key={activity?.id} className="realm-card p-6 hover:border-primary/50 smooth-transition">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <Image
                    src={activity?.avatar}
                    alt={activity?.player || activity?.leader}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={activity?.icon} size={12} className="text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-inter font-semibold text-foreground truncate">
                      {activity?.player || activity?.guild}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatTimeAgo(activity?.timestamp)}
                    </span>
                  </div>

                  <p className="font-inter text-sm text-muted-foreground mb-3">
                    <span className="text-foreground">{activity?.action}</span>
                    {activity?.target && (
                      <>
                        {' '}
                        <span className={`font-medium ${activity?.rarity ? getRarityColor(activity?.rarity) : 'text-primary'}`}>
                          {activity?.target}
                        </span>
                      </>
                    )}
                  </p>

                  {activity?.image && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={activity?.image}
                        alt="Epic moment"
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      {activity?.likes && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={14} />
                          <span className="font-inter text-xs">{activity?.likes}</span>
                        </div>
                      )}
                      {activity?.comments && (
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={14} />
                          <span className="font-inter text-xs">{activity?.comments}</span>
                        </div>
                      )}
                      {activity?.members && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span className="font-inter text-xs">{activity?.members} members</span>
                        </div>
                      )}
                    </div>

                    {activity?.rarity && (
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(activity?.rarity)} bg-current/10`}>
                        {activity?.rarity?.toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/community-hub"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 smooth-transition"
          >
            <Icon name="Users" size={20} />
            <span className="font-inter font-medium">Join the Community</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityActivity;