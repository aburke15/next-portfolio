import React, { FunctionComponent } from "react";
import csharp from "../public/images/csharp.png";
import netCore from "../public/images/aspnetcore.png";
import efCore from "../public/images/ef_core.png";
import reactJs from "../public/images/react.png";
import sql from "../public/images/sql_server.png";
import git from "../public/images/git.svg";
import js from "../public/images/js.png";
import css from "../public/images/css.png";
import html from "../public/images/html.png";
import Image from "next/image";

const Skills: FunctionComponent = () => {
  return (
    <div id="skills" className="skills-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>Skills</h2>
          <p className="b-underline"></p>
        </div>
        {/* First Skill Row */}
        <div className="row">
          <div className="col-md-4">
            <Image
              className="skill-icon"
              src={csharp}
              alt="CSharp Programming"
            />
            <h3>C#</h3>
            {/* Add familiarity bar underneath */}
          </div>
          <div className="col-md-4">
            <Image className="skill-icon" src={reactJs} alt="React JS" />
            <h3>React JS</h3>
          </div>
          <div className="col-md-4">
            <img className="skill-icon" src={git} alt="Entity Framework Core" />
            <h3>Git VCS</h3>
          </div>
        </div>
        {/* Second Skill Row */}
        <div className="row">
          <div className="col-md-4">
            <Image className="skill-icon" src={netCore} alt="ASP.NET Core" />
            <h3>ASP.NET Core</h3>
          </div>
          <div className="col-md-4">
            <Image className="skill-icon" src={sql} alt="MS SQL Server" />
            <h3>MSSQL</h3>
          </div>
          <div className="col-md-4">
            <Image
              className="skill-icon"
              src={efCore}
              alt="Entity Framework Core"
            />
            <h3>EF Core</h3>
          </div>
        </div>
        {/* Third Skill Row */}
        <div className="row">
          <div className="col-md-4">
            <Image
              className="skill-icon"
              src={js}
              alt="JavaScript Programming"
            />
            <h3>JavaScript</h3>
          </div>
          <div className="col-md-4">
            <Image className="skill-icon" src={html} alt="HTML Five" />
            <h3>HTML5</h3>
          </div>
          <div className="col-md-4">
            <Image className="skill-icon" src={css} alt="CSS Three" />
            <h3>CSS3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
