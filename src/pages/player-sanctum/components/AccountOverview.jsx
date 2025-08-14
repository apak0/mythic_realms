import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AccountOverview = ({ accountData }) => {
  const getSubscriptionStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success';
      case 'expired': return 'text-destructive';
      case 'trial': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getSecurityScoreColor = (score) => {
    if (score >= 90) return 'text-success';
    if (score >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Account Status */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinzel font-semibold text-xl text-foreground">
            Account Overview
          </h2>
          <Button variant="outline" size="sm">
            <Icon name="Settings" size={16} className="mr-2" />
            Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="User" size={24} className="text-primary" />
            </div>
            <div className="font-inter font-semibold text-lg text-foreground">
              {accountData?.username}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Member since {accountData?.memberSince}
            </div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Crown" size={24} className="text-primary" />
            </div>
            <div className={`font-inter font-semibold text-lg ${getSubscriptionStatusColor(accountData?.subscription?.status)}`}>
              {accountData?.subscription?.tier}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              {accountData?.subscription?.status === 'active' 
                ? `Renews ${accountData?.subscription?.renewDate}`
                : 'Subscription expired'
              }
            </div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} className="text-primary" />
            </div>
            <div className={`font-inter font-semibold text-lg ${getSecurityScoreColor(accountData?.securityScore)}`}>
              {accountData?.securityScore}%
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Security Score
            </div>
          </div>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="realm-card p-6">
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-4">
          Account Statistics
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="font-inter font-bold text-2xl text-primary mb-1">
              {accountData?.stats?.totalCharacters}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Characters
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-inter font-bold text-2xl text-primary mb-1">
              {accountData?.stats?.totalPlaytime}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Hours Played
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-inter font-bold text-2xl text-primary mb-1">
              {accountData?.stats?.achievementsUnlocked}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Achievements
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-inter font-bold text-2xl text-primary mb-1">
              {accountData?.stats?.guildsJoined}
            </div>
            <div className="font-inter text-sm text-muted-foreground">
              Guilds Joined
            </div>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="realm-card p-6">
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-4">
          Recent Activity
        </h3>
        
        <div className="space-y-3">
          {accountData?.recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name={activity?.icon} size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-inter text-sm text-foreground">
                  {activity?.description}
                </div>
                <div className="font-inter text-xs text-muted-foreground">
                  {activity?.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;