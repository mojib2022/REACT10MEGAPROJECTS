import React from 'react'
import { useState } from 'react';
import '../css/team.css'



export default function Section3() {
    //Declaring and assigning usestate variables
    const [isActiveTeam1, setActiveTeam1] = useState(false);
    const [isActiveTeam2, setActiveTeam2] = useState(false);
    const [isActiveTeam3, setActiveTeam3] = useState(false);

    //css Class toggle handling function
    const handleToggle = (teamMember) => {
    
      setActiveTeam1(false);
      setActiveTeam2(false);
      setActiveTeam3(false);

      if(teamMember===1)
      {
        setActiveTeam1(!isActiveTeam1);
      }
      
      else if(teamMember===2)
      {
        setActiveTeam2(!isActiveTeam2);
      }
      else if(teamMember===3)
      {
        setActiveTeam3(!isActiveTeam3);
      }
      
    };

    

  return (
    //Section 3 
        <section className="section-3" id="team">
            <h1 className="section-heading">Team</h1>
            <div className="team-wrapper">
                <div className="team-member">
                    <img src="images/team-member-1.jpg" className="team-member-img" alt='' />
                    <h2 className="team-member-name">Nick Smith <span>(Designer)</span></h2>
                    <ul className="team-member-skills">
                        <li>Ps</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Ai</li>
                    </ul>
                    <a href="#a" className="projects-btn">Projects</a>
                    <div className={`${isActiveTeam1?'story-btn change':'story-btn'}`} title="My Story" onClick={()=>handleToggle(1)}>
                        <div className="story-btn-line"></div>
                    </div>
                    <div className={`${isActiveTeam1?'story change':'story'}`}>
                        <h4 className="story-heading">About Me</h4>
                        <p className="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="images/team-member-2.jpg" className="team-member-img" alt='' />
                    <h2 className="team-member-name">Bob Brown <span>(Designer)</span></h2>
                    <ul className="team-member-skills">
                        <li>Ae</li>
                        <li>Pr</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Inkscape</li>
                    </ul>
                    <a href="#a" className="projects-btn">Projects</a>
                    <div className={`${isActiveTeam2?'story-btn change':'story-btn'}`} title="My Story" onClick={()=>handleToggle(2)}>
                        <div className="story-btn-line"></div>
                    </div>
                    <div className={`${isActiveTeam2?'story change':'story'}`}>
                        <h4 className="story-heading">About Me</h4>
                        <p className="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="images/team-member-3.jpg" className="team-member-img" alt='' />
                    <h2 className="team-member-name">John Doe <span>(Developer)</span></h2>
                    <ul className="team-member-skills">
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                    </ul>
                    <a href="#a" className="projects-btn">Projects</a>
                    <div className={`${isActiveTeam3?'story-btn change':'story-btn'}`} title="My Story" onClick={()=>handleToggle(3)}>
                        <div className="story-btn-line"></div>
                    </div>
                    <div className={`${isActiveTeam3?'story change':'story'}`}>
                        <h4 className="story-heading">About Me</h4>
                        <p className="story-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?</p>
                    </div>
                </div>
            </div>
        </section>
        //End of Section 3 

  )
}
