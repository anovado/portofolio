export default function Portfolio() {
  return (
    <div className="bg-rose pt-2 font-body" id="portfolios">
      <div className="text-4xl mt-8 mb-4 font-extrabold ml-12 font-montserrat tracking-wider">
        Portfolios
      </div>

      {/* Iklankan */}
      <div className="grid grid-cols-12 mt-2">
        <img
          src={"/images/billboard.webp"}
          className="col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="col-span-8 bg-oxford px-16 py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat">
              Iklankan
            </div>
            <div className="mt-2 text-lg">
              A martplace to connect Publishers (people who own outdoor
              advertising spot) and Users (people who want to advertise their
              products) in a mobile and online platform. I was part of a 3
              person team who created this using React and Python Flask.
            </div>
            <a href="https://iklankan.tech" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="grid grid-cols-12">
        <img
          src={"/images/bread.webp"}
          className="col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="col-span-8 bg-coral px-16 py-4 flex items-center text-oxford">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat">
              Breadcrumb
            </div>
            <div className="mt-2 text-lg">
              An ecommerce to connect Bakers (people who can bake high quality
              pastries) and Users in an online platform. I created it with React
              with Redux for front-end, Python Flask for back-end, and MySQL for
              database.
            </div>
            <a href="https://breadcrumb.andrenovado.my.id" target="blank">
              <button className="button-coral hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Clone Spacestock */}
      <div className="grid grid-cols-12">
        <img
          src={"/images/apartment.webp"}
          className="col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="col-span-8 bg-oxford px-16 py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat">
              Spacestock Clone
            </div>
            <div className="mt-2 text-lg">
              I cloned part of the spacestock website, a platform to market
              apartment buildings and rooms. I created this using React with. I
              created it with React with Redux for front-end, Python Flask for
              back-end, and MySQL for database. Redux for front-end and Python
              Flask for back-end.
            </div>
            <a href="https://spacestock.andrenovado.my.id" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Alterra Academy */}
      <div className="grid grid-cols-12">
        <img
          src={"/images/alterra.webp"}
          className="col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="col-span-8 bg-coral px-16 py-4 flex items-center text-oxford">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat">
              Alterra Academy
            </div>
            <div className="mt-2 text-lg">
              I was part of a team who redesigned the Alterra Academy website in
              2 weeks. The website was developed with NextJS and Tailwind CSS. I
              created it with React with Redux for front-end, Python Flask for
              back-end, and MySQL for database. for front-end, and ExpressJs for
              back-end.
            </div>
            <a href="https://academy.alterra.id" target="blank">
              <button className="button-coral hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Naruto Memory Card Game */}
      <div className="grid grid-cols-12">
        <img
          src={"/images/naruto.webp"}
          className="col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="col-span-8 bg-oxford px-16 py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat">
              Naruto Memory Card Game
            </div>
            <div className="mt-2 text-lg">
              This game is inspired by memory card game. From there, I developed
              it by integrating naruto-theme and adding multiple difficulties. I
              created it with React with Redux for front-end, Python Flask for
              back-end, and MySQL for database. level with different time box.
              This game was created with HTML, CSS, and Javascript DOM (without
              any framework).
            </div>
            <a href="https://anovado.github.io" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
