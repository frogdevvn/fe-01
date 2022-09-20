import Link from 'next/link';
import LogoIcon from 'public/assets/logo.svg';

const TopNav = () => {
  return (
    <div className="flex justify-between">
      <LogoIcon />
      <nav className="typo-sub-heading flex items-center gap-x-8 text-white-100">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default TopNav;
