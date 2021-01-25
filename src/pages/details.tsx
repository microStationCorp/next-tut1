import Link from "next/link";

interface People {
  v: string;
  n: string;
}

const people: People[] = [
  { v: "bmw", n: "sujan" },
  { v: "tesla", n: "nayan" },
  { v: "tata nano", n: "lima" },
];

export default function Detail() {
  return (
    <>
      <div>
        {people.map((p) => (
          <div key={p.n}>
            <Link as={`/${p.v}/${p.n}`} href="/[vehicle]/[person]">
              <a>
                navigate to {p.n}'s {p.v}
              </a>
            </Link>
          </div>
        ))}

        
      </div>
    </>
  );
}
