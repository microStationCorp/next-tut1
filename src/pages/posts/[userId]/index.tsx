import { NextPageContext } from "next";
import Link from "next/link";
import SinglePost from "../../../Component/Post/singlePost";
import { PostInterface } from "../../../interfaces/Interface";
import Head from "next/head"
export default function UserPost({
  posts,
  userId,
}: {
  posts: PostInterface[];
  userId: number;
}) {
  return (
    <>
    <Head>
      <title>Posts</title>
    </Head>
      <div>
        <Link as={`/users/${userId}`} href="/users/[userId]">
          <a>go to user home</a>
        </Link>
      </div>
      <div>
        <ol>
          {posts.map((post: PostInterface) => {
            return (
              <li key={post.id}>
                <SinglePost post={post} />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

UserPost.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { userId },
  } = ctx;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const posts = (await res.json()) as PostInterface[];

  return { posts, userId };
};
