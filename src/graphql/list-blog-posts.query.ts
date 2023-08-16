import { gql } from "@apollo/client";

export const listBlogPosts = gql`
  query getBlogs($limit: Int!) {
    blogPostCollection(order: title_ASC, limit: $limit) {
      items {
        title
        preface
        sys {
          id
          publishedAt
        }
      }
    }
  }
`;
