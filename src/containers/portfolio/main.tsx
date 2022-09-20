import InfoBox from '@/components/info-box';
import Image from 'next/future/image';

const NUM_OF_PORTFOLIO = 8;

const PorfolioMain = () => {
  return (
    <main>
      <div className="container mx-auto pt-[30px] pb-[100px] text-center">
        <InfoBox
          title="Works"
          subtitle="Portfolio"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        ></InfoBox>

        <div className="mt-[82px] grid grid-cols-2 gap-[55px]">
          {Array(NUM_OF_PORTFOLIO)
            .fill(1)
            .map((value, index) => {
              return (
                <Image
                  key={index}
                  className="h-auto w-full rounded-md ring-[1.5px] ring-dark-100"
                  alt={`portfolio-${index + 1}`}
                  src={`/assets/portfolio/portfolio-${index + 1}.png`}
                  width="555"
                  height="335"
                ></Image>
              );
            })}
        </div>
        <button className="typo-sub-heading mt-[64px] rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
          Learn More
        </button>
      </div>
    </main>
  );
};

export default PorfolioMain;
