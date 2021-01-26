import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello world it is home page</h1>
      <div>
        <ul>
          <li>
            <Link href="/users">
              <a>user's page</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
