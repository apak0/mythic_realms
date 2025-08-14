import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InteractiveMap = ({ selectedRegion, onRegionSelect, regions }) => {
  const [mapScale, setMapScale] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const handleZoomIn = () => {
    setMapScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setMapScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetView = () => {
    setMapScale(1);
    setMapPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e?.clientX - mapPosition?.x,
      y: e?.clientY - mapPosition?.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setMapPosition({
      x: e?.clientX - dragStart?.x,
      y: e?.clientY - dragStart?.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div className="relative w-full h-full bg-midnight rounded-lg overflow-hidden border border-border">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/30 smooth-transition"
        >
          <Icon name="Plus" size={18} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/30 smooth-transition"
        >
          <Icon name="Minus" size={18} />
        </button>
        <button
          onClick={handleResetView}
          className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/30 smooth-transition"
        >
          <Icon name="Home" size={18} />
        </button>
      </div>
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <div
          className="w-full h-full transition-transform duration-200"
          style={{
            transform: `translate(${mapPosition?.x}px, ${mapPosition?.y}px) scale(${mapScale})`,
            transformOrigin: 'center center'
          }}
        >
          {/* Base Map Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"
              alt="Mythic Realms World Map"
              className="w-full h-full object-cover"
            />
            
            {/* Region Markers */}
            {regions?.map((region) => (
              <button
                key={region?.id}
                onClick={() => onRegionSelect(region)}
                className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  selectedRegion?.id === region?.id
                    ? 'bg-primary border-primary shadow-lg scale-125 mystical-glow'
                    : 'bg-card/80 border-primary/50 hover:bg-primary/20 hover:border-primary hover:scale-110'
                }`}
                style={{
                  left: `${region?.coordinates?.x}%`,
                  top: `${region?.coordinates?.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
              </button>
            ))}

            {/* Region Labels */}
            {regions?.map((region) => (
              <div
                key={`label-${region?.id}`}
                className={`absolute pointer-events-none transition-all duration-300 ${
                  mapScale > 1.5 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${region?.coordinates?.x}%`,
                  top: `${region?.coordinates?.y - 8}%`,
                  transform: 'translate(-50%, -100%)'
                }}
              >
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded px-2 py-1">
                  <span className="font-cinzel text-xs text-foreground whitespace-nowrap">
                    {region?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
        <h4 className="font-cinzel font-semibold text-sm text-foreground mb-2">Legend</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="font-inter text-xs text-muted-foreground">Selected Region</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-card border border-primary/50" />
            <span className="font-inter text-xs text-muted-foreground">Explorable Region</span>
          </div>
        </div>
      </div>
      {/* Zoom Level Indicator */}
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2">
        <span className="font-mono text-xs text-muted-foreground">
          Zoom: {Math.round(mapScale * 100)}%
        </span>
      </div>
    </div>
  );
};

export default InteractiveMap;