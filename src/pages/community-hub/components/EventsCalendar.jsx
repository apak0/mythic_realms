import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 12)); // August 12, 2025
  const [viewMode, setViewMode] = useState('month'); // month, week, list
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Weekly PvP Championship',
      description: 'Compete in intense arena battles for glory and legendary rewards. All skill levels welcome!',
      date: new Date(2025, 7, 12, 19, 0), // Aug 12, 7:00 PM
      endDate: new Date(2025, 7, 12, 22, 0), // Aug 12, 10:00 PM
      category: 'pvp',
      type: 'tournament',
      organizer: 'Arena Masters',
      participants: 127,
      maxParticipants: 200,
      rewards: ['10,000 Gold', 'Legendary Mount', 'Champion Title'],
      requirements: 'Level 30+',
      status: 'open',
      location: 'Colosseum Arena'
    },
    {
      id: 2,
      title: 'Guild Recruitment Fair',
      description: 'Meet representatives from top guilds and find your perfect gaming community. Speed networking sessions included.',
      date: new Date(2025, 7, 13, 18, 0), // Aug 13, 6:00 PM
      endDate: new Date(2025, 7, 13, 21, 0), // Aug 13, 9:00 PM
      category: 'social',
      type: 'community',
      organizer: 'Community Team',
      participants: 89,
      maxParticipants: 150,
      rewards: ['Guild Starter Pack', 'Networking Badge'],
      requirements: 'All levels welcome',
      status: 'open',
      location: 'Central Plaza'
    },
    {
      id: 3,
      title: 'Developer Q&A Session',
      description: 'Join the development team for an exclusive Q&A about upcoming features, balance changes, and the future of Mythic Realms.',
      date: new Date(2025, 7, 14, 20, 0), // Aug 14, 8:00 PM
      endDate: new Date(2025, 7, 14, 21, 30), // Aug 14, 9:30 PM
      category: 'developer',
      type: 'qa',
      organizer: 'Mythic Realms Team',
      participants: 234,
      maxParticipants: 500,
      rewards: ['Exclusive Beta Access', 'Developer Badge'],
      requirements: 'None',
      status: 'open',
      location: 'Virtual Auditorium'
    },
    {
      id: 4,
      title: 'Legendary Raid: Ethereal Sanctum',
      description: 'Attempt the most challenging raid in Mythic Realms. Coordination and teamwork are essential for victory.',
      date: new Date(2025, 7, 15, 19, 30), // Aug 15, 7:30 PM
      endDate: new Date(2025, 7, 15, 23, 0), // Aug 15, 11:00 PM
      category: 'pve',
      type: 'raid',
      organizer: 'Mystic Scholars',
      participants: 24,
      maxParticipants: 25,
      rewards: ['Ethereal Weapons', 'Sanctum Mount', 'Raid Master Title'],
      requirements: 'Level 55+, Discord required',
      status: 'almost_full',
      location: 'Ethereal Sanctum'
    },
    {
      id: 5,
      title: 'Fan Art Contest Submission Deadline',
      description: 'Last day to submit your creative artwork for our monthly fan art contest. Amazing prizes await the winners!',
      date: new Date(2025, 7, 16, 23, 59), // Aug 16, 11:59 PM
      endDate: new Date(2025, 7, 16, 23, 59),
      category: 'creative',
      type: 'contest',
      organizer: 'Creative Community',
      participants: 156,
      maxParticipants: null,
      rewards: ['5,000 Gold', 'Artist Badge', 'Featured Gallery Spot'],
      requirements: 'Original artwork only',
      status: 'open',
      location: 'Community Gallery'
    },
    {
      id: 6,
      title: 'Crafting Workshop: Legendary Items',
      description: 'Learn advanced crafting techniques from master craftsmen. Hands-on workshop with rare materials provided.',
      date: new Date(2025, 7, 17, 16, 0), // Aug 17, 4:00 PM
      endDate: new Date(2025, 7, 17, 18, 0), // Aug 17, 6:00 PM
      category: 'educational',
      type: 'workshop',
      organizer: 'Forge Masters Guild',
      participants: 18,
      maxParticipants: 20,
      rewards: ['Crafting Materials', 'Workshop Certificate'],
      requirements: 'Crafting Level 25+',
      status: 'almost_full',
      location: 'Grand Forge'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Events', icon: 'Calendar', color: 'text-foreground' },
    { key: 'pvp', label: 'PvP', icon: 'Sword', color: 'text-red-400' },
    { key: 'pve', label: 'PvE', icon: 'Shield', color: 'text-blue-400' },
    { key: 'social', label: 'Social', icon: 'Users', color: 'text-green-400' },
    { key: 'developer', label: 'Developer', icon: 'Code', color: 'text-purple-400' },
    { key: 'creative', label: 'Creative', icon: 'Palette', color: 'text-orange-400' },
    { key: 'educational', label: 'Educational', icon: 'GraduationCap', color: 'text-cyan-400' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events?.filter(event => event?.category === selectedCategory);

  const formatEventTime = (date, endDate) => {
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const startTime = date?.toLocaleTimeString('en-US', timeOptions);
    const endTime = endDate?.toLocaleTimeString('en-US', timeOptions);
    return `${startTime} - ${endTime}`;
  };

  const formatEventDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-success/10 text-success border-success/20';
      case 'almost_full': return 'bg-warning/10 text-warning border-warning/20';
      case 'full': return 'bg-error/10 text-error border-error/20';
      case 'closed': return 'bg-muted/30 text-muted-foreground border-border';
      default: return 'bg-muted/30 text-muted-foreground border-border';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'almost_full': return 'Almost Full';
      case 'full': return 'Full';
      case 'closed': return 'Closed';
      default: return 'Unknown';
    }
  };

  const getCategoryColor = (category) => {
    const cat = categories?.find(c => c?.key === category);
    return cat ? cat?.color : 'text-foreground';
  };

  const isEventToday = (eventDate) => {
    const today = new Date();
    return eventDate?.toDateString() === today?.toDateString();
  };

  const isEventSoon = (eventDate) => {
    const now = new Date();
    const timeDiff = eventDate?.getTime() - now?.getTime();
    return timeDiff > 0 && timeDiff <= 2 * 60 * 60 * 1000; // Within 2 hours
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-cinzel font-bold text-2xl text-foreground">Community Events</h2>
          <p className="text-muted-foreground">Join epic adventures and connect with fellow heroes</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Create Event
          </Button>
          <Button variant="default" size="sm" className="legendary-button">
            <Icon name="Calendar" size={16} className="mr-2" />
            My Events
          </Button>
        </div>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <button
            key={category?.key}
            onClick={() => setSelectedCategory(category?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
              selectedCategory === category?.key
                ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="font-inter text-sm">{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents?.map((event) => (
          <div key={event?.id} className="realm-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-inter font-bold text-lg text-foreground">{event?.title}</h3>
                  {isEventToday(event?.date) && (
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                      Today
                    </span>
                  )}
                  {isEventSoon(event?.date) && (
                    <span className="px-2 py-1 bg-warning/20 text-warning text-xs rounded-full border border-warning/30 animate-pulse">
                      Starting Soon
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatEventDate(event?.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{formatEventTime(event?.date, event?.endDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{event?.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{event?.description}</p>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(event?.status)}`}>
                  {getStatusText(event?.status)}
                </span>
                <div className={`flex items-center space-x-1 ${getCategoryColor(event?.category)}`}>
                  <Icon name={categories?.find(c => c?.key === event?.category)?.icon || 'Calendar'} size={14} />
                  <span className="text-xs font-medium capitalize">{event?.category}</span>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Organizer</div>
                <div className="text-sm text-muted-foreground">{event?.organizer}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Participants</div>
                <div className="text-sm text-muted-foreground">
                  {event?.participants}{event?.maxParticipants ? `/${event?.maxParticipants}` : ''} registered
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Requirements</div>
                <div className="text-sm text-muted-foreground">{event?.requirements}</div>
              </div>
            </div>

            {/* Rewards */}
            <div className="mb-4">
              <div className="text-sm font-medium text-foreground mb-2">Rewards</div>
              <div className="flex flex-wrap gap-2">
                {event?.rewards?.map((reward, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                    {reward}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-3">
                {event?.status === 'open' && (
                  <Button variant="default" size="sm" className="legendary-button">
                    <Icon name="UserPlus" size={14} className="mr-2" />
                    Join Event
                  </Button>
                )}
                {event?.status === 'almost_full' && (
                  <Button variant="warning" size="sm">
                    <Icon name="Clock" size={14} className="mr-2" />
                    Join Waitlist
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Icon name="Eye" size={14} className="mr-2" />
                  View Details
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Heart" size={16} />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Share2" size={16} />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Bell" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredEvents?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-inter font-semibold text-lg text-foreground mb-2">No events found</h3>
          <p className="text-muted-foreground mb-4">No events match your current filter selection</p>
          <Button variant="outline" onClick={() => setSelectedCategory('all')}>
            Show All Events
          </Button>
        </div>
      )}
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-primary">{events?.length}</div>
          <div className="text-sm text-muted-foreground">Total Events</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-success">{events?.filter(e => e?.status === 'open')?.length}</div>
          <div className="text-sm text-muted-foreground">Open for Registration</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-warning">{events?.filter(e => isEventToday(e?.date))?.length}</div>
          <div className="text-sm text-muted-foreground">Events Today</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-foreground">{events?.reduce((sum, e) => sum + e?.participants, 0)}</div>
          <div className="text-sm text-muted-foreground">Total Participants</div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;