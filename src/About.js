import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-me-page">
            <section className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <img src="images/nottingham-university-logo.png" alt="Nottingham University" />
                    <div className="text-content">
                    <p>I am a software engineer who graduated with a First from the University of Nottingham in MEng Electronic Engineering. I currently work at Renesas Electronics, where I work within the Cloud & AI team to develop client-facing applications.</p> 
                    <p>At university, I was a UK Electronic Skills Foundation (UKESF) Scholar, sponsored by Renesas Electronics. In 2022, I received the Michael Bromwich Award at the University of Nottingham for achieving the highest end-of-year average mark in the 2021/22 academic year. I also received the Nottingham Engineering Excellence Award for being amongst the highest achieving students in my year group during the same year. I graduated with a First from the University of Nottingham with a weighted average of 86.5%.</p>
                    <p>My master’s thesis was titled “Developing an open-source Mission Control Software framework to communicate with a CubeSat”. This thesis presented the development of a Mission Control Software (MCS) framework designed to expedite the setup and deployment of mission control systems for space operations teams, while reducing cost at the same time. Utilising the Packet Utilisation Standard (PUS), the framework provides a standardised approach to managing spacecraft operations, enhancing the efficiency and interoperability of mission control activities. Key to this development is the integration of original solutions tailored for the AstroDev Lithium-2 radio and a comprehensive satellite emulation environment, which collectively support advanced mission simulation and testing capabilities. I received a grade of 92.8% for this thesis.</p>
                    <p>During my time at university, I studied a wide range of modules in both the Electronic and Electrical fields. Some of my favourite modules included:<br /> 
                    <ul>
                        <li>Advanced Computational Engineering, where I learnt about parallel computing, CUDA programming and databases.</li>
                        <li>Embedded Computing, where I gained a strong understanding of modern computer systems, and programmed applications in Embedded C and Assembly.</li>
                        <li>HDL for Programmable Devices, where I programmed different applications on a Xilinx FPGA using VHDL.</li>    
                    </ul>
                    </p>
                    <p>In my fourth year at university, I did a placement year at Renesas Electronics, followed by a summer internship at Partner Electronics. Alongside my studies in my final year, I set up Laeon Ltd., an electronics consulting company, with my business partner, providing bespoke solutions for entrepreneurs and small-businesses. Some information about my work experience is listed below.</p>

        
                    </div>

                    <img src="images/ukesf-logo.svg" alt="Nottingham University" />
                </div>
            </section>
            <section className="experience-section">
                <h2>Experience</h2>
                <div className="experience-content">
                    <h3>Partner Electronics - Electronic Engineering Intern</h3>
                    <div className="experience-item">
                        <p>I have had the opportunity to work at a few different companies. Most recently, during the summer of 2023, I worked for Partner Electronics as an Electronic Engineering Intern. At Partner Electronics, I worked on different electronic systems for clients, ranging from small sensor boards to large-scale battery systems. During my time, I gained experience with Linux systems, using Shell script and Python to create custom applications. I also used VSCode and MPLab to program different microprocessors, such as the RP2040 and the PIC16F887. I used Altium to design a PCB layout for a daughter board, which was used to replicate the functionality of the current Beaglebones board with a Raspberry Pi Pico. I also spent a small amount of time in the lab conducting EMC, thermal and mechanical tests for this board. Aside from this, I spent a lot of time writing detailed documentation, detailing the reasoning behind decisions, as well as the execution and outcome of the project. I had to determine suitable timelines for each project, which was important as my time was being billed to clients. This sometimes involved working under pressure, as unexpected blocking points meant that the deadlines were difficult to achieve.</p>
                        <img src="images/partner-electronics.png" alt="Partner Electronics" />
                    </div>
                    <h3>Renesas Electronics - Software Engineer</h3>
                    <div className="experience-item">
                        <p>At Renesas Electronics, I worked as a Software Engineer for the automotive business unit infrastructure team. I primarily spent my time developing a web application that used a database-driven approach tied with an intuitive and interactive GUI to deliver an online service for developers, project leaders and management to investigate the quality of software components using overall test results collected from automated continuous integration (CI) pipelines. This involved using primarily JavaScript and Python, as well as Git for version control and JIRA for tracking ticket status. I was responsible for writing documentation for the application using Confluence, including technical documents for the developers but also end-user guides for our customers. I was often involved in project planning, particularly in the later months of my placement, as I had become specialised in the UI/UX of the application. I took part in daily standup meetings and biweekly meetings where I would report the current progress and future steps for the application. I worked alongside other software engineers from the UK, Germany and Japan as part of a small agile team.</p>
                        <img src="images/renesas-electronics.png" alt="Renesas Electronics" />
                    </div>
                </div>
            </section>
            <section className="hobbies-section">
                <h2>Hobbies</h2>
                <div className="hobbies-content">
                    <div className="text-content">
                        <p>Outside of academia, I have many different interests. I am interested in all things vehicles, whether it be cars, planes, boats or trains, and I will often spend some of my free time playing on the sim (iRacing, ACC, Microsoft Flight Simulator 2020 etc.). I also really enjoy motor racing in real life, and try to go Go Karting when possible. I was fortunate enough to attend a few races this summer at the Silverstone Circuit during my placement at Partner Electronics, such as the Formula 1, MotoGP and British Touring Car Championship. Nottingham is also nearby to Donnington circuit, so I'm hoping to go to a few races this/next year. I am part of the University of Nottingham Gliding club, where we travel to RAF Cranwell to go gliding for the day. So far, I have flown in the Grob 103 Twin II Acro glider.</p>
                        <p>I enjoy playing lots of sport, which I do both as part of university as well as with friends. I have always enjoyed playing tennis, having started lessons at a young age, continuing on through university. More recently, I have gotten into playing Badminton, having sessions weekly with my friends (and getting thrashed by my house-mate). I enjoy endurance activities, often running long distances and recently taking part in the RideLondon Essex cycle ride.</p>
                        <p>I'm always interested in conversation about technology, so please feel free to contact me using my email or the Contact page with any topic you may have!</p>
                    </div>
                    <img src="images/hobbies-photo.png" alt="Hobbies" />
                </div>
                
            </section>
        </div>
    );
};

export default About;
