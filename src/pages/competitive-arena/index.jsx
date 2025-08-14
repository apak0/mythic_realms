import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LeaderboardCard from './components/LeaderboardCard';
import TournamentBracket from './components/TournamentBracket';
import PlayerProfileCard from './components/PlayerProfileCard';
import SeasonalRankings from './components/SeasonalRankings';
import LiveMatchViewer from './components/LiveMatchViewer';
import AchievementGallery from './components/AchievementGallery';

const CompetitiveArena = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data for leaderboards
  const leaderboardData = {
    overall: {
      title: "Overall Rankings",
      description: "Top players across all game modes",
      icon: "Trophy",
      category: "level",
      players: [
        {
          id: 1,
          rank: 1,
          name: "DragonSlayer_Pro",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
          guild: "Mythic Legends",
          level: 87,
          score: 15420,
          change: 12
        },
        {
          id: 2,
          rank: 2,
          name: "ShadowMage_Elite",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
          guild: "Arcane Masters",
          level: 85,
          score: 14890,
          change: -3
        },
        {
          id: 3,
          rank: 3,
          name: "IronWill_Champion",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          guild: "Steel Brotherhood",
          level: 84,
          score: 14567,
          change: 8
        },
        {
          id: 4,
          rank: 4,
          name: "MysticHealer_Sage",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          guild: "Divine Order",
          level: 83,
          score: 14234,
          change: 5
        },
        {
          id: 5,
          rank: 5,
          name: "StormBringer_Fury",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          guild: "Thunder Clan",
          level: 82,
          score: 13998,
          change: -1
        }
      ]
    },
    pvp: {
      title: "PvP Champions",
      description: "Elite warriors of the arena",
      icon: "Sword",
      category: "pvp",
      players: [
        {
          id: 6,
          rank: 1,
          name: "BladeStorm_Apex",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
          guild: "Crimson Blades",
          rating: 2847,
          score: 2847,
          change: 23
        },
        {
          id: 7,
          rank: 2,
          name: "VoidAssassin_Prime",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
          guild: "Shadow Guild",
          rating: 2789,
          score: 2789,
          change: 15
        },
        {
          id: 8,
          rank: 3,
          name: "FireLord_Eternal",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
          guild: "Flame Wardens",
          rating: 2734,
          score: 2734,
          change: -7
        }
      ]
    },
    guilds: {
      title: "Guild Rankings",
      description: "Most powerful guilds in the realm",
      icon: "Users",
      category: "guild",
      players: [
        {
          id: 9,
          rank: 1,
          name: "Mythic Legends",
          avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop",
          members: 150,
          score: 89750,
          change: 45
        },
        {
          id: 10,
          rank: 2,
          name: "Arcane Masters",
          avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
          members: 142,
          score: 87320,
          change: 12
        },
        {
          id: 11,
          rank: 3,
          name: "Steel Brotherhood",
          avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
          members: 138,
          score: 85690,
          change: -8
        }
      ]
    }
  };

  // Mock tournament data
  const tournamentData = {
    name: "Winter Championship 2024",
    participants: 64,
    prizePool: 50000,
    streamUrl: "https://twitch.tv/mythicrealms",
    rounds: [
      {
        name: "Quarter Finals",
        matches: [
          {
            id: "QF1",
            players: [
              { name: "DragonSlayer_Pro", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face", score: 3 },
              { name: "ShadowMage_Elite", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face", score: 1 }
            ],
            completed: true,
            winner: 0,
            scheduledTime: new Date(Date.now() + 86400000)
          },
          {
            id: "QF2",
            players: [
              { name: "IronWill_Champion", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face", score: 2 },
              { name: "MysticHealer_Sage", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face", score: 3 }
            ],
            completed: true,
            winner: 1,
            scheduledTime: new Date(Date.now() + 86400000)
          }
        ]
      },
      {
        name: "Semi Finals",
        matches: [
          {
            id: "SF1",
            players: [
              { name: "DragonSlayer_Pro", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face" },
              { name: "MysticHealer_Sage", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" }
            ],
            live: true,
            scheduledTime: new Date(Date.now() + 3600000)
          }
        ]
      },
      {
        name: "Finals",
        matches: [
          {
            id: "F1",
            players: [
              { name: "TBD", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" },
              { name: "TBD", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" }
            ],
            upcoming: true,
            scheduledTime: new Date(Date.now() + 172800000)
          }
        ]
      }
    ]
  };

  // Mock seasonal rankings data
  const seasonalData = {
    name: "Season 12: Frostborn Legends",
    timeRemaining: "23 days",
    totalPlayers: 245678,
    progress: 67,
    players: [
      {
        id: 1,
        name: "DragonSlayer_Pro",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
        guild: "Mythic Legends",
        tier: "legendary",
        seasonRank: 1,
        seasonRating: 3247,
        seasonPoints: 15420,
        seasonChange: 45,
        gamesPlayed: 127,
        tierProgress: 85
      },
      {
        id: 2,
        name: "ShadowMage_Elite",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        guild: "Arcane Masters",
        tier: "legendary",
        seasonRank: 2,
        seasonRating: 3189,
        seasonPoints: 14890,
        seasonChange: 23,
        gamesPlayed: 134,
        tierProgress: 78
      },
      {
        id: 3,
        name: "IronWill_Champion",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        guild: "Steel Brotherhood",
        tier: "mythic",
        seasonRank: 3,
        seasonRating: 2987,
        seasonPoints: 14567,
        seasonChange: 12,
        gamesPlayed: 119,
        tierProgress: 92
      }
    ]
  };

  // Mock live matches data
  const liveMatches = [
    {
      id: 1,
      title: "Championship Finals",
      type: "tournament",
      viewers: 15420,
      tournament: "Winter Championship 2024",
      round: "Finals",
      mode: "Best of 5",
      duration: "32:45",
      prizePool: 50000,
      players: [
        {
          name: "DragonSlayer_Pro",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
          score: 2,
          kills: 15,
          deaths: 3,
          assists: 8
        },
        {
          name: "ShadowMage_Elite",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
          score: 1,
          kills: 12,
          deaths: 7,
          assists: 11
        }
      ]
    },
    {
      id: 2,
      title: "Guild War: Mythic vs Arcane",
      type: "5v5",
      viewers: 8934,
      tournament: "Guild Championship",
      round: "Semi-Finals",
      mode: "Conquest",
      duration: "18:23",
      prizePool: 25000,
      players: [
        {
          name: "Team Mythic",
          avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=50&h=50&fit=crop",
          score: 1,
          kills: 23,
          deaths: 18,
          assists: 34
        },
        {
          name: "Team Arcane",
          avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop",
          score: 0,
          kills: 18,
          deaths: 23,
          assists: 29
        }
      ]
    }
  ];

  // Mock achievements data
  const achievementsData = [
    {
      id: 1,
      name: "Realm Conqueror",
      description: "Defeat 1000 enemies in PvP combat across all game modes",
      icon: "Crown",
      rarity: "mythic",
      category: "combat",
      completionRate: 0.3,
      playersEarned: 742,
      requirements: [
        "Win 500 PvP matches",
        "Achieve a 70% win rate",
        "Reach Legendary tier"
      ],
      rewards: "Exclusive Crown mount and title"
    },
    {
      id: 2,
      name: "Master Explorer",
      description: "Discover all hidden locations in the mystical realms",
      icon: "Map",
      rarity: "legendary",
      category: "exploration",
      completionRate: 2.1,
      playersEarned: 5167,
      current: 87,
      required: 100,
      progress: 87,
      requirements: [
        "Visit all 12 major regions",
        "Find 50 secret areas",
        "Complete exploration challenges"
      ],
      rewards: "Legendary Explorer\'s Compass"
    },
    {
      id: 3,
      name: "Guild Master",
      description: "Lead a guild to victory in the seasonal championship",
      icon: "Users",
      rarity: "epic",
      category: "social",
      completionRate: 5.7,
      playersEarned: 14023,
      requirements: [
        "Lead a guild of 50+ members",
        "Win guild championship",
        "Maintain guild for 6 months"
      ],
      rewards: "Guild Master\'s Banner and privileges"
    },
    {
      id: 4,
      name: "Legendary Crafter",
      description: "Master all crafting disciplines and create legendary items",
      icon: "Hammer",
      rarity: "rare",
      category: "crafting",
      completionRate: 12.4,
      playersEarned: 30567,
      current: 8,
      required: 10,
      progress: 80,
      requirements: [
        "Reach max level in all crafting skills",
        "Create 10 legendary items",
        "Discover 5 rare recipes"
      ],
      rewards: "Master Crafter\'s Workshop access"
    },
    {
      id: 5,
      name: "Event Champion",
      description: "Win first place in 5 different seasonal events",
      icon: "Star",
      rarity: "epic",
      category: "special",
      completionRate: 3.8,
      playersEarned: 9345,
      current: 3,
      required: 5,
      progress: 60,
      requirements: [
        "Win Summer Festival tournament",
        "Place 1st in Winter Championship",
        "Victory in Spring Celebration"
      ],
      rewards: "Seasonal Champion title and mount"
    }
  ];

  // Mock player profile data
  const mockPlayerProfile = {
    id: 1,
    name: "DragonSlayer_Pro",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    guild: "Mythic Legends",
    level: 87,
    rank: 1,
    overallRating: 3247,
    winRate: 73,
    detailedStats: [
      { label: "Total Matches", value: "1,247" },
      { label: "Wins", value: "910" },
      { label: "Losses", value: "337" },
      { label: "Kill/Death Ratio", value: "2.34" },
      { label: "Average Match Duration", value: "24:32" },
      { label: "Favorite Class", value: "Dragon Knight" }
    ],
    achievements: [
      {
        name: "Realm Conqueror",
        description: "Defeated 1000 enemies in PvP combat",
        icon: "Crown",
        rarity: "legendary",
        completionRate: 0.3
      },
      {
        name: "Master Strategist",
        description: "Won 100 consecutive matches",
        icon: "Brain",
        rarity: "epic",
        completionRate: 2.1
      },
      {
        name: "Guild Leader",
        description: "Successfully led guild to championship",
        icon: "Users",
        rarity: "rare",
        completionRate: 5.7
      }
    ],
    matchHistory: [
      {
        mode: "Ranked PvP",
        opponent: "ShadowMage_Elite",
        result: "win",
        date: "2024-08-11",
        duration: "23:45",
        ratingChange: 23
      },
      {
        mode: "Tournament",
        opponent: "IronWill_Champion",
        result: "win",
        date: "2024-08-10",
        duration: "31:12",
        ratingChange: 45
      },
      {
        mode: "Guild War",
        opponent: "Steel Brotherhood",
        result: "loss",
        date: "2024-08-09",
        duration: "28:33",
        ratingChange: -12
      }
    ]
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'leaderboards', label: 'Leaderboards', icon: 'Trophy' },
    { id: 'tournaments', label: 'Tournaments', icon: 'Sword' },
    { id: 'seasonal', label: 'Seasonal Rankings', icon: 'Calendar' },
    { id: 'live', label: 'Live Matches', icon: 'Video' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' }
  ];

  const handleViewLeaderboard = (category) => {
    setActiveSection('leaderboards');
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(mockPlayerProfile);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-background via-midnight to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="font-inter text-sm font-medium text-primary">
                Live Competitive Season
              </span>
            </div>
            
            <h1 className="font-cinzel font-bold text-5xl md:text-7xl text-foreground mb-6 gold-gradient-text">
              Competitive Arena
            </h1>
            
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Where legends are forged and champions rise. Compete against the best players across multiple game modes, climb the seasonal rankings, and claim your place in the hall of fame.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <Button variant="default" size="lg" className="legendary-button">
                <Icon name="Sword" size={20} className="mr-2" />
                Join Competition
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Video" size={20} className="mr-2" />
                Watch Live Matches
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-mystical border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg whitespace-nowrap smooth-transition ${
                    activeSection === section?.id
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={section?.icon} size={18} />
                  <span className="font-inter font-medium">{section?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-12">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="realm-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mx-auto mb-4 mystical-glow">
                    <Icon name="Users" size={24} className="text-primary-foreground" />
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground mb-1">
                    245,678
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Active Competitors
                  </div>
                </div>
                
                <div className="realm-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center mx-auto mb-4 mystical-glow">
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground mb-1">
                    12
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Live Matches
                  </div>
                </div>
                
                <div className="realm-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-lg flex items-center justify-center mx-auto mb-4 mystical-glow">
                    <Icon name="Trophy" size={24} className="text-warning-foreground" />
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground mb-1">
                    $125K
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Total Prize Pool
                  </div>
                </div>
                
                <div className="realm-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4 mystical-glow">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground mb-1">
                    23
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Days Remaining
                  </div>
                </div>
              </div>

              {/* Featured Leaderboards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <LeaderboardCard
                  {...leaderboardData?.overall}
                  onViewAll={() => handleViewLeaderboard('overall')}
                />
                <LeaderboardCard
                  {...leaderboardData?.pvp}
                  onViewAll={() => handleViewLeaderboard('pvp')}
                  showTournament={true}
                />
                <LeaderboardCard
                  {...leaderboardData?.guilds}
                  onViewAll={() => handleViewLeaderboard('guilds')}
                />
              </div>

              {/* Live Tournament Preview */}
              <TournamentBracket tournament={tournamentData} />
            </div>
          )}

          {/* Leaderboards Section */}
          {activeSection === 'leaderboards' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <LeaderboardCard
                {...leaderboardData?.overall}
                onViewAll={() => handleViewLeaderboard('overall')}
              />
              <LeaderboardCard
                {...leaderboardData?.pvp}
                onViewAll={() => handleViewLeaderboard('pvp')}
                showTournament={true}
              />
              <LeaderboardCard
                {...leaderboardData?.guilds}
                onViewAll={() => handleViewLeaderboard('guilds')}
              />
            </div>
          )}

          {/* Tournaments Section */}
          {activeSection === 'tournaments' && (
            <TournamentBracket tournament={tournamentData} />
          )}

          {/* Seasonal Rankings Section */}
          {activeSection === 'seasonal' && (
            <SeasonalRankings season={seasonalData} />
          )}

          {/* Live Matches Section */}
          {activeSection === 'live' && (
            <LiveMatchViewer matches={liveMatches} />
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <AchievementGallery achievements={achievementsData} />
          )}
        </div>

        {/* Player Profile Modal */}
        {selectedPlayer && (
          <PlayerProfileCard
            player={selectedPlayer}
            onClose={() => setSelectedPlayer(null)}
          />
        )}
      </main>
    </div>
  );
};

export default CompetitiveArena;