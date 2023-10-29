import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '../../../../components/ui/Dialog';

interface TeamDialogProps {
  open: boolean;
  setModalOpen: (open: boolean) => void;
  srcBg: string;
  title: string;
  text: string;
}

const TeamDialog: React.FC<TeamDialogProps> = ({
  open,
  setModalOpen,
  srcBg,
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
              background:
                'linear-gradient(0deg, rgba(13, 10, 11, 0.65) 0%, rgba(13, 10, 11, 0.00) 100%)',
            }}
          ></div>

          <div className="flex flex-col h-full gap-2 px-4 justify-end p-1">
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

export default TeamDialog;
