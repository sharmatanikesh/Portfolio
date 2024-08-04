import React from "react";
import Button from "./Button";
import {SKILLS} from '@/data/skills'
function Skills() {
  return (
    <div id="skills">
      <h1 className="heading py-2 mb-8">
        <span className="text-purple"> Technical Skills</span>
      </h1>
      <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl">
        {
          SKILLS.map(({name,icon},index)=>(
            <Button key={index} name={name} icon={icon}  />
          ))

        }
      </div>
    </div>
  );
}

export default Skills;
