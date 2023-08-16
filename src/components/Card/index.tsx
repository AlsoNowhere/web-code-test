import { FC } from "react";

import Link from "next/link";

import * as S from "./styles";

const Card: FC<{
  title: string;
  id?: string;
  preface?: string;
  large?: boolean;
}> = ({ title, id, preface, large = false }) => {
  const prefacesParts = (preface || "").split("\n");

  const cardContent = (
    <S.Card large={large}>
      <h2>{title}</h2>

      {prefacesParts.map((prefacePart, index) => (
        <p key={index}>{prefacePart}</p>
      ))}

      <S.Icon>{"→"}</S.Icon>
    </S.Card>
  );

  if (!!id) {
    return (
      <Link href={`/${id}`} passHref>
        <S.LinkCard>{cardContent}</S.LinkCard>
      </Link>
    );
  }
  return cardContent;
};

export default Card;
