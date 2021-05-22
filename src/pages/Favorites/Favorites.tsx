import React, { useState } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { Container, FilterBox } from "components";
import { Film } from "store/state";
import { Card, CardsWrapper, Pagination } from "components/UI";
import { RootState } from "index";

const CARDS_PER_PAGE = 9;
const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Favorites = () => {
  const { favoritesFilms: films } = useTypeSelector((state) => state.favorite);
  const [favoritesFilms] = useState<Film[]>(films);
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([
    ...favoritesFilms,
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const pagesAmountInPagination = Math.ceil(
    filteredFilms.length / CARDS_PER_PAGE
  );

  const renderFilmsCards = () => {
    return filteredFilms
      .slice(
        currentPage * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
      )
      .map((film) => {
        const { id } = film;
        return <Card film={film} key={id} />;
      });
  };
  return (
    <Container>
      <h2>Your Favorite Films</h2>
      <FilterBox
        films={favoritesFilms}
        filteredFilms={filteredFilms}
        setFilteredFilms={setFilteredFilms}
      />
      <CardsWrapper>{filteredFilms && renderFilmsCards()}</CardsWrapper>
      {filteredFilms.length > CARDS_PER_PAGE && (
        <Pagination
          onChangePage={setCurrentPage}
          maxPageAmount={pagesAmountInPagination}
          currentPage={currentPage}
        />
      )}
    </Container>
  );
};
