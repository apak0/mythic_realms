import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardCard = ({ 
  title, 
  description, 
  icon, 
  players, 
  category,
  onViewAll,
  showTournament = false 
}) => {
  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return 'Crown';
      case 2: return 'Medal';
      case 3: return 'Award';
      default: return 'User';
    }
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-amber-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="realm-card p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
            <Icon name={icon} size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-lg text-foreground">
              {title}
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
        
        {showTournament && (
          <div className="flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <Icon name="Zap" size={14} className="text-primary" />
            <span className="font-inter text-xs font-medium text-primary">
              Live Tournament
            </span>
          </div>
        )}
      </div>
      {/* Players List */}
      <div className="space-y-3 mb-6">
        {players?.slice(0, 5)?.map((player, index) => (
          <div 
            key={player?.id}
            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 smooth-transition cursor-pointer"
          >
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex items-center space-x-2">
                <Icon 
                  name={getRankIcon(player?.rank)} 
                  size={16} 
                  className={getRankColor(player?.rank)} 
                />
                <span className="font-mono text-sm font-medium text-muted-foreground w-6">
                  #{player?.rank}
                </span>
              </div>
              
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
                <Image 
                  src={player?.avatar} 
                  alt={player?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-inter font-medium text-sm text-foreground truncate">
                    {player?.name}
                  </span>
                  {player?.guild && (
                    <span className="font-inter text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {player?.guild}
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {category === 'level' && `Level ${player?.level}`}
                  {category === 'pvp' && `${player?.rating} Rating`}
                  {category === 'guild' && `${player?.members} Members`}
                  {category === 'tournament' && `${player?.wins}W-${player?.losses}L`}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-inter font-semibold text-sm text-foreground">
                {player?.score?.toLocaleString()}
              </div>
              {player?.change && (
                <div className={`flex items-center space-x-1 text-xs ${
                  player?.change > 0 ? 'text-success' : 'text-destructive'
                }`}>
                  <Icon 
                    name={player?.change > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    size={12} 
                  />
                  <span>{Math.abs(player?.change)}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <button
        onClick={onViewAll}
        className="w-full py-2 px-4 border border-primary/20 rounded-lg text-primary hover:bg-primary/10 smooth-transition font-inter text-sm font-medium"
      >
        View Full Leaderboard
      </button>
    </div>
  );
};

export default LeaderboardCard;