import React from 'react';
import DashBoardLayout from './components/DashboardLayout';
import StatusBar from './components/StatusBar';
import ProfitCard from './components/ProfitCard';
import Targets from './components/Targets';
import Activity from './components/Activity';
import RecentOrder from './components/RecentOrder';
import CustomerFeedback from './components/CustomerFeedback';

function App() {
  return (
    <DashBoardLayout>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-auto lg:h-40'>
        <StatusBar />
        <ProfitCard />
      </div>

      <div className='grid  md:grid-cols-3 gap-4 h-auto'>
        <Activity />
        <Targets />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <RecentOrder />
        <CustomerFeedback />
      </div>
    </DashBoardLayout>
  );
}

export default App;
