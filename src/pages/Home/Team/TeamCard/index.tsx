import { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import infoIcon from '../../../../assets/icons/white/info.png';
import TeamDialog from '../TeamDialog';
interface TeamCardProps {
  src: string;
  title: string;
  text: string;
  reverse: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  src,
  title,
  text,
  reverse,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenModal = () => {
    if (isMobile) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`lg:flex ${
          reverse ? 'flex-row-reverse' : 'flex-row'
        } gap-28 justify-center items-center group cursor-pointer rounded-sm lg:border-2 lg:border-transparent lg:hover:bg-primary lg:hover:border-accent transition-all duration-300`}
        onClick={handleOpenModal}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div
          className="w-[264px] min-h-[183px] lg:min-w-[472px] lg:h-[373px] p-6 rounded-sm lg:rounded-none border-2 lg:border-none border-secondary relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${src})`,
          }}
        >
          <div
            className="absolute inset-0 p-4"
            style={{
              background:
                'linear-gradient(0deg, rgba(13, 10, 11, 0.65) 0%, rgba(13, 10, 11, 0.00) 100%)',
            }}
          >
            <div className="h-full flex flex-col justify-end lg:hidden">
              <h2 className="text-2xl font-light text-primary-foreground leading-none">
                {title}
              </h2>
              <div className="flex flex-row items-center gap-2 mt-2">
                <p className="font-light text-primary-foreground leading-none">
                  Tap to see more
                </p>
                <img
                  className="w-4 h-4"
                  src={infoIcon}
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-4 lg:group-hover:p-12">
          <h2 className="text-2xl font-light leading-none lg:group-hover:text-accent lg:group-hover:underline">
            {title}
          </h2>
          <p className="text-xl font-extralight lg:group-hover:text-primary-foreground">
            {text}
          </p>
        </div>
      </div>
      {isMobile && (
        <TeamDialog
          open={modalOpen}
          setModalOpen={setModalOpen}
          srcBg={src}
          title={title}
          text={text}
        />
      )}
    </>
  );
};

export default TeamCard;
