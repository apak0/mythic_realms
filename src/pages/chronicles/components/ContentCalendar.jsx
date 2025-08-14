import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContentCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const upcomingContent = [
  {
    id: 1,
    title: "The Shadowlands Expansion: Developer Deep Dive",
    type: "Developer Update",
    date: "2025-01-15",
    time: "14:00 UTC",
    description: "Join our lead developers as they reveal the mysteries of the upcoming Shadowlands expansion.",
    status: "scheduled",
    attendees: 1247
  },
  {
    id: 2,
    title: "Community Art Showcase: January Edition",
    type: "Community Spotlight",
    date: "2025-01-18",
    time: "16:00 UTC",
    description: "Celebrating the incredible artistic talents of our community members.",
    status: "confirmed",
    attendees: 892
  },
  {
    id: 3,
    title: "Patch 3.2.1: Balance Updates & Bug Fixes",
    type: "Patch Notes",
    date: "2025-01-22",
    time: "12:00 UTC",
    description: "Comprehensive overview of gameplay balance changes and technical improvements.",
    status: "draft",
    attendees: 0
  },
  {
    id: 4,
    title: "Legendary Weapons Guide: Forging Your Destiny",
    type: "Strategy Guide",
    date: "2025-01-25",
    time: "15:00 UTC",
    description: "Master the art of legendary weapon crafting with tips from top players.",
    status: "scheduled",
    attendees: 634
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-success bg-success/20 border-success/30';
      case 'scheduled':
        return 'text-primary bg-primary/20 border-primary/30';
      case 'draft':
        return 'text-warning bg-warning/20 border-warning/30';
      default:
        return 'text-muted-foreground bg-muted/20 border-border';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Developer Update':
        return 'Code';
      case 'Community Spotlight':
        return 'Users';
      case 'Patch Notes':
        return 'Settings';
      case 'Strategy Guide':
        return 'BookOpen';
      default:
        return 'Calendar';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-cinzel font-semibold text-lg text-foreground mb-1">
            Chronicle Calendar
          </h3>
          <p className="text-muted-foreground font-inter text-sm">
            Upcoming releases, events, and community activities
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Icon name="Calendar" size={16} className="mr-2" />
            View Full Calendar
          </Button>
        </div>
      </div>
      {/* Upcoming Content */}
      <div className="space-y-4">
        {upcomingContent?.map((content) =>
        <div
          key={content?.id}
          className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg border border-border hover:border-primary/30 smooth-transition">

            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name={getTypeIcon(content?.type)} size={20} className="text-primary" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-inter font-medium text-sm text-foreground line-clamp-1">
                    {content?.title}
                  </h4>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-muted-foreground font-inter text-xs">
                      {content?.type}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-inter font-medium border ${getStatusColor(content?.status)}`}>
                      {content?.status?.charAt(0)?.toUpperCase() + content?.status?.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="text-right flex-shrink-0">
                  <div className="font-inter font-medium text-sm text-foreground flex opacity-0">
                    {formatDate(content?.date)}
                  </div>
                  <div className="text-muted-foreground font-inter text-xs opacity-0">
                    {content?.time}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground font-inter text-xs leading-relaxed mb-3 line-clamp-2">
                {content?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {content?.attendees > 0 &&
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Users" size={12} />
                      <span className="font-inter">{content?.attendees} interested</span>
                    </div>
                }
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    <span className="font-inter">
                      {Math.ceil((new Date(content.date) - new Date()) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Bell" size={14} className="mr-1" />
                    Notify Me
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share2" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Calendar Actions */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span className="font-inter">{upcomingContent?.length} upcoming</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Bell" size={14} />
              <span className="font-inter">3 notifications set</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Download" size={14} className="mr-2" />
              Export Calendar
            </Button>
            <Button variant="default" size="sm">
              <Icon name="Plus" size={14} className="mr-2" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </div>);

};

export default ContentCalendar;