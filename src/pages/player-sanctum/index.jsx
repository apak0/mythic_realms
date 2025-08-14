import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CharacterCard from './components/CharacterCard';
import AccountOverview from './components/AccountOverview';
import GuildManagement from './components/GuildManagement';
import SecuritySettings from './components/SecuritySettings';
import AchievementTracker from './components/AchievementTracker';
import NotificationSettings from './components/NotificationSettings';

const PlayerSanctum = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Mock data for the player sanctum
  const accountData = {
    username: "LegendaryHero42",
    memberSince: "March 2022",
    subscription: {
      tier: "Mythic Premium",
      status: "active",
      renewDate: "January 15, 2025"
    },
    securityScore: 85,
    stats: {
      totalCharacters: 8,
      totalPlaytime: "1,247",
      achievementsUnlocked: 342,
      guildsJoined: 3
    },
    recentActivity: [
      {
        icon: "Trophy",
        description: "Unlocked \'Dragon Slayer\' achievement",
        timestamp: "2 hours ago"
      },
      {
        icon: "Users",
        description: "Joined guild event \'Realm Defense'",
        timestamp: "5 hours ago"
      },
      {
        icon: "Sword",
        description: "Completed dungeon 'Shadow Depths'",
        timestamp: "1 day ago"
      },
      {
        icon: "Star",
        description: "Reached level 85 with Warrior",
        timestamp: "2 days ago"
      }
    ]
  };

  const charactersData = [
    {
      id: 1,
      name: "Thorgar Ironbeard",
      level: 85,
      class: "Warrior",
      server: "Mythic Realm",
      serverStatus: "online",
      guild: "Dragon Slayers",
      avatar: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
      experience: { current: 2847500, required: 3000000 },
      lastPlayed: "2 hours ago"
    },
    {
      id: 2,
      name: "Elara Moonwhisper",
      level: 78,
      class: "Mage",
      server: "Mystic Shores",
      serverStatus: "online",
      guild: "Arcane Circle",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763c5d?w=400&h=400&fit=crop&crop=face",
      isOnline: false,
      experience: { current: 1950000, required: 2100000 },
      lastPlayed: "1 day ago"
    },
    {
      id: 3,
      name: "Shadowbane",
      level: 72,
      class: "Rogue",
      server: "Dark Citadel",
      serverStatus: "maintenance",
      guild: null,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      isOnline: false,
      experience: { current: 1680000, required: 1800000 },
      lastPlayed: "3 days ago"
    }
  ];

  const guildData = {
    name: "Dragon Slayers",
    description: "Elite warriors dedicated to protecting the realm from ancient threats. We stand united against darkness and forge legends together.",
    emblem: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
    memberCount: 47,
    maxMembers: 50,
    level: 25,
    guildPower: 2847500,
    weeklyContribution: 125000,
    serverRank: 3,
    members: [
      {
        id: 1,
        name: "Thorgar Ironbeard",
        level: 85,
        class: "Warrior",
        role: "Guild Master",
        avatar: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=face",
        isOnline: true,
        lastSeen: "Online"
      },
      {
        id: 2,
        name: "Elara Moonwhisper",
        level: 78,
        class: "Mage",
        role: "Officer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763c5d?w=100&h=100&fit=crop&crop=face",
        isOnline: false,
        lastSeen: "1 day ago"
      },
      {
        id: 3,
        name: "Gareth Stormwind",
        level: 82,
        class: "Paladin",
        role: "Officer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        isOnline: true,
        lastSeen: "Online"
      }
    ],
    upcomingEvents: [
      {
        id: 1,
        title: "Dragon\'s Lair Raid",
        description: "Weekly raid against the Ancient Red Dragon. Bring your best gear and potions!",
        date: "December 15, 2024 8:00 PM",
        type: "raid",
        participants: 18,
        maxParticipants: 20,
        isParticipating: true
      },
      {
        id: 2,
        title: "Guild PvP Tournament",
        description: "Inter-guild tournament to determine the strongest warriors. Glory awaits!",
        date: "December 18, 2024 7:00 PM",
        type: "pvp",
        participants: 24,
        maxParticipants: 32,
        isParticipating: false
      }
    ],
    recentMessages: [
      {
        id: 1,
        sender: "Thorgar Ironbeard",
        role: "Guild Master",
        avatar: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop&crop=face",
        content: "Great job everyone on last night\'s raid! We\'re getting stronger every week.",
        timestamp: "2 hours ago"
      },
      {
        id: 2,
        sender: "Elara Moonwhisper",
        role: "Officer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763c5d?w=50&h=50&fit=crop&crop=face",
        content: "Don\'t forget to contribute to the guild treasury. We\'re saving for new guild hall upgrades!",
        timestamp: "4 hours ago"
      }
    ]
  };

  const securityData = {
    securityScore: 85,
    twoFactorEnabled: true,
    activeSessions: [
      {
        id: 1,
        deviceName: "Chrome on Windows",
        deviceType: "desktop",
        location: "New York, USA",
        lastActive: "Active now",
        isCurrent: true
      },
      {
        id: 2,
        deviceName: "Mobile App",
        deviceType: "mobile",
        location: "New York, USA",
        lastActive: "2 hours ago",
        isCurrent: false
      }
    ],
    loginHistory: [
      {
        id: 1,
        timestamp: "Dec 12, 2024 2:30 PM",
        location: "New York, USA",
        ipAddress: "192.168.1.100",
        deviceType: "desktop",
        success: true,
        isKnown: true,
        isVPN: false
      },
      {
        id: 2,
        timestamp: "Dec 11, 2024 8:15 AM",
        location: "New York, USA",
        ipAddress: "192.168.1.100",
        deviceType: "mobile",
        success: true,
        isKnown: true,
        isVPN: false
      }
    ],
    showOnlineStatus: true,
    allowActivityTracking: true
  };

  const achievementData = {
    completedCount: 342,
    totalCount: 500,
    achievementPoints: 15420,
    rareTrophies: 28,
    achievements: [
      {
        id: 1,
        title: "Dragon Slayer",
        description: "Defeat 100 dragons across all realms",
        category: "combat",
        rarity: "legendary",
        points: 500,
        completed: true,
        completedDate: "Dec 10, 2024",
        reward: "Legendary Dragon Scale Armor",
        progress: { current: 100, required: 100 }
      },
      {
        id: 2,
        title: "Master Explorer",
        description: "Discover all hidden locations in the realm",
        category: "exploration",
        rarity: "epic",
        points: 300,
        completed: false,
        progress: { current: 87, required: 100 }
      },
      {
        id: 3,
        title: "Guild Leader",
        description: "Successfully lead a guild for 6 months",
        category: "social",
        rarity: "rare",
        points: 200,
        completed: true,
        completedDate: "Nov 15, 2024",
        reward: "Guild Master\'s Crown"
      }
    ]
  };

  const notificationData = {
    deliveryMethods: {
      web: true,
      email: true,
      mobile: false,
      sms: false
    },
    settings: {
      game: {
        levelUp: { web: true, email: true, mobile: false, sms: false },
        guildActivity: { web: true, email: false, mobile: false, sms: false },
        friendsOnline: { web: true, email: false, mobile: false, sms: false }
      },
      account: {
        loginAlerts: { web: true, email: true, mobile: false, sms: true },
        passwordChanges: { web: true, email: true, mobile: false, sms: true }
      }
    },
    quietHours: {
      enabled: true,
      startTime: "22:00",
      endTime: "08:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'characters', label: 'Characters', icon: 'Users' },
    { id: 'guild', label: 'Guild', icon: 'Shield' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
    { id: 'security', label: 'Security', icon: 'Lock' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AccountOverview accountData={accountData} />;
      case 'characters':
        return (
          <div className="space-y-6">
            <div className="realm-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-cinzel font-semibold text-xl text-foreground">
                  Your Characters
                </h2>
                <Button variant="default" className="legendary-button">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Create Character
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {charactersData?.map((character) => (
                  <CharacterCard
                    key={character?.id}
                    character={character}
                    onSelect={setSelectedCharacter}
                    isSelected={selectedCharacter?.id === character?.id}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 'guild':
        return <GuildManagement guildData={guildData} userRole="Guild Master" />;
      case 'achievements':
        return <AchievementTracker achievementData={achievementData} />;
      case 'security':
        return <SecuritySettings securityData={securityData} />;
      case 'notifications':
        return <NotificationSettings notificationData={notificationData} />;
      default:
        return <AccountOverview accountData={accountData} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Player Sanctum - Mythic Realms</title>
        <meta name="description" content="Manage your characters, guild, achievements, and account settings in your personal command center." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-background via-midnight to-background border-b border-border">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
              <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 mystical-glow">
                    <Icon name="Crown" size={40} className="text-primary-foreground" />
                  </div>
                  <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-foreground mb-4">
                    Player Sanctum
                  </h1>
                  <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your personal command center for managing characters, guilds, achievements, and account settings
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-12">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="realm-card p-6 sticky top-24">
                    <h3 className="font-cinzel font-semibold text-lg text-foreground mb-4">
                      Sanctum Navigation
                    </h3>
                    <nav className="space-y-2">
                      {tabs?.map((tab) => (
                        <button
                          key={tab?.id}
                          onClick={() => setActiveTab(tab?.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                            activeTab === tab?.id
                              ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                        >
                          <Icon name={tab?.icon} size={20} />
                          <span className="font-inter font-medium">{tab?.label}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                  {renderTabContent()}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default PlayerSanctum;