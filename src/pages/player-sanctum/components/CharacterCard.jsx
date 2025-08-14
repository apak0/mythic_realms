import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CharacterCard = ({ character, onSelect, isSelected }) => {
  const getClassIcon = (className) => {
    const classIcons = {
      'Warrior': 'Sword',
      'Mage': 'Sparkles',
      'Rogue': 'Zap',
      'Paladin': 'Shield',
      'Archer': 'Target',
      'Cleric': 'Heart'
    };
    return classIcons?.[className] || 'User';
  };

  const getServerStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-success';
      case 'maintenance': return 'text-warning';
      case 'offline': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div 
      className={`realm-card p-6 cursor-pointer smooth-transition ${
        isSelected ? 'border-primary mystical-glow' : 'hover:border-primary/50'
      }`}
      onClick={() => onSelect(character)}
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-border">
            <Image
              src={character?.avatar}
              alt={character?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-card border-2 border-border rounded-full flex items-center justify-center">
            <Icon 
              name={getClassIcon(character?.class)} 
              size={12} 
              className="text-primary" 
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-cinzel font-semibold text-lg text-foreground truncate">
              {character?.name}
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                character?.isOnline ? 'bg-success' : 'bg-muted-foreground'
              }`} />
              <span className="font-mono text-xs text-muted-foreground">
                {character?.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="font-inter text-xs text-muted-foreground">Level</span>
              <div className="font-inter font-semibold text-sm text-foreground">
                {character?.level}
              </div>
            </div>
            <div>
              <span className="font-inter text-xs text-muted-foreground">Class</span>
              <div className="font-inter font-semibold text-sm text-foreground">
                {character?.class}
              </div>
            </div>
            <div>
              <span className="font-inter text-xs text-muted-foreground">Server</span>
              <div className={`font-inter font-semibold text-sm ${getServerStatusColor(character?.serverStatus)}`}>
                {character?.server}
              </div>
            </div>
            <div>
              <span className="font-inter text-xs text-muted-foreground">Guild</span>
              <div className="font-inter font-semibold text-sm text-foreground truncate">
                {character?.guild || 'None'}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-inter text-xs text-muted-foreground">Experience</span>
              <span className="font-mono text-xs text-muted-foreground">
                {character?.experience?.current?.toLocaleString()} / {character?.experience?.required?.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 smooth-transition"
                style={{ 
                  width: `${(character?.experience?.current / character?.experience?.required) * 100}%` 
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} className="text-muted-foreground" />
              <span className="font-inter text-xs text-muted-foreground">
                Last played {character?.lastPlayed}
              </span>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Play" size={14} className="mr-1" />
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;