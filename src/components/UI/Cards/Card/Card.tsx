import { Button } from "components/UI";

import * as Styled from "./Card.styles";
import { CardImagePlaceholder } from "./CardImagePlaceholder";

type Props = {
  id: number;
  title: string;
  imgSrc: string | null;
  description: string;
};

export const Card = (props: Props) => {
  const { id, title, imgSrc, description } = props;
  return (
    <Styled.Card>
      {imgSrc !== null ? (
        <Styled.CardImage src={imgSrc} />
      ) : (
        <CardImagePlaceholder />
      )}
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDesc>
        {description.length > 200
          ? `${description.substr(0, 200)}...`
          : description}
      </Styled.CardDesc>
      <Button
        css={Styled.CardButtonStyle}
        title="Open"
        isDisabled={false}
        type="button"
        onClick={() => console.log(id)}
      />
    </Styled.Card>
  );
};
