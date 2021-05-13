import { BrowserRouter as Router, Route } from "react-router-dom";

import { MainLayout } from "components";
import { Favorites, Home } from "pages";

import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </MainLayout>
    </Router>
  );
}

export default App;
