import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "index";
import { apiImageUrl } from "api";
import { SearchBox, Container } from "components";
import { Loader, Card, CardsWrapper, Pagination, Modal } from "components/UI";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const CARDS_PER_PAGE = 9;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(0);
  const pagesAmountInPagination = Math.ceil(films.length / CARDS_PER_PAGE);

  const renderFilmsCards = () => {
    return films
      .slice(
        currentPage * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
      )
      .map(({ id, title, posterPath, overview }) => (
        <Card
          key={id}
          id={id}
          title={title}
          imgSrc={apiImageUrl(posterPath)}
          description={overview}
        />
      ));
  };

  return (
    <>
      <SearchBox />
      <Modal onClose={() => console.log("close")} open={true}>
        {"Hello i am a modal window"}
      </Modal>
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
