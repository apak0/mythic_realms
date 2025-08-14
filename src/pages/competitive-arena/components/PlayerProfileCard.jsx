import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PlayerProfileCard = ({ player, onClose }) => {
  const [activeTab, setActiveTab] = useState('stats');

  const tabs = [
    { id: 'stats', label: 'Statistics', icon: 'BarChart3' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' },
    { id: 'history', label: 'Match History', icon: 'History' }
  ];

  const renderStats = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-muted/30">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="font-inter text-sm text-muted-foreground">Overall Rating</span>
          </div>
          <span className="font-mono text-2xl font-bold text-foreground">
            {player?.overallRating}
          </span>
        </div>
        
        <div className="p-4 rounded-lg bg-muted/30">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-success" />
            <span className="font-inter text-sm text-muted-foreground">Win Rate</span>
          </div>
          <span className="font-mono text-2xl font-bold text-success">
            {player?.winRate}%
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {player?.detailedStats?.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
            <span className="font-inter text-sm text-foreground">{stat?.label}</span>
            <span className="font-mono font-medium text-foreground">{stat?.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-3">
      {player?.achievements?.map((achievement, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            achievement?.rarity === 'legendary' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
            achievement?.rarity === 'epic'? 'bg-gradient-to-br from-purple-400 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'
          }`}>
            <Icon name={achievement?.icon} size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-inter font-medium text-foreground">{achievement?.name}</h4>
            <p className="font-inter text-xs text-muted-foreground">{achievement?.description}</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`font-inter text-xs px-2 py-0.5 rounded ${
                achievement?.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                achievement?.rarity === 'epic'? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {achievement?.rarity}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {achievement?.completionRate}% of players
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-3">
      {player?.matchHistory?.map((match, index) => (
        <div key={index} className="p-3 rounded-lg bg-muted/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Icon name="Swords" size={14} className="text-muted-foreground" />
              <span className="font-inter text-sm text-foreground">{match?.mode}</span>
            </div>
            <div className={`flex items-center space-x-1 ${
              match?.result === 'win' ? 'text-success' : 'text-destructive'
            }`}>
              <Icon name={match?.result === 'win' ? 'TrendingUp' : 'TrendingDown'} size={14} />
              <span className="font-inter text-sm font-medium uppercase">
                {match?.result}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="font-inter text-muted-foreground">
              vs {match?.opponent}
            </span>
            <span className="font-mono text-muted-foreground">
              {match?.date}
            </span>
          </div>
          
          <div className="flex items-center justify-between mt-2 text-xs">
            <span className="font-inter text-muted-foreground">
              Duration: {match?.duration}
            </span>
            <span className="font-mono text-primary">
              +{match?.ratingChange} rating
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <Image 
                  src={player?.avatar} 
                  alt={player?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-xl text-foreground">
                  {player?.name}
                </h3>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="font-inter text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                    {player?.guild}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    Level {player?.level}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    Rank #{player?.rank}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-inter text-sm font-medium smooth-transition ${
                  activeTab === tab?.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'stats' && renderStats()}
          {activeTab === 'achievements' && renderAchievements()}
          {activeTab === 'history' && renderHistory()}
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileCard;