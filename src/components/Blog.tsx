import { format } from "date-fns";
import Link from "next/link";
import axios from "axios";

export type Post = Record<
  "title" | "author" | "slug" | "_id" | "tag" | "updatedAt" | "createdAt",
  string
>;

export type TPost = {
  data: string;
};

async function Blog() {
  const res = await axios.get("https://personal-blog-api.up.railway.app/posts");
  const data: { results: Post[] } = await res.data;
  return (
    <div className="p-4">
      <h1 className=" text-3xl py-6 text-BgDark dark:text-BgWhite">Writing</h1>
      <div>
        {data &&
          data.results.map((post) => {
            return (
              <Link
                href={`posts/${post.slug}`}
                key={post._id}
                className="my-2 block border-b-[1px] border-b-secondary  dark:border-LightAccent text-BgDark dark:text-BgWhite"
              >
                <p className=" py-2 flex  flex-col gap-2 lg:flex-row justify-between">
                  <span>{post.title}</span>
                  <span className=" text-secondary hidden lg:block dark:text-BgWhite_200">
                    {format(new Date(post.createdAt), "MMM, yyyy")}.
                  </span>
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;
