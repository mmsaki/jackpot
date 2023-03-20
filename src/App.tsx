import React from 'react';
import './App.css';
import Footer from './components/Footer';
import TopStatusBar from './components/TopStatusBar';
import TopNav from './components/TopNav';
import ActionNav from './components/ActionNav';

function App() {
  return (
    <div className='App'>
      <TopStatusBar />
      <TopNav />
      <ActionNav />
      <Footer />
    </div>
  );
}

export default App;
