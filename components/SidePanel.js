import Link from "next/link";

export default function SidePanel() {
  return (
    <div className="mx-8 uppercase text-right text-coral tracking-widest">
      <Link href="#home">
        <a>
          <div className="w-full pl-56 borderBot font-bold hover:text-plum">
            Home
          </div>
        </a>
      </Link>
      <Link href="#stacks">
        <a>
          <div className="w-full mt-10 pl-56 borderBot font-bold hover:text-plum">
            About
          </div>
        </a>
      </Link>
      <Link href="#portfolios">
        <a>
          <div className="w-full mt-10 pl-56 borderBot font-bold hover:text-plum">
            Portfolios
          </div>
        </a>
      </Link>
    </div>
  );
}
