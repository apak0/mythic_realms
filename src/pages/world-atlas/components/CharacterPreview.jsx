import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CharacterPreview = () => {
  const [selectedRace, setSelectedRace] = useState('human');
  const [selectedClass, setSelectedClass] = useState('warrior');
  const [selectedRegion, setSelectedRegion] = useState('highlands');

  const races = [
    {
      id: 'human',
      name: 'Human',
      description: 'Versatile and adaptable, humans excel in all paths of adventure.',
      traits: ['Versatile', 'Quick Learners', 'Diplomatic'],
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=300&h=400&fit=crop',
      bonuses: { strength: 0, agility: 0, intelligence: 0, charisma: 2 }
    },
    {
      id: 'elf',
      name: 'Elf',
      description: 'Ancient and wise, elves possess natural affinity for magic and nature.',
      traits: ['Magical Affinity', 'Long-lived', 'Nature Bond'],
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=300&h=400&fit=crop',
      bonuses: { strength: -1, agility: 1, intelligence: 2, charisma: 0 }
    },
    {
      id: 'dwarf',
      name: 'Dwarf',
      description: 'Hardy mountain folk known for their craftsmanship and resilience.',
      traits: ['Resilient', 'Master Crafters', 'Mountain Born'],
      image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?w=300&h=400&fit=crop',
      bonuses: { strength: 2, agility: -1, intelligence: 0, charisma: 0 }
    },
    {
      id: 'orc',
      name: 'Orc',
      description: 'Fierce warriors with unmatched physical prowess and tribal honor.',
      traits: ['Powerful', 'Tribal Honor', 'Battle Fury'],
      image: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?w=300&h=400&fit=crop',
      bonuses: { strength: 3, agility: 0, intelligence: -1, charisma: -1 }
    }
  ];

  const classes = [
    {
      id: 'warrior',
      name: 'Warrior',
      description: 'Masters of combat who excel in melee warfare and protection.',
      abilities: ['Shield Bash', 'Berserker Rage', 'Defensive Stance'],
      weapon: 'Sword & Shield',
      icon: 'Sword'
    },
    {
      id: 'mage',
      name: 'Mage',
      description: 'Wielders of arcane forces who shape reality through spellcraft.',
      abilities: ['Fireball', 'Teleport', 'Mana Shield'],
      weapon: 'Staff of Power',
      icon: 'Sparkles'
    },
    {
      id: 'rogue',
      name: 'Rogue',
      description: 'Stealthy assassins who strike from shadows with deadly precision.',
      abilities: ['Stealth', 'Backstab', 'Poison Blade'],
      weapon: 'Twin Daggers',
      icon: 'Eye'
    },
    {
      id: 'ranger',
      name: 'Ranger',
      description: 'Nature guardians skilled in archery and wilderness survival.',
      abilities: ['Eagle Eye', 'Animal Companion', 'Track'],
      weapon: 'Elven Bow',
      icon: 'Target'
    }
  ];

  const regions = [
    {
      id: 'highlands',
      name: 'Celestial Highlands',
      description: 'Starting region for those seeking the path of light and justice.',
      faction: 'Order of Light',
      climate: 'Temperate',
      difficulty: 'Beginner'
    },
    {
      id: 'wastes',
      name: 'Obsidian Wastes',
      description: 'Dark realm perfect for those who embrace shadow magic.',
      faction: 'Shadow Cult',
      climate: 'Harsh',
      difficulty: 'Advanced'
    },
    {
      id: 'sanctuaries',
      name: 'Arcane Sanctuaries',
      description: 'Magical realm ideal for scholars and spell-weavers.',
      faction: 'Silver Covenant',
      climate: 'Mystical',
      difficulty: 'Intermediate'
    },
    {
      id: 'battlefields',
      name: 'Crimson Battlefields',
      description: 'War-torn lands where only the strongest survive.',
      faction: 'Chaos Legion',
      climate: 'Brutal',
      difficulty: 'Expert'
    }
  ];

  const currentRace = races?.find(r => r?.id === selectedRace);
  const currentClass = classes?.find(c => c?.id === selectedClass);
  const currentRegion = regions?.find(r => r?.id === selectedRegion);

  const calculateStats = () => {
    const baseStats = { strength: 10, agility: 10, intelligence: 10, charisma: 10 };
    const raceBonus = currentRace?.bonuses;
    
    return {
      strength: baseStats?.strength + raceBonus?.strength,
      agility: baseStats?.agility + raceBonus?.agility,
      intelligence: baseStats?.intelligence + raceBonus?.intelligence,
      charisma: baseStats?.charisma + raceBonus?.charisma
    };
  };

  const stats = calculateStats();

  return (
    <div className="w-full h-full bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h3 className="font-cinzel text-lg font-semibold text-foreground mb-1">
          Character Preview
        </h3>
        <p className="font-inter text-sm text-muted-foreground">
          Experiment with different combinations to find your perfect hero
        </p>
      </div>
      <div className="flex h-full">
        {/* Character Display */}
        <div className="w-1/3 p-4 border-r border-border">
          <div className="text-center">
            <div className="relative w-32 h-40 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src={currentRace?.image}
                alt={`${currentRace?.name} ${currentClass?.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-2">
                <div className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center ${
                  currentClass?.id === 'warrior' ? 'bg-red-500' :
                  currentClass?.id === 'mage' ? 'bg-blue-500' :
                  currentClass?.id === 'rogue' ? 'bg-purple-500' : 'bg-green-500'
                }`}>
                  <Icon name={currentClass?.icon} size={14} className="text-white" />
                </div>
              </div>
            </div>
            
            <h4 className="font-cinzel text-lg font-semibold text-foreground">
              {currentRace?.name} {currentClass?.name}
            </h4>
            <p className="font-inter text-sm text-muted-foreground">
              Level 1 Adventurer
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 space-y-3">
            <h5 className="font-cinzel font-semibold text-foreground text-center">Attributes</h5>
            {Object.entries(stats)?.map(([stat, value]) => (
              <div key={stat} className="flex items-center justify-between">
                <span className="font-inter text-sm text-foreground capitalize">{stat}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(value / 15) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-sm text-foreground w-6 text-right">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-6">
            {/* Race Selection */}
            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Choose Race</h4>
              <div className="grid grid-cols-2 gap-3">
                {races?.map((race) => (
                  <button
                    key={race?.id}
                    onClick={() => setSelectedRace(race?.id)}
                    className={`p-3 rounded-lg border text-left smooth-transition ${
                      selectedRace === race?.id
                        ? 'bg-primary/10 border-primary/20 text-primary' :'bg-muted/20 border-border text-foreground hover:bg-muted/40'
                    }`}
                  >
                    <h5 className="font-inter font-semibold text-sm">{race?.name}</h5>
                    <p className="font-inter text-xs text-muted-foreground mt-1">
                      {race?.traits?.join(', ')}
                    </p>
                  </button>
                ))}
              </div>
              
              <div className="mt-3 p-3 bg-muted/20 rounded-lg">
                <p className="font-inter text-sm text-muted-foreground">
                  {currentRace?.description}
                </p>
              </div>
            </div>

            {/* Class Selection */}
            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Choose Class</h4>
              <div className="grid grid-cols-2 gap-3">
                {classes?.map((cls) => (
                  <button
                    key={cls?.id}
                    onClick={() => setSelectedClass(cls?.id)}
                    className={`p-3 rounded-lg border text-left smooth-transition ${
                      selectedClass === cls?.id
                        ? 'bg-primary/10 border-primary/20 text-primary' :'bg-muted/20 border-border text-foreground hover:bg-muted/40'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name={cls?.icon} size={16} />
                      <h5 className="font-inter font-semibold text-sm">{cls?.name}</h5>
                    </div>
                    <p className="font-inter text-xs text-muted-foreground">
                      {cls?.weapon}
                    </p>
                  </button>
                ))}
              </div>
              
              <div className="mt-3 p-3 bg-muted/20 rounded-lg">
                <p className="font-inter text-sm text-muted-foreground mb-2">
                  {currentClass?.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {currentClass?.abilities?.map((ability, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Starting Region */}
            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Starting Region</h4>
              <div className="space-y-2">
                {regions?.map((region) => (
                  <button
                    key={region?.id}
                    onClick={() => setSelectedRegion(region?.id)}
                    className={`w-full p-3 rounded-lg border text-left smooth-transition ${
                      selectedRegion === region?.id
                        ? 'bg-primary/10 border-primary/20 text-primary' :'bg-muted/20 border-border text-foreground hover:bg-muted/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-inter font-semibold text-sm">{region?.name}</h5>
                      <span className={`px-2 py-1 text-xs rounded ${
                        region?.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        region?.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        region?.difficulty === 'Advanced'? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {region?.difficulty}
                      </span>
                    </div>
                    <p className="font-inter text-xs text-muted-foreground">
                      {region?.description}
                    </p>
                  </button>
                ))}
              </div>
              
              <div className="mt-3 p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-inter text-sm font-medium text-foreground">Faction:</span>
                  <span className="font-inter text-sm text-primary">{currentRegion?.faction}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm font-medium text-foreground">Climate:</span>
                  <span className="font-inter text-sm text-muted-foreground">{currentRegion?.climate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="default" fullWidth className="legendary-button">
                <Icon name="Play" size={16} className="mr-2" />
                Create Character
              </Button>
              
              <Button variant="outline" fullWidth>
                <Icon name="Shuffle" size={16} className="mr-2" />
                Random Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPreview;