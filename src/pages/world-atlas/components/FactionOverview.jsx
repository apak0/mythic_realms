import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FactionOverview = ({ selectedFaction, onFactionSelect }) => {
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const factions = [
    {
      id: 'order-of-light',
      name: 'Order of Light',
      philosophy: 'Guardians of justice and divine protection',
      territory: 'Celestial Highlands',
      influence: 85,
      members: '12,847',
      color: 'bg-yellow-500',
      banner: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      description: `The Order of Light stands as the beacon of hope in the darkest times. Founded by the legendary Paladin Aurelius, this sacred brotherhood has protected the innocent for over a millennium. Their golden banners flutter from the highest spires of the Celestial Highlands, where they maintain their grand cathedral-fortress.`,
      strengths: ['Divine Magic', 'Heavy Armor', 'Healing Arts', 'Fortress Defense'],
      weaknesses: ['Slow Movement', 'Vulnerable to Dark Magic', 'Rigid Tactics'],
      allies: ['Silver Covenant', 'Merchant Guild'],
      enemies: ['Shadow Cult', 'Chaos Legion'],
      leader: {
        name: 'High Paladin Seraphina',
        title: 'The Lightbringer',
        image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=200&h=200&fit=crop'
      },
      conflicts: [
        {
          name: 'The Siege of Dawnspire',
          status: 'Victory',
          description: 'Successfully defended the holy city against shadow forces'
        },
        {
          name: 'Border Skirmishes',
          status: 'Ongoing',
          description: 'Continuous conflicts with Chaos Legion at the Twilight Marches'
        }
      ]
    },
    {
      id: 'shadow-cult',
      name: 'Shadow Cult',
      philosophy: 'Embrace the darkness to gain true power',
      territory: 'Obsidian Wastes',
      influence: 72,
      members: '8,934',
      color: 'bg-purple-600',
      banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      description: `Born from the ashes of the Great War, the Shadow Cult seeks to harness the forbidden arts that others fear to touch. They believe that only by embracing darkness can one truly understand light. Their obsidian towers pierce the perpetual twilight of the Wastes, where they conduct their mysterious rituals.`,
      strengths: ['Dark Magic', 'Stealth', 'Necromancy', 'Psychological Warfare'],
      weaknesses: ['Vulnerable to Light', 'Internal Strife', 'Limited Resources'],
      allies: ['Chaos Legion', 'Rogue Merchants'],
      enemies: ['Order of Light', 'Silver Covenant'],
      leader: {
        name: 'Archmagus Vex',
        title: 'The Voidwalker',
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=200&h=200&fit=crop'
      },
      conflicts: [
        {
          name: 'The Ritual Wars',
          status: 'Victory',
          description: 'Successfully completed the Grand Summoning despite opposition'
        },
        {
          name: 'Hunt for Artifacts',
          status: 'Ongoing',
          description: 'Searching for ancient relics to increase their power'
        }
      ]
    },
    {
      id: 'silver-covenant',
      name: 'Silver Covenant',
      philosophy: 'Knowledge and wisdom guide all actions',
      territory: 'Arcane Sanctuaries',
      influence: 68,
      members: '6,721',
      color: 'bg-blue-500',
      banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: `The Silver Covenant represents the pinnacle of magical scholarship and research. These learned mages dedicate their lives to understanding the fundamental forces that govern reality. Their crystal spires house the greatest libraries and laboratories in all the realms, where they push the boundaries of magical knowledge.`,
      strengths: ['Arcane Magic', 'Research', 'Enchantments', 'Teleportation'],
      weaknesses: ['Physical Combat', 'Limited Numbers', 'Resource Dependent'],
      allies: ['Order of Light', 'Merchant Guild'],
      enemies: ['Chaos Legion', 'Shadow Cult'],
      leader: {
        name: 'Archmage Celestine',
        title: 'The Starweaver',
        image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?w=200&h=200&fit=crop'
      },
      conflicts: [
        {
          name: 'The Mana Wars',
          status: 'Stalemate',
          description: 'Ongoing dispute over magical resource territories'
        },
        {
          name: 'Academy Defense',
          status: 'Victory',
          description: 'Protected the Grand Academy from Chaos Legion assault'
        }
      ]
    },
    {
      id: 'chaos-legion',
      name: 'Chaos Legion',
      philosophy: 'Strength through conquest and domination',
      territory: 'Crimson Battlefields',
      influence: 79,
      members: '15,623',
      color: 'bg-red-600',
      banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      description: `The Chaos Legion thrives on conflict and conquest, believing that only through constant warfare can the strong truly rise above the weak. Their crimson banners are feared across the battlefields, where their disciplined yet brutal tactics have claimed countless victories. They seek to reshape the world through force.`,
      strengths: ['Military Tactics', 'Siege Warfare', 'Discipline', 'Numbers'],
      weaknesses: ['Magic Resistance', 'Internal Competition', 'Supply Lines'],
      allies: ['Shadow Cult', 'Mercenary Companies'],
      enemies: ['Order of Light', 'Silver Covenant'],
      leader: {
        name: 'Warlord Grimjaw',
        title: 'The Conqueror',
        image: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?w=200&h=200&fit=crop'
      },
      conflicts: [
        {
          name: 'The Iron Campaign',
          status: 'Victory',
          description: 'Successfully conquered three major strongholds'
        },
        {
          name: 'Siege of Silverhold',
          status: 'Ongoing',
          description: 'Currently besieging the Silver Covenant stronghold'
        }
      ]
    }
  ];

  const currentFaction = selectedFaction || factions?.[0];

  return (
    <div className="w-full h-full bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-foreground">
              Faction Overview
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              Explore the powers that shape the realms
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg smooth-transition ${
                viewMode === 'grid' ?'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg smooth-transition ${
                viewMode === 'list' ?'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>

        {/* Faction Selector */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-4 gap-2' : 'space-y-2'}>
          {factions?.map((faction) => (
            <button
              key={faction?.id}
              onClick={() => onFactionSelect(faction)}
              className={`${
                viewMode === 'grid' ? 'p-3' : 'flex items-center space-x-3 p-3'
              } rounded-lg border smooth-transition ${
                currentFaction?.id === faction?.id
                  ? 'bg-primary/10 border-primary/20 text-primary' :'bg-muted/20 border-border text-foreground hover:bg-muted/40'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${faction?.color}`}>
                <Icon name="Shield" size={16} className="text-white" />
              </div>
              <div className={viewMode === 'grid' ? 'mt-2 text-center' : 'flex-1 text-left'}>
                <h4 className="font-cinzel text-sm font-semibold truncate">
                  {faction?.name}
                </h4>
                <p className="font-inter text-xs text-muted-foreground truncate">
                  {faction?.members} members
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Faction Details */}
      <div className="p-6 overflow-y-auto" style={{ height: 'calc(100% - 200px)' }}>
        <div className="space-y-6">
          {/* Banner and Basic Info */}
          <div className="relative h-32 rounded-lg overflow-hidden">
            <Image
              src={currentFaction?.banner}
              alt={`${currentFaction?.name} banner`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/90 to-transparent" />
            
            <div className="absolute inset-0 flex items-center p-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${currentFaction?.color} mystical-glow`}>
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              
              <div className="ml-4">
                <h2 className="font-cinzel text-xl font-semibold text-foreground">
                  {currentFaction?.name}
                </h2>
                <p className="font-inter text-sm text-muted-foreground">
                  {currentFaction?.philosophy}
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="font-inter text-xs text-primary">
                    {currentFaction?.influence}% Influence
                  </span>
                  <span className="font-inter text-xs text-muted-foreground">
                    {currentFaction?.members} Members
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-cinzel font-semibold text-foreground mb-3">About</h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              {currentFaction?.description}
            </p>
          </div>

          {/* Leader */}
          <div>
            <h3 className="font-cinzel font-semibold text-foreground mb-3">Leadership</h3>
            <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg">
              <Image
                src={currentFaction?.leader?.image}
                alt={currentFaction?.leader?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-inter font-semibold text-foreground">
                  {currentFaction?.leader?.name}
                </h4>
                <p className="font-inter text-sm text-primary">
                  {currentFaction?.leader?.title}
                </p>
              </div>
            </div>
          </div>

          {/* Strengths and Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-cinzel font-semibold text-foreground mb-3">Strengths</h3>
              <div className="space-y-2">
                {currentFaction?.strengths?.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span className="font-inter text-sm text-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-cinzel font-semibold text-foreground mb-3">Weaknesses</h3>
              <div className="space-y-2">
                {currentFaction?.weaknesses?.map((weakness, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Minus" size={16} className="text-red-500" />
                    <span className="font-inter text-sm text-foreground">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alliances and Conflicts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-cinzel font-semibold text-foreground mb-3">Allies</h3>
              <div className="space-y-2">
                {currentFaction?.allies?.map((ally, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-green-500/10 rounded">
                    <Icon name="Handshake" size={16} className="text-green-500" />
                    <span className="font-inter text-sm text-foreground">{ally}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-cinzel font-semibold text-foreground mb-3">Enemies</h3>
              <div className="space-y-2">
                {currentFaction?.enemies?.map((enemy, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-red-500/10 rounded">
                    <Icon name="Sword" size={16} className="text-red-500" />
                    <span className="font-inter text-sm text-foreground">{enemy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Conflicts */}
          <div>
            <h3 className="font-cinzel font-semibold text-foreground mb-3">Recent Conflicts</h3>
            <div className="space-y-3">
              {currentFaction?.conflicts?.map((conflict, index) => (
                <div key={index} className="p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-inter font-semibold text-foreground">{conflict?.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-inter ${
                      conflict?.status === 'Victory' ? 'bg-green-500/20 text-green-400' :
                      conflict?.status === 'Ongoing'? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {conflict?.status}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-muted-foreground">
                    {conflict?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactionOverview;