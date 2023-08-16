import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useQuery } from "@apollo/client";

import { ISingleBlogPost } from "../../interfaces.ts/ISingleBlogPost.interface";

import { singleBlogPost } from "../../graphql/single-blog-post.query";

function BlogPage() {
  const {
    query: { id },
  } = useRouter();

  const [pageTitle, setPageTitle] = useState("");
  const [pageBody, setPageBody] = useState<Array<string>>([]);

  const { data, loading } = useQuery<ISingleBlogPost>(singleBlogPost, {
    variables: { id },
  });

  useEffect(() => {
    // Only update the page if there is data and the title has not yet been set.
    if (!(pageTitle === "" && data !== undefined)) return;
    setPageTitle(data.blogPost.title);
    setPageBody(data.blogPost.body.split("\n"));
  }, [data]);

  return (
    <>
      <Head>
        <title>Blog entry: {pageTitle}</title>
      </Head>

      {loading && <p>Loading</p>}

      {!loading && (
        <main>
          <h1>{pageTitle}</h1>

          {pageBody.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </main>
      )}
    </>
  );
}

export default BlogPage;
