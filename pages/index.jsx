import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import Portfolio from "../components/Portfolio";
import SidePanel from "../components/SidePanel";
import Landing from "../components/Landing";

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
        <div className="col-span-9 bg-eminence intro font-noto h-screen overflow-auto">
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

          {/* about section */}
          <div className="mt-56 bg-plum py-24 px-12" id="stacks">
            <div className="text-3xl font-bold">
              This is what I have learned in 6 months:
            </div>
            <div className="">
              <div
                // data-aos="fade-up"
                className="mt-10 flex justify-between rounded-lg items-center bg-rose hover:bg-eminence hover:shadow-xl"
              >
                <div className="text-2xl font-semibold mr-10 ml-4">
                  Front End
                </div>
                <div className="flex">
                  <img
                    src={"/images/react.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/html.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/css.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/javascript.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/next.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/tailwind.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/bootstrap.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-between rounded-lg items-center bg-rose hover:bg-eminence hover:shadow-xl">
                <div className="text-2xl font-semibold mr-10 ml-4">
                  Back End
                </div>
                <div className="flex">
                  <img
                    src={"/images/python.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/flask.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/django.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/node.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/express.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-between rounded-lg items-center bg-rose hover:bg-eminence hover:shadow-xl">
                <div className="text-2xl font-semibold mr-10 ml-4">
                  Deployment
                </div>
                <div className="flex">
                  <img
                    src={"/images/aws.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/gcp.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/docker.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/nginx.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-between rounded-lg items-center bg-rose hover:bg-eminence hover:shadow-xl">
                <div className="text-2xl font-semibold mr-10 ml-4">
                  Database Management System
                </div>
                <div className="flex">
                  <img
                    src={"/images/mysql.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                  <img
                    src={"/images/mongo.webp"}
                    className="w-16 mx-6 my-4"
                    alt="stacks"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portfolios */}
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
