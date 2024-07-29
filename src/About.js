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
                        <p>I am a Masters student at the University of Nottingham studying Electronic Engineering. I am interested in a wide array of electronic and software areas, but have particular interests in computer vision, the Internet of Things and web development.</p>
                        <p>In previous years at university, I have studied several different modules, ranging from Integrated Circuits & Systems to Power and Energy to Embedded Computing. In my final year at university, I aim to focus more heavily on electronics and software, studying modules such as Advanced Computational Engineering, Artificial Intelligence, HDL for Programmable Devices and Instrumentation and Measurement.</p>
                        <p>As of 2021, I am a UK Electronic Skills Foundation (UKESF) Scholar, sponsored by Renesas Electronics. As part of this scholarship, I completed a 12-month industrial placement with Renesas Electronics, where I worked as a software engineer. In 2022, I received the Michael Bromwich Award at the University of Nottingham for achieving the highest end-of-year average mark in the 2021/22 academic year. I also received the Nottingham Engineering Excellence Award for being amongst the highest achieving students in my year group during the same year.</p>
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
