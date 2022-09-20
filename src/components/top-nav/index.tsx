import Link from 'next/link';
import LogoIcon from 'public/assets/logo.svg';

const TopNav = () => {
  return (
    <div className="flex justify-between">
      <LogoIcon />
      <nav className="typo-sub-heading flex items-center gap-x-8 text-white-100">
        <Link href="/">
          <a>
            <p className="typo-sub-heading font-normal hover:text-dark-25">
              Home
            </p>
          </a>
        </Link>

        <Link href="/portfolio">
          <a>
            <p className="typo-sub-heading font-normal hover:text-dark-25">
              Portfolio
            </p>
          </a>
        </Link>

        <Link href="/services">
          <a>
            <p className="typo-sub-heading font-normal hover:text-dark-25">
              Services
            </p>
          </a>
        </Link>

        <Link href="/contact">
          <a>
            <p className="typo-sub-heading font-normal hover:text-dark-25">
              Contact
            </p>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default TopNav;
