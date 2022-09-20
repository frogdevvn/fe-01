import InfoBox from '@/components/info-box';
import TickIcon from '@/public/assets/tick-icon.svg';

const packages = [
  {
    name: 'Basic',
    price: 100,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam`,
    benefits: [
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`
    ]
  },
  {
    name: 'Plus',
    price: 250,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam`,
    benefits: [
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`
    ]
  },
  {
    name: 'Pro',
    price: 400,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam`,
    benefits: [
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`,
      `Lorem ipsum, dolor sit`
    ]
  }
];

const ServiceMain = () => {
  return (
    <main>
      <div className="container mx-auto pt-[30px] pb-[135px]">
        <InfoBox
          title="Plans"
          subtitle="Our Services"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.."
        ></InfoBox>

        <div className="mt-[78px] flex justify-between">
          {packages.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md px-[30px] py-[46px] shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)]"
              >
                <div className="flex max-w-[279px] flex-col items-center">
                  <p className="typo-body font-normal text-dark-100">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-x-[9px]">
                    <p className="typo-display">{`$${item.price}`}</p>
                    <p className="typo-body font-normal text-dark-50">/month</p>
                  </div>
                  <p className="typo-body mt-[10px] text-center font-normal text-dark-50">
                    {item.description}
                  </p>
                </div>
                <div className="mt-[52px] flex flex-col gap-y-[11px]">
                  {item.benefits.map((benefitItem, index2) => {
                    return (
                      <div
                        className="flex items-center gap-x-[11px] "
                        key={index2}
                      >
                        <div className="flex h-[25px] w-[25px] items-center justify-center">
                          <TickIcon className="fill-green-100" />
                        </div>
                        <p className="typo-body font-normal text-dark-100">
                          {benefitItem}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-[45px] text-center">
                  <button className="typo-sub-heading rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ServiceMain;
