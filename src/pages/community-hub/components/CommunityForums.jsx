import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityForums = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const forumCategories = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'General game discussion and community chat',
      icon: 'MessageSquare',
      color: 'text-blue-400',
      topics: 1247,
      posts: 8934,
      lastActivity: new Date(Date.now() - 300000) // 5 minutes ago
    },
    {
      id: 'strategy',
      name: 'Strategy & Guides',
      description: 'Share strategies, builds, and helpful guides',
      icon: 'BookOpen',
      color: 'text-green-400',
      topics: 892,
      posts: 5621,
      lastActivity: new Date(Date.now() - 600000) // 10 minutes ago
    },
    {
      id: 'lore',
      name: 'Lore & Theories',
      description: 'Discuss game lore and share theories',
      icon: 'Scroll',
      color: 'text-purple-400',
      topics: 456,
      posts: 2847,
      lastActivity: new Date(Date.now() - 900000) // 15 minutes ago
    },
    {
      id: 'newbie',
      name: 'New Player Welcome',
      description: 'Help and guidance for new adventurers',
      icon: 'Users',
      color: 'text-orange-400',
      topics: 234,
      posts: 1923,
      lastActivity: new Date(Date.now() - 180000) // 3 minutes ago
    },
    {
      id: 'pvp',
      name: 'PvP Discussion',
      description: 'Competitive gameplay and arena strategies',
      icon: 'Sword',
      color: 'text-red-400',
      topics: 678,
      posts: 4156,
      lastActivity: new Date(Date.now() - 420000) // 7 minutes ago
    },
    {
      id: 'guilds',
      name: 'Guild Recruitment',
      description: 'Find guilds and recruit new members',
      icon: 'Shield',
      color: 'text-cyan-400',
      topics: 345,
      posts: 1567,
      lastActivity: new Date(Date.now() - 720000) // 12 minutes ago
    }
  ];

  const forumTopics = [
    {
      id: 1,
      title: 'Best Build for Solo Dragon Farming?',
      category: 'strategy',
      author: {
        name: 'DragonHunter_Pro',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
        level: 58,
        reputation: 2847,
        badge: 'Expert'
      },
      content: 'Looking for advice on the most efficient build for farming Ancient Dragons solo. Currently running a Paladin build but struggling with DPS...',
      replies: 23,
      views: 456,
      likes: 34,
      lastReply: new Date(Date.now() - 300000), // 5 minutes ago
      lastReplier: 'MasterCrafter_Jane',
      isPinned: false,
      isLocked: false,
      tags: ['build', 'solo', 'dragon', 'farming']
    },
    {
      id: 2,
      title: '[GUIDE] Complete Crafting Guide for Beginners',
      category: 'strategy',
      author: {
        name: 'CraftMaster_Thor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        level: 60,
        reputation: 4521,
        badge: 'Master'
      },
      content: 'Comprehensive guide covering all crafting professions from level 1 to max level. Includes material locations, optimal leveling paths, and profit strategies...',
      replies: 67,
      views: 1234,
      likes: 89,
      lastReply: new Date(Date.now() - 600000), // 10 minutes ago
      lastReplier: 'NewPlayer_Sam',
      isPinned: true,
      isLocked: false,
      tags: ['guide', 'crafting', 'beginner', 'comprehensive']
    },
    {
      id: 3,
      title: 'Theory: The True Identity of the Shadow Lord',
      category: 'lore',
      author: {
        name: 'LoreSeeker_Aria',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        level: 45,
        reputation: 1923,
        badge: 'Scholar'
      },
      content: 'After analyzing all the lore fragments and quest dialogues, I believe I\'ve uncovered the true identity of the mysterious Shadow Lord. Here\'s my theory...',
      replies: 45,
      views: 789,
      likes: 67,
      lastReply: new Date(Date.now() - 900000), // 15 minutes ago
      lastReplier: 'HistoryBuff_Mike',
      isPinned: false,
      isLocked: false,
      tags: ['theory', 'shadow lord', 'lore', 'mystery']
    },
    {
      id: 4,
      title: 'Welcome New Players! Ask Questions Here',
      category: 'newbie',
      author: {
        name: 'CommunityHelper_Lisa',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        level: 52,
        reputation: 3456,
        badge: 'Helper'
      },
      content: 'New to Mythic Realms? Don\'t hesitate to ask any questions here! Our community is always happy to help newcomers get started on their legendary journey...',
      replies: 156,
      views: 2847,
      likes: 123,
      lastReply: new Date(Date.now() - 180000), // 3 minutes ago
      lastReplier: 'Newbie_Alex',
      isPinned: true,
      isLocked: false,
      tags: ['welcome', 'questions', 'help', 'newbie']
    },
    {
      id: 5,
      title: 'Arena Meta Discussion - Current Season',
      category: 'pvp',
      author: {
        name: 'PvPChampion_Rex',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        level: 59,
        reputation: 3789,
        badge: 'Champion'
      },
      content: 'Let\'s discuss the current arena meta. Rogues seem overpowered this season, while mages are struggling. What are your thoughts on the recent balance changes?',
      replies: 89,
      views: 1567,
      likes: 78,
      lastReply: new Date(Date.now() - 420000), // 7 minutes ago
      lastReplier: 'ArenaWarrior_Kate',
      isPinned: false,
      isLocked: false,
      tags: ['arena', 'meta', 'balance', 'pvp']
    },
    {
      id: 6,
      title: '[RECRUITING] Crimson Guardians - Elite PvP Guild',
      category: 'guilds',
      author: {
        name: 'GuildLeader_Steel',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        level: 60,
        reputation: 2156,
        badge: 'Leader'
      },
      content: 'Crimson Guardians is recruiting skilled PvP players for competitive guild wars. Requirements: Level 50+, 2.0+ K/D ratio, Discord mandatory...',
      replies: 34,
      views: 678,
      likes: 45,
      lastReply: new Date(Date.now() - 720000), // 12 minutes ago
      lastReplier: 'PvPAspiring_John',
      isPinned: false,
      isLocked: false,
      tags: ['recruiting', 'pvp', 'guild', 'competitive']
    }
  ];

  const filteredTopics = selectedCategory === 'all' 
    ? forumTopics 
    : forumTopics?.filter(topic => topic?.category === selectedCategory);

  const sortedTopics = [...filteredTopics]?.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b?.replies + b?.likes) - (a?.replies + a?.likes);
      case 'views':
        return b?.views - a?.views;
      default:
        return b?.lastReply - a?.lastReply;
    }
  });

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Master': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'Expert': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      case 'Champion': return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'Scholar': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Helper': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Leader': return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
      default: return 'text-muted-foreground border-border bg-muted/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-cinzel font-bold text-2xl text-foreground">Community Forums</h2>
          <p className="text-muted-foreground">Connect, discuss, and share knowledge with fellow adventurers</p>
        </div>
        
        <Button variant="default" className="legendary-button">
          <Icon name="Plus" size={16} className="mr-2" />
          New Topic
        </Button>
      </div>
      {/* Forum Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forumCategories?.map((category) => (
          <div 
            key={category?.id} 
            className={`realm-card p-4 cursor-pointer smooth-transition ${
              selectedCategory === category?.id ? 'border-primary mystical-glow' : 'hover:border-primary/50'
            }`}
            onClick={() => setSelectedCategory(category?.id)}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center ${category?.color}`}>
                <Icon name={category?.icon} size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-inter font-semibold text-foreground mb-1">{category?.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{category?.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <span>{category?.topics} topics</span>
                    <span>{category?.posts} posts</span>
                  </div>
                  <span>{formatTimeAgo(category?.lastActivity)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* All Categories Button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg smooth-transition ${
            selectedCategory === 'all' ?'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          All Categories
        </button>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e?.target?.value)}
            className="bg-muted/30 border border-border rounded-lg px-3 py-1 text-sm text-foreground"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="views">Most Viewed</option>
          </select>
        </div>
      </div>
      {/* Forum Topics */}
      <div className="space-y-4">
        {sortedTopics?.map((topic) => (
          <div key={topic?.id} className="realm-card p-6">
            <div className="flex items-start space-x-4">
              {/* Author Avatar */}
              <div className="relative flex-shrink-0">
                <Image 
                  src={topic?.author?.avatar} 
                  alt={topic?.author?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {topic?.author?.level}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {/* Topic Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {topic?.isPinned && (
                      <Icon name="Pin" size={16} className="text-primary" />
                    )}
                    {topic?.isLocked && (
                      <Icon name="Lock" size={16} className="text-muted-foreground" />
                    )}
                    <h3 className="font-inter font-semibold text-lg text-foreground hover:text-primary cursor-pointer smooth-transition">
                      {topic?.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getBadgeColor(topic?.author?.badge)}`}>
                      {topic?.author?.badge}
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{topic?.author?.name}</span>
                  <span>•</span>
                  <span>{topic?.author?.reputation?.toLocaleString()} reputation</span>
                  <span>•</span>
                  <span>{formatTimeAgo(topic?.lastReply)}</span>
                </div>

                {/* Topic Content Preview */}
                <p className="text-muted-foreground mb-3 line-clamp-2">{topic?.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {topic?.tags?.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Topic Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span>{topic?.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={16} />
                      <span>{topic?.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span>{topic?.likes} likes</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Last reply by <span className="text-foreground font-medium">{topic?.lastReplier}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          <Icon name="RefreshCw" size={16} className="mr-2" />
          Load More Topics
        </Button>
      </div>
      {/* Forum Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-primary">{forumCategories?.reduce((sum, cat) => sum + cat?.topics, 0)?.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Topics</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-success">{forumCategories?.reduce((sum, cat) => sum + cat?.posts, 0)?.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Posts</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-warning">2,847</div>
          <div className="text-sm text-muted-foreground">Active Members</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-foreground">156</div>
          <div className="text-sm text-muted-foreground">Online Now</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForums;