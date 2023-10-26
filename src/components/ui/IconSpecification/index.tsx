import React from 'react';

type IconSpecificationProps = {
  src: string;
  hoverSrc?: string;
  title: string;
  text: string;
};

const IconSpecification: React.FC<
  IconSpecificationProps
> = ({ src, hoverSrc, title, text }) => {
  return (
    <div className="group flex flex-col justify-center items-center cursor-pointer">
      <div className="icon-container relative w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
        <img
          className="w-full h-full icon absolute transition-opacity duration-300 opacity-100 md:group-hover:opacity-0"
          src={src}
          alt="Icon"
        />
        {hoverSrc && (
          <img
            className="w-full h-full filled-icon absolute transition-opacity duration-300 opacity-0 md:group-hover:opacity-100"
            src={hoverSrc}
            alt="Icon"
          />
        )}
      </div>

      <div className="flex flex-col text-center mt-2">
        <h3 className="text-2xl lg:text-4xl font-normal leading-none">
          {title}
        </h3>
        <p className="text-base font-light leading-none">
          {text}
        </p>
      </div>
    </div>
  );
};

export default IconSpecification;
