interface ContactIconProps {
  src: string;
  hoverSrc: string;
  text: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({
  src,
  hoverSrc,
  text,
}) => {
  return (
    <div className="group cursor-pointer flex flex-row gap-4 items-center">
      <div className="hidden lg:block relative w-7 h-7 lg:w-11 lg:h-11">
        <img
          className="w-full h-full absolute transition-opacity duration-300 opacity-100 md:group-hover:opacity-0"
          src={src}
          alt="Icon"
        />
        {hoverSrc && (
          <img
            className="w-full h-full absolute transition-opacity duration-300 opacity-0 md:group-hover:opacity-100"
            src={hoverSrc}
            alt="Icon"
          />
        )}
      </div>

      <img
        className="w-7 h-7 lg:hidden"
        src={hoverSrc}
        alt="Icon"
      />

      <p className="text-2xl font-light leading-none text-primary-foreground lg:text-primary">
        {text}
      </p>
    </div>
  );
};

export default ContactIcon;
