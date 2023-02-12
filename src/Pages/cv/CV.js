import React from 'react';
import './cv.css'

import iconnumber from './iconnumber.png';
import iconemail from './iconemail.png';
import iconwebsite from './iconwebsite.png';
import iconlocation from './iconlocation.png';

import profilepic from './profilepic.jpg';
import cooking from './cooking.png';
import coding from './coding.png';
import rugby from './rugby.png';
import football from './football.png';

export default function CV() {
  return (
    <div className="cv1">
        <div className="top1">
            <div className="imgBx1">
                <div className="box1">
                    <img src={profilepic} width="180px" />
                </div>
            </div>
            <div className="profileText1">
                <h3>Joshua<br />Berry<br /><span>Full Stack Developer</span></h3>
            </div>
        </div>

        <div className="contentBox1">
            {/* Left */}
            <div className="left1">
                <h3>Contact Info</h3>
                <ul className="contact1">
                    <li>
                        <img src={iconnumber} width="14px" />
                        <span className="text1">+44 7704 596772</span>
                    </li>
                    <li>
                        <img src={iconemail} width="14px" />
                        <span className="text1">joshuaberry982@outlook.com</span>
                    </li>
                    <li>
                        <img src={iconwebsite} width="14px" />
                        <span className="text1">joshuaberry982.github.io</span>
                    </li>
                    <li>
                        <img src={iconlocation} width="14px" height="14px" />
                        <span className="text1">Wigan, Greater Manchester, England</span>
                    </li>
                </ul>
                <h3>Education</h3>
                <ul className="education1">
                    <li>
                        <h5>2022-2023</h5>
                        <h4>Full Stack Engineer Certificate</h4>
                        <h6>Codecademy</h6>
                    </li>
                    <li>
                        <h5>2020-2021</h5>
                        <h4>Level 3 Professional Cookery</h4>
                        <h6>Wigan & Leigh College</h6>
                    </li>
                    <li>
                        <h5>2019-2020</h5>
                        <h4>Level 2 Catering & Hospitality</h4>
                        <h6>Wigan & Leigh College</h6>
                    </li>
                    <li>
                        <h5>2014-2019</h5>
                        <h4>Various GCSE Grades</h4>
                        <h6>Standish Community High School</h6>
                    </li>
                </ul>

              <h3>Hobbies</h3>
              <ul className="hobbies1">
                <li>
                  <img src={cooking} width="50px" />
                  <br />
                  <span>Cooking</span>
                </li>
                <li>
                  <img src={coding} width="50px" />
                  <br />
                  <span>Coding</span>
                </li>
                <li>
                  <img src={rugby} width="50px" />
                  <br />
                  <span>Rugby</span>
                </li>
                <li>
                  <img src={football} width="50px" />
                  <br />
                  <span>Football</span>
                </li>
              </ul>

              <h3>Languages</h3>
              <ul>
                <li>English (fluent)</li>
                <li>Spanish (medium)</li>
                <li>Urdu (little)</li>
              </ul>
            </div>

            {/* Right */}
            <div className="right1">
                <div className="about1">
                <h3>Profile</h3>
                    <p>I have been working with food for around 6 years starting May 2017. I began working in a takeaway which I began managing at the start of the Coronavirus Pandemic, while I was in college studying Professional Cookery. Since gaining my qualification, I have working in various hotels and cooked for many people including HNWIs and football teams.
                    <br /><br />
                    As much as I have enjoyed my career so far, I have always felt like I should be doing something that has a more lasting impact, and then I stumbled across software engineering. I began watching YouTube 'Crash Courses', practicing what I had learned and eventually started studying with Codecademy. My tech stack includes HTML5, CSS3, JavaScript, React, Redux, Express, Node and PostgreSQL. I also intend to keep studying and develop a niche in React and Redux.</p>
                 <br />
                 </div>
                 <div className="about1">
                    <h3>Experience</h3>
                    <div className="box1">
                        <div className="year-company1">
                            <h5>2017-2021</h5>
                            <h5>Picasso Pizzeria</h5>
                        </div>
                        <div className="text1">
                            <h4>Team Member/Manager</h4>
                            <p>I started working as a team member when I was 14 years old. I quickly learned how to do each section and became a pizza chef. When the Coronavirus Pandemic hit, I became manager and led the team to be very successful while being one of the very few food vendors still open. I also cooked for homeless people and struggling families during this time.</p>
                        </div>
                    </div>
                    <br />
                    <div className="box1">
                        <div className="year-company1">
                            <h5>2021-2023</h5>
                            <h5>Various Hotels</h5>
                        </div>
                        <div className="text1">
                            <h4>Chef De Partie</h4>
                            <p>I worked across several hotels (mostly 4 star) including MacDonald Hotels and Bolton Stadium Hotel. During this time, I cooked for football teams such as Bolton Wanderers, Bristol Rovers and Crystal Palace Ladies, aswell as High Net Worth Individuals and the hotel restaurants.</p>
                        </div>
                    </div>
                </div>
                <br />

                <div className="about1 skills1">
                    <h3>Professional Skills</h3>
                    <div className="box1">
                        <h4>HTML</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                    <div className="box1">
                        <h4>CSS</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                    <div className="box1">
                        <h4>JavaScript</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                    <div className="box1">
                        <h4>PostgreSQL</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                    <div className="box1">
                        <h4>Redux</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                    <div className="box1">
                        <h4>API Development</h4>
                        <span className="percent1">
                            <div style={{ width: "85%" }}></div>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="margin1"></div>
    </div>
  )
}
