import AirbnbIcon from '@/public/assets/airbnb.svg';
import FacebookIcon from '@/public/assets/facebook.svg';
import GoogleIcon from '@/public/assets/google.svg';
import MicrosoftIcon from '@/public/assets/microsoft.svg';
import SpotifyIcon from '@/public/assets/spotify.svg';

const partnersIcon = [
  MicrosoftIcon,
  AirbnbIcon,
  FacebookIcon,
  SpotifyIcon,
  GoogleIcon
];

const PartnerSection = () => {
  return (
    <section id="partners" className="pt-[60px] pb-[73px]">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-[411px] ">
          <p className="typo-label font-bold uppercase text-green-100">
            Partners
          </p>
          <h1 className="typo-heading-bold-1 mt-[16px]">Lorem Ipsum Dolor</h1>
          <p className="typo-sub-heading mt-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-[55px] flex justify-between">
          {partnersIcon.map((icon, index) => {
            const Icon = icon;
            return <Icon key={index} />;
          })}
        </div>

        <button className="typo-sub-heading mt-[55px] rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default PartnerSection;
