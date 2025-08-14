import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/portal-home', label: 'Portal Home', icon: 'Home' },
    { path: '/world-atlas', label: 'World Atlas', icon: 'Map' },
    { path: '/community-hub', label: 'Community Hub', icon: 'Users' },
    { path: '/competitive-arena', label: 'Arena', icon: 'Sword' },
    { path: '/chronicles', label: 'Chronicles', icon: 'BookOpen' }
  ];

  const secondaryItems = [
    { path: '/player-sanctum', label: 'Player Sanctum', icon: 'User' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-mystical border-b border-border shadow-cinematic' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link 
            to="/portal-home" 
            className="flex items-center space-x-3 group smooth-transition"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mystical-glow group-hover:scale-105 smooth-transition">
                <Icon name="Crown" size={24} className="text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-semibold text-xl text-foreground group-hover:text-primary smooth-transition">
                Mythic Realms
              </span>
              <span className="font-mono text-xs text-muted-foreground -mt-1">
                Legendary Gateway
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-inter font-medium text-sm">{item?.label}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-inter font-medium text-sm">More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-muted/50 smooth-transition ${
                        isActivePath(item?.path) ? 'text-primary' : 'text-popover-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span className="font-inter text-sm">{item?.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="LogIn" size={16} className="mr-2" />
              Sign In
            </Button>
            <Button variant="default" size="sm" className="legendary-button">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Begin Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 smooth-transition"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-background/95 backdrop-blur-mystical border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-inter font-medium">{item?.label}</span>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-inter font-medium">{item?.label}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA */}
            <div className="px-6 pb-6 pt-2 space-y-3 border-t border-border">
              <Button variant="outline" fullWidth>
                <Icon name="LogIn" size={16} className="mr-2" />
                Sign In
              </Button>
              <Button variant="default" fullWidth className="legendary-button">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Begin Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;