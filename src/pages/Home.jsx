import ToyCards from "../components/ToyCards";
import { Link, useLoaderData } from "react-router";
import Slider from "../components/Slider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  // const [popularToys, setPopularToys] = useState([]);

  // useEffect(() => {
  //   fetch("/toys.json")
  //     .then((res) => res.json())
  //     .then((data) => setPopularToys(data));
  // }, []);
  //console.log(popularToys);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  const data = useLoaderData();
  const popularToys = data.slice(0, 6);
  // console.log(data);
  return (
    <div>
      <title>Home</title>
      <section>
        <Slider></Slider>
      </section>

      <h2 className="text-[36px] font-bold">
        Popular Toys{" "}
        <span className=" text-[20px]">({popularToys.length}) </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
        {popularToys.map((popularToy) => (
          <ToyCards key={popularToy.toyId} popularToy={popularToy}></ToyCards>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link
          to={"/show-all-toy"}
          className="text-[16px] font-semibold bg-primary text-white px-8 py-2 rounded-[5px]  text-center"
        >
          {" "}
          Show All
        </Link>
      </div>
      {/*  */}
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/wZ5QBrxP/images.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Get 25% discount in all kind of super hero theme
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* */}

     <div>
      <h1 className="my-5 text-2xl font-bold">Trending Toy</h1>
       <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/tpRbyH4w/images-2.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/nqw4dJks/images-1.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/C5NjSn0G/images-6.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/YFmHxnF2/images-8.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src=" https://i.ibb.co.com/bgRZ8TQD/images-9.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/TxPZFc4X/images-10.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co.com/zhmvvjRc/images-11.jpg" alt="Burger" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Home;
