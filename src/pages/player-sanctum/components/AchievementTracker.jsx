import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const AchievementTracker = ({ achievementData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCompleted, setShowCompleted] = useState(true);

  const categories = [
    { id: 'all', label: 'All Achievements', icon: 'Trophy' },
    { id: 'combat', label: 'Combat', icon: 'Sword' },
    { id: 'exploration', label: 'Exploration', icon: 'Map' },
    { id: 'social', label: 'Social', icon: 'Users' },
    { id: 'crafting', label: 'Crafting', icon: 'Hammer' },
    { id: 'special', label: 'Special Events', icon: 'Star' }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'text-primary border-primary/20 bg-primary/10';
      case 'epic': return 'text-purple-400 border-purple-400/20 bg-purple-400/10';
      case 'rare': return 'text-blue-400 border-blue-400/20 bg-blue-400/10';
      case 'uncommon': return 'text-success border-success/20 bg-success/10';
      default: return 'text-muted-foreground border-border bg-muted/30';
    }
  };

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'Crown';
      case 'epic': return 'Gem';
      case 'rare': return 'Diamond';
      case 'uncommon': return 'Circle';
      default: return 'Dot';
    }
  };

  const filteredAchievements = achievementData?.achievements?.filter(achievement => {
    const categoryMatch = selectedCategory === 'all' || achievement?.category === selectedCategory;
    const completedMatch = showCompleted || !achievement?.completed;
    return categoryMatch && completedMatch;
  });

  return (
    <div className="space-y-6">
      {/* Achievement Overview */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinzel font-semibold text-xl text-foreground">
            Achievement Progress
          </h2>
          <div className="flex items-center space-x-2">
            <Icon name="Trophy" size={20} className="text-primary" />
            <span className="font-inter font-bold text-lg text-primary">
              {achievementData?.completedCount} / {achievementData?.totalCount}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="font-inter font-bold text-2xl text-primary mb-1">
              {achievementData?.completedCount}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Completed
            </div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-inter font-bold text-2xl text-foreground mb-1">
              {achievementData?.achievementPoints}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Points Earned
            </div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-inter font-bold text-2xl text-foreground mb-1">
              {achievementData?.rareTrophies}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Rare Trophies
            </div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-inter font-bold text-2xl text-foreground mb-1">
              {Math.round((achievementData?.completedCount / achievementData?.totalCount) * 100)}%
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Completion Rate
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-inter text-sm text-muted-foreground">Overall Progress</span>
            <span className="font-inter text-sm text-muted-foreground">
              {achievementData?.completedCount} / {achievementData?.totalCount}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="bg-primary rounded-full h-3 smooth-transition mystical-glow"
              style={{ 
                width: `${(achievementData?.completedCount / achievementData?.totalCount) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
      {/* Category Filters */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-cinzel font-semibold text-lg text-foreground">
            Achievement Categories
          </h3>
          <div className="flex items-center space-x-2">
            <label className="font-inter text-sm text-muted-foreground">
              Show Completed
            </label>
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e?.target?.checked)}
              className="rounded border-border"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span className="font-inter text-sm">{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Achievement List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredAchievements?.map((achievement) => (
            <div 
              key={achievement?.id} 
              className={`p-4 rounded-lg border smooth-transition ${
                achievement?.completed 
                  ? 'bg-success/5 border-success/20' :'bg-muted/30 border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                  achievement?.completed 
                    ? getRarityColor(achievement?.rarity)
                    : 'bg-muted/50 border-border'
                }`}>
                  <Icon 
                    name={achievement?.completed ? getRarityIcon(achievement?.rarity) : 'Lock'} 
                    size={24} 
                    className={achievement?.completed ? '' : 'text-muted-foreground'}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-inter font-semibold ${
                      achievement?.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement?.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getRarityColor(achievement?.rarity)}`}>
                        {achievement?.rarity}
                      </div>
                      <div className="font-inter font-bold text-sm text-primary">
                        +{achievement?.points}
                      </div>
                    </div>
                  </div>

                  <p className={`font-inter text-sm mb-3 ${
                    achievement?.completed ? 'text-muted-foreground' : 'text-muted-foreground/70'
                  }`}>
                    {achievement?.description}
                  </p>

                  {achievement?.progress && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-inter text-xs text-muted-foreground">
                          Progress
                        </span>
                        <span className="font-inter text-xs text-muted-foreground">
                          {achievement?.progress?.current} / {achievement?.progress?.required}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`rounded-full h-2 smooth-transition ${
                            achievement?.completed ? 'bg-success' : 'bg-primary'
                          }`}
                          style={{ 
                            width: `${Math.min((achievement?.progress?.current / achievement?.progress?.required) * 100, 100)}%` 
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="font-inter text-xs text-muted-foreground">
                        {achievement?.completed ? `Completed ${achievement?.completedDate}` : 'In Progress'}
                      </span>
                    </div>
                    {achievement?.completed && achievement?.reward && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Gift" size={14} className="text-primary" />
                        <span className="font-inter text-xs text-primary">
                          {achievement?.reward}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAchievements?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Trophy" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-inter font-semibold text-lg text-muted-foreground mb-2">
              No achievements found
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              Try adjusting your filters or start completing more achievements!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementTracker;