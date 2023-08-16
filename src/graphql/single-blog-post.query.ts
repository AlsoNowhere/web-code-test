import { gql } from "@apollo/client";

export const singleBlogPost = gql`
  query getBlogById($id: String!) {
    blogPost(id: $id) {
      title
      body
    }
  }
`;
