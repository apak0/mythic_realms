import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-2">
          Welcome to the Realm's Network!
        </h3>
        <p className="text-muted-foreground font-inter text-sm mb-4">
          You've successfully joined our communication network. Expect legendary updates and exclusive chronicles delivered directly to your inbox.
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-primary" />
        </div>
        <h3 className="font-cinzel font-semibold text-lg text-foreground mb-2">
          Join the Realm's Communication Network
        </h3>
        <p className="text-muted-foreground font-inter text-sm">
          Receive exclusive chronicles, developer insights, and be the first to know about legendary updates and events.
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="w-full"
        />

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          disabled={!email}
          className="legendary-button"
        >
          <Icon name="Send" size={16} className="mr-2" />
          Join the Network
        </Button>
      </form>
      {/* Benefits */}
      <div className="mt-6 pt-4 border-t border-border">
        <h4 className="font-inter font-medium text-sm text-foreground mb-3">
          What you'll receive:
        </h4>
        <div className="space-y-2">
          {[
            'Exclusive developer chronicles and behind-the-scenes content',
            'Early access to patch notes and game updates',
            'Community spotlights and player achievements',
            'Special event announcements and beta invitations'
          ]?.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground font-inter text-xs">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Privacy Note */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-muted-foreground font-inter text-xs text-center">
          <Icon name="Shield" size={12} className="inline mr-1" />
          Your email is protected by our privacy enchantments. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscription;