import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "index";
import { SearchBox, Container } from "components";
import { Loader, Card, CardsWrapper } from "components/UI";
import { apiImageUrl } from "api";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  return (
    <>
      <SearchBox />
      {loading && <Loader />}
      <Container>
        <CardsWrapper>
          {films &&
            films.map((f) => (
              <Card
                key={f.id}
                id={f.id}
                title={f.title}
                imgSrc={apiImageUrl(f.posterPath)}
                description={f.overview}
              />
            ))}
        </CardsWrapper>
      </Container>
    </>
  );
};
