import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RegionFilter = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = [
    {
      id: 'themes',
      name: 'Themes',
      icon: 'Tag',
      options: [
        { id: 'ancient-mysteries', label: 'Ancient Mysteries', count: 12 },
        { id: 'battlegrounds', label: 'Battlegrounds', count: 8 },
        { id: 'peaceful-havens', label: 'Peaceful Havens', count: 6 },
        { id: 'magical-realms', label: 'Magical Realms', count: 10 },
        { id: 'dark-territories', label: 'Dark Territories', count: 7 },
        { id: 'trading-hubs', label: 'Trading Hubs', count: 5 }
      ]
    },
    {
      id: 'difficulty',
      name: 'Difficulty',
      icon: 'TrendingUp',
      options: [
        { id: 'beginner', label: 'Beginner (1-10)', count: 8 },
        { id: 'intermediate', label: 'Intermediate (11-25)', count: 12 },
        { id: 'advanced', label: 'Advanced (26-40)', count: 10 },
        { id: 'expert', label: 'Expert (41-50)', count: 6 },
        { id: 'legendary', label: 'Legendary (50+)', count: 4 }
      ]
    },
    {
      id: 'factions',
      name: 'Controlling Factions',
      icon: 'Shield',
      options: [
        { id: 'order-of-light', label: 'Order of Light', count: 9 },
        { id: 'shadow-cult', label: 'Shadow Cult', count: 7 },
        { id: 'silver-covenant', label: 'Silver Covenant', count: 8 },
        { id: 'chaos-legion', label: 'Chaos Legion', count: 10 },
        { id: 'neutral', label: 'Neutral Territory', count: 6 }
      ]
    },
    {
      id: 'climate',
      name: 'Climate',
      icon: 'Cloud',
      options: [
        { id: 'temperate', label: 'Temperate', count: 15 },
        { id: 'arctic', label: 'Arctic', count: 6 },
        { id: 'desert', label: 'Desert', count: 8 },
        { id: 'tropical', label: 'Tropical', count: 7 },
        { id: 'volcanic', label: 'Volcanic', count: 4 },
        { id: 'mystical', label: 'Mystical', count: 8 }
      ]
    }
  ];

  const handleFilterToggle = (categoryId, optionId) => {
    const currentFilters = activeFilters?.[categoryId] || [];
    const newFilters = currentFilters?.includes(optionId)
      ? currentFilters?.filter(id => id !== optionId)
      : [...currentFilters, optionId];
    
    onFilterChange({
      ...activeFilters,
      [categoryId]: newFilters
    });
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters)?.reduce((total, filters) => total + filters?.length, 0);
  };

  const activeCount = getActiveFilterCount();

  return (
    <div className="w-full bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Filter" size={20} className="text-primary" />
            <div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground">
                Region Filters
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Discover regions by your preferences
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {activeCount > 0 && (
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                  {activeCount} active
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
              </div>
            )}
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
            >
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* Quick Filters (Always Visible) */}
      <div className="p-4 border-b border-border">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilterToggle('themes', 'ancient-mysteries')}
            className={`px-3 py-1.5 rounded-full text-sm smooth-transition ${
              activeFilters?.themes?.includes('ancient-mysteries')
                ? 'bg-primary text-primary-foreground' :'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            }`}
          >
            Ancient Mysteries
          </button>
          
          <button
            onClick={() => handleFilterToggle('themes', 'battlegrounds')}
            className={`px-3 py-1.5 rounded-full text-sm smooth-transition ${
              activeFilters?.themes?.includes('battlegrounds')
                ? 'bg-primary text-primary-foreground' :'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            }`}
          >
            Battlegrounds
          </button>
          
          <button
            onClick={() => handleFilterToggle('themes', 'peaceful-havens')}
            className={`px-3 py-1.5 rounded-full text-sm smooth-transition ${
              activeFilters?.themes?.includes('peaceful-havens')
                ? 'bg-primary text-primary-foreground' :'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            }`}
          >
            Peaceful Havens
          </button>
          
          <button
            onClick={() => handleFilterToggle('difficulty', 'beginner')}
            className={`px-3 py-1.5 rounded-full text-sm smooth-transition ${
              activeFilters?.difficulty?.includes('beginner')
                ? 'bg-primary text-primary-foreground' :'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            }`}
          >
            Beginner Friendly
          </button>
        </div>
      </div>
      {/* Detailed Filters */}
      <div className={`transition-all duration-300 ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="p-4 space-y-6">
          {filterCategories?.map((category) => (
            <div key={category?.id}>
              <div className="flex items-center space-x-2 mb-3">
                <Icon name={category?.icon} size={16} className="text-primary" />
                <h4 className="font-cinzel font-semibold text-foreground">
                  {category?.name}
                </h4>
              </div>
              
              <div className="space-y-2">
                {category?.options?.map((option) => {
                  const isActive = activeFilters?.[category?.id]?.includes(option?.id);
                  
                  return (
                    <button
                      key={option?.id}
                      onClick={() => handleFilterToggle(category?.id, option?.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg smooth-transition ${
                        isActive
                          ? 'bg-primary/10 border border-primary/20 text-primary' :'bg-muted/20 hover:bg-muted/40 text-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          isActive
                            ? 'border-primary bg-primary' :'border-muted-foreground'
                        }`}>
                          {isActive && (
                            <Icon name="Check" size={12} className="text-primary-foreground" />
                          )}
                        </div>
                        <span className="font-inter text-sm">{option?.label}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {option?.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Apply Filters Button (Mobile) */}
      {isExpanded && (
        <div className="p-4 border-t border-border md:hidden">
          <Button
            variant="default"
            fullWidth
            onClick={() => setIsExpanded(false)}
            className="legendary-button"
          >
            <Icon name="Search" size={16} className="mr-2" />
            Apply Filters ({activeCount})
          </Button>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;