import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "index";
import { apiImageUrl } from "api";
import { getRange } from "utils";
import { SearchBox, Container } from "components";
import { Loader, Card, CardsWrapper, Pagination } from "components/UI";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);

  const [currentPage, setCurrentPage] = useState(0);

  const limit = 9;
  const pageCount = Math.ceil(films.length / limit);
  const pages = getRange(0, pageCount);

  return (
    <>
      <SearchBox />
      {loading && <Loader />}
      <Container>
        <CardsWrapper>
          {films &&
            films
              .slice(currentPage * limit, currentPage * limit + limit)
              .map((f) => (
                <Card
                  key={f.id}
                  id={f.id}
                  title={f.title}
                  imgSrc={apiImageUrl(f.posterPath)}
                  description={f.overview}
                />
              ))}
        </CardsWrapper>
        {films && (
          <Pagination
            changePage={setCurrentPage}
            pages={pages}
            currentPage={currentPage}
          />
        )}
      </Container>
    </>
  );
};
