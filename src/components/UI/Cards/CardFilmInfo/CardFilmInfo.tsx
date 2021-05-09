import React from "react";

import { Button } from "components/UI/Button";
import * as Styled from "./CardFilmInfo.styles";

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
  return (
    <Styled.Card>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardHeader>
        {imgSrc !== null ? <Styled.CardImage src={imgSrc} /> : null}
        <Styled.CardBody>
          <Styled.Date>
            Release Date: {new Date(date).toLocaleDateString()}
          </Styled.Date>
          <Styled.Language>Language: {lang}</Styled.Language>
          <Styled.Rating>⭐: {rating}</Styled.Rating>
          <Button
            css={Styled.AddToFavoriteButtonStyle}
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
