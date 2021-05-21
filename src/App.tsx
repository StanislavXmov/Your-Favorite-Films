import { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getFavoritesFilms } from "store";
import { MainLayout } from "components";
import { Favorites, Home } from "pages";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const getFavorites = useCallback(() => dispatch(getFavoritesFilms()), [
    dispatch,
  ]);
  useEffect(() => {
    getFavorites();
  }, [getFavorites]);
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
