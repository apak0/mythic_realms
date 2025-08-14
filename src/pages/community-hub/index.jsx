import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import ActivityFeed from './components/ActivityFeed';
import GuildDirectory from './components/GuildDirectory';
import PlayerSpotlight from './components/PlayerSpotlight';
import EventsCalendar from './components/EventsCalendar';
import UserContentGallery from './components/UserContentGallery';
import CommunityForums from './components/CommunityForums';

const CommunityHub = () => {
  const [activeSection, setActiveSection] = useState('activity');

  const sections = [
    { key: 'activity', label: 'Activity Feed', icon: 'Activity', component: ActivityFeed },
    { key: 'guilds', label: 'Guild Directory', icon: 'Users', component: GuildDirectory },
    { key: 'spotlight', label: 'Player Spotlight', icon: 'Star', component: PlayerSpotlight },
    { key: 'events', label: 'Events Calendar', icon: 'Calendar', component: EventsCalendar },
    { key: 'gallery', label: 'Content Gallery', icon: 'Image', component: UserContentGallery },
    { key: 'forums', label: 'Community Forums', icon: 'MessageSquare', component: CommunityForums }
  ];

  const ActiveComponent = sections.find(section => section.key === activeSection)?.component || ActivityFeed;

  const communityStats = [
    { label: 'Active Players', value: '47,892', icon: 'Users', color: 'text-primary' },
    { label: 'Active Guilds', value: '1,247', icon: 'Shield', color: 'text-success' },
    { label: 'Events This Week', value: '23', icon: 'Calendar', color: 'text-warning' },
    { label: 'Forum Posts Today', value: '156', icon: 'MessageCircle', color: 'text-cyan-400' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Community Hub - Mythic Realms</title>
        <meta name="description" content="Connect with fellow adventurers, join guilds, participate in events, and share your legendary journey in the Mythic Realms community hub." />
        <meta name="keywords" content="mythic realms, community, guilds, events, forums, players, social, gaming community" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6">
              <Icon name="Users" size={16} />
              <span className="font-inter text-sm font-medium">Community Hub</span>
            </div>
            
            <h1 className="font-cinzel font-bold text-4xl md:text-6xl text-foreground mb-6">
              <span className="gold-gradient-text">Unite</span> with Fellow Heroes
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Join a thriving community of legendary adventurers. Connect with guilds, participate in epic events, 
              share your achievements, and forge lasting friendships in the realm.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/30 border border-border mb-3 ${stat.color}`}>
                    <Icon name={stat.icon} size={24} />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="default" size="lg" className="legendary-button">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Join Community
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Watch Community Tour
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-mystical border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center space-x-1 py-4 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition whitespace-nowrap ${
                    activeSection === section.key
                      ? 'bg-primary/10 text-primary border border-primary/20 mystical-glow' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={section.icon} size={18} />
                  <span className="font-inter font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <ActiveComponent />
          </div>
        </section>

        {/* Community Guidelines CTA */}
        <section className="py-16 px-6 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 mystical-glow">
              <Icon name="Shield" size={32} className="text-primary-foreground" />
            </div>
            
            <h2 className="font-cinzel font-bold text-3xl text-foreground mb-4">
              Community Guidelines
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our community thrives on respect, collaboration, and shared passion for adventure. 
              Review our guidelines to ensure everyone has an epic experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" size="lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Read Guidelines
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Flag" size={20} className="mr-2" />
                Report Issue
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="HelpCircle" size={20} className="mr-2" />
                Get Help
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-midnight border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow">
                  <Icon name="Crown" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="font-cinzel font-semibold text-xl text-foreground">Mythic Realms</div>
                  <div className="font-mono text-xs text-muted-foreground">Community Hub</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Connect with fellow adventurers and forge legendary friendships in the ultimate gaming community.
              </p>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="MessageCircle" size={20} />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Users" size={20} />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary smooth-transition">
                  <Icon name="Calendar" size={20} />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Discord Server</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Reddit Community</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Official Forums</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Community Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Report Player</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Bug Reports</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Mythic Realms. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm smooth-transition">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm smooth-transition">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm smooth-transition">Community Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityHub;