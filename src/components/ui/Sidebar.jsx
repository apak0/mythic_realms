import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';


const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      path: '/portal-home', 
      label: 'Portal Home', 
      icon: 'Home',
      description: 'Your legendary gateway'
    },
    { 
      path: '/world-atlas', 
      label: 'World Atlas', 
      icon: 'Map',
      description: 'Explore vast realms'
    },
    { 
      path: '/community-hub', 
      label: 'Community Hub', 
      icon: 'Users',
      description: 'Connect with heroes'
    },
    { 
      path: '/competitive-arena', 
      label: 'Competitive Arena', 
      icon: 'Sword',
      description: 'Prove your might'
    },
    { 
      path: '/chronicles', 
      label: 'Chronicles', 
      icon: 'BookOpen',
      description: 'Epic tales unfold'
    },
    { 
      path: '/player-sanctum', 
      label: 'Player Sanctum', 
      icon: 'User',
      description: 'Your personal realm'
    }
  ];

  const quickActions = [
    { icon: 'Settings', label: 'Settings', action: () => {} },
    { icon: 'HelpCircle', label: 'Help & Support', action: () => {} },
    { icon: 'Bell', label: 'Notifications', action: () => {} }
  ];

  const isActivePath = (path) => location?.pathname === path;
  const shouldExpand = !isCollapsed || isHovered;

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-40 bg-card border-r border-border transition-all duration-300 ${
        shouldExpand ? 'w-72' : 'w-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {shouldExpand && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
                  <Icon name="Crown" size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-cinzel font-semibold text-sm text-foreground">
                    Navigation
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Choose your path
                  </p>
                </div>
              </div>
            )}
            
            {onToggle && (
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
              >
                <Icon 
                  name={shouldExpand ? "ChevronLeft" : "ChevronRight"} 
                  size={16} 
                />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems?.map((item) => {
            const isActive = isActivePath(item?.path);
            
            return (
              <Link
                key={item?.path}
                to={item?.path}
                className={`group flex items-center space-x-3 p-3 rounded-lg smooth-transition relative ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20 mystical-glow' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className={`flex-shrink-0 ${isActive ? 'text-primary' : ''}`}>
                  <Icon name={item?.icon} size={20} />
                </div>
                {shouldExpand && (
                  <div className="flex-1 min-w-0">
                    <div className="font-inter font-medium text-sm truncate">
                      {item?.label}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground truncate">
                      {item?.description}
                    </div>
                  </div>
                )}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                )}
                {/* Tooltip for collapsed state */}
                {isCollapsed && !isHovered && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap z-50">
                    <div className="font-inter font-medium text-sm text-popover-foreground">
                      {item?.label}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground">
                      {item?.description}
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border space-y-2">
          {shouldExpand && (
            <div className="mb-3">
              <h3 className="font-inter font-medium text-xs text-muted-foreground uppercase tracking-wider">
                Quick Actions
              </h3>
            </div>
          )}
          
          {quickActions?.map((action, index) => (
            <button
              key={index}
              onClick={action?.action}
              className="group flex items-center space-x-3 w-full p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition relative"
            >
              <Icon name={action?.icon} size={18} />
              
              {shouldExpand && (
                <span className="font-inter text-sm">{action?.label}</span>
              )}

              {/* Tooltip for collapsed state */}
              {isCollapsed && !isHovered && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap z-50">
                  <span className="font-inter text-sm text-popover-foreground">
                    {action?.label}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          {shouldExpand ? (
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 border border-border">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mystical-glow">
                <Icon name="User" size={20} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-inter font-medium text-sm text-foreground truncate">
                  Legendary Hero
                </div>
                <div className="font-mono text-xs text-muted-foreground truncate">
                  Level 42 Adventurer
                </div>
              </div>
              <button className="p-1 rounded text-muted-foreground hover:text-foreground smooth-transition">
                <Icon name="MoreVertical" size={16} />
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mystical-glow group cursor-pointer">
                <Icon name="User" size={20} className="text-primary-foreground" />
                
                {/* Profile tooltip */}
                <div className="absolute left-full ml-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition whitespace-nowrap z-50">
                  <div className="font-inter font-medium text-sm text-popover-foreground">
                    Legendary Hero
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    Level 42 Adventurer
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;