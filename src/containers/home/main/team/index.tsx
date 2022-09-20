import InfoBox from '@/components/info-box';
import Image from 'next/future/image';

const teams = [
  {
    id: 1,
    name: 'Peg Legge',
    position: 'CEO',
    avatar: 'team-avatar-1.svg'
  },
  {
    id: 2,
    name: 'Richard Guerra',
    position: 'CTO',
    avatar: 'team-avatar-2.svg'
  },
  {
    id: 3,
    name: 'Alexandra Stolz',
    position: 'Designer',
    avatar: 'team-avatar-3.svg'
  },
  {
    id: 4,
    name: 'Janet Bray',
    position: 'Developer',
    avatar: 'team-avatar-4.svg'
  }
];

const TeamSection = () => {
  return (
    <section id="team">
      <div className="container mx-auto pt-[102px] pb-[54px] text-center">
        <InfoBox
          title="Team"
          subtitle="Our Talents"
          description="Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,"
        ></InfoBox>

        <div className="mt-[45px] flex justify-between">
          {teams.map((member, index) => {
            return (
              <div
                key={index}
                className="flex-col rounded-md px-[38px] py-[20px] text-left shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)]"
              >
                <Image
                  alt={member.name}
                  src={`/assets/${member.avatar}`}
                  width={175}
                  height={175}
                ></Image>
                <h4 className="typo-heading-bold-4 mt-[19px]">{member.name}</h4>
                <p className="typo-body mt-[16px] font-normal uppercase text-dark-75">
                  {member.position}
                </p>
              </div>
            );
          })}
        </div>

        <button className="typo-sub-heading mt-[45px] rounded-md bg-dark-100 px-[30px] py-[13px] font-normal text-white-100">
          View Team
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
