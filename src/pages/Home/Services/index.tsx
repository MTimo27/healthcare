import { v4 as uuidv4 } from 'uuid';

import ServiceCard from '@/pages/Home/Services/ServiceCard';
import serviceCards from '@/data/serviceCards';

const Services = () => {
  return (
    <div className="pb-36 px-10 lg:px-36">
      <h2 className="text-4xl lg:text-6xl mb-12 lg:mb-24 font-medium">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-4 lg:gap-6">
        {serviceCards.services.map((service) => (
          <ServiceCard
            key={uuidv4()}
            srcBg={service.srcBg}
            iconSrc={service.iconSrc}
            iconHoverSrc={service.iconHoverSrc}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
