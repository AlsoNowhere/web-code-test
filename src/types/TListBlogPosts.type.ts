import { ISys } from "../interfaces.ts/ISys.interface";

import { TBlogPost } from "./TBlogPost.type";

export type TListBlogPosts = Array<TBlogPost & { sys: ISys }>;
