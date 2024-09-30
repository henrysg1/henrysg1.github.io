const projectsList = [
    { id: 1, title: 'Automatic Pet-Feeder',
        description: 'Simple automatic pet feeder using a 555 timing circuit.',
        image: 'images/pet-feeder.jpg',
        details: (
            <div>
              <h3>Project Overview</h3>
              <p>
                The Automatic Cat Feeder was developed as my GCSE electronics project and is designed for cat owners who need a reliable solution to feed their pets while they are away from home. The feeder is capable of dispensing meals twice daily, ensuring that cats receive consistent portions of food without requiring human intervention. This project uses a combination of electronics and mechanical systems to automate the feeding process, incorporating a precise timing mechanism, food level detection, and motorised dispensing.
              </p>
      
              <h4>Project Specifications</h4>
              <ul>
                <li>
                  <strong>Motorised Dispensing Mechanism:</strong> The feeder uses an Archimedes screw mechanism driven by a motor. The motor continues to spin until the desired amount of food has been dispensed, indicated by a push-to-make switch (PTMS) that stops the motor when the correct quantity is reached.
                </li>
                <li>
                  <strong>Timing System:</strong> A 4060 IC is used to time the intervals between feedings. The system is calibrated to restart every 12 hours with a tolerance of ±3%, ensuring consistent feeding times.
                </li>
                <li>
                  <strong>Food Level Detection:</strong> A sensor in the bowl detects whether there is at least 40g of food remaining. If this threshold is met, the system will skip the next feeding cycle, preventing overfeeding.
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
        details: (
          <div>
            <h3>Project Overview</h3>
            <p>
              The F1 start light sequence was developed as my first A-Level electronics project and is designed to replicate the F1 start light sequence using a PIC16F88 programmed with Assembly. The light system follows the same order as the F1 start sequence, and includes switches to detect jump starts.
            </p>

            <h4>Project Specifications</h4>
            <ul>
              <li><strong>F1 Start Light Sequence:</strong> The project replicates the sequential illumination of 5 LEDs, simulating the start light countdown used in Formula 1 races, followed by a randomised "lights out" phase.</li>
              <li><strong>Programmable Timer Module System (PTMS):</strong> A jump start detection system using PTMS monitors if the "driver" (represented by a button press) reacts before the lights go out.</li>
              <li><strong>LED Display:</strong> The countdown is displayed using a set of 5 LEDs that light up sequentially, creating a visual cue for the race start.</li>
              <li><strong>Random Timing for Lights Out:</strong> The final phase, when the lights go out, is randomised to prevent users from predicting the timing, mimicking real-world unpredictability.</li>
            </ul>

            <h4>Research and Development</h4>
            <p>
              <strong>Assembly Language Programming:</strong> The system was programmed in Assembly for the PIC16F88 microcontroller. Key modules were developed to handle the timing sequences, randomisation logic, and jump start detection.
            </p>
            <p>
              <strong>PIC16F88 Microcontroller:</strong> The PIC16F88 was chosen for its versatility in handling timers and interrupts, which are crucial for replicating the precise timing needed for the start light sequence and jump start detection.
            </p>

            <h4>System Design and Implementation</h4>
            <ul>
              <li><strong>Countdown Sequence:</strong> The system controls 5 LEDs that light up sequentially, representing the countdown phase of the F1 start. Each LED turns on at a specific interval until all are lit.</li>
              <li><strong>Randomized Lights Out:</strong> After the final LED in the sequence is lit, a randomised timer determines when the lights go out, preventing users from memorizing the timing and improving realism.</li>
              <li><strong>Jump Start Detection:</strong> The PTMS is used to monitor for jump starts by detecting any button presses before the lights go out. If a premature start is detected, an alert is triggered, and the race is flagged as invalid.</li>
              <li><strong>Driver Feedback:</strong> The system can trigger visual or auditory signals to indicate a jump start, providing feedback to the user about their timing and reaction accuracy.</li>
            </ul>

            <h4>Testing and Evaluation</h4>
            <p>
              The system was tested extensively to ensure accurate timing of the LED sequence and to validate the jump start detection feature. The random timer for lights out was adjusted to provide unpredictable delays while maintaining fairness. The system successfully detected jump starts, and all LEDs responded correctly during the countdown phase.
            </p>

            <h4>User Guide</h4>
            <p>To use the F1 start light sequence system:</p>
            <ol>
              <li>Power on the system and wait for the LED sequence to begin, simulating the F1 race start lights.</li>
              <li>Watch as the 5 LEDs light up sequentially, representing the countdown to the start of the race.</li>
              <li>After the final light is lit, the system will randomly trigger the "lights out" phase, indicating the start of the race.</li>
              <li>If a jump start (premature button press) is detected, an alert will be triggered, indicating a false start.</li>
            </ol>
            <p>
              The system is designed to offer a realistic simulation of the F1 start sequence, with randomisation ensuring that the lights out timing is different for each use.
            </p>
          </div>
        ),
        recommended: false
    },
    { id: 3, title: 'Designing a guitar tuner using Assembly',
        description: 'Assembly program for frequency detection using the PIC16F88 and an aux input.',
        image: 'images/guitar-tuner.jpg',
        details: (
          <div>
          <h3>Project Overview</h3>
          <p>
            The Guitar Tuner was developed as my final A-Level electronics project, aimed at providing a reliable and accurate solution for guitarists to tune their instruments. The tuner works by amplifying the signal received from a guitar and analysing the frequency to determine whether the guitar is in tune. The device features a visual output that indicates whether the note being played is sharp, flat, or correctly tuned. This project combines analog and digital electronics to deliver a precise and user-friendly tuning experience.
          </p>

          <h4>Project Specifications</h4>
          <ul>
            <li>
              <strong>Tuning Frequencies:</strong> The tuner is optimised for the A string at 110Hz but can also tune for G (98Hz) and B (123.47Hz) notes. The device automatically detects whether the note is sharp or flat within a tolerance of ±1Hz.
            </li>
            <li>
              <strong>Visual Indicators:</strong> Three LEDs are used to display whether the note is sharp, flat, or in tune. The tuner filters out frequencies above 200Hz and uses a Schmitt inverter to convert the input signal into a square wave suitable for digital processing.
            </li>
            <li>
              <strong>Signal Amplification:</strong> The signal received from the guitar is amplified by a gain of 220, ensuring that it is clearly detected by the filters and subsequent processing stages.
            </li>
          </ul>

          <h4>Research and Development</h4>
          <p>
            <strong>Initial Research:</strong> Extensive research was conducted on the frequency ranges of guitar notes to ensure accurate tuning. The project utilised resources on music theory and electronics to design a system that can detect small frequency variations and provide precise feedback to the user.
          </p>
          <p>
            <strong>Signal Processing:</strong> The tuner includes a low-pass Sallen-Key filter to attenuate unwanted high frequencies, and a Schmitt inverter to convert the analog signal into a digital one. This digital signal is then processed by a PIC16F88 microcontroller to determine the correct LED output based on the detected frequency.
          </p>

          <h4>Circuit Design and Sub-Systems</h4>
          <ul>
            <li>
              <strong>Pre-Amplifier:</strong> The pre-amplifier stage increases the input signal's voltage to a detectable level, with a focus on amplifying frequencies below 200Hz. This stage is crucial for ensuring that the signal is strong enough for further processing.
            </li>
            <li>
              <strong>Low-Pass Filter:</strong> The Sallen-Key low-pass filter is designed to pass frequencies up to 200Hz, while attenuating any higher frequencies. This ensures that the tuner only processes the relevant guitar signals.
            </li>
            <li>
              <strong>Schmitt Inverter:</strong> This sub-system converts the amplified and filtered analog signal into a digital square wave, which is then processed by the microcontroller to determine the frequency and control the LED indicators.
            </li>
          </ul>

          <h4>Testing and Evaluation</h4>
          <p>
            The circuit was rigorously tested with a variety of input frequencies to ensure accurate tuning. The LED indicators reliably displayed the correct tuning status, and the overall system was evaluated against the initial specifications. The tuner met all key performance criteria, including frequency detection accuracy and signal amplification.
          </p>
          <p>
            An evaluation revealed that while the system performed well, potential improvements could include expanding the frequency range to tune additional strings and implementing a more sophisticated user interface, such as a 7-segment display.
          </p>
          
          <h4>User Guide</h4>
          <p>
            To use the guitar tuner, follow these steps:
          </p>
          <ol>
            <li>Connect the circuit to a 5V power supply.</li>
            <li>Plug your electric guitar into the tuner using an auxiliary cable.</li>
            <li>Strum the A string, and observe the LEDs to determine whether the note is in tune.</li>
            <li>Adjust the tuning until the correct LED lights up, indicating that the string is perfectly tuned.</li>
          </ol>
          <p>
            Ensure that the circuit is oriented correctly according to the LED indicators for accurate tuning feedback.
          </p>
        </div>
        ),
        recommended: false 
    },
    { id: 4, title: 'Developing an autonomous line-following robot with computer vision',
        description: 'Development of embedded software and hardware to control a vehicle with 4 motors.',
        image: 'images/autonomous-vehicle.jpg',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            The project "Development of a Computer Vision System for an Autonomous Vehicle" focuses on creating a reliable and functional computer vision system capable of line following and symbol recognition. The aim is to apply techniques such as color and contour detection to automate vehicle navigation. The system uses Raspberry Pi for image processing and control, alongside Arduino boards for hardware integration, enabling the vehicle to navigate through an unknown course without human intervention.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li>
              <strong>Line Following:</strong> The system uses a camera connected to a Raspberry Pi to detect a black line on the course. OpenCV is employed to process the image, extract the required line, and follow it by controlling the vehicle’s motors accordingly.
            </li>
            <li>
              <strong>Symbol Recognition:</strong> The robot uses image recognition to identify symbols along the track, allowing it to switch to different sub-routines like distance measurement or colored line following.
            </li>
            <li>
              <strong>Hardware Integration:</strong> The project incorporates Raspberry Pi for processing, multiple Arduino Nanos for motor control and sensor management, and additional components like servos and ultrasonic sensors.
            </li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Computer Vision:</strong> The project makes use of the OpenCV library to develop line following and symbol recognition functions. Color detection and contour identification are the primary methods used to differentiate between objects and navigate the course.
          </p>
          <p>
            <strong>Hardware Architecture:</strong> A combination of Raspberry Pi and Arduino Nanos allows for effective division of tasks. The Raspberry Pi handles the vision and high-level decision-making processes, while the Arduinos manage motor control, sensor inputs, and sub-system tasks.
          </p>
        
          <h4>Circuit Design and Sub-Systems</h4>
          <ul>
            <li>
              <strong>Servo Control:</strong> A servo motor rotates the camera between ground-facing for line following and forward-facing for symbol recognition.
            </li>
            <li>
              <strong>Audio Amplifier:</strong> An LM386 IC is used to amplify audio output from the Raspberry Pi, providing sound feedback for certain sub-systems like distance and incline measurement.
            </li>
            <li>
              <strong>Level Shifter:</strong> A bi-directional logic level converter ensures safe communication between the Raspberry Pi (3.3V) and Arduino Nanos (5V) over I2C.
            </li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The system was tested on a lab-created course simulating real-world road conditions. The vehicle was able to follow the black line successfully and perform symbol recognition tasks. Additional sub-systems such as distance measurement, shape detection, and colored line following were implemented and tested.
          </p>
          <p>
            The vehicle was rated Level 4 on the SAE scale of autonomy due to its ability to perform without human input, though it requires pre-defined lines and symbols to function.
          </p>
          
          <h4>User Guide</h4>
          <p>
            To operate the autonomous vehicle, follow these steps:
          </p>
          <ol>
            <li>Ensure that the Raspberry Pi and Arduinos are properly powered and connected.</li>
            <li>Place the vehicle on the course with the camera facing the ground to detect the starting line.</li>
            <li>The vehicle will follow the black line automatically. When it detects a symbol, it will adjust its behavior based on the symbol recognised.</li>
            <li>Ensure that all sub-systems such as the servo and sensors are functioning correctly before starting the course.</li>
          </ol>
          <p>
            The system should successfully follow the course, recognizing symbols and adjusting accordingly to complete the tasks autonomously.
          </p>

          <h4>Project Repository</h4>
          <p>
            The full project, including the source code and documentation, can be found on GitHub <a href="https://github.com/henrysg1/autonomous-vehicle-with-cv" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

        </div>
        ),
        recommended: true
    },
    { id: 5, title: 'Developing a fully controlled Two Switch Forward Converter',
        description: 'Two Switch Forward Converter with a regulated output voltage',
        image: 'images/converter-pcb.png',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            This project focuses on the design and analysis of a 2-Switch Forward Converter. The converter is designed to meet specific input and output requirements and is tested under both ideal and non-ideal conditions using PLECS simulation software. This project explores both theoretical calculations and practical simulations, addressing real-world challenges such as parasitic components, transformer windings resistance, and Equivalent Series Resistance (ESR) in capacitors. These factors are analysed to highlight the impact of non-ideal components on converter performance.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li>
              <strong>Input and Output:</strong> The converter operates with an input voltage of 35V DC (or 230V AC stepped down) and outputs 15V DC with a peak-to-peak voltage ripple of 0.25V.
            </li>
            <li>
              <strong>Switching Frequency and Duty Cycle:</strong> The system operates with a switching frequency of 100kHz and a duty cycle of 0.4.
            </li>
            <li>
              <strong>Component Selection:</strong> The converter is designed with a transformer, output filter inductor (90µH), and output filter capacitor (5µF). Both ideal and non-ideal components are tested to observe performance variations.
            </li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Simulation and Testing:</strong> The project explores simulation results using both ideal components (with negligible parasitics) and non-ideal components to more accurately model real-world conditions. Non-ideal diodes, transistors, and capacitors were used to reflect actual component behavior.
          </p>
          <p>
            <strong>Ripple Reduction:</strong> Through testing, it was observed that increasing the inductance significantly reduced the voltage ripple, demonstrating that voltage ripple is inversely proportional to inductance.
          </p>
        
          <h4>Circuit Design and Sub-Systems</h4>
          <ul>
            <li>
              <strong>Ideal Component Simulation:</strong> The ideal circuit was simulated to determine the baseline performance, where nearly perfect output was achieved. Voltage ripple was minimal, and the output was close to the theoretical 15V.
            </li>
            <li>
              <strong>Non-Ideal Component Simulation:</strong> Simulations with non-ideal components revealed a voltage drop and an increased ripple, highlighting the effect of parasitic resistances and on-state voltage of components.
            </li>
            <li>
              <strong>AC Input Conversion:</strong> A step-down transformer was used to convert 230V AC to 30V AC, which was then rectified to provide DC voltage for the converter.
            </li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The results from simulations under both ideal and non-ideal conditions indicated a performance difference due to component parasitics. When ideal components were used, output values were near perfect. However, introducing real-world factors such as on-state resistance, forward voltage, and ESR resulted in lower output voltage and higher ripple.
          </p>
          <p>
            The AC input simulation showed a larger voltage ripple compared to the DC input simulation, further demonstrating the challenges posed by real-world component limitations.
          </p>
          
          <h4>User Guide</h4>
          <p>
            To use the 2-Switch Forward Converter system, follow these steps:
          </p>
          <ol>
            <li>Ensure the input voltage is set to either 35V DC or a 230V AC stepped down through a transformer.</li>
            <li>Monitor the output to ensure the voltage is stable at approximately 15V with a voltage ripple below 0.25V.</li>
            <li>If using non-ideal components, ensure proper cooling and monitoring of the system to avoid excessive voltage drops or ripple.</li>
          </ol>
          <p>
            The converter system should function as designed under normal load conditions, with the output voltage maintaining the specified levels based on the provided input.
          </p>
        </div>
        ),
        recommended: false
    },
    { id: 6, title: 'Doppler radar based speed detector',
        description: 'Frequency detection project using FFT with an STM32 board.',
        image: 'images/doppler-radar.png',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            The Doppler-Radar Speed Detection System explores the use of analog filters in a radar-based speed detection system. The project involves the design and implementation of multiple-order filters, such as Butterworth and Chebyshev filters, in combination with an STM32 microcontroller to process signals from a Doppler radar sensor. The system analyses frequency shifts caused by moving objects, calculating their speed by filtering out noise and isolating the relevant Doppler frequency components.
          </p>
          
          <h4>Project Specifications</h4>
          <ul>
            <li>
              <strong>Filter Types:</strong> The system utilises various filters, including Butterworth and Chebyshev filters, to process signals from the radar. These filters are chosen for their unique properties, such as smooth pass-band characteristics in Butterworth filters and rapid roll-off in Chebyshev filters, to enhance the accuracy of speed detection.
            </li>
            <li>
              <strong>Signal Processing Goals:</strong> The filters are designed to remove unwanted noise and low-frequency components, isolating the Doppler-shifted signal corresponding to the speed of a moving object.
            </li>
            <li>
              <strong>Component Integration:</strong> The project integrates an STM32 microcontroller with radar sensors, utilising the filters for real-time signal processing to compute the speed of objects based on frequency shifts.
            </li>
          </ul>
          
          <h4>Research and Development</h4>
          <p>
            <strong>Filter Analysis:</strong> The project investigates the role of different filters in signal processing for Doppler radar systems. Butterworth filters are used for their smooth frequency response, while Chebyshev filters are selected for sharper roll-off to more precisely isolate Doppler frequencies.
          </p>
          <p>
            <strong>Signal Simulation and Testing:</strong> Various simulations and tests were conducted to ensure that the filters effectively process radar signals. Both AC and transient response simulations were used to evaluate how well the filters isolate the Doppler frequency shifts needed to measure speed accurately.
          </p>
          
          <h4>Circuit Design and Component Integration</h4>
          <ul>
            <li>
              <strong>Filter Design:</strong> The design of the filters, including component selection, was critical to achieving the desired cutoff frequencies. The filter design focused on separating noise from the Doppler signal, ensuring accurate frequency detection.
            </li>
            <li>
              <strong>STM32 Integration:</strong> The STM32 microcontroller was programmed to receive filtered radar data and calculate the object's speed in real time, based on the frequency shift detected by the radar system.
            </li>
            <li>
              <strong>Testing Results:</strong> Simulations and real-world tests demonstrated the filter’s ability to isolate relevant frequencies for accurate speed detection, meeting the system's performance requirements.
            </li>
          </ul>
          
          <h4>Testing and Evaluation</h4>
          <p>
            The Doppler radar system was tested with a variety of objects moving at different speeds to evaluate the filter’s performance. The filters effectively attenuated noise and unwanted frequencies, allowing the STM32 to accurately compute the speed of objects based on Doppler shifts. Both simulation and hardware testing confirmed the system’s reliability and accuracy.
          </p>
          
          <h4>Conclusion</h4>
          <p>
            The project successfully integrates analog filters with a Doppler radar and STM32 microcontroller for speed detection. The filter designs are validated through simulations and tests, proving their effectiveness in isolating Doppler frequencies and enabling accurate speed measurements. This project highlights the importance of proper filter design in real-world applications such as radar-based speed detection systems.
          </p>
        </div>        
        ),
        recommended: false
    },
    { id: 7, title: 'E-Recycle',
      description: 'A web app to make recycling easier',
      image: 'images/e-recycle.png',
      details: (<div>
        <h3>Project Overview</h3>
        <p>
          The E-Recycle project is a mobile application designed to assist users in correctly identifying and sorting recyclable materials based on their local council’s guidelines. The app uses advanced computer vision and machine learning to scan barcodes and recycling symbols, providing tailored guidance on how to dispose of products. By integrating location data, E-Recycle cross-references the scanned product with local recycling policies, ensuring users are informed of the correct recycling procedure.
        </p>
      
        <h4>Project Specifications</h4>
        <ul>
          <li>
            <strong>Scanning Technology:</strong> E-Recycle leverages the device's camera to scan barcodes and recycling symbols, identifying the material composition of a product. It uses machine learning to improve symbol recognition and ensure accuracy over time.
          </li>
          <li>
            <strong>Local Recycling Policies:</strong> The app identifies the user's local council through location services and retrieves the appropriate recycling information using an API. This ensures that users receive location-specific guidance on which bins to use.
          </li>
          <li>
            <strong>Database and Updates:</strong> If a product’s barcode is not in the database, users can manually input the product details, contributing to the database expansion. The app regularly updates to include the latest recycling regulations and product information.
          </li>
        </ul>
      
        <h4>Research and Development</h4>
        <p>
          <strong>Machine Learning Integration:</strong> The app uses machine learning algorithms to enhance the recognition of recycling symbols. The system is trained with a wide array of images to recognize even partial or damaged symbols, making it highly reliable in real-world scenarios.
        </p>
        <p>
          <strong>API Integration:</strong> E-Recycle’s functionality is strengthened by its API that interacts with local council databases to provide up-to-date recycling policies. This integration allows the app to dynamically adjust its recommendations based on any changes in local recycling rules.
        </p>
      
        <h4>Circuit Design and Sub-Systems</h4>
        <ul>
          <li>
            <strong>Symbol Recognition:</strong> The core feature of the app is its ability to scan and recognize recycling symbols on products. This process involves analyzing the captured image using computer vision techniques, detecting shapes, and extracting meaningful data.
          </li>
          <li>
            <strong>Barcode Scanning:</strong> Barcodes are scanned and referenced against a central database, allowing the app to retrieve material information about the product. If the barcode is not recognized, users are prompted to contribute by entering the material details.
          </li>
          <li>
            <strong>Local Data Cross-Referencing:</strong> After identifying a product, the app uses the user’s location to pull recycling guidelines specific to their area. This ensures that the recycling advice provided is accurate and locally relevant.
          </li>
        </ul>
      
        <h4>Testing and Evaluation</h4>
        <p>
          The app has been tested across multiple devices and operating systems to ensure compatibility and accuracy of its scanning and recognition features. Real-world tests were conducted with a variety of recycling symbols and barcodes to confirm the robustness of the system in various lighting and environmental conditions.
        </p>
        <p>
          Evaluation of the machine learning model showed significant improvement in symbol recognition after training on a diverse dataset. The API integration was also validated, ensuring seamless retrieval of local recycling policies based on the user’s location. Further training will be needed before the application is ready for public release.
        </p>
        
        <p>
          E-Recycle will guide you through the correct disposal process for each scanned product, ensuring compliance with local recycling rules.
        </p>
      </div>
      ),
      recommended: false
    },
    { id: 8, title: "DC-DC Converter PCB",
        description: "DCDC converter PCB for the University of Nottingham's solar racing car",
        image: 'images/dcdc-pcb.png',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            This project focuses on the design and development of a highly efficient DC-DC converter for the University of Nottingham's solar race car. The converter is designed to step down the vehicle's battery voltage from 600V to 12V, enabling the safe and efficient powering of low-voltage components within the car. The design prioritises compactness, efficiency, thermal management and safety, incorporating features like overvoltage and overcurrent protection, along with thermal shutdown.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li><strong>Input Voltage:</strong> 600V</li>
            <li><strong>Output Voltage:</strong> 12V</li>
            <li><strong>Output Current:</strong> Up to 50A</li>
            <li><strong>Efficiency:</strong> Greater than 90%</li>
            <li><strong>Protection:</strong> Overvoltage, Overcurrent, Thermal Shutdown</li>
            <li><strong>Compact PCB Design:</strong> Optimised for space and efficiency, while compensating for thermal effects</li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Design and Simulation:</strong> The converter design, implemented using KiCad, has undergone thorough testing and verification in the solar car to ensure functionality and performance. The schematic and PCB layout are optimised for efficient energy conversion and high current handling.
          </p>
          <p>
            <strong>Component Selection:</strong> The design incorporates high-quality components, including inductors, capacitors, and fuses, to ensure smooth operation and protect both the input and output stages. Modules like the DCM3623T5N13B4T00 DC-DC converter are key to handling the conversion from high to low voltage.
          </p>
        
          <h4>Circuit Design and Sub-Systems</h4>
          <ul>
            <li><strong>Input Section:</strong> Includes connectors and fuses to handle and protect the high-voltage 600V input.</li>
            <li><strong>Relay Control:</strong> A relay and diode system manages the activation of the converter, with additional protection against voltage spikes.</li>
            <li><strong>Primary Conversion Stage:</strong> LC filters and current-sensing resistors smooth the input voltage before the main conversion takes place.</li>
            <li><strong>Output Section:</strong> Further filters stabilise the 12V output with inductors, capacitors, and fuses to ensure safe and reliable power delivery.</li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The PCB design has been successfully manufactured, tested, and implemented in the solar car. The system has been verified to work as intended, with an efficiency of over 90%, meeting the design goals of the project. Key considerations such as trace widths, thermal management, and voltage isolation have been optimised to handle the high-current demands and ensure reliable operation in the race environment.
          </p>
        
          <h4>User Guide</h4>
          <p>To work with the design files:</p>
          <ol>
            <li>Clone the repository from GitHub and navigate to the project directory.</li>
            <li>Open the schematic and PCB layout files in a nightly development build of KiCad (version 6.99).</li>
            <li>Include the component files located in the 'Component Files' folder for successful rendering of the design.</li>
            <li>Review the schematic and PCB layout to understand the system’s design and functionality before manufacturing.</li>
          </ol>
          <p>The system should function as expected, delivering stable 12V output for low-voltage components in the solar car.</p>
          
          <h4>License</h4>
          <p>
            This project is licensed under the MIT License.
          </p>
          
          <h4>Acknowledgments</h4>
          <p>
            Special thanks to the University of Nottingham Solar Race Team and the KiCad Community for their support and contributions.
          </p>

          <h4>Project Repository</h4>
          <p>
            The full project, including the design files and documentation, can be found on GitHub <a href="https://github.com/henrysg1/solar-car-dcdc" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

        </div>
        ),
        recommended: true
    },
    { id: 9, title: 'Strategic energy management system for a solar racing car',
        description: "An optimised prediction model for the University of Nottingham's solar car",
        image: 'images/solar-car-diagram.png',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            The project "Strategic Energy Management System for the Solar Racing Car" focuses on designing an advanced energy management system for the University of Nottingham’s solar race car. The system is developed to optimise energy consumption during the 2023 Bridgestone World Solar Challenge. It calculates the optimal speed and energy use based on pre-existing data, such as terrain and weather conditions, while adjusting strategies in real time using sensor data collected during the race. The goal is to ensure the car completes the race as efficiently as possible without exhausting energy resources.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li><strong>Input Data:</strong> The system integrates real-time data from sensors, including solar energy input, wind speed, and road slope, with pre-race data for accurate prediction and real-time adjustments.</li>
            <li><strong>Prediction Model:</strong> A predictive model that calculates the optimal speed and strategy based on terrain and solar input data before the race starts.</li>
            <li><strong>Real-Time Model:</strong> This model uses live sensor data from the car to update strategies and adjust speed and energy consumption dynamically during the race.</li>
            <li><strong>Communication System:</strong> Utilises a communication link between the solar car and a chase car for real-time data sharing and strategy updates.</li>
            <li><strong>Driver Interface:</strong> A dashboard display provides the driver with critical information such as optimal speed, state-of-charge (SoC), and other performance metrics.</li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Energy Management System (EMS):</strong> The EMS was designed based on research into solar-powered battery electric vehicles (BEVs) and the integration of various sensors and microcontrollers for real-time data collection. The system calculates key performance metrics such as aerodynamic drag, rolling resistance, and power consumption using the drivetrain model.
          </p>
          <p>
            <strong>Predictive Modeling:</strong> The prediction model estimates energy consumption and solar energy input throughout the race, taking into account factors like road conditions, wind speed, and vehicle dynamics.
          </p>
        
          <h4>Hardware Design and Implementation</h4>
          <ul>
            <li><strong>Microcontroller Integration:</strong> The system uses an ESP32 microcontroller for communication and control, handling data from sensors and interacting with the real-time model during the race.</li>
            <li><strong>Sensors:</strong> Various sensors, including light level sensors, anemometers, and accelerometers, are used to collect real-time data about the vehicle's environment and performance.</li>
            <li><strong>Driver Display:</strong> The system features an LCD display that shows real-time data to the driver, including speed, energy consumption, and state-of-charge.</li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The system was rigorously tested with a prototype solar car module, focusing on the accuracy of the predictive and real-time models. Simulations were conducted to ensure the energy management system would function optimally under different environmental conditions, such as varying sunlight and wind resistance.
          </p>
          <p>
            The EMS successfully adjusted speed and energy strategies in real-time, helping the vehicle maintain efficiency while ensuring it could complete the race without depleting energy reserves.
          </p>
        
          <h4>User Guide</h4>
          <p>To operate the energy management system during the race:</p>
          <ol>
            <li>Ensure all sensors are properly connected and powered.</li>
            <li>Monitor the driver's dashboard for real-time feedback on speed and energy consumption.</li>
            <li>The system will adjust the optimal speed based on real-time data to maximize efficiency and minimize energy use.</li>
            <li>Use the predictive model to establish an initial strategy, then rely on real-time adjustments throughout the race.</li>
          </ol>
          <p>
            The system is designed to help the solar car achieve the best performance while maintaining energy efficiency throughout the entire race course.
          </p>

          <h4>Project Repository</h4>
          <p>
            The full project, including the source code and documentation, can be found on GitHub <a href="https://github.com/henrysg1/solar-race-strategy" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

        </div>
        ),
        recommended: true
    },
    { id: 10, title: 'Prosthetic arm control system using EMG sensors',
        description: 'A PCB and Microcontroller project used to control a prosthetic arm',
        image: 'images/emg-board.jpg',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            This project focuses on designing a fully functional prosthetic arm powered by Electromyographic (EMG) signals. The project includes the development of a printed circuit board (PCB) that integrates various sensors, microcontrollers, and power systems. This prototype aims to replicate the functionality of earlier breadboard designs, with improvements such as a dedicated battery system and enhanced modularity.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li><strong>Battery System:</strong> A 7.4V lithium-ion battery system is used to power the PCB, supporting components such as the Arduino Nano, Servo Driver, and EMG signal sensor.</li>
            <li><strong>Schematic and PCB Design:</strong> The system includes custom-designed footprints for components like the EMG sensor and servos. The PCB is designed with appropriate traces and includes a comprehensive schematic showing all connections.</li>
            <li><strong>Modularity:</strong> The PCB allows for modularity by using package holders and headers for key components, enabling replacement or upgrades as necessary.</li>
            <li><strong>Testing and Validation:</strong> After populating the PCB, functionality tests were performed to validate design choices and identify areas for improvement in future revisions.</li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Battery and Power Management:</strong> The project implements a 7.4V Li-Ion battery system for mobility and recharging capabilities. A power management system using the DFRobot DFR0564 IC ensures efficient energy use, with a power switch added to conserve battery life when the prosthetic is not in use.
          </p>
          <p>
            <strong>Single to Dual Supply IC:</strong> A MAX1044 IC is employed to convert the 7.4V battery voltage into a ±7.4V dual supply, providing the necessary voltage for the EMG signal sensor to operate effectively.
          </p>
        
          <h4>Component Integration and Design Considerations</h4>
          <ul>
            <li><strong>EMG Signal Sensor:</strong> The Walfront EMG sensor captures muscle signals and converts them into control signals for the prosthetic arm. The PCB was designed to minimise noise and ensure high signal quality by using short, thin traces and ground planes to reduce interference.</li>
            <li><strong>Arduino Nano:</strong> This microcontroller powers the system and connects to various input/output devices, such as the EMG sensor, RGB LED, and servo motor driver.</li>
            <li><strong>PCA9685 Servo Driver:</strong> A servo driver allows the prosthetic to control multiple servos via pulse-width modulation (PWM). It is integrated into the system to drive the prosthetic’s motor movements.</li>
            <li><strong>RGB LED and Button:</strong> The RGB LED provides visual feedback on system status, while the button allows users to change operation modes. Both components are connected to the Arduino Nano for easy programmability.</li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The prototype underwent a series of tests to validate its battery, EMG sensor, and other components. The battery system was tested for charging and discharge efficiency, while the EMG signal sensor was evaluated for signal accuracy and resilience to noise. Additionally, the RGB LED and button were tested for responsiveness and integration with the rest of the system.
          </p>
          <p>
            Some issues with component footprints and alignment were noted during the testing phase, providing valuable feedback for future revisions of the PCB.
          </p>
        
          <h4>Future Considerations</h4>
          <p>
            Suggestions for future revisions include adjustments to the footprints of certain components for better fit, improved power switch operation, and enhanced modularity of the PCB layout. Considerations such as adding thermal vias and optimising the board for improved heat dissipation are also recommended.
          </p>
        
          <h4>User Guide</h4>
          <p>To set up and use the prosthetic arm prototype:</p>
          <ol>
            <li>Ensure all components, such as the battery and EMG sensor, are properly connected.</li>
            <li>Upload the demo code to the Arduino Nano via a USB cable.</li>
            <li>Attach the electrodes to the desired muscle group, connect to the EMG sensor, and power on the system using the switch.</li>
            <li>The system will operate based on the muscle signals, with the RGB LED providing visual feedback.</li>
          </ol>
          <p>For optimal performance, follow the provided charging instructions and handle the prototype with care, as outlined in the documentation.</p>
        </div>
        ),
        recommended: true
    },
    { id: 11, title: 'Simple calculator using a Basys 3 FPGA board',
        description: 'A simple calculator implemented on a Basys 3 FPGA board using VHDL',
        image: 'images/vhdl-calculator.jpg',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            The simple project focuses on implementing a basic calculator that can perform arithmetic operations such as addition, subtraction, multiplication, and division. The calculator is programmed using VHDL (VHSIC Hardware Description Language) and operates on binary numbers selected through switches on the Basys 3 FPGA development board. The results of the operations are displayed on the board's 7-segment displays. The system supports both positive and negative numbers and ensures that results are saturated when the values exceed the displayable range.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li><strong>Input Format:</strong> The calculator accepts binary input via the switches located at the bottom of the Basys 3 board, with numbers entered in base-2 format.</li>
            <li><strong>Operations Supported:</strong> The calculator can perform addition, subtraction, multiplication, and division on two binary numbers. Both positive and negative numbers are supported.</li>
            <li><strong>7-Segment Display:</strong> The result of the operations is shown on the four 7-segment displays, which update in real-time as the switches are adjusted or operations are selected.</li>
            <li><strong>Saturation Handling:</strong> If the result of the arithmetic operation exceeds the display range, the calculator will saturate, displaying the maximum or minimum value that the display can handle.</li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>VHDL Design:</strong> The calculator is programmed in VHDL, with modules developed to handle input decoding, arithmetic operations, and 7-segment display control. The binary numbers selected by the switches are fed into the appropriate arithmetic unit, and the results are processed and displayed.
          </p>
          <p>
            <strong>Basys 3 FPGA:</strong> The Basys 3 board’s FPGA (Xilinx Artix-7) serves as the primary processing unit for this project. The board's switches allow users to select binary numbers, and a set of buttons can be used to control the arithmetic operations. The 7-segment displays are driven by an output controller that updates based on the selected operation.
          </p>
        
          <h4>System Design and Implementation</h4>
          <ul>
            <li><strong>Input Selection:</strong> The bottom switches on the Basys 3 board are used to select two binary numbers in base-2 format. Each switch position represents a bit in the number, allowing for real-time input adjustments.</li>
            <li><strong>Operation Control:</strong> The arithmetic operation (addition, subtraction, multiplication, or division) is selected using dedicated buttons on the board. The VHDL design ensures that the correct operation is performed based on button presses.</li>
            <li><strong>Result Display:</strong> The 7-segment displays on the Basys 3 board show the current result of the arithmetic operation. The display is updated dynamically as new inputs or operations are selected.</li>
            <li><strong>Saturation Logic:</strong> Saturation is implemented to prevent overflow when the result exceeds the display's capability. The system caps the result at the maximum or minimum possible value when this occurs.</li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The system was tested on the Basys 3 board with various combinations of binary inputs and arithmetic operations. The results were displayed correctly on the 7-segment displays, with the saturation logic ensuring that overflow results were handled appropriately. Positive and negative numbers were also tested to ensure the system's ability to handle signed arithmetic operations.
          </p>
        
          <h4>User Guide</h4>
          <p>To use the VHDL-based calculator on the Basys 3 board:</p>
          <ol>
            <li>Use the bottom switches to select the binary representation of the numbers you want to calculate.</li>
            <li>Select the desired operation (addition, subtraction, multiplication, or division) using the designated buttons on the board.</li>
            <li>The result of the operation will be displayed on the 7-segment display in real-time.</li>
            <li>If the result exceeds the maximum displayable value, the output will be saturated to the highest or lowest possible value.</li>
          </ol>
          <p>
            The calculator is designed to be simple and intuitive, providing users with immediate feedback as they adjust inputs or change operations.
          </p>
        </div>
        ),
        recommended: false
    },
    { id: 12, title: 'Mission Control Software framework for a CubeSat application',
        description: 'A framework for CubeSat teams to use to track and communicate with their satellite',
        image: 'images/cubesat-mission.png',
        details: (<div>
          <h3>Project Overview</h3>
          <p>
            My final year thesis project, "Developing an Open-Source Mission Control Software Framework to Communicate with a CubeSat", focuses on designing a mission control software (MCS) solution for CubeSat missions. The MCS framework is developed to be an open-source, cost-effective alternative to existing proprietary mission control systems, offering scalability, flexibility, and ease of integration for small space teams. The framework follows the Packet Utilisation Standard (PUS), widely adopted for satellite communications, and integrates support for the AstroDev Lithium-2 radio and a custom satellite emulator for testing and validation purposes.
          </p>
        
          <h4>Project Specifications</h4>
          <ul>
            <li><strong>Platform-Agnostic:</strong> The MCS framework is compatible with Windows, Linux, and macOS, supporting multiple operating systems to cater to diverse mission teams.</li>
            <li><strong>Telecommand and Telemetry Handling:</strong> It processes commands and telemetry data according to the Packet Utilisation Standard (PUS), enabling robust communication between the ground station and satellite.</li>
            <li><strong>Satellite Emulator:</strong> A satellite emulator replicates CubeSat behavior, allowing pre-launch testing of mission operations, including command and telemetry exchanges.</li>
            <li><strong>AstroDev Lithium-2 Integration:</strong> The system supports communication with the AstroDev Lithium-2 radio, commonly used in CubeSat missions, to facilitate real-time data transmission between ground stations and satellites.</li>
            <li><strong>Security Features:</strong> The MCS includes role-based access controls to ensure only authorized users can perform critical operations, adding a layer of security to satellite management.</li>
          </ul>
        
          <h4>Research and Development</h4>
          <p>
            <strong>Packet Protocol and Data Handling:</strong> The framework adheres to the PUS and CCSDS standards, enabling structured data communication between ground control and satellite systems. Custom packet protocols were initially explored but eventually replaced by the CCSDS standard for better compatibility and performance.
          </p>
          <p>
            <strong>Satellite Emulation:</strong> A satellite emulator was developed to simulate the behavior of a CubeSat in orbit. It allows for comprehensive testing of mission control systems, covering aspects such as telemetry reception, command execution, and error handling under realistic conditions.
          </p>
        
          <h4>System Design and Implementation</h4>
          <ul>
            <li><strong>Mission Database (MDB):</strong> The MCS framework includes a mission database that catalogs commands, telemetry, and mission parameters. The database supports real-time data processing and alerts.</li>
            <li><strong>Command and Telemetry Processing:</strong> The system implements a custom pre- and post-processing architecture for handling data packets, ensuring accurate command transmission and telemetry monitoring.</li>
            <li><strong>Web Hosting:</strong> The framework is hosted on a public cloud server, allowing remote access to the MCS by multiple stakeholders, including international collaboration teams.</li>
            <li><strong>File Transfer Protocol:</strong> The CCSDS File Delivery Protocol (CFDP) is implemented to support reliable file transfers between the ground station and satellite, ensuring error checking and recovery during transmission.</li>
          </ul>
        
          <h4>Testing and Evaluation</h4>
          <p>
            The MCS framework was tested using a simulated satellite environment, ensuring that commands could be sent and telemetry received successfully. Unit, integration, and scenario testing were performed to validate the robustness of the system. Real-time testing with the AstroDev Lithium-2 radio ensured successful communication between the ground station and satellite emulator.
          </p>
        
          <h4>Future Considerations</h4>
          <p>
            Future work includes extending support for additional PUS commands and completing the implementation of the CCSDS File Delivery Protocol (CFDP) for enhanced file handling. Further testing in real-world mission scenarios will be required to ensure system reliability during live space operations.
          </p>
        
          <h4>User Guide</h4>
          <p>To set up and use the mission control software framework:</p>
          <ol>
            <li>Clone the software repository from GitHub and install the required dependencies.</li>
            <li>Configure the Mission Database (MDB) using YAML files based on mission-specific telemetry and command parameters.</li>
            <li>Set up the AstroDev Lithium-2 radio and establish communication with the ground station.</li>
            <li>Use the web interface to send commands and monitor real-time telemetry data from the satellite or emulator.</li>
          </ol>
          <p>For detailed instructions on system setup and usage, refer to the project documentation included in the repository.</p>
        
          <h4>License</h4>
          <p>
            This project is licensed under the GPL-3.0 License.
          </p>
          
          <h4>Acknowledgments</h4>
          <p>
            Special thanks to the University of Nottingham's WormSail and AstroJam space teams.
          </p>

          <h4>Project Repository</h4>
          <p>
            The full project, including the source code and documentation, can be found on GitHub <a href="https://github.com/henrysg1/CubeSatMCS" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        
        </div>
        ),
        recommended: true
    },
    { id: 13, title: 'CookCompanion',
      description: 'An interactive tablet to make cooking easier and more interactive',
      image: 'images/cook-companion.jpg',
      details: (<div>
        <h3>Project Overview</h3>
        <p>
          The "CookCompanion" project is a smart cooking assistant built on an ESP32 with a 7-inch touch display using the LVGL graphics library. The device is designed to fetch and display recipes from a remote database via an API, offering step-by-step interactive instructions to help users follow recipes with ease. The project aims to make cooking more engaging and organised by providing additional features such as recipe favouriting, shopping list generation, and recipe rating. The application is developed in C, with ongoing work to add more functionality and refine the user interface.
        </p>
        
        <h4>Project Specifications</h4>
        <ul>
          <li>
            <strong>ESP32 and Touch Display:</strong> The project uses an ESP32 microcontroller paired with a 7-inch touch display, leveraging the LVGL library for a user-friendly graphical interface.
          </li>
          <li>
            <strong>Recipe Database and API:</strong> CookCompanion connects to an online recipe database via an API to fetch and display a wide variety of recipes. The API allows real-time fetching of recipe details, including ingredients, instructions, and images.
          </li>
          <li>
            <strong>Step-by-Step Instructions:</strong> Recipes are presented in an interactive step-by-step format on the touch display, making it easier for users to follow the instructions while cooking.
          </li>
          <li>
            <strong>Favorite Recipes:</strong> Users can save their favorite recipes for quick access later, allowing them to build a personal recipe collection directly on the device.
          </li>
          <li>
            <strong>Shopping List Creation:</strong> From selected recipes, users can automatically generate a shopping list, helping them prepare by listing all necessary ingredients in one place.
          </li>
          <li>
            <strong>Recipe Rating:</strong> Users can rate recipes after trying them, enabling the application to track popular dishes and improve recommendations.
          </li>
        </ul>
      
        <h4>Research and Development</h4>
        <p>
          <strong>Touch Interface Development:</strong> The LVGL library was used to create an intuitive and responsive touch interface on the 7-inch display. The user interface allows for easy navigation between recipes, shopping lists, and user preferences, with real-time responsiveness provided by the ESP32.
        </p>
        <p>
          <strong>API Integration:</strong> The system fetches recipe data from a remote API, which includes real-time calls to retrieve recipe ingredients, steps, and images. JSON parsing is implemented in C to decode and display this data on the touch display.
        </p>
        
        <h4>System Design and Features</h4>
        <ul>
          <li><strong>ESP32 Integration:</strong> The ESP32 microcontroller handles all core operations, including Wi-Fi connectivity, API communication, and graphical display updates. It is programmed in C, ensuring efficient performance and responsiveness.</li>
          <li><strong>Touch Screen Interaction:</strong> The touch interface allows users to swipe through recipes, select ingredients, and mark steps as completed. The LVGL library supports custom animations and touch events to enhance user interaction.</li>
          <li><strong>Database Connectivity:</strong> The project relies on a cloud-based recipe database, accessed via API, enabling the device to retrieve fresh content and updates in real-time.</li>
          <li><strong>Future Expansion:</strong> Planned features include voice integration and personalized recommendations based on user preferences and previous interactions with recipes.</li>
        </ul>
      
        <h4>Testing and Evaluation</h4>
        <p>
          The system has undergone initial testing, with the user interface fully functional on the touch display. The API integration is working, allowing real-time recipe fetching, and basic interactions such as recipe favoriting and shopping list creation have been successfully implemented. Further testing will focus on refining the performance and adding more interactivity.
        </p>
        
        <h4>Project Status and Future Work</h4>
        <p>
          CookCompanion is currently in progress, with ongoing development focused on improving the user experience, expanding the database interaction, and adding more personalization features. Future updates will also include more advanced features such as voice commands, enhanced user ratings, and personalized recipe suggestions.
        </p>

        <h4>Project Repository</h4>
          <p>
            The full project, including the source code and documentation, can be found on GitHub <a href="https://github.com/henrysg1/cooking-screen" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

      </div>      
      ),
      recommended: true
    }
];


export default projectsList;
