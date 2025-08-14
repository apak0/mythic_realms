import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LiveMatchViewer = ({ matches }) => {
  const [selectedMatch, setSelectedMatch] = useState(matches?.[0] || null);
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    // Simulate viewer count updates
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getMatchTypeIcon = (type) => {
    switch(type) {
      case '1v1': return 'User';
      case '2v2': return 'Users';
      case '5v5': return 'Users';
      case 'tournament': return 'Trophy';
      default: return 'Swords';
    }
  };

  if (!selectedMatch) {
    return (
      <div className="realm-card p-6 text-center">
        <Icon name="Video" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-2">
          No Live Matches
        </h3>
        <p className="font-inter text-muted-foreground">
          Check back later for live competitive action
        </p>
      </div>
    );
  }

  return (
    <div className="realm-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center mystical-glow">
            <Icon name="Video" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-lg text-foreground">
              Live Match Viewer
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="font-inter text-sm text-success">
                {matches?.length} live matches
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Icon name="Eye" size={16} />
          <span className="font-mono text-sm">
            {(selectedMatch?.viewers + viewerCount)?.toLocaleString()} watching
          </span>
        </div>
      </div>
      {/* Match Selection */}
      <div className="mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {matches?.map((match) => (
            <button
              key={match?.id}
              onClick={() => setSelectedMatch(match)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap smooth-transition ${
                selectedMatch?.id === match?.id
                  ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={getMatchTypeIcon(match?.type)} size={16} />
              <span className="font-inter text-sm font-medium">
                {match?.title}
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-success rounded-full" />
                <span className="font-mono text-xs">
                  {match?.viewers?.toLocaleString()}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Video Player Placeholder */}
      <div className="relative mb-6 bg-black rounded-lg overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80 flex items-center justify-center">
          <div className="text-center">
            <Icon name="Play" size={64} className="text-white/80 mx-auto mb-4" />
            <h4 className="font-cinzel font-semibold text-xl text-white mb-2">
              {selectedMatch?.title}
            </h4>
            <p className="font-inter text-white/80">
              Live competitive match in progress
            </p>
          </div>
        </div>
        
        {/* Live Indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-success/90 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="font-inter text-sm font-medium text-white">LIVE</span>
        </div>
        
        {/* Viewer Count */}
        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
          <div className="flex items-center space-x-2 text-white">
            <Icon name="Eye" size={14} />
            <span className="font-mono text-sm">
              {(selectedMatch?.viewers + viewerCount)?.toLocaleString()}
            </span>
          </div>
        </div>
        
        {/* Match Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {selectedMatch?.players?.map((player, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                      <Image 
                        src={player?.avatar} 
                        alt={player?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-inter font-medium text-white text-sm">
                        {player?.name}
                      </div>
                      <div className="font-mono text-xs text-white/70">
                        {player?.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-right">
                <div className="font-mono text-white font-bold">
                  {selectedMatch?.duration}
                </div>
                <div className="font-inter text-xs text-white/70">
                  {selectedMatch?.mode}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Match Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <h4 className="font-cinzel font-semibold text-foreground">Match Information</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="font-inter text-sm text-muted-foreground">Tournament</span>
              <span className="font-inter text-sm font-medium text-foreground">
                {selectedMatch?.tournament}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="font-inter text-sm text-muted-foreground">Round</span>
              <span className="font-inter text-sm font-medium text-foreground">
                {selectedMatch?.round}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="font-inter text-sm text-muted-foreground">Prize Pool</span>
              <span className="font-inter text-sm font-medium text-primary">
                ${selectedMatch?.prizePool?.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-cinzel font-semibold text-foreground">Player Statistics</h4>
          <div className="space-y-3">
            {selectedMatch?.players?.map((player, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
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
                  <span className="font-mono font-bold text-foreground">
                    {player?.score}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-mono font-medium text-foreground">
                      {player?.kills}
                    </div>
                    <div className="font-inter text-muted-foreground">Kills</div>
                  </div>
                  <div className="text-center">
                    <div className="font-mono font-medium text-foreground">
                      {player?.deaths}
                    </div>
                    <div className="font-inter text-muted-foreground">Deaths</div>
                  </div>
                  <div className="text-center">
                    <div className="font-mono font-medium text-foreground">
                      {player?.assists}
                    </div>
                    <div className="font-inter text-muted-foreground">Assists</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Chat
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Share2" size={16} className="mr-2" />
            Share
          </Button>
        </div>
        
        <Button variant="default" size="sm" className="legendary-button">
          <Icon name="ExternalLink" size={16} className="mr-2" />
          Watch on Twitch
        </Button>
      </div>
    </div>
  );
};

export default LiveMatchViewer;