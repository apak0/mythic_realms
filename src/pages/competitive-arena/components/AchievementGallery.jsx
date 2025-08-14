import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const AchievementGallery = ({ achievements }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const categories = [
    { id: 'all', label: 'All Achievements', icon: 'Award' },
    { id: 'combat', label: 'Combat', icon: 'Sword' },
    { id: 'exploration', label: 'Exploration', icon: 'Map' },
    { id: 'social', label: 'Social', icon: 'Users' },
    { id: 'crafting', label: 'Crafting', icon: 'Hammer' },
    { id: 'special', label: 'Special Events', icon: 'Star' }
  ];

  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-green-400 to-green-600',
    epic: 'from-blue-400 to-blue-600',
    legendary: 'from-purple-400 to-purple-600',
    mythic: 'from-yellow-400 to-yellow-600'
  };

  const rarityTextColors = {
    common: 'text-gray-400',
    rare: 'text-green-400',
    epic: 'text-blue-400',
    legendary: 'text-purple-400',
    mythic: 'text-yellow-400'
  };

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements?.filter(achievement => achievement?.category === selectedCategory);

  const getRarityIcon = (rarity) => {
    switch(rarity) {
      case 'mythic': return 'Crown';
      case 'legendary': return 'Sparkles';
      case 'epic': return 'Shield';
      case 'rare': return 'Star';
      case 'common': return 'Circle';
      default: return 'Award';
    }
  };

  return (
    <div className="realm-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
            <Icon name="Award" size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-lg text-foreground">
              Achievement Gallery
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              Rare accomplishments and legendary feats
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="font-mono text-lg font-bold text-foreground">
            {achievements?.length}
          </div>
          <div className="font-inter text-sm text-muted-foreground">
            Total Achievements
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap smooth-transition ${
              selectedCategory === category?.id
                ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="font-inter text-sm font-medium">{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Rarity Distribution */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {Object.entries(rarityColors)?.map(([rarity, gradient]) => {
          const count = filteredAchievements?.filter(a => a?.rarity === rarity)?.length;
          return (
            <div key={rarity} className="text-center p-3 rounded-lg bg-muted/30">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-2`}>
                <Icon name={getRarityIcon(rarity)} size={16} className="text-white" />
              </div>
              <div className="font-mono text-lg font-bold text-foreground">{count}</div>
              <div className={`font-inter text-xs capitalize ${rarityTextColors?.[rarity]}`}>
                {rarity}
              </div>
            </div>
          );
        })}
      </div>
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredAchievements?.map((achievement) => (
          <div
            key={achievement?.id}
            onClick={() => setSelectedAchievement(achievement)}
            className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 smooth-transition cursor-pointer group"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rarityColors?.[achievement?.rarity]} flex items-center justify-center mystical-glow group-hover:scale-105 smooth-transition`}>
                <Icon name={achievement?.icon} size={24} className="text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-inter font-semibold text-foreground truncate">
                  {achievement?.name}
                </h4>
                <p className="font-inter text-sm text-muted-foreground line-clamp-2 mb-2">
                  {achievement?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`font-inter text-xs px-2 py-1 rounded capitalize ${rarityTextColors?.[achievement?.rarity]} bg-current/10`}>
                    {achievement?.rarity}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="Users" size={12} />
                    <span className="font-mono">
                      {achievement?.completionRate}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {achievement?.progress !== undefined && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-inter text-xs text-muted-foreground">Progress</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {achievement?.current}/{achievement?.required}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full">
                  <div 
                    className={`h-full bg-gradient-to-r ${rarityColors?.[achievement?.rarity]} rounded-full`}
                    style={{ width: `${achievement?.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-cinzel font-semibold text-lg text-foreground">
                  Achievement Details
                </h4>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-1 rounded text-muted-foreground hover:text-foreground smooth-transition"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${rarityColors?.[selectedAchievement?.rarity]} flex items-center justify-center mx-auto mb-4 mystical-glow`}>
                  <Icon name={selectedAchievement?.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-cinzel font-semibold text-xl text-foreground mb-2">
                  {selectedAchievement?.name}
                </h3>
                <span className={`font-inter text-sm px-3 py-1 rounded capitalize ${rarityTextColors?.[selectedAchievement?.rarity]} bg-current/10`}>
                  {selectedAchievement?.rarity}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-inter font-medium text-foreground mb-2">Description</h5>
                  <p className="font-inter text-sm text-muted-foreground">
                    {selectedAchievement?.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-muted/30">
                    <div className="font-inter text-sm text-muted-foreground">Completion Rate</div>
                    <div className="font-mono text-lg font-bold text-foreground">
                      {selectedAchievement?.completionRate}%
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30">
                    <div className="font-inter text-sm text-muted-foreground">Players Earned</div>
                    <div className="font-mono text-lg font-bold text-foreground">
                      {selectedAchievement?.playersEarned?.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                {selectedAchievement?.requirements && (
                  <div>
                    <h5 className="font-inter font-medium text-foreground mb-2">Requirements</h5>
                    <ul className="space-y-1">
                      {selectedAchievement?.requirements?.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2 font-inter text-sm text-muted-foreground">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedAchievement?.rewards && (
                  <div>
                    <h5 className="font-inter font-medium text-foreground mb-2">Rewards</h5>
                    <div className="flex items-center space-x-2">
                      <Icon name="Gift" size={16} className="text-primary" />
                      <span className="font-inter text-sm text-foreground">
                        {selectedAchievement?.rewards}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-2 border border-primary/20 rounded-lg text-primary hover:bg-primary/10 smooth-transition font-inter text-sm font-medium">
          Load More Achievements
        </button>
      </div>
    </div>
  );
};

export default AchievementGallery;