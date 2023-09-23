import { Post } from "../../page";
import Markdown from "markdown-to-jsx";

import { format } from "date-fns";
import { RiBallPenLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
  const posts: { results: Post[] } = await axios
    .get(`http://localhost:3000/posts`)
    .then((res) => res.data);
  // const posts: { results: Post[] } = await axios
  //   .get(`https://personal-blog-api.up.railway.app/posts`)
  //   .then((res) => res.data);

  return posts.results.map((post) => ({
    slug: post.slug,
  }));
}

async function PostDetail({ params }) {
  const { slug } = params;
  const foundPost: {
    data: string;
    postData: Post;
  } = await axios
    .get(`http://localhost:3000/posts/${slug}`)
    .then((res) => res.data);
  // const foundPost: {
  //   data: string;
  //   postData: Post;
  // } = await axios
  //   .get(`https://personal-blog-api.up.railway.app/posts/${slug}`)
  //   .then((res) => res.data);
  const { data, postData } = foundPost;

  return (
    <main className=" p-4">
      <section>
        <Link
          href={"/"}
          className=" underline dark:text-LightAccent flex items-center "
        >
          <span>
            <RiArrowLeftLine />
          </span>
          <span>Go back.</span>
        </Link>
      </section>
      {postData && (
        <section className=" pt-4 border-b-[1px] border-LightAccent mb-8 ">
          <section>
            <h1 className=" text-[2rem] blog__title heading dark:text-BgWhite lg:text-[3.5rem] py-8 ">
              {postData.title}
            </h1>
          </section>
          <div className=" flex lg:justify-between flex-col gap-4 lg:flex-row ">
            <span className="flex justify-center w-fit items-center  text-secondary dark:text-BgWhite_200">
              <RiBallPenLine />: {postData.author}
            </span>
            <span className="  text-secondary dark:text-BgWhite_200">
              {" "}
              {format(new Date(postData.updatedAt), "MMMM dd, yyy")}
            </span>
          </div>
        </section>
      )}

      {data && (
        <section className=" blog__content text-slate-950 dark:text-BgWhite_200">
          <Markdown
            options={{
              wrapper: "article",

              overrides: {
                h1: {
                  props: {
                    className:
                      " text-[1.8rem] lg:text-[2.5rem] dark:text-BgWhite",
                  },
                },
                h2: {
                  props: {
                    className:
                      "text-[1.4rem] lg:text-[2rem] dark:text-BgWhite ",
                  },
                },
                p: {
                  props: {
                    className: "py-4 ",
                  },
                },
              },
            }}
          >
            {data}
          </Markdown>
        </section>
      )}
    </main>
  );
}

export default PostDetail;
