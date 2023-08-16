import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import * as S from "./styles";

import Card from "../components/Card";

import { wait } from "../services/wait.service";

import { IListBlogPosts } from "../interfaces.ts/IListBlogPosts.interface";

import { listBlogPosts } from "../graphql/list-blog-posts.query";

import { TListBlogPosts } from "../types/TListBlogPosts.type";

function BlogListingPage() {
  const [blogPosts, setBlogPosts] = useState<TListBlogPosts>([]);
  // DEV
  const [loading, setLoading] = useState(true);

  const {
    data,
    // DEV
    // loading,
    error,
  } = useQuery<IListBlogPosts>(listBlogPosts, {
    variables: { limit: 10 },
  });

  useEffect(() => {
    if (!data?.blogPostCollection.items) return;
    (async () => {
      // DEV to test loading screen. Otherwise we can destructure loading as returned from useQuery.
      await wait(1000);

      setBlogPosts(data.blogPostCollection.items);
      // DEV
      setLoading(false);
      if (!!error) {
        console.warn(error.message, error);
      }
    })();
  }, [data]);

  return (
    <>
      {loading && <p>Loading</p>}

      {!loading && (
        <S.BlogsWrapper>
          <div>
            <S.BlogsTitle>From the blog</S.BlogsTitle>
          </div>

          <section>
            <S.VisualRectangle />

            <S.BlogItemsWrapper>
              {!error && (
                <S.BlogList>
                  {blogPosts.map(({ sys: { id }, title, preface }, index) => (
                    <S.BlogListItem key={id}>
                      <Card
                        title={title}
                        id={id}
                        preface={preface}
                        large={index <= 1}
                      />
                    </S.BlogListItem>
                  ))}
                </S.BlogList>
              )}

              {!!error && (
                <p>Unable to retrieve blog information. Please try again.</p>
              )}
            </S.BlogItemsWrapper>
          </section>
        </S.BlogsWrapper>
      )}
    </>
  );
}

export default BlogListingPage;
