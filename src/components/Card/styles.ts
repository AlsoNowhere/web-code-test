import styled, { css } from "styled-components";

const largeCard = css`
  font-size: ${({ theme }) => theme.bodyTextLarge};

  h2 {
    font-size: ${({ theme }) => theme.headline};
  }

  p {
    line-height: 27px;
  }
`;

export const LinkCard = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  color: initial;

  &:focus-visible {
    outline: none;

    > article {
      box-shadow: 0px 4px 12px 0px #0b0f670a, 0px 2px 4px 0px #0b0f670f,
        0px 4px 24px 0px #0b0f6733;
      outline: 2px solid ${({ theme }) => theme.blue};
    }
  }
`;

export const Card = styled.article<{ large: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.size};
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px;
  box-shadow: 0px 4px 12px 0px #0b0f670a, 0px 2px 4px 0px #0b0f670f;
  font-size: ${({ theme }) => theme.bodyText};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px 0px #0b0f670a, 0px 2px 4px 0px #0b0f670f,
      0px 4px 24px 0px #0b0f6733;
  }

  h2 {
    margin: 0 0 ${({ theme }) => theme.gap};
    line-height: 1.15;
    font-size: ${({ theme }) => theme.headlineSmall};
    color: ${({ theme }) => theme.blue};
  }

  p {
    margin: 0;
    line-height: 21px;
  }

  ${(props) => props.large && largeCard}
`;

export const Icon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizeHalf};
  bottom: ${({ theme }) => theme.sizeHalf};
  width: ${({ theme }) => theme.size};
  height: ${({ theme }) => theme.size};
  color: ${({ theme }) => theme.sky};
  line-height: ${({ theme }) => theme.size};
  font-weight: bold;
  text-align: center;
`;
