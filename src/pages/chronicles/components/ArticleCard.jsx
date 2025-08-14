import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article, variant = 'default' }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <article className="flex space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 smooth-transition">
        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded text-xs font-inter font-medium ${
              article?.category === 'Developer Update' ?'bg-primary/20 text-primary'
                : article?.category === 'Community Spotlight' ?'bg-success/20 text-success' :'bg-muted/20 text-muted-foreground'
            }`}>
              {article?.category}
            </span>
            {article?.isNew && (
              <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-inter font-medium">
                New
              </span>
            )}
          </div>
          
          <h3 className="font-inter font-medium text-sm text-foreground line-clamp-2 mb-2 hover:text-primary smooth-transition">
            <Link to={`/chronicles/${article?.slug}`}>
              {article?.title}
            </Link>
          </h3>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-inter">{formatDate(article?.publishedAt)}</span>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={12} />
                <span>{article?.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={12} />
                <span>{article?.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 smooth-transition mystical-glow">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover smooth-transition hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
            article?.category === 'Developer Update' ?'bg-primary/20 text-primary border border-primary/30'
              : article?.category === 'Community Spotlight' ?'bg-success/20 text-success border border-success/30'
              : article?.category === 'Patch Notes' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-border'
          }`}>
            {article?.category}
          </span>
        </div>

        {article?.isNew && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-inter font-medium border border-accent/30">
              New
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span className="font-inter">{formatDate(article?.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span className="font-inter">{article?.readTime} min</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="User" size={12} />
            <span className="font-inter">{article?.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition">
          <Link to={`/chronicles/${article?.slug}`}>
            {article?.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4 line-clamp-2">
          {article?.excerpt}
        </p>

        {/* Tags */}
        {article?.tags && article?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article?.tags?.slice(0, 2)?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs font-inter hover:bg-primary/10 hover:text-primary smooth-transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/chronicles/${article?.slug}`}>
              Read More
            </Link>
          </Button>

          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Heart" size={14} />
              <span className="font-inter">{article?.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MessageCircle" size={14} />
              <span className="font-inter">{article?.comments}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Icon name="Share2" size={14} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;