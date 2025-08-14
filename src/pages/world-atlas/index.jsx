import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import InteractiveMap from './components/InteractiveMap';
import RegionDetails from './components/RegionDetails';
import TimelineExplorer from './components/TimelineExplorer';
import FactionOverview from './components/FactionOverview';
import CharacterPreview from './components/CharacterPreview';
import RegionFilter from './components/RegionFilter';

const WorldAtlas = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedFaction, setSelectedFaction] = useState(null);
  const [currentEra, setCurrentEra] = useState(null);
  const [activeView, setActiveView] = useState('map');
  const [activeFilters, setActiveFilters] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Mock regions data
  const regions = [
    {
      id: 'celestial-highlands',
      name: 'Celestial Highlands',
      type: 'Sacred Territory',
      levelRange: '1-15',
      coordinates: { x: 25, y: 30 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: `The Celestial Highlands rise majestically above the mortal realm, their golden peaks touched by divine light. Ancient temples dot the landscape, their crystal spires reaching toward the heavens. Here, the Order of Light maintains their sacred vigil, training paladins and clerics in the arts of divine magic and righteous combat.`,
      population: '47,000',
      climate: 'Temperate Highland',
      features: [
        'Temple of Eternal Light',
        'Crystal Caverns',
        'Paladin Training Grounds',
        'Divine Waterfalls',
        'Sacred Grove of Healing'
      ],
      lore: `Long ago, when the world was young and chaos reigned supreme, the first rays of divine light pierced the darkness and struck these very peaks. Where the light touched, the mountains grew tall and pure, becoming a beacon of hope for all who sought righteousness. The ancient texts speak of Aurelius the First, who climbed these peaks and received the divine mandate to establish the Order of Light.`,
      historicalEvents: [
        {
          title: 'The First Blessing',
          description: 'Divine light first touched these peaks, sanctifying the land',
          era: 'Age of Ancients'
        },
        {
          title: 'Founding of the Order',
          description: 'Aurelius established the Order of Light temple complex',
          era: 'Era of Heroes'
        },
        {
          title: 'The Great Purification',
          description: 'Shadow forces were driven back in a legendary battle',
          era: 'The Great War'
        }
      ],
      factions: [
        {
          name: 'Order of Light',
          influence: 85,
          color: 'bg-yellow-500',
          description: 'The primary ruling faction, maintaining peace and justice'
        },
        {
          name: 'Temple Guardians',
          influence: 15,
          color: 'bg-blue-500',
          description: 'Elite protectors of the sacred sites'
        }
      ],
      gameplayFeatures: [
        {
          name: 'Divine Quests',
          icon: 'Star',
          description: 'Undertake holy missions blessed by the divine'
        },
        {
          name: 'Healing Springs',
          icon: 'Heart',
          description: 'Restore health and mana at sacred locations'
        },
        {
          name: 'Paladin Training',
          icon: 'Shield',
          description: 'Learn advanced combat techniques and divine magic'
        }
      ]
    },
    {
      id: 'obsidian-wastes',
      name: 'Obsidian Wastes',
      type: 'Cursed Badlands',
      levelRange: '35-50',
      coordinates: { x: 75, y: 70 },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      description: `A desolate expanse of black volcanic glass and perpetual twilight, the Obsidian Wastes are home to the Shadow Cult and their dark machinations. Twisted spires of obsidian pierce the ashen sky, while rivers of liquid shadow flow through canyons carved by ancient catastrophe.`,
      population: '23,000',
      climate: 'Harsh Volcanic',
      features: [
        'Shadowspire Citadel',
        'Rivers of Liquid Shadow',
        'Obsidian Quarries',
        'Ritual Circles',
        'The Whispering Canyons'
      ],
      lore: `The Obsidian Wastes were not always a realm of darkness. Once, this was the prosperous kingdom of Umbraleth, known for its master craftsmen and beautiful obsidian architecture. During the Great War, a catastrophic ritual gone wrong shattered the realm, turning paradise into a cursed wasteland where shadow magic runs wild.`,
      historicalEvents: [
        {
          title: 'The Shattering',
          description: 'A failed ritual destroyed the kingdom of Umbraleth',
          era: 'The Great War'
        },
        {
          title: 'Rise of the Shadow Cult',
          description: 'Survivors embraced dark magic to survive the wasteland',
          era: 'Age of Renewal'
        },
        {
          title: 'The Dark Covenant',
          description: 'Alliance formed with other shadow-touched factions',
          era: 'Present Day'
        }
      ],
      factions: [
        {
          name: 'Shadow Cult',
          influence: 90,
          color: 'bg-purple-600',
          description: 'Masters of shadow magic and forbidden knowledge'
        },
        {
          name: 'Obsidian Miners',
          influence: 10,
          color: 'bg-gray-600',
          description: 'Hardy survivors who extract valuable obsidian'
        }
      ],
      gameplayFeatures: [
        {
          name: 'Shadow Magic',
          icon: 'Zap',
          description: 'Learn powerful but dangerous shadow spells'
        },
        {
          name: 'Stealth Missions',
          icon: 'Eye',
          description: 'Navigate dangerous territory using cunning and shadows'
        },
        {
          name: 'Forbidden Rituals',
          icon: 'Skull',
          description: 'Participate in dark ceremonies for power'
        }
      ]
    },
    {
      id: 'arcane-sanctuaries',
      name: 'Arcane Sanctuaries',
      type: 'Magical Academy',
      levelRange: '20-35',
      coordinates: { x: 50, y: 25 },
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: `Floating islands connected by bridges of pure magical energy, the Arcane Sanctuaries house the greatest magical libraries and research facilities in all the realms. Crystal towers spiral impossibly high, defying gravity through ancient enchantments.`,
      population: '31,000',
      climate: 'Magically Stabilized',
      features: [
        'The Grand Library',
        'Floating Crystal Towers',
        'Mana Gardens',
        'Teleportation Nexus',
        'Experimental Laboratories'
      ],
      lore: `Created during the Age of Renewal by the greatest archmages of their time, the Arcane Sanctuaries were designed to be a place where magical knowledge could be preserved and advanced without the interference of politics or war. The floating islands themselves are a testament to the power of collaborative magical research.`,
      historicalEvents: [
        {
          title: 'The Great Convergence',
          description: 'Archmages from across the realms united to create the Sanctuaries',
          era: 'Age of Renewal'
        },
        {
          title: 'The Mana Wars',
          description: 'Conflicts over magical resources and research rights',
          era: 'Present Day'
        },
        {
          title: 'Discovery of Void Magic',
          description: 'Breakthrough research into previously unknown magical forces',
          era: 'Present Day'
        }
      ],
      factions: [
        {
          name: 'Silver Covenant',
          influence: 80,
          color: 'bg-blue-500',
          description: 'The ruling council of archmages and scholars'
        },
        {
          name: 'Apprentice Guild',
          influence: 20,
          color: 'bg-cyan-500',
          description: 'Organization representing magical students and researchers'
        }
      ],
      gameplayFeatures: [
        {
          name: 'Spell Research',
          icon: 'BookOpen',
          description: 'Discover and create new magical spells'
        },
        {
          name: 'Magical Duels',
          icon: 'Sparkles',
          description: 'Test your magical prowess against other mages'
        },
        {
          name: 'Artifact Crafting',
          icon: 'Wrench',
          description: 'Create powerful magical items and enchantments'
        }
      ]
    },
    {
      id: 'crimson-battlefields',
      name: 'Crimson Battlefields',
      type: 'War Zone',
      levelRange: '25-45',
      coordinates: { x: 80, y: 45 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: `Scarred by countless battles, the Crimson Battlefields are a testament to the endless conflicts that rage across the realms. Ancient siege engines dot the landscape alongside the ruins of fallen fortresses, while the Chaos Legion continues to wage war from their mobile war camps.`,
      population: '67,000',
      climate: 'War-torn Temperate',
      features: [
        'The Iron Fortress',
        'Siege Engine Graveyards',
        'Mobile War Camps',
        'The Colosseum of Champions',
        'Weapon Testing Grounds'
      ],
      lore: `The Crimson Battlefields earned their name during the Great War, when the soil was stained red with the blood of countless warriors. What began as a single decisive battle has evolved into a permanent theater of war, where the Chaos Legion tests their military might against any who dare challenge them.`,
      historicalEvents: [
        {
          title: 'The Battle of Crimson Dawn',
          description: 'The first great battle that gave the region its name',
          era: 'The Great War'
        },
        {
          title: 'Rise of the Chaos Legion',
          description: 'Military faction established permanent presence in the region',
          era: 'Age of Renewal'
        },
        {
          title: 'The Iron Campaign',
          description: 'Ongoing military expansion and fortress construction',
          era: 'Present Day'
        }
      ],
      factions: [
        {
          name: 'Chaos Legion',
          influence: 95,
          color: 'bg-red-600',
          description: 'Dominant military force controlling the battlefields'
        },
        {
          name: 'War Merchants',
          influence: 5,
          color: 'bg-orange-500',
          description: 'Traders who supply weapons and provisions to all sides'
        }
      ],
      gameplayFeatures: [
        {
          name: 'Large-scale Battles',
          icon: 'Sword',
          description: 'Participate in massive PvP warfare events'
        },
        {
          name: 'Siege Warfare',
          icon: 'Castle',
          description: 'Attack and defend fortified positions'
        },
        {
          name: 'Military Ranks',
          icon: 'Award',
          description: 'Rise through the ranks of your chosen army'
        }
      ]
    },
    {
      id: 'emerald-forests',
      name: 'Emerald Forests',
      type: 'Ancient Wilderness',
      levelRange: '10-25',
      coordinates: { x: 35, y: 60 },
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      description: `Ancient trees older than civilization itself tower over moss-covered paths in the Emerald Forests. This pristine wilderness is home to druids, rangers, and the mysterious fey folk who guard nature's deepest secrets.`,population: '18,000',climate: 'Temperate Forest',
      features: [
        'The World Tree','Druid Circles','Fey Crossings','Crystal Springs','Ancient Grove Temples'
      ],
      lore: `The Emerald Forests have remained unchanged since the dawn of time, protected by ancient magic and the guardians who dwell within. The World Tree at its heart is said to be the first tree ever to grow, its roots extending to all corners of existence.`,
      historicalEvents: [
        {
          title: 'The First Growth',description: 'The World Tree sprouted and began the forest',era: 'Age of Ancients'
        },
        {
          title: 'The Druid Pact',description: 'Agreement between druids and fey to protect the forest',era: 'Era of Heroes'
        },
        {
          title: 'The Green Resistance',description: 'Forest defenders repelled industrial expansion',era: 'Age of Renewal'
        }
      ],
      factions: [
        {
          name: 'Circle of Druids',influence: 60,color: 'bg-green-600',description: 'Nature guardians who maintain the forest balance'
        },
        {
          name: 'Fey Court',influence: 40,color: 'bg-emerald-500',description: 'Mysterious fey beings with ancient forest ties'
        }
      ],
      gameplayFeatures: [
        {
          name: 'Nature Magic',icon: 'Leaf',description: 'Harness the power of the natural world'
        },
        {
          name: 'Animal Companions',icon: 'Heart',description: 'Bond with forest creatures as allies'
        },
        {
          name: 'Wilderness Survival',icon: 'Compass',description: 'Master the art of living in harmony with nature'
        }
      ]
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const viewOptions = [
    { id: 'map', label: 'Interactive Map', icon: 'Map' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' },
    { id: 'factions', label: 'Factions', icon: 'Shield' },
    { id: 'character', label: 'Character Preview', icon: 'User' }
  ];

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    if (isMobile) {
      setActiveView('details');
    }
  };

  const handleEraChange = (era) => {
    setCurrentEra(era);
  };

  const handleFactionSelect = (faction) => {
    setSelectedFaction(faction);
  };

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-foreground mb-4 gold-gradient-text">
                World Atlas
              </h1>
              <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore the vast realms of Mythic Realms, from ancient mysteries to legendary battlegrounds. 
                Discover the lore, factions, and secrets that shape our world.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="font-inter text-sm text-foreground">{regions?.length} Regions</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="font-inter text-sm text-foreground">4 Major Factions</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="font-inter text-sm text-foreground">5 Historical Eras</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-mystical border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1 overflow-x-auto">
                {viewOptions?.map((option) => (
                  <button
                    key={option?.id}
                    onClick={() => setActiveView(option?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap smooth-transition ${
                      activeView === option?.id
                        ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={option?.icon} size={18} />
                    <span className="font-inter font-medium text-sm">{option?.label}</span>
                  </button>
                ))}
              </div>
              
              {!isMobile && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Info" size={16} />
                  <span className="font-inter text-sm">
                    {activeView === 'map' ? 'Click regions to explore' :
                     activeView === 'timeline' ? 'Journey through the ages' :
                     activeView === 'factions'? 'Discover the powers that rule' : 'Create your perfect hero'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          {activeView === 'map' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-screen max-h-[800px]">
              {/* Filters */}
              <div className="lg:col-span-1 space-y-6">
                <RegionFilter 
                  onFilterChange={handleFilterChange}
                  activeFilters={activeFilters}
                />
              </div>
              
              {/* Map */}
              <div className="lg:col-span-1">
                <InteractiveMap
                  selectedRegion={selectedRegion}
                  onRegionSelect={handleRegionSelect}
                  regions={regions}
                />
              </div>
              
              {/* Region Details */}
              <div className="lg:col-span-1">
                <RegionDetails
                  region={selectedRegion}
                  onClose={() => setSelectedRegion(null)}
                />
              </div>
            </div>
          )}

          {activeView === 'timeline' && (
            <div className="space-y-6">
              <TimelineExplorer
                onEraChange={handleEraChange}
                currentEra={currentEra}
              />
              
              {currentEra && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-cinzel text-xl font-semibold text-foreground mb-4">
                      Era Highlights
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/20 rounded-lg">
                        <h4 className="font-inter font-semibold text-foreground mb-2">Major Events</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          Explore the pivotal moments that shaped this era and influenced the course of history.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/20 rounded-lg">
                        <h4 className="font-inter font-semibold text-foreground mb-2">Key Figures</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          Meet the legendary heroes and villains who left their mark on the world.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-cinzel text-xl font-semibold text-foreground mb-4">
                      Regional Changes
                    </h3>
                    <div className="space-y-3">
                      {regions?.slice(0, 3)?.map((region) => (
                        <div key={region?.id} className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <div>
                            <h5 className="font-inter font-medium text-foreground">{region?.name}</h5>
                            <p className="font-inter text-xs text-muted-foreground">
                              Significant changes during this era
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeView === 'factions' && (
            <div className="h-screen max-h-[800px]">
              <FactionOverview
                selectedFaction={selectedFaction}
                onFactionSelect={handleFactionSelect}
              />
            </div>
          )}

          {activeView === 'character' && (
            <div className="h-screen max-h-[800px]">
              <CharacterPreview />
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Legend?
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The realms await your arrival. Choose your path, forge your destiny, and become the hero 
              that legends speak of for generations to come.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="legendary-button px-8 py-4 rounded-lg font-inter font-semibold text-primary-foreground flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Start Your Journey</span>
              </button>
              
              <button className="px-8 py-4 rounded-lg border border-border bg-card text-foreground font-inter font-semibold hover:bg-muted/50 smooth-transition flex items-center justify-center space-x-2">
                <Icon name="BookOpen" size={20} />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorldAtlas;