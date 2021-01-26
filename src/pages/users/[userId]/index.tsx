import { NextPageContext } from "next";
import { UserInterface } from "../../../interfaces/Interface";
import Head from "next/head";
import styles from "./index.module.css";
import UserDetail from "../../../Component/User/userDetail";
import Link from "next/link";

export default function User({ user }: { user: UserInterface }) {
  const { name, id } = user;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div>
        <span>
          <Link as={`/posts/${id}`} href="/posts/[userId]">
            <a>see posts</a>
          </Link>
        </span>
        <span> </span>
        <span>
          <Link href="/users">
            <a>go to users</a>
          </Link>
        </span>
      </div>
      <h1>User Detail:</h1>
      <UserDetail user={user} styles={styles} />
    </>
  );
}

User.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { userId },
  } = ctx;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = (await res.json()) as UserInterface;

  return { user };
};
