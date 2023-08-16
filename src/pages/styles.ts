import styled from "styled-components";

export const BlogsWrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.offsetTop};
  padding-left: 5%;

  @media (min-width: 1150px) {
    display: flex;
  }
`;

export const BlogsTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.headlineSmall};
  color: ${({ theme }) => theme.blue};
  line-height: ${({ theme }) => theme.headlineSmall};
  white-space: nowrap;
`;

export const VisualRectangle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.headlineSmall};

  &::before {
    content: "";
    display: inline-block;
    width: ${({ theme }) => theme.size};
  }

  &::after {
    content: "";
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.sky};
  }
`;

export const BlogItemsWrapper = styled.div`
  padding: ${({ theme }) => theme.sizeLarge} 0 0;
`;

export const BlogList = styled.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  width: calc(100% + ${({ theme }) => theme.size});
  margin: 0 0 0 -${({ theme }) => theme.size};
  padding-left: 0;
`;

export const BlogListItem = styled.li`
  display: flex;
  width: 33.33%;
  margin-bottom: ${({ theme }) => theme.size};
  padding-left: ${({ theme }) => theme.size};

  @media (min-width: 1000px) {
    &:first-child {
      width: 66.66%;
    }
  }

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 678px) {
    width: 100%;
  }
`;
