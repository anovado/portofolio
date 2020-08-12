import Link from "next/link";

export default function SidePanel() {
  return (
    <div className="mx-4 lg:mx-8 uppercase text-right text-coral flex md:block tracking-widest">
      <Link href="#home">
        <a>
          <div className="md:w-full mt-6 md:mt-0 md:pl-56 borderBot font-bold hover:text-plum">
            Home
          </div>
        </a>
      </Link>
      <Link href="#stacks">
        <a>
          <div className="md:w-full mt-6 md:mt-10 mx-4 md:mx-0 md:pl-56 borderBot font-bold hover:text-plum">
            About
          </div>
        </a>
      </Link>
      <Link href="#portfolios">
        <a>
          <div className="md:w-full mt-6 md:mt-10 md:pl-56 borderBot font-bold hover:text-plum">
            Portfolios
          </div>
        </a>
      </Link>
    </div>
  );
}
