"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className=" border  border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}{" "}
    </button>
  );
}

export default Filter;

/*
"use client";
import Link from "next/link";
 
export default function Filter() {
 
  return (
    <div className="border border-primary-800 flex">
      <Link
        href="/cabins?capacity=all"
        className="px-5 py-2 hover:bg-primary-700"
      >
        All Cabins
      </Link>
      <Link
        href="/cabins?capacity=small"
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;5 guests
      </Link>
      <Link
        href="/cabins?capacity=medium"
        className="px-5 py-2 hover:bg-primary-700"
      >
        6&mdash;10 guests
      </Link>
      <Link
        href="/cabins?capacity=large"
        className="px-5 py-2 hover:bg-primary-700"
      >
        11&mdash;more guests
      </Link>
    </div>
  );
}
*/
