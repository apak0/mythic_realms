import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RegionDetails = ({ region, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!region) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-card rounded-lg border border-border">
        <div className="text-center">
          <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-cinzel text-lg text-foreground mb-2">Select a Region</h3>
          <p className="font-inter text-sm text-muted-foreground">
            Click on any region marker to explore its mysteries
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'lore', label: 'Chronicles', icon: 'BookOpen' },
    { id: 'factions', label: 'Factions', icon: 'Shield' },
    { id: 'gameplay', label: 'Gameplay', icon: 'Gamepad2' }
  ];

  return (
    <div className="w-full h-full bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={region?.image}
          alt={region?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-cinzel text-2xl font-semibold text-foreground mb-1">
                {region?.name}
              </h2>
              <p className="font-inter text-sm text-muted-foreground">
                {region?.type} • Level {region?.levelRange}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="w-8 h-8 bg-card/80 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card smooth-transition"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 font-inter text-sm smooth-transition ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="p-6 overflow-y-auto" style={{ height: 'calc(100% - 240px)' }}>
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-3">
                Region Overview
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                {region?.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="font-inter text-sm font-medium text-foreground">Population</span>
                </div>
                <span className="font-mono text-lg text-foreground">{region?.population}</span>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Thermometer" size={16} className="text-primary" />
                  <span className="font-inter text-sm font-medium text-foreground">Climate</span>
                </div>
                <span className="font-inter text-sm text-foreground">{region?.climate}</span>
              </div>
            </div>

            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Key Features</h4>
              <div className="grid grid-cols-1 gap-2">
                {region?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg">
                    <Icon name="Star" size={16} className="text-primary" />
                    <span className="font-inter text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lore' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-3">
                Ancient Chronicles
              </h3>
              <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                <p className="font-inter text-muted-foreground leading-relaxed italic">
                  {region?.lore}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Historical Events</h4>
              <div className="space-y-3">
                {region?.historicalEvents?.map((event, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-inter font-medium text-foreground">{event?.title}</h5>
                      <p className="font-inter text-sm text-muted-foreground">{event?.description}</p>
                      <span className="font-mono text-xs text-primary">{event?.era}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'factions' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-3">
                Ruling Factions
              </h3>
              <div className="space-y-4">
                {region?.factions?.map((faction, index) => (
                  <div key={index} className="bg-muted/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${faction?.color}`} />
                      <h4 className="font-cinzel font-semibold text-foreground">{faction?.name}</h4>
                      <span className="font-inter text-xs text-muted-foreground">
                        {faction?.influence}% influence
                      </span>
                    </div>
                    <p className="font-inter text-sm text-muted-foreground">{faction?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gameplay' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-3">
                Gameplay Features
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {region?.gameplayFeatures?.map((feature, index) => (
                  <div key={index} className="bg-muted/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                      <h4 className="font-inter font-semibold text-foreground">{feature?.name}</h4>
                    </div>
                    <p className="font-inter text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-cinzel font-semibold text-foreground mb-3">Recommended Level</h4>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  <div>
                    <span className="font-inter font-semibold text-foreground">
                      Level {region?.levelRange}
                    </span>
                    <p className="font-inter text-sm text-muted-foreground">
                      Optimal challenge for adventurers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionDetails;