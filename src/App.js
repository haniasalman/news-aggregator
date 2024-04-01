import React, { useState } from 'react'; // Import React
import Navbar from '../src/components/Header/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchResultsList from './pages/SearchResultsList/SearchResultsList';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      <Switch>
        <Route exact path='/'>
          <Dashboard searchQuery={searchQuery} />
        </Route>
        <Route path='/search'>
          <SearchResultsList searchQuery={searchQuery} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
