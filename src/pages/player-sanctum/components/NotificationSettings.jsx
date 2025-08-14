import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const NotificationSettings = ({ notificationData }) => {
  const [settings, setSettings] = useState(notificationData?.settings);

  const updateSetting = (category, type, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev?.[category],
        [type]: value
      }
    }));
  };

  const notificationCategories = [
    {
      id: 'game',
      title: 'Game Notifications',
      icon: 'Gamepad2',
      description: 'In-game events and activities',
      settings: [
        { key: 'levelUp', label: 'Level Up & Achievements', description: 'When you gain levels or unlock achievements' },
        { key: 'guildActivity', label: 'Guild Activity', description: 'Guild events, messages, and member updates' },
        { key: 'friendsOnline', label: 'Friends Online', description: 'When friends come online or send messages' },
        { key: 'pvpChallenges', label: 'PvP Challenges', description: 'Arena invitations and tournament updates' },
        { key: 'raidInvites', label: 'Raid Invitations', description: 'When you receive raid or dungeon invites' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Security',
      icon: 'Shield',
      description: 'Account security and billing updates',
      settings: [
        { key: 'loginAlerts', label: 'Login Alerts', description: 'Suspicious login attempts and new device access' },
        { key: 'passwordChanges', label: 'Password Changes', description: 'When your password is changed' },
        { key: 'billingUpdates', label: 'Billing Updates', description: 'Subscription renewals and payment issues' },
        { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security notifications' }
      ]
    },
    {
      id: 'community',
      title: 'Community & Events',
      icon: 'Users',
      description: 'Community activities and special events',
      settings: [
        { key: 'eventAnnouncements', label: 'Event Announcements', description: 'Special events and seasonal activities' },
        { key: 'forumReplies', label: 'Forum Replies', description: 'Replies to your forum posts and comments' },
        { key: 'communityUpdates', label: 'Community Updates', description: 'Developer updates and community news' },
        { key: 'contestAlerts', label: 'Contest Alerts', description: 'Community contests and competitions' }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Promotions',
      icon: 'Megaphone',
      description: 'Promotional offers and updates',
      settings: [
        { key: 'gameUpdates', label: 'Game Updates', description: 'New features, patches, and content releases' },
        { key: 'specialOffers', label: 'Special Offers', description: 'Discounts and promotional deals' },
        { key: 'newsletter', label: 'Newsletter', description: 'Monthly newsletter with game highlights' },
        { key: 'surveyInvites', label: 'Survey Invitations', description: 'Feedback requests and beta testing opportunities' }
      ]
    }
  ];

  const deliveryMethods = [
    { key: 'web', label: 'Web Notifications', icon: 'Globe', description: 'Browser notifications while on the website' },
    { key: 'email', label: 'Email Notifications', icon: 'Mail', description: 'Email notifications to your registered address' },
    { key: 'mobile', label: 'Mobile Push', icon: 'Smartphone', description: 'Push notifications to your mobile device' },
    { key: 'sms', label: 'SMS Alerts', icon: 'MessageSquare', description: 'Text messages for critical alerts only' }
  ];

  return (
    <div className="space-y-6">
      {/* Notification Overview */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinzel font-semibold text-xl text-foreground">
            Notification Settings
          </h2>
          <Button variant="outline" size="sm">
            <Icon name="TestTube" size={16} className="mr-2" />
            Test Notifications
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {deliveryMethods?.map((method) => (
            <div key={method?.key} className="text-center p-4 bg-muted/30 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={method?.icon} size={24} className="text-primary" />
              </div>
              <div className="font-inter font-semibold text-sm text-foreground mb-1">
                {method?.label}
              </div>
              <div className="font-inter text-xs text-muted-foreground mb-3">
                {method?.description}
              </div>
              <Checkbox
                checked={notificationData?.deliveryMethods?.[method?.key]}
                onChange={(e) => updateSetting('deliveryMethods', method?.key, e?.target?.checked)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Notification Categories */}
      {notificationCategories?.map((category) => (
        <div key={category?.id} className="realm-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name={category?.icon} size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-cinzel font-semibold text-lg text-foreground">
                {category?.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                {category?.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {category?.settings?.map((setting) => (
              <div key={setting?.key} className="flex items-start justify-between p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex-1">
                  <div className="font-inter font-medium text-foreground mb-1">
                    {setting?.label}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {setting?.description}
                  </div>
                </div>

                <div className="flex items-center space-x-4 ml-4">
                  {deliveryMethods?.map((method) => (
                    <div key={method?.key} className="flex flex-col items-center space-y-1">
                      <Icon name={method?.icon} size={16} className="text-muted-foreground" />
                      <Checkbox
                        checked={settings?.[category?.id]?.[setting?.key]?.[method?.key] || false}
                        onChange={(e) => {
                          const newSettings = { ...settings };
                          if (!newSettings?.[category?.id]) newSettings[category.id] = {};
                          if (!newSettings?.[category?.id]?.[setting?.key]) newSettings[category.id][setting.key] = {};
                          newSettings[category.id][setting.key][method.key] = e?.target?.checked;
                          setSettings(newSettings);
                        }}
                        disabled={!notificationData?.deliveryMethods?.[method?.key]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Quiet Hours */}
      <div className="realm-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="Moon" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-cinzel font-semibold text-lg text-foreground">
              Quiet Hours
            </h3>
            <p className="font-inter text-sm text-muted-foreground">
              Reduce notifications during specific hours
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-inter font-medium text-foreground">Enable Quiet Hours</span>
              <Checkbox
                checked={notificationData?.quietHours?.enabled}
                onChange={(e) => updateSetting('quietHours', 'enabled', e?.target?.checked)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="font-inter text-sm text-muted-foreground mb-1 block">
                  Start Time
                </label>
                <input
                  type="time"
                  value={notificationData?.quietHours?.startTime}
                  onChange={(e) => updateSetting('quietHours', 'startTime', e?.target?.value)}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground"
                  disabled={!notificationData?.quietHours?.enabled}
                />
              </div>
              <div className="flex-1">
                <label className="font-inter text-sm text-muted-foreground mb-1 block">
                  End Time
                </label>
                <input
                  type="time"
                  value={notificationData?.quietHours?.endTime}
                  onChange={(e) => updateSetting('quietHours', 'endTime', e?.target?.value)}
                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground"
                  disabled={!notificationData?.quietHours?.enabled}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-inter font-medium text-foreground mb-2">
              Days of Week
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']?.map((day) => (
                <div key={day} className="flex items-center space-x-2">
                  <Checkbox
                    checked={notificationData?.quietHours?.days?.includes(day)}
                    onChange={(e) => {
                      const newDays = e?.target?.checked
                        ? [...notificationData?.quietHours?.days, day]
                        : notificationData?.quietHours?.days?.filter(d => d !== day);
                      updateSetting('quietHours', 'days', newDays);
                    }}
                    disabled={!notificationData?.quietHours?.enabled}
                  />
                  <span className="font-inter text-sm text-foreground">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Save Settings */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">
          Reset to Defaults
        </Button>
        <Button variant="default" className="legendary-button">
          <Icon name="Save" size={16} className="mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;