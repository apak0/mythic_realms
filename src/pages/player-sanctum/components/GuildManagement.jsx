import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const GuildManagement = ({ guildData, userRole }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newMessage, setNewMessage] = useState('');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'members', label: 'Members', icon: 'Users' },
    { id: 'events', label: 'Events', icon: 'Calendar' },
    { id: 'messages', label: 'Messages', icon: 'MessageSquare' }
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Guild Master': return 'text-primary';
      case 'Officer': return 'text-warning';
      case 'Veteran': return 'text-success';
      default: return 'text-foreground';
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Guild Master': return 'bg-primary/10 text-primary border-primary/20';
      case 'Officer': return 'bg-warning/10 text-warning border-warning/20';
      case 'Veteran': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/30 text-foreground border-border';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex items-start space-x-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-primary mystical-glow">
          <Image
            src={guildData?.emblem}
            alt={guildData?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-cinzel font-bold text-2xl text-foreground mb-2">
            {guildData?.name}
          </h2>
          <p className="font-inter text-muted-foreground mb-4">
            {guildData?.description}
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="font-inter text-sm text-foreground">
                {guildData?.memberCount} / {guildData?.maxMembers} Members
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" size={16} className="text-primary" />
              <span className="font-inter text-sm text-foreground">
                Level {guildData?.level}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Sword" size={16} className="text-primary" />
            <span className="font-inter font-medium text-sm text-foreground">
              Guild Power
            </span>
          </div>
          <div className="font-inter font-bold text-xl text-primary">
            {guildData?.guildPower?.toLocaleString()}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="font-inter font-medium text-sm text-foreground">
              Weekly Contribution
            </span>
          </div>
          <div className="font-inter font-bold text-xl text-primary">
            {guildData?.weeklyContribution?.toLocaleString()}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={16} className="text-primary" />
            <span className="font-inter font-medium text-sm text-foreground">
              Guild Rank
            </span>
          </div>
          <div className="font-inter font-bold text-xl text-primary">
            #{guildData?.serverRank}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMembers = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-cinzel font-semibold text-lg text-foreground">
          Guild Members ({guildData?.members?.length})
        </h3>
        {(userRole === 'Guild Master' || userRole === 'Officer') && (
          <Button variant="outline" size="sm">
            <Icon name="UserPlus" size={16} className="mr-2" />
            Invite Member
          </Button>
        )}
      </div>

      <div className="space-y-2">
        {guildData?.members?.map((member) => (
          <div key={member?.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                <Image
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-inter font-medium text-foreground">
                  {member?.name}
                </div>
                <div className="font-inter text-sm text-muted-foreground">
                  Level {member?.level} {member?.class}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getRoleBadgeColor(member?.role)}`}>
                {member?.role}
              </div>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${member?.isOnline ? 'bg-success' : 'bg-muted-foreground'}`} />
                <span className="font-inter text-xs text-muted-foreground">
                  {member?.isOnline ? 'Online' : member?.lastSeen}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-cinzel font-semibold text-lg text-foreground">
          Upcoming Events
        </h3>
        {(userRole === 'Guild Master' || userRole === 'Officer') && (
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Create Event
          </Button>
        )}
      </div>

      <div className="space-y-3">
        {guildData?.upcomingEvents?.map((event) => (
          <div key={event?.id} className="p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-1">
                  {event?.title}
                </h4>
                <p className="font-inter text-sm text-muted-foreground">
                  {event?.description}
                </p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                event?.type === 'raid' ? 'bg-destructive/10 text-destructive' :
                event?.type === 'pvp'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
              }`}>
                {event?.type?.toUpperCase()}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} className="text-muted-foreground" />
                  <span className="font-inter text-sm text-muted-foreground">
                    {event?.date}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} className="text-muted-foreground" />
                  <span className="font-inter text-sm text-muted-foreground">
                    {event?.participants} / {event?.maxParticipants}
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {event?.isParticipating ? 'Leave' : 'Join'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-cinzel font-semibold text-lg text-foreground">
          Guild Messages
        </h3>
        <Button variant="outline" size="sm">
          <Icon name="Settings" size={16} className="mr-2" />
          Settings
        </Button>
      </div>

      <div className="bg-muted/30 rounded-lg border border-border max-h-96 overflow-y-auto">
        <div className="p-4 space-y-3">
          {guildData?.recentMessages?.map((message) => (
            <div key={message?.id} className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border flex-shrink-0">
                <Image
                  src={message?.avatar}
                  alt={message?.sender}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`font-inter font-medium text-sm ${getRoleColor(message?.role)}`}>
                    {message?.sender}
                  </span>
                  <span className="font-inter text-xs text-muted-foreground">
                    {message?.timestamp}
                  </span>
                </div>
                <p className="font-inter text-sm text-foreground">
                  {message?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e?.target?.value)}
          className="flex-1"
        />
        <Button variant="default">
          <Icon name="Send" size={16} />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="realm-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-cinzel font-semibold text-xl text-foreground">
          Guild Management
        </h2>
        <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getRoleBadgeColor(userRole)}`}>
          {userRole}
        </div>
      </div>
      <div className="flex space-x-1 mb-6 bg-muted/30 rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span className="font-inter text-sm">{tab?.label}</span>
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'members' && renderMembers()}
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'messages' && renderMessages()}
      </div>
    </div>
  );
};

export default GuildManagement;