import React from 'react';
import Icon from '../../../components/AppIcon';


const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const categoryIcons = {
    'All': 'Grid3X3',
    'Developer Update': 'Code',
    'Patch Notes': 'Settings',
    'Community Spotlight': 'Users',
    'Strategy Guide': 'BookOpen',
    'Lore Deep-dive': 'Scroll',
    'Event Announcement': 'Calendar'
  };

  const categoryColors = {
    'All': 'text-foreground',
    'Developer Update': 'text-primary',
    'Patch Notes': 'text-warning',
    'Community Spotlight': 'text-success',
    'Strategy Guide': 'text-blue-400',
    'Lore Deep-dive': 'text-purple-400',
    'Event Announcement': 'text-orange-400'
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-cinzel font-semibold text-lg text-foreground">
          Chronicle Categories
        </h3>
        <Icon name="Filter" size={20} className="text-muted-foreground" />
      </div>
      <div className="space-y-2">
        {categories?.map((category) => {
          const isActive = activeCategory === category?.name;
          const iconName = categoryIcons?.[category?.name] || 'Circle';
          const colorClass = categoryColors?.[category?.name] || 'text-muted-foreground';

          return (
            <button
              key={category?.name}
              onClick={() => onCategoryChange(category?.name)}
              className={`w-full flex items-center justify-between p-3 rounded-lg smooth-transition ${
                isActive
                  ? 'bg-primary/10 border border-primary/20 text-primary' :'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={iconName} 
                  size={18} 
                  className={isActive ? 'text-primary' : colorClass}
                />
                <div className="text-left">
                  <div className="font-inter font-medium text-sm">
                    {category?.name}
                  </div>
                  {category?.description && (
                    <div className="font-inter text-xs text-muted-foreground">
                      {category?.description}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-inter font-medium px-2 py-1 rounded ${
                  isActive 
                    ? 'bg-primary/20 text-primary' :'bg-muted/30 text-muted-foreground'
                }`}>
                  {category?.count}
                </span>
                {isActive && (
                  <Icon name="Check" size={16} className="text-primary" />
                )}
              </div>
            </button>
          );
        })}
      </div>
      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="font-cinzel font-semibold text-lg text-primary">
              {categories?.reduce((sum, cat) => sum + cat?.count, 0)}
            </div>
            <div className="font-inter text-xs text-muted-foreground">
              Total Chronicles
            </div>
          </div>
          <div className="text-center">
            <div className="font-cinzel font-semibold text-lg text-success">
              {categories?.filter(cat => cat?.name !== 'All')?.length}
            </div>
            <div className="font-inter text-xs text-muted-foreground">
              Categories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;