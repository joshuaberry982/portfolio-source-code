import React from 'react';
import './cv.css'
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
                        <span className="text1">+44 7704 596772</span>
                    </li>
                    <li>
                        <span className="text1">joshuaberry982@outlook.com</span>
                    </li>
                    <li>
                      <span className="text1">joshuaberry982.github.io</span>
                    </li>
                    <li>
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
              <p>hi</p>
            </div>
        </div>
        <div className="margin1"></div>
    </div>
  )
}
