import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header, Navbar, Footer } from "@components/app"
import { HomePage, MostPopularPage } from "@components/pages"

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/most-popular/:type" component={MostPopularPage}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
