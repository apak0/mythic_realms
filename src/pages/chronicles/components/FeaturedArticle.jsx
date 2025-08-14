import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  };

  return (
    <article className="relative bg-card border border-border rounded-lg overflow-hidden mystical-glow smooth-transition hover:border-primary/30">
      {/* Featured Badge */}
      {article?.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-inter font-medium flex items-center space-x-1">
            <Icon name="Star" size={12} />
            <span>Featured Chronicle</span>
          </div>
        </div>
      )}
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover smooth-transition hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
            article?.category === 'Developer Update' ?'bg-primary/20 text-primary border border-primary/30'
              : article?.category === 'Community Spotlight' ?'bg-success/20 text-success border border-success/30'
              : article?.category === 'Patch Notes' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-border'
          }`}>
            {article?.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span className="font-inter">{formatDate(article?.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span className="font-inter">{formatReadTime(article?.readTime)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="User" size={14} />
              <span className="font-inter">{article?.author}</span>
            </div>
          </div>
          
          {article?.isNew && (
            <div className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-inter font-medium">
              New
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="font-cinzel font-semibold text-xl text-foreground mb-3 line-clamp-2 hover:text-primary smooth-transition">
          {article?.title}
        </h2>

        {/* Excerpt */}
        <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4 line-clamp-3">
          {article?.excerpt}
        </p>

        {/* Tags */}
        {article?.tags && article?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article?.tags?.slice(0, 3)?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs font-inter hover:bg-primary/10 hover:text-primary smooth-transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
            {article?.tags?.length > 3 && (
              <span className="px-2 py-1 text-muted-foreground text-xs font-inter">
                +{article?.tags?.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/chronicles/${article?.slug}`}>
              <Icon name="BookOpen" size={16} className="mr-2" />
              Read Chronicle
            </Link>
          </Button>

          <div className="flex items-center space-x-2">
            {/* Engagement Stats */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={14} />
                <span className="font-inter">{article?.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={14} />
                <span className="font-inter">{article?.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Share2" size={14} />
                <span className="font-inter">{article?.shares}</span>
              </div>
            </div>

            {/* Share Button */}
            <Button variant="ghost" size="sm">
              <Icon name="Share2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;