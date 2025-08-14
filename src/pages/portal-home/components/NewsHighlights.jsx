import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const NewsHighlights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      category: 'update',
      title: 'The Shadowmere Expansion: Depths of Mystery',
      excerpt: 'Dive into the deepest corners of Shadowmere with new underwater cities, legendary sea creatures, and ancient artifacts waiting to be discovered.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      author: 'Chronicle Keeper Aldric',
      publishedAt: new Date(Date.now() - 86400000),
      readTime: '5 min read',
      tags: ['Expansion', 'Shadowmere', 'New Content'],
      featured: true
    },
    {
      id: 2,
      category: 'event',
      title: 'Grand Tournament of Champions Begins',
      excerpt: 'The most prestigious competition in all realms starts this weekend. Register now to compete for legendary rewards and eternal glory.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      author: 'Arena Master Theron',
      publishedAt: new Date(Date.now() - 172800000),
      readTime: '3 min read',
      tags: ['Tournament', 'Competition', 'Rewards'],
      featured: false
    },
    {
      id: 3,
      category: 'community',
      title: 'Player Spotlight: The Legendary Guild "Starfall Guardians"',
      excerpt: 'Meet the heroes who conquered the impossible raid and discover the strategies that led them to victory against overwhelming odds.',
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=400&fit=crop',
      author: 'Community Herald Maya',
      publishedAt: new Date(Date.now() - 259200000),
      readTime: '7 min read',
      tags: ['Community', 'Guild', 'Achievement'],
      featured: false
    },
    {
      id: 4,
      category: 'lore',
      title: 'The Ancient Prophecy: Secrets of the Crystal Codex',
      excerpt: 'Scholars have uncovered new fragments of the legendary Crystal Codex, revealing shocking truths about the origin of magic itself.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      author: 'Loremaster Elara',
      publishedAt: new Date(Date.now() - 345600000),
      readTime: '10 min read',
      tags: ['Lore', 'Magic', 'History'],
      featured: false
    },
    {
      id: 5,
      category: 'update',
      title: 'Quality of Life Improvements: Version 2.4.1',
      excerpt: 'Enhanced inventory management, improved guild communication tools, and dozens of bug fixes based on community feedback.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      author: 'Development Team',
      publishedAt: new Date(Date.now() - 432000000),
      readTime: '4 min read',
      tags: ['Update', 'Bug Fixes', 'QoL'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Chronicles', icon: 'BookOpen' },
    { id: 'update', label: 'Game Updates', icon: 'Download' },
    { id: 'event', label: 'Events', icon: 'Calendar' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'lore', label: 'Lore & Stories', icon: 'Scroll' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems?.filter(item => item?.category === selectedCategory);

  const featuredNews = newsItems?.find(item => item?.featured);
  const regularNews = newsItems?.filter(item => !item?.featured);

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date?.toLocaleDateString();
  };

  const getCategoryColor = (category) => {
    const colors = {
      update: 'text-blue-400 bg-blue-400/10',
      event: 'text-green-400 bg-green-400/10',
      community: 'text-purple-400 bg-purple-400/10',
      lore: 'text-yellow-400 bg-yellow-400/10'
    };
    return colors?.[category] || 'text-gray-400 bg-gray-400/10';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-midnight to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Scroll" size={16} className="text-primary" />
            <span className="font-inter text-sm text-primary">Latest Chronicles</span>
          </div>
          
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tales from the <span className="gold-gradient-text">Realms</span>
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest adventures, discoveries, and epic moments from across all realms.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium smooth-transition ${
                  selectedCategory === category?.id
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span className="text-sm">{category?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === 'all' && featuredNews && (
          <div className="mb-12">
            <div className="realm-card overflow-hidden hover:border-primary/50 smooth-transition">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredNews?.image}
                    alt={featuredNews?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 px-3 py-1 bg-primary rounded-full">
                      <Icon name="Star" size={14} className="text-primary-foreground" />
                      <span className="font-inter text-xs font-medium text-primary-foreground">Featured</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews?.category)}`}>
                      {featuredNews?.category?.toUpperCase()}
                    </div>
                    <span className="font-inter text-sm text-muted-foreground">
                      {formatDate(featuredNews?.publishedAt)}
                    </span>
                  </div>
                  
                  <h3 className="font-cinzel text-2xl font-bold text-foreground mb-4 hover:text-primary smooth-transition cursor-pointer">
                    {featuredNews?.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                    {featuredNews?.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-inter text-sm text-foreground">{featuredNews?.author}</span>
                      <span className="font-inter text-sm text-muted-foreground">{featuredNews?.readTime}</span>
                    </div>
                    
                    <Link
                      to="/chronicles"
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 smooth-transition"
                    >
                      <span className="font-inter text-sm font-medium">Read More</span>
                      <Icon name="ArrowRight" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(selectedCategory === 'all' ? regularNews : filteredNews)?.slice(0, 6)?.map((item) => (
            <article key={item?.id} className="realm-card overflow-hidden hover:border-primary/50 smooth-transition group">
              <div className="relative h-48">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item?.category)}`}>
                    {item?.category?.toUpperCase()}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3 text-muted-foreground">
                  <span className="font-inter text-xs">{formatDate(item?.publishedAt)}</span>
                  <span className="text-xs">•</span>
                  <span className="font-inter text-xs">{item?.readTime}</span>
                </div>
                
                <h3 className="font-cinzel text-lg font-bold text-foreground mb-3 group-hover:text-primary smooth-transition line-clamp-2">
                  {item?.title}
                </h3>
                
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {item?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-inter text-xs text-muted-foreground">{item?.author}</span>
                  
                  <Link
                    to="/chronicles"
                    className="flex items-center space-x-1 text-primary hover:text-primary/80 smooth-transition"
                  >
                    <span className="font-inter text-xs font-medium">Read</span>
                    <Icon name="ArrowRight" size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/chronicles"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 smooth-transition"
          >
            <Icon name="BookOpen" size={20} />
            <span className="font-inter font-medium">Read All Chronicles</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;