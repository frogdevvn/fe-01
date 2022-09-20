import HeaderIllustration from 'public/assets/header-illustration.svg';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="bg-green-100 pb-[83px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-[416px]">
          <p className="typo-label uppercase text-white-100">Welcome</p>
          <h1 className="typo-heading-bold-1 mt-[16px] text-white-100">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="typo-body mt-4 font-normal text-white-75">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="mt-[25px] rounded-md bg-white-100 py-[13px] px-[48.5px] active:bg-dark-25">
            <p className="typo-sub-heading text-dark-100">Explore</p>
          </button>
        </div>
        <HeaderIllustration />
      </div>
    </section>
  );
};

export default WelcomeSection;
