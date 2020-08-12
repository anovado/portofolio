import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import SidePanel from "../components/SidePanel";
import Landing from "../components/Landing";
import Stacks from "../components/Stacks";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-oxford">
      <Head>
        <title>Andre Novado</title>
        <meta name="description" content="Welcome to Andre Novado's site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <div className="text-white md:grid md:grid-cols-10 lg:grid-cols-12">
        {/* side panel */}
        <div className="md:col-span-2 lg:col-span-3 bg-oxford items-center font-body md:h-screen flex md:justify-end">
          <SidePanel />
        </div>

        {/* content section */}
        <div className="col-span-8 lg:col-span-9 bg-eminence intro md:h-screen md:overflow-auto">
          <div className="pb-16 md:pb-0 md:mb-32 lg:mb-64" id="home" />

          {/* contact section */}
          <Contact />

          {/* landing section */}
          <Landing />

          {/* Technology stacks section */}
          <Stacks />

          {/* Portfolios */}
          <Portfolio />

          {/* Footer */}
          <div className="bg-rose py-6 text-xl text-oxford font-body text-center">
            Created by Andre Novado
            <span className="mx-4">•</span>
            2020
          </div>
        </div>
      </div>
    </div>
  );
}
