import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "components";
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path="/favorites">
          <p>Favorites</p>
        </Route>
        <Route path="/" exact>
          <p>Home</p>
        </Route>
      </MainLayout>
    </Router>
  );
}

export default App;
