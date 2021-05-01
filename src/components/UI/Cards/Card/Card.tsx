import { Button } from "components/UI";

import * as Styled from "./Card.styles";

type Props = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
};

export const Card = (props: Props) => {
  const { id, title, imgSrc, description } = props;
  return (
    <Styled.Card>
      <Styled.CardImage src={imgSrc} />
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDesc>
        {description.length > 200
          ? `${description.substr(0, 200)}...`
          : description}
      </Styled.CardDesc>
      <Button
        title="Open"
        isDisabled={false}
        type="button"
        onClick={() => console.log(id)}
      />
    </Styled.Card>
  );
};
