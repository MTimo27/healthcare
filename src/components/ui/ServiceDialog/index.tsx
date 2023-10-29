import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '../Dialog';

interface ServiceDialogProps {
  open: boolean;
  setModalOpen: (open: boolean) => void;
  srcBg: string;
  iconSrc: string;
  title: string;
  text: string;
}

const ServiceDialog: React.FC<ServiceDialogProps> = ({
  open,
  setModalOpen,
  srcBg,
  iconSrc,
  title,
  text,
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={setModalOpen}
      modal={true}
    >
      <DialogContent className="max-w-[90%] p-0 gap-0 rounded-xl outline-offset-0 border-4 border-accent">
        <div
          className="w-full h-[183px] relative bg-cover bg-no-repeat bg-center rounded-t-lg"
          style={{
            backgroundImage: `url(${srcBg})`,
          }}
        >
          <div
            className="absolute inset-0 z-0 rounded-t-lg"
            style={{
              background: 'rgba(13, 10, 11, 0.65)',
            }}
          ></div>

          <div className="flex flex-col h-full gap-2 px-4 justify-end p-1">
            <img
              className="w-12 h-11 z-10"
              src={iconSrc}
              alt="Icon"
            />
            <DialogTitle className="text-primary-foreground text-2xl font-light z-10">
              {title}
            </DialogTitle>
          </div>
        </div>

        <DialogFooter className="text-primary-foreground text-base font-extralight rounded-b-lg px-6 py-10 bg-primary">
          <p>{text}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
