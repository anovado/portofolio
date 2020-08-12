export default function Contact() {
  return (
    <div className="mt-20 md:mt-0 top-0 right-0 md:mr-4 lg:mr-10 py-3 md:py-2 fixed md:absolute md:flex trapezoid bg-coral md:justify-center shadow-2xl md:w-56 lg:w-64">
      <a href="https://www.linkedin.com/in/andre-novado/" target="blank">
        <img
          src={"/images/linkedin.webp"}
          className="w-8 my-2 md:my-0 mx-2 md:mx-0"
          alt="Linked In"
        />
      </a>
      <a href="https://github.com/anovado" target="blank">
        <img
          src={"/images/github.webp"}
          className="w-8 my-2 md:my-0 mx-2 md:mx-4"
          alt="Github"
        />
      </a>
      <a href="mailto:andrenovado@gmail.com" target="blank">
        <img
          src={"/images/email.webp"}
          className="w-8 my-2 md:my-0 mx-2 md:mx-0 md:mr-4"
          alt="Email"
        />
      </a>
      <a href="https://www.facebook.com/andre.novado/" target="blank">
        <img
          src={"/images/facebook.webp"}
          className="w-8 my-2 md:my-0 mx-2 md:mx-0"
          alt="Facebook"
        />
      </a>
    </div>
  );
}
