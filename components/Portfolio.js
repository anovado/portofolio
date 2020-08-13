export default function Portfolio() {
  return (
    <div className="bg-rose pt-2 font-body" id="portfolios">
      <div className="text-3xl md:text-4xl mt-6 lg:mt-8 mb-2 lg:mb-4 font-extrabold md:ml-8 lg:ml-12 font-montserrat tracking-wider">
        Portfolios
      </div>

      {/* Iklankan */}
      <div className="lg:grid lg:grid-cols-12 mt-2">
        <img
          src={"/images/billboard.webp"}
          className="md:hidden lg:block lg:col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="lg:col-span-8 bg-oxford px-4 md:px-0 lg:px-16 py-6 md:py-0 lg:py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat md:ml-8 lg:ml-0 flex items-center justify-between">
              Iklankan
              <img
                src={"/images/billboard.webp"}
                className="hidden md:block lg:hidden w-40"
                alt="Portfolio"
              />
            </div>
            <div className="mt-2 text-lg md:px-8 lg:px-0">
              A marketplace to connect those who own outdoor advertising spots
              and those who want to advertise their products in a mobile and
              online platform. I was part of a 3 person team who created this
              using React and Python Flask. My role was as the leader of the
              team.
            </div>
            <a href="https://iklankan.tech" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none md:ml-8 lg:ml-0 md:mb-4 lg:mb-0">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="lg:grid lg:grid-cols-12">
        <img
          src={"/images/bread.webp"}
          className="md:hidden lg:block lg:col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="lg:col-span-8 bg-coral  px-4 md:px-0 lg:px-16 py-6 md:py-0 lg:py-4 flex items-center text-oxford">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat md:ml-8 lg:ml-0 flex items-center justify-between">
              Breadcrumb
              <img
                src={"/images/bread.webp"}
                className="hidden md:block lg:hidden w-40"
                alt="Portfolio"
              />
            </div>
            <div className="mt-2 text-lg md:px-8 lg:px-0">
              An e-commerce to connect people who can bake high quality pastries
              and users in an online platform. I created it with React with
              Redux for front-end, Python Flask for back-end, and MySQL for
              database.
            </div>
            <a href="https://breadcrumb.andrenovado.my.id" target="blank">
              <button className="button-coral hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none md:ml-8 lg:ml-0 md:mb-4 lg:mb-0">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Clone Spacestock */}
      <div className="lg:grid lg:grid-cols-12">
        <img
          src={"/images/apartment.webp"}
          className="md:hidden lg:block lg:col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="lg:col-span-8 bg-oxford  px-4 md:px-0 lg:px-16 py-6 md:py-0 lg:py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat md:ml-8 lg:ml-0 flex items-center justify-between">
              Spacestock Clone
              <img
                src={"/images/apartment.webp"}
                className="hidden md:block lg:hidden w-40"
                alt="Portfolio"
              />
            </div>
            <div className="mt-2 text-lg md:px-8 lg:px-0">
              I cloned part of the spacestock website, a platform to market
              apartment buildings and rooms. I created this in 2 weeks, using
              React with Redux for front-end, Python Flask for back-end, and
              MySQL for database.
            </div>
            <a href="https://spacestock.andrenovado.my.id" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none md:ml-8 lg:ml-0 md:mb-4 lg:mb-0">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Alterra Academy */}
      <div className="lg:grid lg:grid-cols-12">
        <img
          src={"/images/alterra.webp"}
          className="md:hidden lg:block lg:col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="lg:col-span-8 bg-coral  px-4 md:px-0 lg:px-16 py-6 md:py-0 lg:py-4 flex items-center text-oxford">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat md:ml-8 lg:ml-0 flex items-center justify-between">
              Alterra Academy
              <img
                src={"/images/alterra.webp"}
                className="hidden md:block lg:hidden w-40"
                alt="Portfolio"
              />
            </div>
            <div className="mt-2 text-lg md:px-8 lg:px-0">
              I was part of a team who redesigned the Alterra Academy website in
              2 weeks. The website was developed with NextJS and Tailwind CSS
              for front-end, ExpressJs for back-end, and MySQL for database. My
              role during the development process was as the front-end engineer.
            </div>
            <a href="https://academy.alterra.id" target="blank">
              <button className="button-coral hover:bg-oxford hover:text-coral hover:font-bold focus:outline-none md:ml-8 lg:ml-0 md:mb-4 lg:mb-0">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Naruto Memory Card Game */}
      <div className="lg:grid lg:grid-cols-12">
        <img
          src={"/images/naruto.webp"}
          className="md:hidden lg:block lg:col-span-4 w-full"
          alt="Portfolio"
        />
        <div className="lg:col-span-8 bg-oxford  px-4 md:px-0 lg:px-16 py-6 md:py-0 lg:py-4 flex items-center">
          <div>
            <div className="text-3xl font-extrabold tracking-widest font-montserrat md:ml-8 lg:ml-0 flex items-center justify-between">
              Naruto Memory Card Game
              <img
                src={"/images/naruto.webp"}
                className="hidden md:block lg:hidden w-40"
                alt="Portfolio"
              />
            </div>
            <div className="mt-2 text-lg md:px-8 lg:px-0">
              This game is inspired by memory card game. From there, I developed
              it by integrating naruto theme, and adding multiple difficulties.
              This game was created with HTML, CSS, and Javascript DOM (without
              any framework).
            </div>
            <a href="https://anovado.github.io" target="blank">
              <button className="button-oxford hover:bg-coral hover:text-oxford hover:font-bold focus:outline-none md:ml-8 lg:ml-0 md:mb-4 lg:mb-0">
                See More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
