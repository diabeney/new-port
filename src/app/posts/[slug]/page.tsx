import { Post } from "../../page";
import Markdown from "markdown-to-jsx";

import { format } from "date-fns";
import { RiArrowLeftLine, RiCheckDoubleLine } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
  const posts: { results: Post[] } = await axios
    .get(`https://personal-blog-api-hdc7.onrender.com/posts`)
    .then((res) => res.data);

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
    .get(`https://personal-blog-api-hdc7.onrender.com/posts/${slug}`)
    .then((res) => res.data);
  const { data, postData } = foundPost;

  return (
    <main className=" p-4 my-8">
      <section>
        <Link
          href={"/"}
          className=" dark:text-LightAccent flex gap-2 items-center "
        >
          <span>
            <RiArrowLeftLine />
          </span>
          <span>Go back.</span>
        </Link>
      </section>
      {postData && (
        <section className=" ">
          <section className=" pt-8">
            <span className="  text-secondary dark:text-BgWhite_200">
              {format(new Date(postData.updatedAt), "EEEE, MMMM dd, yyy")}
            </span>
            <p className=" blog__title text-2xl py-6 dark:text-BgWhite lg:text-[48px] font-bold  ">
              {postData.title}
            </p>
          </section>
          <div className="">
            <span className="flex gap-2 justify-center w-fit items-center  text-secondary dark:text-BgWhite_200">
              <p>
                <RiCheckDoubleLine color="green" />
              </p>

              <p>{postData.author}</p>
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
                      " text-[1.8rem] lg:text-[2.5rem] py-4 dark:text-BgWhite",
                  },
                },
                h2: {
                  props: {
                    className:
                      "text-[1.4rem] lg:text-[2rem] py-4 dark:text-BgWhite ",
                  },
                },
                p: {
                  props: {
                    className: "py-4 ",
                  },
                },

                img: {
                  props: {
                    className: "w-full rounded-md ",
                  },
                },
                small: {
                  props: {
                    className: " w-fit mx-auto block italic",
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
