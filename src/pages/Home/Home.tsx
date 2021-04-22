import { useSelector, TypedUseSelectorHook } from "react-redux";
import { SearchBox } from "components";
import { RootState } from "index";
import { Loader } from "components/UI";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home = () => {
  const { loading, films } = useTypeSelector((state) => state.search);
  return (
    <>
      <SearchBox />
      {loading && <Loader />}
      {films && films.map((f) => <p key={f.id}>{f.title}</p>)}
    </>
  );
};
