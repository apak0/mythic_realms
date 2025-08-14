import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TournamentBracket = ({ tournament }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const getMatchStatus = (match) => {
    if (match?.completed) return 'completed';
    if (match?.live) return 'live';
    if (match?.upcoming) return 'upcoming';
    return 'scheduled';
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'live': return 'text-success border-success bg-success/10';
      case 'completed': return 'text-muted-foreground border-border bg-muted/30';
      case 'upcoming': return 'text-warning border-warning bg-warning/10';
      default: return 'text-muted-foreground border-border bg-muted/10';
    }
  };

  const renderMatch = (match, roundIndex, matchIndex) => {
    const status = getMatchStatus(match);
    
    return (
      <div
        key={`${roundIndex}-${matchIndex}`}
        className={`p-4 rounded-lg border cursor-pointer smooth-transition ${getStatusColor(status)} ${
          selectedMatch?.id === match?.id ? 'ring-2 ring-primary' : ''
        }`}
        onClick={() => setSelectedMatch(match)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="Swords" size={14} className="text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              Match {match?.id}
            </span>
          </div>
          
          {status === 'live' && (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="font-inter text-xs font-medium text-success">
                LIVE
              </span>
            </div>
          )}
        </div>
        <div className="space-y-2">
          {match?.players?.map((player, playerIndex) => (
            <div 
              key={playerIndex}
              className={`flex items-center justify-between p-2 rounded ${
                match?.winner === playerIndex ? 'bg-primary/10 border border-primary/20' : 'bg-background/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
                  <Image 
                    src={player?.avatar} 
                    alt={player?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`font-inter text-sm ${
                  match?.winner === playerIndex ? 'text-primary font-medium' : 'text-foreground'
                }`}>
                  {player?.name}
                </span>
              </div>
              
              {match?.completed && (
                <span className={`font-mono text-sm ${
                  match?.winner === playerIndex ? 'text-primary font-bold' : 'text-muted-foreground'
                }`}>
                  {player?.score}
                </span>
              )}
            </div>
          ))}
        </div>
        {match?.scheduledTime && !match?.completed && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Clock" size={12} />
              <span className="font-inter">
                {new Date(match.scheduledTime)?.toLocaleDateString()} at{' '}
                {new Date(match.scheduledTime)?.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="realm-card p-6">
      {/* Tournament Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
            <Icon name="Trophy" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-xl text-foreground">
              {tournament?.name}
            </h3>
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={14} className="text-muted-foreground" />
                <span className="font-inter text-sm text-muted-foreground">
                  {tournament?.participants} participants
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={14} className="text-primary" />
                <span className="font-inter text-sm text-primary font-medium">
                  ${tournament?.prizePool?.toLocaleString()} prize pool
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {tournament?.streamUrl && (
            <Button variant="outline" size="sm">
              <Icon name="Video" size={16} className="mr-2" />
              Watch Live
            </Button>
          )}
          <Button variant="default" size="sm" className="legendary-button">
            <Icon name="UserPlus" size={16} className="mr-2" />
            Register
          </Button>
        </div>
      </div>
      {/* Tournament Bracket */}
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="flex space-x-8">
            {tournament?.rounds?.map((round, roundIndex) => (
              <div key={roundIndex} className="flex flex-col space-y-4 min-w-64">
                <div className="text-center mb-4">
                  <h4 className="font-cinzel font-semibold text-lg text-foreground">
                    {round?.name}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    {round?.matches?.length} matches
                  </p>
                </div>
                
                <div className="space-y-4">
                  {round?.matches?.map((match, matchIndex) => 
                    renderMatch(match, roundIndex, matchIndex)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Match Details Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-cinzel font-semibold text-lg text-foreground">
                Match Details
              </h4>
              <button
                onClick={() => setSelectedMatch(null)}
                className="p-1 rounded text-muted-foreground hover:text-foreground smooth-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <span className="font-mono text-sm text-muted-foreground">
                  Match #{selectedMatch?.id}
                </span>
              </div>
              
              {selectedMatch?.players?.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
                      <Image 
                        src={player?.avatar} 
                        alt={player?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-inter font-medium text-foreground">
                      {player?.name}
                    </span>
                  </div>
                  {selectedMatch?.completed && (
                    <span className="font-mono font-bold text-lg text-foreground">
                      {player?.score}
                    </span>
                  )}
                </div>
              ))}
              
              {selectedMatch?.scheduledTime && (
                <div className="text-center pt-4 border-t border-border">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span className="font-inter text-sm">
                      {new Date(selectedMatch.scheduledTime)?.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentBracket;