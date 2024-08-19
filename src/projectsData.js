const projectsList = [
    { id: 1, title: 'Automatic Pet-Feeder',
        description: 'Simple automatic pet feeder using a 555 timing circuit.',
        image: 'images/pet-feeder.jpg',
        details: (
            <div>
              <h3>Project Overview</h3>
              <p>
                The Automatic Cat Feeder was developed as my GCSE electronics project and is designed for cat owners who need a reliable solution to feed their pets while they are away from home. The feeder is capable of dispensing meals twice daily, ensuring that cats receive consistent portions of food without requiring human intervention. This project uses a combination of electronics and mechanical systems to automate the feeding process, incorporating a precise timing mechanism, food level detection, and motorized dispensing.
              </p>
      
              <h4>Project Specifications</h4>
              <ul>
                <li>
                  <strong>Motorized Dispensing Mechanism:</strong> The feeder uses an Archimedes screw mechanism driven by a motor. The motor continues to spin until the desired amount of food has been dispensed, indicated by a push-to-make switch (PTMS) that stops the motor when the correct quantity is reached.
                </li>
                <li>
                  <strong>Timing System:</strong> A 4060 IC is used to time the intervals between feedings. The system is calibrated to restart every 12 hours with a tolerance of ±3%, ensuring consistent feeding times.
                </li>
                <li>
                  <strong>Food Level Detection:</strong> A sensor in the bowl detects whether there is at least 40g of food remaining. If this threshold is met, the system will skip the next feeding cycle, preventing overfeeding.
                </li>
                <li>
                  <strong>Automatic Reset:</strong> If more than 40g of food remains after 12 hours, the system automatically waits for the next cycle, ensuring that food is not dispensed unnecessarily.
                </li>
              </ul>
      
              <h4>Research and Development</h4>
              <p>
                <strong>Initial Research:</strong> To ensure the feeder meets the dietary needs of an adult cat, research was conducted using veterinary resources, confirming that feeding twice a day is optimal. The feeder is designed to dispense between 50-70 grams of dry food per meal, with the motor stopping once 40 grams have been dispensed to allow for a slight overage.
              </p>
              <p>
                <strong>Timing Circuit Design:</strong> The timing circuit, critical for the 12-hour feeding interval, was designed using a 4060 IC. This was chosen over a 555 timer due to the latter's limitations with high resistance and capacitance values. The 4060 IC provides more accurate timing for long intervals, operating within a suitable voltage range for the circuit.
              </p>
      
              <h4>Circuit Design and Sub-Systems</h4>
              <ul>
                <li>
                  <strong>Pulse Generator:</strong> The prototype uses a 555 timer circuit, pulsing at 0.22 Hz for testing purposes. In the final design, the circuit will be modified to pulse every 12 hours using the 4060 IC.
                </li>
                <li>
                  <strong>Counter Circuit:</strong> A 4-bit binary counter (4516B IC) counts up to 12 pulses, corresponding to 12 hours. An AND gate connected to the reset pin ensures the counter resets after 12 pulses.
                </li>
                <li>
                  <strong>Latch System:</strong> A 4013B Dual D-Type Flip-Flop is used to latch the output from the counter, controlling the motor via a MOSFET. This ensures that the motor only operates when necessary and resets after the food is dispensed.
                </li>
                <li>
                  <strong>Motor Control:</strong> The motor is controlled by a MOSFET, which is triggered by the latch output. A protection diode is included to safeguard the circuit from reverse voltage and current, ensuring the longevity of the components.
                </li>
              </ul>
      
              <h4>Testing and Evaluation</h4>
              <p>
                The complete circuit was tested to verify the functionality of each subsystem. The timing circuit reliably pulsed every 12 hours, the counter correctly reset after 12 pulses, and the latch successfully controlled the motor. The motor-driven Archimedes screw dispensed the correct amount of food, stopping when the PTMS detected that the bowl was filled.
              </p>
              <p>
                An evaluation revealed that while the system performed well, adding a master switch to control the entire circuit would enhance usability, allowing the user to pause the system without disconnecting the power supply.
              </p>
              <p>
                The final cost of the circuit components for the project was £2.30. This low cost makes the feeder an affordable solution for cat owners seeking an automated feeding system.
              </p>
      
              <h4>User Guide</h4>
              <p>
                In order for the system to work correctly, follow these steps:
              </p>
              <ol>
                <li>Ensure that the entire circuit is connected to a power supply of 5V.</li>
                <li>Once the power supply is connected to the circuit, it will begin timing 12 hours.</li>
                <li>Ensure that the bowl is completely clean before the food is dropped.</li>
                <li>Fill the Archimedes screw with your selected cat food.</li>
                <li>Ensure that the end of the Archimedes screw is over the bowl.</li>
              </ol>
              <p>
                Once you follow these initial steps, the circuit should drop food for your cat every 12 hours. Keep an eye on the amount of food in the screw, and top up when necessary.
              </p>
            </div>
          ),
        recommended: false
    },
    { id: 2, title: 'Replicating the F1 start light sequence using Assembly',
        description: 'Simple Assembly program using the PIC16F88.',
        image: 'images/f1-lights.jpg',
        details: 'Detailed information about Project Nine',
        recommended: false
    },
    { id: 3, title: 'Designing a guitar tuner using Assembly',
        description: 'Assembly program for frequency detection using the PIC16F88 and an aux input.',
        image: 'images/guitar-tuner.jpg',
        details: 'Detailed information about Project Eight',
        recommended: false 
    },
    { id: 4, title: 'Designing & building an autonomous line-following robot with computer vision',
        description: 'Development of embedded software and hardware to control a vehicle with 4 motors.',
        image: 'images/autonomous-vehicle.jpg',
        details: 'Detailed information about Project Seven',
        recommended: true
    },
    { id: 5, title: 'Design, construction and testing of a fully controlled Two Switch Forward Converter',
        description: 'Two Switch Forward Converter with a regulated output voltage',
        image: 'images/converter-pcb.png',
        details: 'Detailed information about Project Six',
        recommended: false
    },
    { id: 6, title: 'E-Recycle',
        description: 'A web app to make recycling easier',
        image: 'images/e-recycle.png',
        details: 'Detailed information about Project Five',
        recommended: false
    },
    { id: 7, title: 'Doppler radar based speed detector',
        description: 'Frequency detection project using FFT with an STM32 board.',
        image: 'images/doppler-radar.png',
        details: 'Detailed information about Project Four',
        recommended: false
    },
    { id: 8, title: "DC-DC Converter PCB",
        description: "DCDC converter PCB for the University of Nottingham's solar racing car",
        image: 'images/dcdc-pcb.png',
        details: 'Detailed information about Project Three',
        recommended: true
    },
    { id: 9, title: 'Strategic energy management system for the University of Nottingham solar racing car',
        description: "An optimised prediction model for the University of Nottingham's solar car",
        image: 'images/solar-car-diagram.png',
        details: 'Detailed information about Project Two',
        recommended: true
    },
    { id: 10, title: 'Prosthetic arm control system using EMG sensors',
        description: 'A PCB and Microcontroller project used to control a prosthetic arm',
        image: 'images/emg-board.jpg',
        details: 'Detailed information about Project One',
        recommended: true
    },
    { id: 11, title: 'Simple calculator using a Basys 3 FPGA board',
        description: 'A simple calculator implemented on a Basys 3 FPGA board using VHDL',
        image: 'images/vhdl-calculator.jpg',
        details: 'Detailed information about Project One',
        recommended: false
    },
    { id: 12, title: 'Mission Control Software framework for a CubeSat application',
        description: 'A framework for CubeSat teams to use to track and communicate with their satellite',
        image: 'images/cubesat-mission.png',
        details: 'Detailed information about Project One',
        recommended: true
    }
];


export default projectsList;
