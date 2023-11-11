import React from "react";
import TeamMember from "./TeamMember";
import member1 from "../../assets/member1.png";
// import member2 from "../../assets/member2.png";
// import member3 from "../../assets/member3.png";
// import member4 from "../../assets/member4.png";
// import member5 from "../../assets/member5.png";

const Team = () => {
  return (
    <div className="p-10 lg:px-8 lg:pt-20 bg-orange-2">
      <h2 className="px-4 text-2xl sm:text-4xl font-bold text-gray-800 text-center sm:mb-10">
        Introducing Our EGG-cellent Capstone Crew 🐣
      </h2>
      <div className="items-center lg:items-start flex flex-col lg:flex-row bg-orange-2 pt-4 md:px-40 lg:justify-start">
        <TeamMember
          imageItem={member1}
          textTitle={"Yazid"}
          style={{ flex: 1 }}
        />
        <TeamMember
          imageItem={member1}
          textTitle={"Rangga"}
          style={{ flex: 1 }}
        />
        <TeamMember
          imageItem={member1}
          textTitle={"Habib"}
          style={{ flex: 1 }}
        />
        <TeamMember
          imageItem={member1}
          textTitle={"Intan"}
          style={{ flex: 1 }}
        />
        <TeamMember
          imageItem={member1}
          textTitle={"Mifta"}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default Team;
