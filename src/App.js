import './App.css';

import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import PlayersPage from './pages/players/players.component';
import Header from './components/header/header.component';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/players" component={PlayersPage} />
      </Switch>
      <Footer />
    </>

  );
}

export default App;
