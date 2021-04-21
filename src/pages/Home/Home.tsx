import { useSelector, TypedUseSelectorHook } from "react-redux";
import { SearchBox } from "components";
import { RootState } from "index";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  return (
    <>
      <SearchBox />
      {loading && <h2>Loading</h2>}
      {films && films.map((f) => <p key={f.id}>{f.title}</p>)}
    </>
  );
};
