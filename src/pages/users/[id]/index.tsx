import { NextPageContext } from "next";
import { UserInterface } from "../../../interfaces/Interface";
import Head from "next/head";
import styles from "./index.module.css";
import UserDetail from "../../../Component/User/userDetail";
import Link from "next/link";

export default function User({ user }: { user: UserInterface }) {
  const { name } = user;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>User Detail:</h1>
      <UserDetail user={user} styles={styles} />
      <div>
        <Link href="/users">
          <a>go to users</a>
        </Link>
      </div>
    </>
  );
}

User.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { id },
  } = ctx;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const user = (await res.json()) as UserInterface;

  return { user };
};
