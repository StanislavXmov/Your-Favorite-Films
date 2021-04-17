import { BrowserRouter as Router, Route } from "react-router-dom";

import { MainLayout } from "components";
import { Home } from "pages";

import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path="/favorites" exact>
          <p>Favorites</p>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </MainLayout>
    </Router>
  );
}

export default App;
