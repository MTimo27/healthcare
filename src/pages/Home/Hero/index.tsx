import useDynamicHeight from '../../../hooks/useDynamicHeight';
import heroBg from '../../../assets/images/home/bgHero.jpeg';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  const dynamicHeight = useDynamicHeight();

  return (
    <div
      id="acasa"
      className="w-full bottom-[50px] lg:bottom-[100px] relative overflow-hidden bg-cover bg-no-repeat bg-center px-10 lg:px-36"
      style={{
        backgroundImage: `url(${heroBg})`,
        height: `${dynamicHeight}px`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A0B] via-[rgba(13, 10, 11, 0.27)] z-0"></div>

      <div className="pt-[50px] lg:pt-[100px] h-full flex items-center">
        <div className="h-full justify-evenly flex flex-col lg:h-auto lg:w-full lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-24 lg:gap-28 z-10">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <h1 className="max-w-72 lg:max-w-[927px] text-primary-foreground text-3xl lg:text-6xl font-medium">
                  Unparalleled Dental Sophistication for the
                  Most Distinguished Clients
                </h1>
                <p className="max-w-[242px] lg:max-w-[832px] text-primary-foreground text-xl lg:text-3xl font-light">
                  At Dentaluxe, we offer a sanctuary of
                  safety and professionalism. Experience the
                  pinnacle of dental luxury with us today.
                </p>
              </div>
            </div>

            <Button
              variant={'outline'}
              size={'lg'}
            >
              <a
                className="leading-none"
                href=""
              >
                Schedule your visit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
