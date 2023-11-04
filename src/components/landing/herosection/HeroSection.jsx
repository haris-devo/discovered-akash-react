const HeroSection = () => {
  return (
    <>
      <section className="md:h-[85vh] max-h-[auto] hero-section flex items-center">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-4 lg:flex-row lg:justify-around h-5/5">
          <div className="flex flex-col justify-center py-4 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left w-full h-auto md:ml-20">
            <h1 className="font-bold leading-none text-4xl md:text-5xl lg:text-8xl akash-heading">
              Discovered <br /> Akash Patal
            </h1>
            <h2 className="my-2 text-base md:text-lg lg:text-3xl akash-hero-sub">
              Capture your treasured memories in a beautiful poster
            </h2>
            <p className="my-1 sm:mb-12 text-base md:text-lg lg:text-md">
              Custom starmaps, streetmaps & more - Thoughtful gifts to celebrate
              life&apos;s milestones. Craft your own design or explore our
              diverse collection of ready-to-customize poster templates
              <br />
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                rel="noopener noreferrer"
                href="#"
                className="py-3 px-6 text-xl font-semibold rounded-2xl text-white bg-gradient-ltr font-quanta"
              >
                Create your poster
              </button>
              <button
                href="#"
                className="py-3 px-6 text-xl font-semibold rounded-2xl  border-2 font-quanta button-text-color"
              >
                Explore More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:mt-0 h-full w-full lg:w-1/2 md:ml-12">
            <img
              //   link with unsplash
              src={window.location.origin+"/assets/heroReview.png"}
              alt=""
              className="w-full lg:w-[420px] mt-auto"
            />
          </div>
        </div>
      </section>
      <div className="relative h-[50vh] font-[sans-serif]">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white  px-6">
          <div className="mx-auto px-10 flex justify-center w-full">
            <img
              src="/public/assets/coupon.png"
              alt="Banner Image"
              className="w-4/4 h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
