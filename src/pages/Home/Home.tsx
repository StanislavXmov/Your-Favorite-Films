import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "index";
import { apiImageUrl } from "api";
import { SearchBox, Container } from "components";
import {
  Loader,
  Card,
  CardsWrapper,
  Pagination,
  Modal,
  CardFilmInfo,
} from "components/UI";
import { Film } from "store/state";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const CARDS_PER_PAGE = 9;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState<null | Film>(null);
  const pagesAmountInPagination = Math.ceil(films.length / CARDS_PER_PAGE);

  const renderFilmsCards = () => {
    return films
      .slice(
        currentPage * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
      )
      .map((film) => {
        const { id, title, posterPath, overview } = film;
        return (
          <Card
            key={id}
            id={id}
            title={title}
            imgSrc={apiImageUrl(posterPath)}
            description={overview}
            onSelectFilmHandler={() => setSelectedFilm(film)}
          />
        );
      });
  };

  return (
    <>
      <SearchBox />
      {selectedFilm !== null && (
        <Modal
          isOpenModal={selectedFilm !== null}
          onCloseModalHandler={() => setSelectedFilm(null)}
        >
          {selectedFilm && (
            <CardFilmInfo
              id={selectedFilm.id}
              title={selectedFilm.title}
              imgSrc={apiImageUrl(selectedFilm.posterPath)}
              description={selectedFilm.overview}
              date={selectedFilm.releaseDate}
              rating={selectedFilm.voteAverage}
              lang={selectedFilm.originalLanguage}
              onCloseHandler={() => setSelectedFilm(null)}
            />
          )}
        </Modal>
      )}
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
