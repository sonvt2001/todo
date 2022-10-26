import React from 'react'
import imgpersonal from './img/me.png'
import './Modal.css';
import { Data } from './Data';
function Modal(){
    return(
    <Data>
      <div className='wrapper'>
        <h1>Profile</h1>
            <div className='group-header'>
                <div className='title-img'>
                    <img src={imgpersonal} className='img-me' alt='img-me'/>
                </div>
                <div className='title-name'>
                    <h3>Vu Truong Son</h3>
                    <h4>Front-end Developer</h4>
                </div>
            </div>
            <div className='group-body'>
                <div className='group-body-l'>
                    <div className='contact-info'>
                        <h4>Information</h4>
                        <i class="fa fa-calendar-check-o" aria-hidden="true">
                            <span>01/01/2001</span>
                        </i>
                        <i class="fa fa-phone" aria-hidden="true">
                            <span>0962010635</span>
                        </i>
                        <i class="fa fa-envelope" aria-hidden="true">
                            <span>sonvt.la@gmail.com</span>
                        </i>
                        <i class="fa fa-home" aria-hidden="true">
                            <span>Binh Duong</span>
                        </i>
                        <i class="fa fa-globe" aria-hidden="true">
                            <span>truongson.vu.2001</span>
                        </i>
                    </div>
                    <div className='obj-info'>
                        <h4>Objecttive</h4>
                        <p>As an inquisitive person, want to gain experience, apply learned theory in practice to become a frontend developer</p>
                    </div>
                    <div className='hob-info'>
                        <h4>Hobby</h4>
                        <li>Listen to music</li>
                        <li>Drink coffe</li>
                        <li>Travel</li>
                    </div>
                </div>
                    <div className='group-body-r'>
                        <div className='edu-info'>
                            <h4>Education</h4>
                            <h6>Ho Chi Minh University of Education </h6>
                            <h6>Oct 2019 - May 2022</h6>
                            <h6>Senior Student (4501104200)</h6>
                            <h6>GPA 2.8/4</h6>
                        </div>
                        <div className='skill-info'>
                            <h4>Skill</h4>
                            <ul>Language
                                <li>English basic</li>
                            </ul>
                            <ul>Knowlegde
                                <li>
                                    HTML, CSS basic
                                    {/* <span>Figma</span> */}
                                </li>
                                <li>
                                    JS, ReactJS basic
                                    <span>Bootstrap bacsic</span>
                                </li>
                            </ul>
                        </div>
                        <div className='exp-info'>
                            <h4>Experience</h4>
                            <h6>No experience</h6>
                        </div>
                    <div>
                       
                    </div>
                </div>
            </div>
      </div>
    </Data>
    )
}
export default Modal;