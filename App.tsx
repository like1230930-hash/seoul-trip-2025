import React, { useState, useEffect } from 'react';
import { TRIP_DATA } from './constants';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ItineraryView from './components/ItineraryView';
import AccountingView from './components/AccountingView';
import TranslationView from './components/TranslationView';
import ToolsView from './components/ToolsView';

type Tab = 'itinerary' | 'accounting' | 'translate' | 'tools';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary');
  const [activeDate, setActiveDate] = useState(Object.keys(TRIP_DATA)[0]);

  // Prevent background scroll when modal is open if needed, but for now simple structure
  useEffect(() => {
    // Initial scroll to top
    window.scrollTo(0, 0);
  }, [activeDate, activeTab]);

  return (
    <div className="min-h-screen pb-[100px] bg-[#F2FAFC]">
      {/* Conditionally render header only for itinerary */}
      {activeTab === 'itinerary' && (
        <Header activeDate={activeDate} setActiveDate={setActiveDate} />
      )}
      
      <main className="px-5 py-4 min-h-screen">
        {activeTab === 'itinerary' && (
          <ItineraryView activeDate={activeDate} />
        )}
        {activeTab === 'accounting' && (
          <AccountingView />
        )}
        {activeTab === 'translate' && (
          <TranslationView />
        )}
        {activeTab === 'tools' && (
          <ToolsView />
        )}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}