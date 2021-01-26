import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
