import Link from "next/link";
import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  const { vehicle, person } = router.query;
  return (
    <>
      <div>
        {person}'s {vehicle}
      </div>

      <div>
        <Link href="/details">
          <a>go to details</a>
        </Link>
      </div>
    </>
  );
}
