import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineExplorer = ({ onEraChange, currentEra }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const eras = [
    {
      id: 'ancient',
      name: 'Age of Ancients',
      period: '0 - 1000 AR',
      description: 'The dawn of civilization, when the first kingdoms rose from primordial chaos.',
      color: 'bg-purple-500',
      events: 12,
      icon: 'Crown'
    },
    {
      id: 'heroes',
      name: 'Era of Heroes',
      period: '1000 - 2500 AR',
      description: 'Legendary champions emerged to face the growing darkness threatening the realms.',
      color: 'bg-blue-500',
      events: 18,
      icon: 'Sword'
    },
    {
      id: 'war',
      name: 'The Great War',
      period: '2500 - 2800 AR',
      description: 'A cataclysmic conflict that reshaped the world and forged new alliances.',
      color: 'bg-red-500',
      events: 24,
      icon: 'Zap'
    },
    {
      id: 'renewal',
      name: 'Age of Renewal',
      period: '2800 - 3200 AR',
      description: 'Rebuilding and discovery marked this era of unprecedented magical advancement.',
      color: 'bg-green-500',
      events: 15,
      icon: 'Sparkles'
    },
    {
      id: 'current',
      name: 'Present Day',
      period: '3200 AR - Now',
      description: 'The current age where new heroes rise to face emerging threats and mysteries.',
      color: 'bg-primary',
      events: 8,
      icon: 'Clock'
    }
  ];

  const handleEraSelect = (era) => {
    onEraChange(era);
  };

  return (
    <div className="w-full bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-foreground">
              Timeline Explorer
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              Journey through the ages of Mythic Realms
            </p>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </button>
        </div>
      </div>
      {/* Timeline */}
      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-24'} overflow-hidden`}>
        <div className="p-4">
          {/* Horizontal Timeline for Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
              
              {/* Era Points */}
              <div className="flex justify-between relative">
                {eras?.map((era, index) => (
                  <div key={era?.id} className="flex flex-col items-center">
                    <button
                      onClick={() => handleEraSelect(era)}
                      className={`w-12 h-12 rounded-full border-4 border-background flex items-center justify-center smooth-transition ${
                        currentEra?.id === era?.id
                          ? `${era?.color} mystical-glow scale-110`
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      <Icon 
                        name={era?.icon} 
                        size={20} 
                        className={currentEra?.id === era?.id ? 'text-white' : 'text-muted-foreground'} 
                      />
                    </button>
                    
                    <div className="mt-3 text-center max-w-24">
                      <h4 className={`font-cinzel text-xs font-semibold ${
                        currentEra?.id === era?.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {era?.name}
                      </h4>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {era?.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Timeline for Mobile */}
          <div className="md:hidden space-y-4">
            {eras?.map((era, index) => (
              <button
                key={era?.id}
                onClick={() => handleEraSelect(era)}
                className={`w-full flex items-center space-x-4 p-3 rounded-lg smooth-transition ${
                  currentEra?.id === era?.id
                    ? 'bg-primary/10 border border-primary/20' :'bg-muted/20 hover:bg-muted/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentEra?.id === era?.id ? era?.color : 'bg-muted'
                }`}>
                  <Icon 
                    name={era?.icon} 
                    size={18} 
                    className={currentEra?.id === era?.id ? 'text-white' : 'text-muted-foreground'} 
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 className={`font-cinzel font-semibold text-sm ${
                    currentEra?.id === era?.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {era?.name}
                  </h4>
                  <p className="font-mono text-xs text-muted-foreground">
                    {era?.period}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Era Details */}
          {isExpanded && currentEra && (
            <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentEra?.color}`}>
                  <Icon name={currentEra?.icon} size={24} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-cinzel text-lg font-semibold text-foreground mb-1">
                    {currentEra?.name}
                  </h4>
                  <p className="font-mono text-sm text-primary mb-2">
                    {currentEra?.period}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {currentEra?.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="font-inter text-sm text-foreground">
                        {currentEra?.events} Major Events
                      </span>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-primary hover:text-primary/80 smooth-transition">
                      <Icon name="ArrowRight" size={16} />
                      <span className="font-inter text-sm">Explore Era</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineExplorer;