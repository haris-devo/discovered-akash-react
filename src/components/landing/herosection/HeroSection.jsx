const HeroSection = () => {
  return (
    <>
      <section className="md:h-[85vh] max-h-[auto] hero-section flex items-center">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-4 lg:flex-row lg:justify-around h-5/5">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full lg:w-1/2 h-auto">
            <h1 className="md:text-7xl font-bold leading-none sm:text-6xl">
              Discovered Akash Patal
            </h1>
            <p className="mt-6 mb-8 sm:mb-12">
              Custom starmaps, streetmaps & more - Thoughtful gifts to celebrate
              life&apos;s milestones. Craft your own design or explore our
              diverse collection of ready-to-customize poster templates
              <br />
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-button-gradient"
              >
                <span>
                  <img
                    src="../../../../public/assets/icons/Vector-1.png"
                    alt="Banner Image"
                    className="w-4 h-4"
                  />
                </span>
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:mt-0 h-full w-full lg:w-1/2">
            <img
              //   link with unsplash
              src="../../../../public/assets/heroReview.png"
              alt=""
              className="w-full lg:w-[420px] mt-auto"
            />
          </div>
        </div>
      </section>
      <div className="relative h-[300px] font-[sans-serif]">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white  px-6">
          <h2 className="text-4xl font-bold mb-4">Explore the World</h2>
          <p className="text-lg text-center mb-6">
            Embark on unforgettable journeys. Book your dream vacation today!
          </p>
          <a
            href="javascript:void(0)"
            className="bg-transparent text-white font-semibold py-2 border-2 border-white px-6 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
