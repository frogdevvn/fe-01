import clsx from 'clsx';
import Link from 'next/link';
import HeaderIllustration from 'public/assets/header-illustration.svg';
import LogoIcon from 'public/assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-green-100 pt-[35px] pb-[80px]">
      <div className={clsx('container mx-auto flex justify-between')}>
        <LogoIcon />
        <nav className="typo-sub-heading flex items-center gap-x-8 text-white-100">
          <Link href="#">Home</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </nav>
      </div>

      <div className="container mx-auto mt-[80px] flex justify-between">
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
    </header>
  );
};

export default Header;
