import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SearchAndFilter = ({ onSearch, onFilter, totalResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'all',
    sortBy: 'newest',
    author: 'all',
    readTime: 'all'
  });

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      dateRange: 'all',
      sortBy: 'newest',
      author: 'all',
      readTime: 'all'
    };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  const activeFiltersCount = Object.values(filters)?.filter(value => value !== 'all' && value !== 'newest')?.length;

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Search */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="search"
            placeholder="Search chronicles, authors, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="pl-10 pr-12"
          />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </form>
      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="relative"
          >
            <Icon name="Filter" size={16} className="mr-2" />
            Advanced Filters
            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </Button>
          
          {totalResults && (
            <span className="text-muted-foreground font-inter text-sm">
              {totalResults} chronicles found
            </span>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={14} className="mr-1" />
            Clear Filters
          </Button>
        )}
      </div>
      {/* Advanced Filters */}
      {isFilterOpen && (
        <div className="border-t border-border pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Date Range */}
            <div>
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Date Range
              </label>
              <select
                value={filters?.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e?.target?.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Sort By
              </label>
              <select
                value={filters?.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e?.target?.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Author
              </label>
              <select
                value={filters?.author}
                onChange={(e) => handleFilterChange('author', e?.target?.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Authors</option>
                <option value="dev-team">Development Team</option>
                <option value="community-manager">Community Managers</option>
                <option value="guest-writers">Guest Writers</option>
                <option value="players">Player Contributors</option>
              </select>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Read Time
              </label>
              <select
                value={filters?.readTime}
                onChange={(e) => handleFilterChange('readTime', e?.target?.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Any Length</option>
                <option value="quick">Quick Read (1-3 min)</option>
                <option value="medium">Medium Read (4-7 min)</option>
                <option value="long">Long Read (8+ min)</option>
              </select>
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <label className="block text-sm font-inter font-medium text-foreground mb-2">
              Popular Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'gameplay', 'lore', 'updates', 'community', 'strategy', 
                'pvp', 'pve', 'guilds', 'events', 'beta'
              ]?.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs font-inter hover:bg-primary/10 hover:text-primary smooth-transition"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          { label: 'Latest Updates', icon: 'Clock' },
          { label: 'Most Popular', icon: 'TrendingUp' },
          { label: 'Developer Posts', icon: 'Code' },
          { label: 'Community Stories', icon: 'Users' }
        ]?.map((quickFilter) => (
          <Button
            key={quickFilter?.label}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            <Icon name={quickFilter?.icon} size={14} className="mr-1" />
            {quickFilter?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;