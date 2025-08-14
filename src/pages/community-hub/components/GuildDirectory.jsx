import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const GuildDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focusFilter, setFocusFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  const guilds = [
    {
      id: 1,
      name: 'Crimson Guardians',
      tag: '[CG]',
      banner: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=400&h=200&fit=crop',
      description: 'Elite PvP guild focused on competitive arena battles and territorial conquest. We dominate the battlefield with strategic coordination and unwavering determination.',
      memberCount: 89,
      maxMembers: 100,
      level: 47,
      focus: ['PvP', 'Arena', 'Conquest'],
      requirements: 'Level 40+, 5+ hours/week',
      leader: {
        name: 'CommanderSteel',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      recruiting: true,
      founded: '2023-03-15',
      achievements: ['Arena Champions S3', 'Fortress Conquerors', 'Elite Squadron'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mystic Scholars',
      tag: '[MS]',
      banner: 'https://images.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg?w=400&h=200&fit=crop',
      description: 'Dedicated to unraveling the mysteries of ancient magic and exploring the deepest dungeons. Knowledge seekers and lore masters welcome.',
      memberCount: 67,
      maxMembers: 80,
      level: 52,
      focus: ['PvE', 'Raids', 'Lore'],
      requirements: 'Level 35+, Discord required',
      leader: {
        name: 'ArchmageElara',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
      },
      recruiting: true,
      founded: '2023-01-20',
      achievements: ['Dungeon Masters', 'Lore Keepers', 'Ancient Secrets'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Forge Masters',
      tag: '[FM]',
      banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
      description: 'Master craftsmen and traders who control the realm\'s economy. We create legendary equipment and dominate the marketplace.',
      memberCount: 45,
      maxMembers: 60,
      level: 38,
      focus: ['Crafting', 'Trading', 'Economy'],
      requirements: 'Crafting Level 25+',
      leader: {
        name: 'MasterSmithThor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
      },
      recruiting: false,
      founded: '2023-05-10',
      achievements: ['Economic Dominance', 'Legendary Crafters', 'Trade Empire'],
      rating: 4.7
    },
    {
      id: 4,
      name: 'Shadow Hunters',
      tag: '[SH]',
      banner: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?w=400&h=200&fit=crop',
      description: 'Stealth specialists and assassins who excel in reconnaissance and covert operations. We strike from the shadows when least expected.',
      memberCount: 34,
      maxMembers: 50,
      level: 41,
      focus: ['PvP', 'Stealth', 'Reconnaissance'],
      requirements: 'Stealth Class, Level 30+',
      leader: {
        name: 'ShadowBlade',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face'
      },
      recruiting: true,
      founded: '2023-04-05',
      achievements: ['Silent Strike', 'Covert Ops', 'Shadow Masters'],
      rating: 4.6
    },
    {
      id: 5,
      name: 'Divine Healers',
      tag: '[DH]',
      banner: 'https://images.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg?w=400&h=200&fit=crop',
      description: 'Compassionate healers and support specialists dedicated to helping fellow adventurers. We provide aid in the darkest hours.',
      memberCount: 78,
      maxMembers: 90,
      level: 44,
      focus: ['Support', 'Healing', 'Community'],
      requirements: 'Healer Class preferred',
      leader: {
        name: 'SaintLyra',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
      },
      recruiting: true,
      founded: '2023-02-28',
      achievements: ['Life Savers', 'Guardian Angels', 'Mercy\'s Hand'],
      rating: 4.9
    }
  ];

  const focusOptions = [
    { key: 'all', label: 'All Focus Areas' },
    { key: 'PvP', label: 'PvP' },
    { key: 'PvE', label: 'PvE' },
    { key: 'Raids', label: 'Raids' },
    { key: 'Crafting', label: 'Crafting' },
    { key: 'Trading', label: 'Trading' }
  ];

  const sizeOptions = [
    { key: 'all', label: 'All Sizes' },
    { key: 'small', label: 'Small (1-30)' },
    { key: 'medium', label: 'Medium (31-60)' },
    { key: 'large', label: 'Large (61+)' }
  ];

  const filteredGuilds = guilds?.filter(guild => {
    const matchesSearch = guild?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         guild?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
    const matchesFocus = focusFilter === 'all' || guild?.focus?.includes(focusFilter);
    
    const matchesSize = sizeFilter === 'all' || 
                       (sizeFilter === 'small' && guild?.memberCount <= 30) ||
                       (sizeFilter === 'medium' && guild?.memberCount > 30 && guild?.memberCount <= 60) ||
                       (sizeFilter === 'large' && guild?.memberCount > 60);
    
    return matchesSearch && matchesFocus && matchesSize;
  });

  const getFocusColor = (focus) => {
    switch (focus) {
      case 'PvP': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'PvE': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Raids': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Crafting': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Trading': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <Input
          type="search"
          placeholder="Search guilds by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="max-w-md"
        />
        
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground font-medium">Focus:</span>
            {focusOptions?.map((option) => (
              <button
                key={option?.key}
                onClick={() => setFocusFilter(option?.key)}
                className={`px-3 py-1 rounded-full text-xs smooth-transition ${
                  focusFilter === option?.key
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {option?.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground font-medium">Size:</span>
            {sizeOptions?.map((option) => (
              <button
                key={option?.key}
                onClick={() => setSizeFilter(option?.key)}
                className={`px-3 py-1 rounded-full text-xs smooth-transition ${
                  sizeFilter === option?.key
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {option?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Guild Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGuilds?.map((guild) => (
          <div key={guild?.id} className="realm-card overflow-hidden">
            {/* Guild Banner */}
            <div className="relative h-32 overflow-hidden">
              <Image 
                src={guild?.banner} 
                alt={`${guild?.name} banner`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-bold text-xl text-foreground">{guild?.name}</span>
                  <span className="text-primary font-mono text-sm">{guild?.tag}</span>
                </div>
                {guild?.recruiting && (
                  <span className="px-2 py-1 bg-success/20 text-success text-xs rounded-full border border-success/30">
                    Recruiting
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Guild Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{guild?.memberCount}</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{guild?.level}</div>
                    <div className="text-xs text-muted-foreground">Level</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-foreground">{guild?.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Image 
                    src={guild?.leader?.avatar} 
                    alt={guild?.leader?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-foreground">{guild?.leader?.name}</div>
                    <div className="text-xs text-muted-foreground">Guild Leader</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-3">{guild?.description}</p>

              {/* Focus Areas */}
              <div className="flex flex-wrap gap-2">
                {guild?.focus?.map((focus, index) => (
                  <span key={index} className={`px-2 py-1 text-xs rounded-full border ${getFocusColor(focus)}`}>
                    {focus}
                  </span>
                ))}
              </div>

              {/* Requirements */}
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Info" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">{guild?.requirements}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={14} className="mr-2" />
                    View Details
                  </Button>
                  {guild?.recruiting && (
                    <Button variant="default" size="sm" className="legendary-button">
                      <Icon name="UserPlus" size={14} className="mr-2" />
                      Apply
                    </Button>
                  )}
                </div>
                
                <div className="flex items-center space-x-1">
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition">
                    <Icon name="Heart" size={16} />
                  </button>
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition">
                    <Icon name="Share2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredGuilds?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-inter font-semibold text-lg text-foreground mb-2">No guilds found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setFocusFilter('all');
            setSizeFilter('all');
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuildDirectory;