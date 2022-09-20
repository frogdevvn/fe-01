import FacebookIcon from '@/public/assets/facebook-icon.svg';
import InstagramIcon from '@/public/assets/instagram-icon.svg';
import PinterestIcon from '@/public/assets/pinterest-icon.svg';
import TikTokIcon from '@/public/assets/tiktok-icon.svg';
import TwitterIcon from '@/public/assets/twitter-icon.svg';
import WhatappsIcon from '@/public/assets/whatapps-icon.svg';
import YoutubeIcon from '@/public/assets/youtube-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-green-100">
      <div className="container mx-auto flex items-center justify-between text-center">
        <div className="flex gap-x-[20px] py-[50px]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
          <TikTokIcon />
          <WhatappsIcon />
          <YoutubeIcon />
        </div>

        <p className="typo-sub-heading font-normal text-white-100">
          © Start, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
