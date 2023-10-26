interface ServiceCardProps {
  srcBg: string;
  iconSrc: string;
  iconHoverSrc?: string;
  title: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  srcBg,
  iconSrc,
  iconHoverSrc,
  title,
  text,
}) => {
  return (
    <div
      className="w-full h-[154px] lg:min-w-[373px] lg:h-[200px] rounded-sm border-2 border-secondary relative overflow-hidden bg-cover bg-no-repeat bg-center group cursor-pointer lg:p-6"
      style={{
        backgroundImage: `url(${srcBg})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #0D0A0B 0%, rgba(13, 10, 11, 0.27) 127.55%)',
        }}
      ></div>

      <div className="absolute inset-0 bg-black transition-opacity duration-100 opacity-0 z-10 lg:md:group-hover:opacity-100"></div>

      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center lg:items-start justify-center z-20 gap-4 lg:gap-0">
          <div className="icon-container relative w-12 h-11 lg:mb-6">
            <img
              className="w-full h-full icon absolute transition-opacity duration-300 opacity-100 md:group-hover:opacity-0"
              src={iconSrc}
              alt="Icon"
            />
            {iconHoverSrc && (
              <img
                className="w-full h-full filled-icon absolute transition-opacity duration-300 opacity-0 lg:md:group-hover:opacity-100"
                src={iconHoverSrc}
                alt="Icon"
              />
            )}
          </div>

          <h2 className="text-3xl font-light lg:mb-2 text-primary-foreground lg:group-hover:text-secondary lg:group-hover:underline leading-none">
            {title}
          </h2>
          <p className="hidden lg:block text-base text-primary-foreground font-extralight leading-none">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
