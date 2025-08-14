import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SeasonalRankings = ({ season }) => {
  const [selectedTier, setSelectedTier] = useState('all');

  const tiers = [
    { id: 'all', label: 'All Tiers', color: 'text-foreground' },
    { id: 'legendary', label: 'Legendary', color: 'text-yellow-400' },
    { id: 'mythic', label: 'Mythic', color: 'text-purple-400' },
    { id: 'epic', label: 'Epic', color: 'text-blue-400' },
    { id: 'rare', label: 'Rare', color: 'text-green-400' },
    { id: 'common', label: 'Common', color: 'text-gray-400' }
  ];

  const getTierIcon = (tier) => {
    switch(tier) {
      case 'legendary': return 'Crown';
      case 'mythic': return 'Sparkles';
      case 'epic': return 'Shield';
      case 'rare': return 'Star';
      case 'common': return 'Circle';
      default: return 'Trophy';
    }
  };

  const getTierColor = (tier) => {
    switch(tier) {
      case 'legendary': return 'from-yellow-400 to-yellow-600';
      case 'mythic': return 'from-purple-400 to-purple-600';
      case 'epic': return 'from-blue-400 to-blue-600';
      case 'rare': return 'from-green-400 to-green-600';
      case 'common': return 'from-gray-400 to-gray-600';
      default: return 'from-primary to-primary/80';
    }
  };

  const filteredPlayers = selectedTier === 'all' 
    ? season?.players 
    : season?.players?.filter(player => player?.tier === selectedTier);

  return (
    <div className="realm-card p-6">
      {/* Season Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
            <Icon name="Calendar" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-xl text-foreground">
              {season?.name}
            </h3>
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="font-inter text-sm text-muted-foreground">
                  {season?.timeRemaining} remaining
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={14} className="text-muted-foreground" />
                <span className="font-inter text-sm text-muted-foreground">
                  {season?.totalPlayers?.toLocaleString()} participants
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="font-inter text-sm text-muted-foreground">Season Progress</div>
          <div className="w-32 h-2 bg-muted rounded-full mt-1">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              style={{ width: `${season?.progress}%` }}
            />
          </div>
          <div className="font-mono text-xs text-muted-foreground mt-1">
            {season?.progress}% complete
          </div>
        </div>
      </div>
      {/* Tier Filter */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        {tiers?.map((tier) => (
          <button
            key={tier?.id}
            onClick={() => setSelectedTier(tier?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap smooth-transition ${
              selectedTier === tier?.id
                ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={getTierIcon(tier?.id)} size={16} />
            <span className="font-inter text-sm font-medium">{tier?.label}</span>
          </button>
        ))}
      </div>
      {/* Season Rewards Preview */}
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Gift" size={20} className="text-primary" />
            <div>
              <h4 className="font-inter font-medium text-foreground">Season Rewards</h4>
              <p className="font-inter text-sm text-muted-foreground">
                Exclusive titles, mounts, and cosmetics await top performers
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Eye" size={16} className="mr-2" />
            Preview Rewards
          </Button>
        </div>
      </div>
      {/* Rankings List */}
      <div className="space-y-3">
        {filteredPlayers?.map((player, index) => (
          <div 
            key={player?.id}
            className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 smooth-transition cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm font-medium text-muted-foreground w-8">
                  #{player?.seasonRank}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getTierColor(player?.tier)} flex items-center justify-center`}>
                  <Icon name={getTierIcon(player?.tier)} size={16} className="text-white" />
                </div>
              </div>
              
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                <Image 
                  src={player?.avatar} 
                  alt={player?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-inter font-medium text-foreground">
                    {player?.name}
                  </span>
                  <span className={`font-inter text-xs px-2 py-0.5 rounded ${
                    tiers?.find(t => t?.id === player?.tier)?.color || 'text-foreground'
                  } bg-current/10`}>
                    {player?.tier}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="font-inter text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {player?.guild}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {player?.seasonPoints?.toLocaleString()} SP
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1" />
            
            <div className="text-right">
              <div className="font-mono font-semibold text-foreground">
                {player?.seasonRating}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className={`flex items-center space-x-1 text-xs ${
                  player?.seasonChange > 0 ? 'text-success' : 'text-destructive'
                }`}>
                  <Icon 
                    name={player?.seasonChange > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    size={12} 
                  />
                  <span>{Math.abs(player?.seasonChange)}</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {player?.gamesPlayed}G
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-muted rounded-full">
                <div 
                  className={`h-full bg-gradient-to-r ${getTierColor(player?.tier)} rounded-full`}
                  style={{ width: `${player?.tierProgress}%` }}
                />
              </div>
              <span className="font-mono text-xs text-muted-foreground w-8">
                {player?.tierProgress}%
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="mt-6 text-center">
        <Button variant="outline">
          <Icon name="ChevronDown" size={16} className="mr-2" />
          Load More Rankings
        </Button>
      </div>
    </div>
  );
};

export default SeasonalRankings;