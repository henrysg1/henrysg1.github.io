import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-me-page">
            <section className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="text-content">
                        <p>I am a software engineer, currently working at HarperCollins in the technology team to develop several applications for internal and client use.</p>
                        <p>I am experienced in working with python applications, with a particular focus on web-based Django applications. I also have experience with cloud technologies; building a cloud-based board farm at Renesas Electronics, where I was both physically involved in the setup and upkeep of the infrastructure, as well as developing the backend algorithms to manage the application.</p>
                        <p>At the moment, I am working with AI and LLMs to improve interal processes, and I am gaining experience with IaC using Terraform to manage cloud infrastructure.</p>
                        <p>I graduated with a First from the University of Nottingham in MEng Electronic Engineering in 2024. At university, I was a UK Electronic Skills Foundation (UKESF) Scholar, sponsored by Renesas Electronics. In 2022, I received the Michael Bromwich Award at the University of Nottingham for achieving the highest end-of-year average mark in the 2021/22 academic year. I also received the Nottingham Engineering Excellence Award for being amongst the highest achieving students in my year group during the same year. I graduated with a First from the University of Nottingham with a weighted average of 86.5%.</p>
                        <p>My master's thesis was titled “Developing an open-source Mission Control Software framework to communicate with a CubeSat”. This thesis presented the development of a Mission Control Software (MCS) framework designed to expedite the setup and deployment of mission control systems for space operations teams, while reducing cost at the same time. Utilising the Packet Utilisation Standard (PUS), the framework provides a standardised approach to managing spacecraft operations, enhancing the efficiency and interoperability of mission control activities. Key to this development is the integration of original solutions tailored for the AstroDev Lithium-2 radio and a comprehensive satellite emulation environment, which collectively support advanced mission simulation and testing capabilities. I received a grade of 92.8% for this thesis.</p>
                        <p>During my time at university, I studied a wide range of modules in both the Electronic and Electrical fields. Some of my favourite modules included:</p>
                        <ul>
                            <li>Advanced Computational Engineering, where I learnt about parallel computing, CUDA programming and databases.</li>
                            <li>Embedded Computing, where I gained a strong understanding of modern computer systems, and programmed applications in Embedded C and Assembly.</li>
                            <li>HDL for Programmable Devices, where I programmed different applications on a Xilinx FPGA using VHDL.</li>    
                        </ul>
                        <p>In my fourth year at university, I did a placement year at Renesas Electronics, followed by a summer internship at Partner Electronics. Alongside my studies in my final year, I set up Laeon Ltd., an electronics consulting company, with my business partner, providing bespoke solutions for entrepreneurs and small businesses. Some information about my work experience is listed below.</p>
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <h2>Experience</h2>
                <div className="experience-content">
                    <div className="experience-item">
                        <h3>HarperCollins - Software Engineer</h3>
                        <div className="experience-details">
                            <p>I joined HarperCollins in October 2025 as a Software Engineer in the Technology team. My role involves developing and maintaining various internal and client-facing applications, primarily using Python and Django. Some of my current major roles include reducing technical debt by refactoring legacy applications, implementing new features based on user feedback, and ensuring the security and scalability of our web services. By simplifying and reducing our tech stack, I have helped to improve deployment times and reduce maintenance overheads. Recently, I have also focused on cybersecurity improvements, implementing Trivy scans into our CI/CD pipelines to automatically detect vulnerabilities in our container images before deployment. This has significantly enhanced our security posture and ensured compliance with industry standards. I enjoy the variety of work I do and the opportunity to continuously learn and apply new technologies.</p>
                            <img src="images/harpercollins.png" alt="HarperCollins" className="experience-logo"/>
                        </div>
                    </div>
                    <div className="experience-item">
                        <h3>Renesas Electronics - Software Engineer</h3>
                        <div className="experience-details">
                            <p>Following some part-time work for Renesas during my final year of university, I rejoined full-time in the High Performance Computing (HPC) unit in 2024. I worked on a "Target Board Farm", which provided the backend for the wider AI Workbench project, where customers could remotely access Renesas hardware to test their applications. My role primarily involved developing backend services in Python to manage the board farm infrastructure, including automating the provisioning and deprovisioning of boards, monitoring board health and usage statistics, and integrating with cloud services to provide scalable access to the hardware. I worked closely with other software engineers, DevOps engineers and cloud architects to ensure the system was robust, scalable and secure. I was also responsible for the management of the physical infrastructure, including setting up and maintaining the servers, networking equipment and Renesas hardware used in the board farm. During my time, I helped to design and develop a complete revamp of the board farm architecture to improve scalability and reliability, which involved migrating to a microservices-based architecture and implementing containerization using Docker and Kubernetes. This project taught me a lot about cloud infrastructure, DevOps practices and modern software development methodologies, and allowed me to confidently make significant contributions to a complex and high-profile project.</p>
                            <img src="images/renesas-electronics.png" alt="Renesas Electronics" className="experience-logo"/>
                        </div>
                    </div>
                    <div className="experience-item">
                        <h3>Laeon Ltd. - Co-founder and Technical Lead</h3>
                        <div className="experience-details">
                            <p>Having gained experience in the electronics consultancy field, I co-founded Laeon Ltd. with my business partner to provide affordable and friendly solutions for manufacturing electronic components. Recognising the challenges that small businesses and startups face in the electronics industry, we set out to create a company that offers high-quality, cost-effective services tailored to their unique needs. I took on the Technical Lead role, which made me responsible for the PCB design, embedded software development, manufacturing and testing of client projects.</p>
                            <img src="images/laeon.png" alt="Laeon Ltd." className="experience-logo"/>
                        </div>
                    </div>
                    <div className="experience-item">
                        <h3>Partner Electronics - Electronic Engineering Intern</h3>
                        <div className="experience-details">
                            <p>Over the summer of 2023, I worked for Partner Electronics as an Electronic Engineering Intern. At Partner Electronics, I worked on different electronic systems for clients, ranging from small sensor boards to large-scale battery systems. During my time, I gained experience with Linux systems, using Shell and Python to create custom scripts, created embedded software for RP2040 and PIC16F887 microcontrollers and designed PCBs for different electronic devices. I was also responsible for documenting these projects, including detailed information for both the end users and engineering teams.</p>
                            <img src="images/partner-electronics.png" alt="Partner Electronics" className="experience-logo"/>
                        </div>
                    </div>
                    <div className="experience-item">
                        <h3>Renesas Electronics - Software Engineering Intern</h3>
                        <div className="experience-details">
                            <p>At Renesas Electronics, I worked as a Software Engineer in the Automotive Business Unit (ABU) infrastructure team. I primarily spent my time developing a web application that used a database-driven approach tied with an intuitive and interactive GUI to deliver an online service for developers, project leaders and management to investigate the quality of software components using overall test results collected from automated continuous integration (CI) pipelines. This involved using primarily JavaScript and Python, as well as Git for version control and JIRA for tracking ticket status. I was responsible for writing documentation for the application using Confluence, including technical documents for the developers but also end-user guides for our customers. I worked alongside other software engineers from the UK, Germany and Japan as part of a small agile team.</p>
                            <img src="images/renesas-electronics.png" alt="Renesas Electronics" className="experience-logo"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hobbies-section">
                <h2>Hobbies</h2>
                <div className="hobbies-content">
                    <div className="text-content">
                        <p>Aside from software engineering, I have many different interests. I am very passionate about vehicles, whether it be cars, planes, boats or trains. I can often be found at a racetrack, whether it be watching the Formula 1 or BTCC, or even racing in a Go Kart myself. I like to go on road-trips where possible, and I am planning to do the NC500 and a Europe/America road trip in the future.</p>
                        <p>I enjoy playing lots of sport, particularly ones involving a racquet. I have always enjoyed playing tennis, having started lessons at a young age and continuing through university. I enjoy endurance activities, often running long distances and recently taking part in the RideLondon Essex 100km cycle ride. More recently, I have signed up to my local golf club, and try to get at least one lesson and game in a week; who knew hitting a ball with a stick could be so hard?</p>
                        <p>I'm also a big fan of music, whether it be Drum and Bass or smooth Jazz. I have a Pioneer DDJ-FLX4 DJ controller, which I ocassionally mess around with to learn more about DJing. It has been a great way to better integrate with the music I listen to, as well as to have some fun with friends. I've been to a mix of music events, with some of my favourites being Parklife, Wireless, Red Hot Chilli Peppers, Calvin Harris and Radiohead, just to name a few.</p>
                        <p>In 2025 I picked up reading, which is something I used to do a lot when I was younger. I have enjoyed reading a variety of genres, with some of my recent favourites being "Barbarians at the Gate" by Bryan Burrough and John Helyar, "Project Hail Mary" by Andy Weir and "Orbital" by Samantha Harvey. I find reading a great way to relax and unwind, as well as to learn new things and gain different perspectives on the world. It has also inspired me to start writing a few stories of my own, which I hope to develop further in the future.</p>
                        <p>I'm always interested in conversation about technology, so please feel free to contact me using my email or the Contact page with any topic you may have!</p>
                    </div>
                    <img src="images/hobbies-photo.png" alt="Hobbies" className="hobbies-photo"/>
                </div>
            </section>
        </div>
    );
};

export default About;
