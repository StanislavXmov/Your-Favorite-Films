import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Modal, CardFilmInfo } from "components/UI";
import { addFavoriteFilm, removeFavoriteFilm } from "store";
import { Film } from "store/state";
import { apiImageUrl } from "api";

import * as Styled from "./Card.styles";
import { CardImagePlaceholder } from "./CardImagePlaceholder";

type Props = {
  film: Film;
  isFavoriteFilm: boolean;
};

const MAX_DESCRIPTION_LENGTH = 200;

export const Card = (props: Props) => {
  const { film, isFavoriteFilm } = props;
  const { posterPath, title, overview } = film;
  const [selectedFilm, setSelectedFilm] = useState<null | Film>(null);
  const dispatch = useDispatch();
  const getTrimDescription = (string: string) => {
    if (string.length > MAX_DESCRIPTION_LENGTH) {
      return `${string.substr(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return string;
  };
  const getPosterSrc = apiImageUrl(posterPath);
  const addToFavoriteHandler = (favoriteFilm: Film) => {
    dispatch(addFavoriteFilm(favoriteFilm));
  };
  const removeToFavoriteHandler = (id: number) => {
    dispatch(removeFavoriteFilm(id));
  };
  const renderButton = () => {
    if (isFavoriteFilm) {
      return (
        <Button
          css={Styled.CardButtonStyle}
          title="💔"
          isDisabled={false}
          type="button"
          onClick={() => removeToFavoriteHandler(film.id)}
        />
      );
    }
    return (
      <Button
        css={Styled.CardButtonStyle}
        title="💗"
        isDisabled={false}
        type="button"
        onClick={() => addToFavoriteHandler(film)}
      />
    );
  };
  return (
    <>
      <Styled.Card>
        {getPosterSrc ? (
          <Styled.CardImage src={getPosterSrc} />
        ) : (
          <CardImagePlaceholder />
        )}
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardDesc>{getTrimDescription(overview)}</Styled.CardDesc>
        <Styled.CardButtonsWrapper>
          <Button
            css={Styled.CardButtonStyle}
            title="Open"
            isDisabled={false}
            type="button"
            onClick={() => setSelectedFilm(film)}
          />
          {renderButton()}
        </Styled.CardButtonsWrapper>
      </Styled.Card>
      {selectedFilm && (
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
              addToFavorite={() => addToFavoriteHandler(film)}
              removeToFavorite={() => removeToFavoriteHandler(selectedFilm.id)}
              isFavoriteFilm={isFavoriteFilm}
            />
          )}
        </Modal>
      )}
    </>
  );
};
