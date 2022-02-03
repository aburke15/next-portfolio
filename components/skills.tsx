import React, { FunctionComponent } from "react";
import csharp from "../public/images/csharp.png";
import netCore from "../public/images/aspnetcore.png";
import efCore from "../public/images/ef_core.png";
import reactJs from "../public/images/react.png";
import sql from "../public/images/sql_server.png";
import git from "../public/images/git.svg";
import ts from "../public/images/ts.png";
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
        <div className="global-margin">
          <div className="row">
            <div className="col-md-4">
              <Image
                src={csharp}
                alt="CSharp Programming"
                height={175}
                width={175}
              />
              <h3>C#</h3>
            </div>
            <div className="col-md-4">
              <Image src={reactJs} alt="React JS" height={175} width={175} />
              <h3>React</h3>
            </div>
            <div className="col-md-4">
              <Image
                src={git}
                alt="Git Version Control"
                height={175}
                width={175}
              />
              <h3>Git VCS</h3>
            </div>
          </div>
          {/* Second Skill Row */}
          <div className="row mt-5">
            <div className="col-md-4">
              <Image
                src={netCore}
                alt="ASP.NET Core"
                height={175}
                width={275}
              />
              <h3>ASP.NET Core</h3>
            </div>
            <div className="col-md-4">
              <Image src={sql} alt="MS SQL Server" height={175} width={250} />
              <h3>MSSQL</h3>
            </div>
            <div className="col-md-4">
              <Image
                src={efCore}
                alt="Entity Framework Core"
                height={175}
                width={275}
              />
              <h3>EF Core</h3>
            </div>
          </div>
          {/* Third Skill Row */}
          <div className="row mt-5">
            <div className="col-md-4">
              <Image
                className="skill-icon"
                src={html}
                alt="HTML Five"
                height={175}
                width={175}
              />
              <h3>HTML5</h3>
            </div>
            <div className="col-md-4">
              <Image
                src={ts}
                alt="TypeScript Programming"
                height={175}
                width={175}
              />
              <h3>TypeScript</h3>
            </div>
            <div className="col-md-4">
              <Image src={css} alt="CSS Three" height={175} width={175} />
              <h3>CSS3</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
