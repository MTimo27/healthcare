import ContactIcon from '@/components/ui/ContactIcon';
import contactBg from '../../../assets/images/contact/contactBg.jpg';
import contactIcons from '@/data/contactIcons';

const Contact = () => {
  return (
    <div className="lg:flex gap-28 justify-between items-center">
      <div
        className="w-full h-[506px] lg:min-w-[720px] lg:h-[800px] relative overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div
          className="absolute inset-0 p-4"
          style={{
            background:
              'linear-gradient(180deg, #0D0A0B 0%, rgba(13, 10, 11, 0.00) 100%)',
          }}
        >
          <div className="h-full flex flex-col pl-10 pt-12 lg:hidden">
            <h2 className="text-4xl font-medium text-primary-foreground mb-12">
              Contact
            </h2>
            <div className="flex flex-col gap-8">
              {contactIcons.contactIcon.map(
                (contactIcon) => (
                  <ContactIcon
                    src={contactIcon.src}
                    hoverSrc={contactIcon.hoverSrc}
                    text={contactIcon.text}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full lg:flex flex-col pl-10 pt-12">
        <h2 className="text-6xl font-medium text-primary mb-12">
          Contact
        </h2>
        <div className="flex flex-col gap-8">
          {contactIcons.contactIcon.map((contactIcon) => (
            <ContactIcon
              src={contactIcon.src}
              hoverSrc={contactIcon.hoverSrc}
              text={contactIcon.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
