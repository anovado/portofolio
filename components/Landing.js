import Link from "next/link";

export default function Landing() {
  return (
    <div className="mx-8 md:mx-12 lg:mx-20 text-left flex flex-col-reverse lg:grid lg:grid-cols-12 items-center font-body">
      <div className="mt-12 lg:mt-0 lg:col-span-7">
        <div className="text-xl leading-none tracking-wider">Hello, I'm</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-coral tracking-wider font-montserrat leading-tight">
          Andre Novado
        </h1>
        <div className="text-lg font-bold text-rose mt-2">
          A Web Developer from Indonesia
        </div>
        <div className="mt-8 lg:pr-20 text-lg">
          I have been learning web development for only 6 months, but I can
          prove my skills to you.
        </div>
        <div className="md:flex items-center mt-2">
          <div>
            <span className="mr-4 md:hidden">•</span>I learn quickly
          </div>
          <div className="hidden md:block md:mx-8 md:text-xl">•</div>
          <div className=" my-2 md:my-0">
            <span className="mr-4 md:hidden">•</span>I work quickly
          </div>
          <div className="hidden md:block md:mx-8 md:text-xl">•</div>
          <div>
            <span className="mr-4 md:hidden">•</span>I adapt quickly
          </div>
        </div>
        <Link href="#stacks">
          <button className="bg-coral px-8 py-3 mb-10 md:mb-0 rounded-full mt-4 text-oxford hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none">
            Find Out More
          </button>
        </Link>
      </div>
      <div className="lg:col-span-5 flex justify-center">
        <img
          src={"/images/photo.webp"}
          className="rounded-full w-64"
          alt="Profile picture"
        />
      </div>
    </div>
  );
}
