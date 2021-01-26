import Link from "next/link";
import Head from "next/head";
import { PropsInterface, UserInterface } from "../../interfaces/Interface";

export default function Users(props: PropsInterface) {
  const { users } = props;
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div>
        <Link href="/">
          <a>home page</a>
        </Link>
      </div>
      <h2>it is users page</h2>
      <div>
        <ul>
          {users.map((u) => {
            return (
              <li key={u.id}>
                <div>
                  Name: {u.name}
                  <Link as={`/users/${u.id}`} href="/users/[userId]">
                    <a>go to</a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      
    </>
  );
}

Users.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as UserInterface;
  return { users: users };
};
