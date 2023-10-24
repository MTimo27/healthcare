import useToggle from '../../hooks/useToggle';
import linksData from '../../data/navLinks.json';
import SideNavigation from '../SideNavigation';
import logoImage from '../../assets/images/shared/logo.png';

const MainNavigation = () => {
  const [isSideNavigationOpen, toggleSideNavigation] =
    useToggle(false);

  return (
    <>
      <nav
        className="mx-auto flex h-[50px] lg:h-[100px] items-center justify-between px-10 lg:px-36 z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Dentaluxe</span>
            <img
              className="h-5 lg:h-8 w-auto"
              src={logoImage}
              alt="Dentaluxe Logo"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={toggleSideNavigation}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-10 lg:justify-end">
          {linksData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xl font-normal text-primary-foreground border-2 border-transparent hover:border-accent hover:rounded-sm p-2"
            >
              <p className="leading-none">{link.text}</p>
            </a>
          ))}
        </div>
      </nav>

      <SideNavigation
        logoImage={logoImage}
        isSideNavigationOpen={isSideNavigationOpen}
        toggleSideNavigation={toggleSideNavigation}
        linksData={linksData}
      />
    </>
  );
};

export default MainNavigation;
