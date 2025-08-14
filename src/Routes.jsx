import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import WorldAtlas from './pages/world-atlas';
import CompetitiveArena from './pages/competitive-arena';
import Chronicles from './pages/chronicles';
import PlayerSanctum from './pages/player-sanctum';
import PortalHome from './pages/portal-home';
import CommunityHub from './pages/community-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Chronicles />} />
        <Route path="/world-atlas" element={<WorldAtlas />} />
        <Route path="/competitive-arena" element={<CompetitiveArena />} />
        <Route path="/chronicles" element={<Chronicles />} />
        <Route path="/player-sanctum" element={<PlayerSanctum />} />
        <Route path="/portal-home" element={<PortalHome />} />
        <Route path="/community-hub" element={<CommunityHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
