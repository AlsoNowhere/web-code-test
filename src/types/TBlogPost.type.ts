export type TBlogPost =
  | {
      title: string;
      preface: string;
      body: never;
    }
  | {
      title: string;
      preface: never;
      body: string;
    };
