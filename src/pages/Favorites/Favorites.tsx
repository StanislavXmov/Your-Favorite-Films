import React, { useState } from "react";

import { Container, FilterBox } from "components";
import { Film } from "store/state";
import { Card, CardsWrapper, Pagination } from "components/UI";
import { films } from "./mockData";

const CARDS_PER_PAGE = 9;

export const Favorites = () => {
  const [favoritesFilms, setfavoritesFilms] = useState<Film[]>(films);
  const [filteredFilms, setFilteredFilms] = useState<Film[]>(favoritesFilms);
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
      <FilterBox />
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
