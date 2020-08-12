import Link from "next/link";

export default function Landing() {
  return (
    <div className="mx-20 text-left grid grid-cols-12 items-center font-body">
      <div className="col-span-7">
        <div className="text-xl leading-none tracking-wider">Hello, I'm</div>
        <h1 className="text-6xl font-extrabold pt-0 text-coral tracking-wider font-montserrat">
          Andre Novado
        </h1>
        <div className="text-lg font-semibold text-rose">
          A Web Developer from Indonesia
        </div>
        <div className="mt-8 pr-20 text-lg">
          I have been learning web development for only 6 months, but I can
          prove it to you.
        </div>
        <div className="flex items-center mt-2">
          <div>I learn quickly</div>
          <div className="mx-8 text-xl">•</div>
          <div>I work quickly</div>
          <div className="mx-8 text-xl">•</div>
          <div>I adapt quickly</div>
        </div>
        <Link href="#stacks">
          <button className="bg-coral px-8 py-3 rounded-full mt-4 text-oxford hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none">
            Find Out More
          </button>
        </Link>
      </div>
      <div className="col-span-5 flex justify-center">
        <img
          src={"/images/photo.webp"}
          className="rounded-full w-64"
          alt="Profile picture"
        />
      </div>
    </div>
  );
}
