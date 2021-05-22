import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "index";
import { SearchBox, Container } from "components";
import { Loader, Card, CardsWrapper, Pagination } from "components/UI";
import { Film } from "store/state";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const CARDS_PER_PAGE = 9;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  const { favoritesFilms } = useTypeSelector((state) => state.favorite);
  const [currentPage, setCurrentPage] = useState(0);
  const pagesAmountInPagination = Math.ceil(films.length / CARDS_PER_PAGE);

  const getIsFavoriteFilm = (film: Film): boolean => {
    let isFavorite = false;
    favoritesFilms.forEach((favoriteFilm) => {
      if (favoriteFilm.id === film.id) {
        isFavorite = true;
      }
    });
    return isFavorite;
  };
  const renderFilmsCards = () => {
    return films
      .slice(
        currentPage * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
      )
      .map((film) => {
        const { id } = film;
        const isFavorite = getIsFavoriteFilm(film);
        return <Card film={film} key={id} isFavoriteFilm={isFavorite} />;
      });
  };

  return (
    <>
      <SearchBox />
      {loading && <Loader />}
      <Container>
        <CardsWrapper>{films && renderFilmsCards()}</CardsWrapper>
        {films && (
          <Pagination
            onChangePage={setCurrentPage}
            maxPageAmount={pagesAmountInPagination}
            currentPage={currentPage}
          />
        )}
      </Container>
    </>
  );
};
