import React from "react";

import { Button } from "components/UI/Button";
import * as Styled from "./CardFilmInfo.styles";
import { CardImagePlaceholder } from "../Card/CardImagePlaceholder";

type Props = {
  id: number;
  title: string;
  imgSrc: string | null;
  description: string;
  date: string;
  lang: string;
  rating: number;
  onCloseHandler?: () => void;
};

export const CardFilmInfo = (props: Props) => {
  const {
    description,
    imgSrc,
    title,
    date,
    lang,
    rating,
    onCloseHandler,
  } = props;
  const getDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };
  return (
    <Styled.Card>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardHeader>
        {imgSrc ? <Styled.CardImage src={imgSrc} /> : <CardImagePlaceholder />}
        <Styled.CardBody>
          <Styled.FilmInfo>
            <Styled.FilmInfoTitle>Release Date: </Styled.FilmInfoTitle>
            {getDate(date)}
          </Styled.FilmInfo>
          <Styled.FilmInfo>
            <Styled.FilmInfoTitle>Language: </Styled.FilmInfoTitle>
            {lang}
          </Styled.FilmInfo>
          <Styled.FilmInfo>
            <Styled.FilmInfoTitle>⭐: </Styled.FilmInfoTitle> {rating}
          </Styled.FilmInfo>
          <Button
            css={Styled.AddToFavoriteButton}
            title="Add to favorites"
            isDisabled={false}
            type="button"
            onClick={() => console.log(title)}
          />
        </Styled.CardBody>
      </Styled.CardHeader>
      <Styled.CardBody>
        <Styled.CardDesc>{description}</Styled.CardDesc>
      </Styled.CardBody>
    </Styled.Card>
  );
};
