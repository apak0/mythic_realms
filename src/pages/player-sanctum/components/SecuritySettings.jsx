import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import { Checkbox } from '../../../components/ui/Checkbox';

const SecuritySettings = ({ securityData }) => {
  const [showLoginHistory, setShowLoginHistory] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(securityData?.twoFactorEnabled);

  const getDeviceIcon = (deviceType) => {
    switch (deviceType) {
      case 'desktop': return 'Monitor';
      case 'mobile': return 'Smartphone';
      case 'tablet': return 'Tablet';
      default: return 'Globe';
    }
  };

  const getLocationRisk = (location) => {
    if (location?.isKnown) return { color: 'text-success', label: 'Known Location' };
    if (location?.isVPN) return { color: 'text-warning', label: 'VPN Detected' };
    return { color: 'text-destructive', label: 'Unknown Location' };
  };

  return (
    <div className="space-y-6">
      {/* Security Score */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinzel font-semibold text-xl text-foreground">
            Account Security
          </h2>
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={20} className="text-primary" />
            <span className="font-inter font-bold text-lg text-primary">
              {securityData?.securityScore}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
            <Icon name="CheckCircle" size={24} className="text-success mx-auto mb-2" />
            <div className="font-inter font-semibold text-success">Strong Password</div>
            <div className="font-inter text-xs text-muted-foreground">Last changed 2 months ago</div>
          </div>

          <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
            <Icon name="Smartphone" size={24} className="text-primary mx-auto mb-2" />
            <div className="font-inter font-semibold text-primary">2FA Enabled</div>
            <div className="font-inter text-xs text-muted-foreground">Authenticator app</div>
          </div>

          <div className="text-center p-4 bg-warning/10 rounded-lg border border-warning/20">
            <Icon name="Mail" size={24} className="text-warning mx-auto mb-2" />
            <div className="font-inter font-semibold text-warning">Email Unverified</div>
            <div className="font-inter text-xs text-muted-foreground">Verification pending</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Key" size={20} className="text-primary" />
              <div>
                <div className="font-inter font-medium text-foreground">Change Password</div>
                <div className="font-inter text-sm text-muted-foreground">
                  Update your account password
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Smartphone" size={20} className="text-primary" />
              <div>
                <div className="font-inter font-medium text-foreground">Two-Factor Authentication</div>
                <div className="font-inter text-sm text-muted-foreground">
                  Add an extra layer of security
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={twoFactorEnabled}
                onChange={(e) => setTwoFactorEnabled(e?.target?.checked)}
              />
              <span className="font-inter text-sm text-foreground">
                {twoFactorEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} className="text-primary" />
              <div>
                <div className="font-inter font-medium text-foreground">Email Verification</div>
                <div className="font-inter text-sm text-muted-foreground">
                  Verify your email address
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Verify
            </Button>
          </div>
        </div>
      </div>
      {/* Active Sessions */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-cinzel font-semibold text-lg text-foreground">
            Active Sessions
          </h3>
          <Button variant="outline" size="sm">
            <Icon name="LogOut" size={16} className="mr-2" />
            End All Sessions
          </Button>
        </div>

        <div className="space-y-3">
          {securityData?.activeSessions?.map((session) => (
            <div key={session?.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={getDeviceIcon(session?.deviceType)} size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-inter font-medium text-foreground">
                    {session?.deviceName}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {session?.location} • {session?.lastActive}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {session?.isCurrent && (
                  <div className="px-2 py-1 bg-success/10 text-success border border-success/20 rounded-full text-xs font-medium">
                    Current
                  </div>
                )}
                <Button variant="outline" size="sm">
                  End Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Login History */}
      <div className="realm-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-cinzel font-semibold text-lg text-foreground">
            Login History
          </h3>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowLoginHistory(!showLoginHistory)}
          >
            <Icon name={showLoginHistory ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
            {showLoginHistory ? 'Hide' : 'Show'} History
          </Button>
        </div>

        {showLoginHistory && (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {securityData?.loginHistory?.map((login) => {
              const risk = getLocationRisk(login);
              return (
                <div key={login?.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name={getDeviceIcon(login?.deviceType)} size={16} className="text-muted-foreground" />
                    <div>
                      <div className="font-inter text-sm text-foreground">
                        {login?.location}
                      </div>
                      <div className="font-inter text-xs text-muted-foreground">
                        {login?.timestamp} • {login?.ipAddress}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      login?.success 
                        ? 'bg-success/10 text-success border border-success/20' :'bg-destructive/10 text-destructive border border-destructive/20'
                    }`}>
                      {login?.success ? 'Success' : 'Failed'}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${risk?.color?.replace('text-', 'bg-')?.replace('text-', 'border-')}/20 ${risk?.color}`}>
                      {risk?.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Privacy Settings */}
      <div className="realm-card p-6">
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-4">
          Privacy Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-inter font-medium text-foreground">Profile Visibility</div>
              <div className="font-inter text-sm text-muted-foreground">
                Control who can see your profile
              </div>
            </div>
            <select className="bg-input border border-border rounded-lg px-3 py-2 text-foreground">
              <option>Public</option>
              <option>Friends Only</option>
              <option>Guild Members</option>
              <option>Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-inter font-medium text-foreground">Online Status</div>
              <div className="font-inter text-sm text-muted-foreground">
                Show when you're online
              </div>
            </div>
            <Checkbox checked={securityData?.showOnlineStatus} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-inter font-medium text-foreground">Activity Tracking</div>
              <div className="font-inter text-sm text-muted-foreground">
                Allow activity data collection
              </div>
            </div>
            <Checkbox checked={securityData?.allowActivityTracking} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;