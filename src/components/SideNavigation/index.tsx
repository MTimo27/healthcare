import React from 'react';

interface SideNavigationProps {
  logoImage: string;
  isSideNavigationOpen: boolean;
  toggleSideNavigation: () => void;
  linksData: {
    links: {
      text: string;
      href: string;
    }[];
  };
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  logoImage,
  isSideNavigationOpen,
  toggleSideNavigation,
  linksData,
}) => {
  const sideNavigationClasses = isSideNavigationOpen
    ? 'block'
    : 'hidden';

  return (
    <div
      className={sideNavigationClasses}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-10 py-[0.80rem] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Deantaluxe</span>
            <img
              className="h-5 lg:h-8 w-auto"
              src={logoImage}
              alt="Dentaluxe Logo"
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-primary-foreground"
            onClick={toggleSideNavigation}
          >
            <span className="sr-only">Close menu</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {linksData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={toggleSideNavigation}
                  className="-mx-3 block rounded-lg px-3 py-1 text-xl font-normal leading-7 text-primary-foreground"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
