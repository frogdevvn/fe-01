import FeatureIllustration1 from '@/public/assets/feature-illustration-1.svg';
import FeatureIllustration2 from '@/public/assets/feature-illustration-2.svg';

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <FeatureIllustration1 />
          <div className="max-w-[462px]">
            <h1 className="typo-heading-bold-1">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="typo-body mt-[16px] font-normal text-dark-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="typo-sub-heading mt-[32px] rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
              Learn More
            </button>
          </div>
        </div>

        <div className=" mt-[73px] flex flex-row-reverse items-center justify-between">
          <FeatureIllustration2 />
          <div className="max-w-[462px]">
            <h1 className="typo-heading-bold-1">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="typo-body mt-[16px] font-normal text-dark-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="typo-sub-heading mt-[32px] rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
