import { v4 as uuidv4 } from 'uuid';

import TeamCard from '@/pages/Home/Team/TeamCard';
import teamData from '@/data/teamCard';

function Team() {
  return (
    <div className="pb-36 px-10 lg:px-36">
      <div className="mb-12">
        <h2 className="text-4xl lg:text-6xl font-medium mb-4">
          Our Team
        </h2>
        <p className="lg:w-[723px] text-base lg:text-3xl font-light leading-none">
          At Dentaluxe, we've assembled a top-tier team of
          expert dentists, skilled assistants, and
          specialized professionals. Each member is
          dedicated to providing you with the highest
          quality dental care.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {teamData.team.map((member) => (
          <TeamCard
            key={uuidv4()}
            src={member.src}
            title={member.title}
            text={member.text}
            reverse={member.reverse}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
