import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import Portfolio from "../components/Portfolio";
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
      <div className="text-white grid grid-cols-12">
        {/* side panel */}
        <div className="col-span-3 bg-oxford items-center font-body text- h-screen flex justify-end">
          <SidePanel />
        </div>

        {/* content section */}
        <div className="col-span-9 bg-eminence intro h-screen overflow-auto">
          <div className="mb-64" id="home" />

          {/* contact section */}
          <div className="top-0 right-0 mr-10 py-2 absolute flex trapezoid bg-coral justify-center shadow-2xl w-64">
            <a href="https://www.linkedin.com/in/andre-novado/" target="blank">
              <img
                src={"/images/linkedin.webp"}
                className="w-8"
                alt="Linked In"
              />
            </a>
            <a href="https://github.com/anovado" target="blank">
              <img
                src={"/images/github.webp"}
                className="w-8 mx-4"
                alt="Github"
              />
            </a>
            <a href="mailto:andrenovado@gmail.com" target="blank">
              <img
                src={"/images/email.webp"}
                className="w-8 mr-4"
                alt="Email"
              />
            </a>
            <a href="https://www.facebook.com/andre.novado/" target="blank">
              <img
                src={"/images/facebook.webp"}
                className="w-8"
                alt="Facebook"
              />
            </a>
          </div>

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
