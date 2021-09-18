import React from 'react';
import { Switch, Route } from 'react-router-dom';
// routes
import HomePage from './routes/HomePage/HomePage';
import StatePage from './routes/StatePage';
import AboutPage from './routes/AboutPage';

// components
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: '#31393A',
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          {/* Individual State Names */}
          <Route exact path="/state/:stateName" component={StatePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
