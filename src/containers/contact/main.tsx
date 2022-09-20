import InfoBox from '@/components/info-box';
import Image from 'next/future/image';

const ContactMain = () => {
  return (
    <main>
      <div className="container mx-auto pt-[30px] pb-[94px]">
        <InfoBox
          title=""
          subtitle="Contact Us"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        ></InfoBox>

        <div className="mt-[67px] flex gap-x-[30px]">
          <div className="w-[575px]">
            <form>
              <div className="flex flex-col gap-y-[21px]">
                <div>
                  <label htmlFor="name" className="typo-sub-heading block">
                    Name
                  </label>
                  <input
                    className="mt-[16px] h-[38px] w-full rounded-md border-[1px] bg-green-25"
                    type="text"
                    id="name"
                  ></input>
                </div>

                <div>
                  <label htmlFor="email" className="typo-sub-heading block">
                    Email
                  </label>
                  <input
                    className="mt-[16px] h-[38px] w-full rounded-md border-[1px] bg-green-25"
                    type="text"
                    id="email"
                  ></input>
                </div>

                <div>
                  <label htmlFor="message" className="typo-sub-heading block">
                    Message
                  </label>
                  <textarea
                    className="mt-[16px] h-[75px] w-full rounded-md border-[1px] bg-green-25"
                    name="message"
                  ></textarea>
                </div>
              </div>
            </form>
            <button className="typo-sub-heading mt-[21px] w-full rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
              Submit
            </button>
          </div>
          <div className="relative h-auto w-[575px]">
            <Image alt="map" src="/assets/map.png" fill></Image>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;
