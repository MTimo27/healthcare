const Footer = () => {
  return (
    <footer className="bg-primary p-2 lg:p-3">
      <div className="flex items-center justify-center">
        <span className="text-xs lg:text-base text-primary-foreground text-center">
          © 2023{' '}
          <a
            href="#"
            className="hover:underline"
          >
            Dentaluxe. All Rights Reserved.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
