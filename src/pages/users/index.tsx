import Link from "next/link";
import { PropsInterface, UserInterface } from "../../interfaces/Interface";

export default function Users(props: PropsInterface) {
  const { users } = props;
  return (
    <>
      <div>it is users page</div>
      <div>
        <ul>
          {users.map((u) => {
            return (
              <li key={u.id}>
                <div>
                  Name: {u.name}
                  <Link as={`/users/${u.id}`} href="/users/[id]">
                    <a>go to</a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Link href="/">
          <a>home page</a>
        </Link>
      </div>
    </>
  );
}

Users.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as UserInterface;
  return { users: users };
};
