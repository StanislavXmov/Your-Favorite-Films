import { Button } from "components/UI";

import * as Styled from "./Card.styles";
import { CardImagePlaceholder } from "./CardImagePlaceholder";

type Props = {
  id: number;
  title: string;
  imgSrc: string | null;
  description: string;
  onSelectFilmHandler: () => void;
};

const MAX_DESCRIPTION_LENGTH = 200;

export const Card = (props: Props) => {
  const { title, imgSrc, description, onSelectFilmHandler } = props;
  const getTrimDescription = (string: string) => {
    if (string.length > MAX_DESCRIPTION_LENGTH) {
      return `${string.substr(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return string;
  };
  return (
    <Styled.Card>
      {imgSrc !== null ? (
        <Styled.CardImage src={imgSrc} />
      ) : (
        <CardImagePlaceholder />
      )}
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDesc>{getTrimDescription(description)}</Styled.CardDesc>
      <Button
        css={Styled.CardButtonStyle}
        title="Open"
        isDisabled={false}
        type="button"
        onClick={onSelectFilmHandler}
      />
    </Styled.Card>
  );
};
