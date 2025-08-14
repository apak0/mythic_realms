import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import CategoryFilter from './components/CategoryFilter';
import NewsletterSubscription from './components/NewsletterSubscription';
import ContentCalendar from './components/ContentCalendar';
import SearchAndFilter from './components/SearchAndFilter';

const Chronicles = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Mock data for articles
  const featuredArticles = [
    {
      id: 1,
      title: "The Shadowlands Expansion: A New Chapter Begins",
      slug: "shadowlands-expansion-new-chapter",
      excerpt: `The realm trembles as ancient seals weaken and forgotten powers stir in the depths. Our latest expansion introduces three new regions, each harboring secrets that will challenge even the most seasoned adventurers.\n\nExplore the Whispering Marshlands where reality bends and time flows differently, venture into the Crystal Caverns where light itself becomes a weapon, and brave the Shadowlands where the line between life and death grows thin.`,
      content: `The realm trembles as ancient seals weaken and forgotten powers stir in the depths...`,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      category: "Developer Update",
      author: "Magnus Stormweaver",
      publishedAt: "2025-01-10T14:30:00Z",
      readTime: 8,
      likes: 1247,
      comments: 89,
      shares: 156,
      tags: ["expansion", "shadowlands", "new-content", "lore"],
      featured: true,
      isNew: true
    },
    {
      id: 2,
      title: "Community Spotlight: The Legendary Guild of Eternal Flames",
      slug: "community-spotlight-eternal-flames-guild",
      excerpt: `Meet the guild that conquered the impossible - the first to clear the Infernal Citadel on Mythic difficulty. Their journey from humble beginnings to legendary status is a testament to dedication, strategy, and unbreakable bonds forged in the heat of battle.\n\nLeader Pyrion Flameborn shares their secrets to success and the challenges they overcame.`,
      content: `Meet the guild that conquered the impossible...`,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
      category: "Community Spotlight",
      author: "Lyra Moonwhisper",
      publishedAt: "2025-01-08T16:00:00Z",
      readTime: 6,
      likes: 892,
      comments: 134,
      shares: 78,
      tags: ["community", "guild", "achievement", "mythic"],
      featured: true,
      isNew: false
    }
  ];

  const allArticles = [
    ...featuredArticles,
    {
      id: 3,
      title: "Patch 3.2.1: Balance Updates and Quality of Life Improvements",
      slug: "patch-3-2-1-balance-updates",
      excerpt: "Comprehensive changes to class balance, bug fixes, and new quality of life features based on community feedback.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop",
      category: "Patch Notes",
      author: "Council of Developers",
      publishedAt: "2025-01-05T12:00:00Z",
      readTime: 4,
      likes: 634,
      comments: 201,
      shares: 45,
      tags: ["patch", "balance", "bug-fixes"],
      featured: false,
      isNew: true
    },
    {
      id: 4,
      title: "Mastering the Art of Legendary Weapon Crafting",
      slug: "legendary-weapon-crafting-guide",
      excerpt: "A comprehensive guide to forging the most powerful weapons in the realm, from material gathering to final enchantments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      category: "Strategy Guide",
      author: "Thorin Ironforge",
      publishedAt: "2025-01-03T10:30:00Z",
      readTime: 12,
      likes: 1156,
      comments: 87,
      shares: 234,
      tags: ["crafting", "weapons", "guide", "legendary"],
      featured: false,
      isNew: false
    },
    {
      id: 5,
      title: "The Ancient Prophecies: Unraveling the Mysteries of the First Age",
      slug: "ancient-prophecies-first-age-lore",
      excerpt: "Delve deep into the forgotten histories and ancient prophecies that shape the current events in our world.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop",
      category: "Lore Deep-dive",
      author: "Sage Eldara",
      publishedAt: "2025-01-01T18:00:00Z",
      readTime: 15,
      likes: 789,
      comments: 156,
      shares: 98,
      tags: ["lore", "prophecies", "history", "first-age"],
      featured: false,
      isNew: false
    },
    {
      id: 6,
      title: "Winter Solstice Festival: A Month of Celebration Begins",
      slug: "winter-solstice-festival-2025",
      excerpt: "Join us for the most magical time of the year with exclusive rewards, special events, and limited-time activities.",
      image: "https://images.unsplash.com/photo-1544273677-6e4b999de2a9?w=600&h=300&fit=crop",
      category: "Event Announcement",
      author: "Festival Coordinator",
      publishedAt: "2024-12-28T14:00:00Z",
      readTime: 5,
      likes: 2134,
      comments: 312,
      shares: 567,
      tags: ["event", "festival", "winter", "rewards"],
      featured: false,
      isNew: false
    },
    {
      id: 7,
      title: "PvP Arena Season 8: New Maps and Ranking System",
      slug: "pvp-arena-season-8-updates",
      excerpt: "Experience intense combat in three new arena maps with our revamped ranking system and exclusive seasonal rewards.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      category: "Developer Update",
      author: "Combat Design Team",
      publishedAt: "2024-12-25T16:30:00Z",
      readTime: 7,
      likes: 945,
      comments: 178,
      shares: 89,
      tags: ["pvp", "arena", "season", "ranking"],
      featured: false,
      isNew: false
    },
    {
      id: 8,
      title: "Behind the Scenes: Creating the Shadowlands Soundtrack",
      slug: "shadowlands-soundtrack-behind-scenes",
      excerpt: "Composer Elena Nightsong takes us through the creative process of crafting the haunting melodies of the Shadowlands.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop",
      category: "Developer Update",
      author: "Elena Nightsong",
      publishedAt: "2024-12-22T11:00:00Z",
      readTime: 9,
      likes: 567,
      comments: 45,
      shares: 123,
      tags: ["music", "soundtrack", "behind-scenes", "shadowlands"],
      featured: false,
      isNew: false
    },
    {
      id: 9,
      title: "Player Spotlight: The Solo Adventurer Who Conquered All",
      slug: "player-spotlight-solo-adventurer",
      excerpt: "Meet Kael the Wanderer, the first player to complete all raid content solo, and learn about his incredible journey.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      category: "Community Spotlight",
      author: "Community Team",
      publishedAt: "2024-12-20T13:45:00Z",
      readTime: 6,
      likes: 1678,
      comments: 234,
      shares: 345,
      tags: ["player", "solo", "achievement", "spotlight"],
      featured: false,
      isNew: false
    }
  ];

  const categories = [
    { name: 'All', count: allArticles?.length, description: 'All chronicles' },
    { name: 'Developer Update', count: allArticles?.filter(a => a?.category === 'Developer Update')?.length, description: 'From the creators' },
    { name: 'Patch Notes', count: allArticles?.filter(a => a?.category === 'Patch Notes')?.length, description: 'Game updates' },
    { name: 'Community Spotlight', count: allArticles?.filter(a => a?.category === 'Community Spotlight')?.length, description: 'Player stories' },
    { name: 'Strategy Guide', count: allArticles?.filter(a => a?.category === 'Strategy Guide')?.length, description: 'Master the game' },
    { name: 'Lore Deep-dive', count: allArticles?.filter(a => a?.category === 'Lore Deep-dive')?.length, description: 'World mysteries' },
    { name: 'Event Announcement', count: allArticles?.filter(a => a?.category === 'Event Announcement')?.length, description: 'Upcoming events' }
  ];

  // Filter articles based on category and search
  const filteredArticles = allArticles?.filter(article => {
    const matchesCategory = activeCategory === 'All' || article?.category === activeCategory;
    const matchesSearch = !searchQuery || 
      article?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      article?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      article?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles?.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles?.slice(startIndex, startIndex + articlesPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>Chronicles - Mythic Realms | Epic Tales & Developer Updates</title>
        <meta name="description" content="Discover the latest chronicles from Mythic Realms - developer updates, community spotlights, patch notes, and epic tales from the realm. Stay connected with the legendary community." />
        <meta name="keywords" content="Mythic Realms, chronicles, news, updates, community, developer blog, patch notes, gaming news" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-16 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
            <div className="relative max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
                <Icon name="Scroll" size={16} />
                <span>Chronicles of the Realm</span>
              </div>
              
              <h1 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Epic Tales & <span className="gold-gradient-text">Legendary Updates</span>
              </h1>
              
              <p className="text-muted-foreground font-inter text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                Immerse yourself in the ongoing saga of Mythic Realms through developer chronicles, 
                community spotlights, and the latest updates from across the realm. Every story shapes our world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="default" size="lg" className="legendary-button">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Explore Chronicles
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Bell" size={20} className="mr-2" />
                  Subscribe to Updates
                </Button>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Search and Filter */}
                <SearchAndFilter 
                  onSearch={handleSearch}
                  onFilter={handleFilter}
                  totalResults={filteredArticles?.length}
                />

                {/* Featured Articles */}
                {activeCategory === 'All' && !searchQuery && (
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-cinzel font-bold text-2xl text-foreground">
                        Featured Chronicles
                      </h2>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Star" size={16} />
                        <span className="font-inter">Editor's Choice</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {featuredArticles?.map((article) => (
                        <FeaturedArticle key={article?.id} article={article} />
                      ))}
                    </div>
                  </section>
                )}

                {/* All Articles */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-cinzel font-bold text-2xl text-foreground">
                      {activeCategory === 'All' ? 'All Chronicles' : `${activeCategory} Chronicles`}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground font-inter">
                        {filteredArticles?.length} articles found
                      </span>
                      <Button variant="outline" size="sm">
                        <Icon name="Grid3X3" size={16} className="mr-2" />
                        View Options
                      </Button>
                    </div>
                  </div>

                  {paginatedArticles?.length > 0 ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {paginatedArticles?.map((article) => (
                          <ArticleCard key={article?.id} article={article} />
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="flex items-center justify-center space-x-2 mt-8">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                          >
                            <Icon name="ChevronLeft" size={16} className="mr-1" />
                            Previous
                          </Button>
                          
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                              const page = i + 1;
                              return (
                                <Button
                                  key={page}
                                  variant={currentPage === page ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => setCurrentPage(page)}
                                  className="w-10 h-10"
                                >
                                  {page}
                                </Button>
                              );
                            })}
                            {totalPages > 5 && (
                              <>
                                <span className="text-muted-foreground px-2">...</span>
                                <Button
                                  variant={currentPage === totalPages ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => setCurrentPage(totalPages)}
                                  className="w-10 h-10"
                                >
                                  {totalPages}
                                </Button>
                              </>
                            )}
                          </div>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                          >
                            Next
                            <Icon name="ChevronRight" size={16} className="ml-1" />
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Search" size={32} className="text-muted-foreground" />
                      </div>
                      <h3 className="font-cinzel font-semibold text-lg text-foreground mb-2">
                        No Chronicles Found
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm mb-4">
                        Try adjusting your search terms or filters to find more content.
                      </p>
                      <Button variant="outline" onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All');
                        setCurrentPage(1);
                      }}>
                        <Icon name="RotateCcw" size={16} className="mr-2" />
                        Reset Search
                      </Button>
                    </div>
                  )}
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Category Filter */}
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />

                {/* Content Calendar */}
                <ContentCalendar />

                {/* Newsletter Subscription */}
                <NewsletterSubscription />

                {/* Recent Activity */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-cinzel font-semibold text-lg text-foreground mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {allArticles?.slice(0, 3)?.map((article) => (
                      <ArticleCard 
                        key={`recent-${article?.id}`} 
                        article={article} 
                        variant="compact" 
                      />
                    ))}
                  </div>
                  <Button variant="outline" size="sm" fullWidth className="mt-4">
                    <Icon name="ArrowRight" size={14} className="mr-2" />
                    View All Activity
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Chronicles;