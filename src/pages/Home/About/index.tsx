import { v4 as uuidv4 } from 'uuid';

import IconSpecification from '@/components/ui/IconSpecification';
import iconSpecificationData from '../../../data/aboutIconSpecification';
import { Button } from '@/components/ui/Button';
import aboutBg from '../../../assets/images/home/aboutBg.jpg';

const About = () => {
  return (
    <div className="mt-[-50px] lg:mt-[-100px] px-10 lg:px-0 py-36 lg:py-0 lg:flex flex-row justify-between">
      <div className="flex flex-col justify-center items-center lg:items-start lg:px-36">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl lg:text-6xl font-medium">
            About us
          </h2>
          <p className="text-base lg:text-2xl font-light leading-none lg:max-w-[760px]">
            At Dentaluxe, we redefine dental care, providing
            an unparalleled experience that combines
            expertise, innovation, and luxury. As
            Fairhaven's premier high-end dental clinic, we
            are committed to setting the gold standard for
            superior dental services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 my-12 lg:my-24">
          {iconSpecificationData.specifications.map(
            (specification) => (
              <IconSpecification
                key={uuidv4()}
                src={specification.src}
                hoverSrc={specification.hoverSrc}
                title={specification.title}
                text={specification.text}
              />
            )
          )}
        </div>

        <Button size={'lg'}>
          <a
            className="leading-none"
            href=""
          >
            Contact us
          </a>
        </Button>
      </div>
      <div className="hidden lg:block relative">
        <img
          src={aboutBg}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,10,11,0.64)] to-[rgba(13,10,11,0.00)]"></div>
      </div>
    </div>
  );
};

export default About;
