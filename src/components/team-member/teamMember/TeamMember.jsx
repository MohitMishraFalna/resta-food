import React from 'react';
import Team1 from '../../../img/team-1.jpg';
import Team2 from '../../../img/team-2.jpg';
import Team3 from '../../../img/team-3.jpg';
import Team4 from '../../../img/team-4.jpg';
import TeamMemberCard from '../teamMemeberCard/teamMemeberCard';

const TeamMember = () => {
  return (
    <div className="team-member animClass">
        <div className="col">
          <TeamMemberCard img={<img src={Team1} alt=''/>} name={'full name'} designation={'designation'}/>
          <TeamMemberCard img={<img src={Team2} alt=''/>} name={'full name'} designation={'designation'}/>
          <TeamMemberCard img={<img src={Team3} alt=''/>} name={'full name'} designation={'designation'}/>
          <TeamMemberCard img={<img src={Team4} alt=''/>} name={'full name'} designation={'designation'}/>
        </div>
    </div>
  )
}

export default TeamMember
