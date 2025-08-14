import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ActivityFeed = () => {
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: 1,
      type: 'achievement',
      user: {
        name: 'DragonSlayer_Mike',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
        level: 47,
        guild: 'Crimson Guardians'
      },
      content: 'Defeated the Ancient Dragon of Shadowmere and claimed the legendary Dragonheart Blade!',
      achievement: {
        name: 'Dragon Slayer',
        rarity: 'legendary',
        icon: 'Sword'
      },
      timestamp: new Date(Date.now() - 1800000),
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      type: 'guild_recruitment',
      user: {
        name: 'GuildMaster_Sarah',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        level: 52,
        guild: 'Mystic Scholars'
      },
      content: `Mystic Scholars is recruiting dedicated players for our upcoming raid campaign!\n\nWe're looking for:\n• Level 40+ players\n• Active 4+ days per week\n• Team-oriented mindset\n• Discord required\n\nJoin us in conquering the Ethereal Sanctum!`,
      guildInfo: {
        memberCount: 47,
        focus: ['PvE', 'Raids', 'Crafting'],
        requirements: 'Level 40+, Active'
      },
      timestamp: new Date(Date.now() - 3600000),
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      type: 'fan_art',
      user: {
        name: 'ArtisticSoul_Luna',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',level: 31,guild: 'Creative Minds'
      },
      content: 'Just finished my latest artwork featuring the Celestial Gardens! This zone has such incredible atmosphere.',
      artwork: {
        title: 'Celestial Gardens at Twilight',image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',medium: 'Digital Art'
      },
      timestamp: new Date(Date.now() - 7200000),
      likes: 156,
      comments: 23
    },
    {
      id: 4,
      type: 'event',
      user: {
        name: 'EventCoordinator_Alex',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',level: 45,guild: 'Community Leaders'
      },
      content: 'Reminder: Community PvP Tournament starts in 2 hours! Registration is still open.',
      event: {
        name: 'Weekly PvP Championship',startTime: new Date(Date.now() + 7200000),participants: 127,prize: '10,000 Gold + Rare Mount'
      },
      timestamp: new Date(Date.now() - 10800000),
      likes: 78,
      comments: 15
    },
    {
      id: 5,
      type: 'milestone',
      user: {
        name: 'VeteranPlayer_John',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',level: 60,guild: 'Elder Council'
      },
      content: 'Celebrating 1000 hours in Mythic Realms! This community has been incredible throughout my journey.',
      milestone: {
        type: 'playtime',value: '1000 hours',badge: 'Dedicated Adventurer'
      },
      timestamp: new Date(Date.now() - 14400000),
      likes: 312,
      comments: 45
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Activity', icon: 'Activity' },
    { key: 'achievement', label: 'Achievements', icon: 'Trophy' },
    { key: 'guild_recruitment', label: 'Guild Posts', icon: 'Users' },
    { key: 'fan_art', label: 'Fan Art', icon: 'Palette' },
    { key: 'event', label: 'Events', icon: 'Calendar' }
  ];

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities?.filter(activity => activity?.type === filter);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-400';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      default: return 'text-green-400';
    }
  };

  const renderActivityContent = (activity) => {
    switch (activity?.type) {
      case 'achievement':
        return (
          <div className="space-y-3">
            <p className="text-foreground">{activity?.content}</p>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mystical-glow`}>
                <Icon name={activity?.achievement?.icon} size={20} className="text-primary-foreground" />
              </div>
              <div>
                <div className={`font-inter font-semibold ${getRarityColor(activity?.achievement?.rarity)}`}>
                  {activity?.achievement?.name}
                </div>
                <div className="text-xs text-muted-foreground capitalize">
                  {activity?.achievement?.rarity} Achievement
                </div>
              </div>
            </div>
          </div>
        );

      case 'guild_recruitment':
        return (
          <div className="space-y-3">
            <p className="text-foreground whitespace-pre-line">{activity?.content}</p>
            <div className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm text-foreground">{activity?.guildInfo?.memberCount} members</span>
              </div>
              <div className="flex items-center space-x-1">
                {activity?.guildInfo?.focus?.map((focus, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'fan_art':
        return (
          <div className="space-y-3">
            <p className="text-foreground">{activity?.content}</p>
            <div className="rounded-lg overflow-hidden border border-border">
              <Image 
                src={activity?.artwork?.image} 
                alt={activity?.artwork?.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-muted/30">
                <div className="font-inter font-semibold text-foreground">{activity?.artwork?.title}</div>
                <div className="text-sm text-muted-foreground">{activity?.artwork?.medium}</div>
              </div>
            </div>
          </div>
        );

      case 'event':
        return (
          <div className="space-y-3">
            <p className="text-foreground">{activity?.content}</p>
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="font-inter font-semibold text-foreground">{activity?.event?.name}</div>
                <div className="text-sm text-primary">{activity?.event?.prize}</div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{formatTimeAgo(activity?.event?.startTime)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{activity?.event?.participants} registered</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'milestone':
        return (
          <div className="space-y-3">
            <p className="text-foreground">{activity?.content}</p>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-success to-success/80 flex items-center justify-center">
                <Icon name="Award" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-inter font-semibold text-success">{activity?.milestone?.badge}</div>
                <div className="text-sm text-muted-foreground">{activity?.milestone?.value}</div>
              </div>
            </div>
          </div>
        );

      default:
        return <p className="text-foreground">{activity?.content}</p>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filterOptions?.map((option) => (
          <button
            key={option?.key}
            onClick={() => setFilter(option?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
              filter === option?.key
                ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={option?.icon} size={16} />
            <span className="font-inter text-sm">{option?.label}</span>
          </button>
        ))}
      </div>
      {/* Activity List */}
      <div className="space-y-6">
        {filteredActivities?.map((activity) => (
          <div key={activity?.id} className="realm-card p-6">
            {/* User Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <Image 
                  src={activity?.user?.avatar} 
                  alt={activity?.user?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {activity?.user?.level}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-inter font-semibold text-foreground">{activity?.user?.name}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-primary">{activity?.user?.guild}</span>
                </div>
                <div className="text-sm text-muted-foreground">{formatTimeAgo(activity?.timestamp)}</div>
              </div>

              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition">
                <Icon name="MoreHorizontal" size={16} />
              </button>
            </div>

            {/* Activity Content */}
            <div className="mb-4">
              {renderActivityContent(activity)}
            </div>

            {/* Engagement Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Heart" size={18} />
                  <span className="font-inter text-sm">{activity?.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="MessageCircle" size={18} />
                  <span className="font-inter text-sm">{activity?.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Share2" size={18} />
                  <span className="font-inter text-sm">Share</span>
                </button>
              </div>
              
              <button className="text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Bookmark" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          <Icon name="RefreshCw" size={16} className="mr-2" />
          Load More Activities
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;