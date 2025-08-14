import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UserContentGallery = () => {
  const [activeTab, setActiveTab] = useState('fan_art');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedContent, setSelectedContent] = useState(null);

  const contentData = {
    fan_art: [
      {
        id: 1,
        title: 'Celestial Gardens at Dawn',
        creator: 'ArtisticSoul_Luna',
        creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
        description: 'My interpretation of the beautiful Celestial Gardens zone during sunrise. The lighting in this area is absolutely magical!',
        likes: 234,
        comments: 18,
        shares: 12,
        createdAt: new Date(Date.now() - 86400000), // 1 day ago
        tags: ['landscape', 'digital art', 'celestial gardens'],
        medium: 'Digital Painting'
      },
      {
        id: 2,
        title: 'Dragon Slayer Portrait',
        creator: 'PixelMaster_Alex',
        creatorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=600&h=400&fit=crop',
        description: 'Character portrait of my Paladin after defeating the Ancient Dragon. Took me 20 hours to complete!',
        likes: 189,
        comments: 23,
        shares: 8,
        createdAt: new Date(Date.now() - 172800000), // 2 days ago
        tags: ['character art', 'paladin', 'portrait'],
        medium: 'Digital Art'
      },
      {
        id: 3,
        title: 'Mystic Forest Concept',
        creator: 'DreamWeaver_Sarah',
        creatorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg?w=600&h=400&fit=crop',
        description: 'Concept art for a potential new zone - the Enchanted Mystic Forest. Hope the developers see this!',
        likes: 156,
        comments: 31,
        shares: 15,
        createdAt: new Date(Date.now() - 259200000), // 3 days ago
        tags: ['concept art', 'environment', 'forest'],
        medium: 'Mixed Media'
      }
    ],
    screenshots: [
      {
        id: 4,
        title: 'Epic Guild Battle Victory',
        creator: 'WarriorKing_Mike',
        creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
        description: 'Our guild just won the most intense battle in Shadowmere! 3 hours of non-stop action!',
        likes: 312,
        comments: 45,
        shares: 28,
        createdAt: new Date(Date.now() - 43200000), // 12 hours ago
        tags: ['pvp', 'guild battle', 'victory'],
        location: 'Shadowmere Battlefield'
      },
      {
        id: 5,
        title: 'Rare Mount Discovery',
        creator: 'Explorer_Emma',
        creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=600&h=400&fit=crop',
        description: 'Found this incredibly rare Ethereal Phoenix mount in a hidden cave! Only 0.1% drop rate!',
        likes: 278,
        comments: 67,
        shares: 34,
        createdAt: new Date(Date.now() - 86400000), // 1 day ago
        tags: ['rare mount', 'discovery', 'ethereal phoenix'],
        location: 'Hidden Crystal Caves'
      },
      {
        id: 6,
        title: 'Legendary Weapon Forge',
        creator: 'MasterSmith_John',
        creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        image: 'https://images.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg?w=600&h=400&fit=crop',
        description: 'Just crafted my first Mythic-tier weapon! The Dragonheart Blade with perfect stats!',
        likes: 201,
        comments: 29,
        shares: 19,
        createdAt: new Date(Date.now() - 172800000), // 2 days ago
        tags: ['crafting', 'legendary weapon', 'mythic tier'],
        location: 'Grand Forge'
      }
    ],
    videos: [
      {
        id: 7,
        title: 'Solo Dragon Kill Guide',
        creator: 'ProGamer_Chris',
        creatorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
        description: 'Complete guide on how to solo the Ancient Dragon as a level 45 Rogue. Includes all the tricks and strategies!',
        likes: 445,
        comments: 78,
        shares: 56,
        views: 2847,
        duration: '12:34',
        createdAt: new Date(Date.now() - 259200000), // 3 days ago
        tags: ['guide', 'solo play', 'dragon', 'rogue'],
        type: 'Tutorial'
      },
      {
        id: 8,
        title: 'Guild Raid Highlights',
        creator: 'RaidLeader_Anna',
        creatorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        thumbnail: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=600&h=400&fit=crop',
        description: 'Best moments from our successful Ethereal Sanctum raid. Amazing teamwork and epic loot drops!',
        likes: 367,
        comments: 52,
        shares: 41,
        views: 1923,
        duration: '8:47',
        createdAt: new Date(Date.now() - 345600000), // 4 days ago
        tags: ['raid', 'teamwork', 'highlights'],
        type: 'Highlights'
      }
    ]
  };

  const tabs = [
    { key: 'fan_art', label: 'Fan Art', icon: 'Palette', count: contentData?.fan_art?.length },
    { key: 'screenshots', label: 'Screenshots', icon: 'Camera', count: contentData?.screenshots?.length },
    { key: 'videos', label: 'Videos', icon: 'Play', count: contentData?.videos?.length }
  ];

  const sortOptions = [
    { key: 'recent', label: 'Most Recent' },
    { key: 'popular', label: 'Most Popular' },
    { key: 'trending', label: 'Trending' }
  ];

  const currentContent = contentData?.[activeTab] || [];

  const sortedContent = [...currentContent]?.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b?.likes - a?.likes;
      case 'trending':
        return (b?.likes + b?.comments + b?.shares) - (a?.likes + a?.comments + a?.shares);
      default:
        return b?.createdAt - a?.createdAt;
    }
  });

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const openLightbox = (content) => {
    setSelectedContent(content);
  };

  const closeLightbox = () => {
    setSelectedContent(null);
  };

  const renderContentCard = (content) => {
    const isVideo = activeTab === 'videos';
    
    return (
      <div key={content?.id} className="realm-card overflow-hidden group">
        {/* Content Image/Thumbnail */}
        <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => openLightbox(content)}>
          <Image 
            src={isVideo ? content?.thumbnail : content?.image} 
            alt={content?.title}
            className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
          />
          
          {isVideo && (
            <>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mystical-glow">
                  <Icon name="Play" size={24} className="text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                {content?.duration}
              </div>
              <div className="absolute top-2 left-2 px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded">
                {content?.views?.toLocaleString()} views
              </div>
            </>
          )}
          
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 smooth-transition">
            <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:bg-background smooth-transition">
              <Icon name="Expand" size={16} />
            </button>
          </div>
        </div>
        <div className="p-4 space-y-3">
          {/* Creator Info */}
          <div className="flex items-center space-x-3">
            <Image 
              src={content?.creatorAvatar} 
              alt={content?.creator}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-inter font-medium text-sm text-foreground">{content?.creator}</div>
              <div className="text-xs text-muted-foreground">{formatTimeAgo(content?.createdAt)}</div>
            </div>
            <button className="p-1 rounded text-muted-foreground hover:text-foreground smooth-transition">
              <Icon name="MoreHorizontal" size={16} />
            </button>
          </div>

          {/* Content Info */}
          <div>
            <h3 className="font-inter font-semibold text-foreground mb-1">{content?.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{content?.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {content?.tags?.slice(0, 3)?.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Additional Info */}
          {content?.medium && (
            <div className="text-xs text-muted-foreground">
              <Icon name="Brush" size={12} className="inline mr-1" />
              {content?.medium}
            </div>
          )}
          {content?.location && (
            <div className="text-xs text-muted-foreground">
              <Icon name="MapPin" size={12} className="inline mr-1" />
              {content?.location}
            </div>
          )}

          {/* Engagement Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Heart" size={16} />
                <span className="text-sm">{content?.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="MessageCircle" size={16} />
                <span className="text-sm">{content?.comments}</span>
              </button>
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary smooth-transition">
                <Icon name="Share2" size={16} />
                <span className="text-sm">{content?.shares}</span>
              </button>
            </div>
            
            <button className="text-muted-foreground hover:text-primary smooth-transition">
              <Icon name="Bookmark" size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-cinzel font-bold text-2xl text-foreground">Community Gallery</h2>
          <p className="text-muted-foreground">Showcase of amazing player-created content</p>
        </div>
        
        <Button variant="default" className="legendary-button">
          <Icon name="Upload" size={16} className="mr-2" />
          Upload Content
        </Button>
      </div>
      {/* Tabs and Sort */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setActiveTab(tab?.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                activeTab === tab?.key
                  ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="font-inter text-sm">{tab?.label}</span>
              <span className="px-2 py-0.5 bg-muted/50 text-xs rounded-full">{tab?.count}</span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e?.target?.value)}
            className="bg-muted/30 border border-border rounded-lg px-3 py-1 text-sm text-foreground"
          >
            {sortOptions?.map((option) => (
              <option key={option?.key} value={option?.key}>{option?.label}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedContent?.map(renderContentCard)}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          <Icon name="RefreshCw" size={16} className="mr-2" />
          Load More Content
        </Button>
      </div>
      {/* Lightbox Modal */}
      {selectedContent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="max-w-4xl w-full bg-background rounded-lg overflow-hidden" onClick={(e) => e?.stopPropagation()}>
            <div className="relative">
              <Image 
                src={activeTab === 'videos' ? selectedContent?.thumbnail : selectedContent?.image} 
                alt={selectedContent?.title}
                className="w-full h-96 object-cover"
              />
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:bg-background smooth-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="font-inter font-bold text-xl text-foreground mb-2">{selectedContent?.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedContent?.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image 
                    src={selectedContent?.creatorAvatar} 
                    alt={selectedContent?.creator}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-inter font-medium text-foreground">{selectedContent?.creator}</div>
                    <div className="text-sm text-muted-foreground">{formatTimeAgo(selectedContent?.createdAt)}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="Heart" size={16} />
                    <span>{selectedContent?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    <span>{selectedContent?.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="Share2" size={16} />
                    <span>{selectedContent?.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserContentGallery;