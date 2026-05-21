import {
  UserRound,
  Zap,
  BrainCircuit,
  Sparkles,
  Layers3,
  Users,
  Microscope,
  Globe,
  Binary,
  ScanEye,
  Cpu,
  Box,
  Terminal,
  Activity,
  Workflow,
  BarChart3,
  Layout,
  MessageSquare,
  ShieldCheck,
  GraduationCap,
  Heart,
  HandHelping
} from "lucide-react";

export const technicalSkills = [
  { 
    name: "Programming & Development", 
    icon: Terminal,
    description: "Expertise in Python, C/C++, and SQL for building robust engineering applications and high-performance embedded firmware.",
    tools: ["Python", "C/C++", "SQL", "Embedded C"]
  },
  { 
    name: "Machine Learning & Data-Driven Systems", 
    icon: BrainCircuit,
    description: "Architecting and deploying deep learning models using TensorFlow and Keras for predictive healthcare and industrial automation.",
    tools: ["TensorFlow", "Keras", "Scikit-learn", "Neural Networks"]
  },
  { 
    name: "Computer Vision & Edge Machine Learning", 
    icon: ScanEye,
    description: "Implementing real-time object detection (YOLOv11) and tracking systems optimized for NVIDIA Jetson edge hardware.",
    tools: ["YOLOv11", "OpenCV", "ByteTrack", "Xavier NX"]
  },
  { 
    name: "Embedded Systems & Robotics", 
    icon: Cpu,
    description: "Integrating flight controllers (Pixhawk), telemetry systems, and STM32/Arduino microcontrollers for autonomous platforms.",
    tools: ["STM32", "Arduino", "Pixhawk", "MAVLink", "ArduPilot"]
  },
  { 
    name: "Biomedical Engineering", 
    icon: Activity,
    description: "Specialized in clinical equipment maintenance, calibration standards, and advanced biomedical signal processing systems.",
    tools: ["Ventilators", "EEG/ECG", "Calibration", "Netech"]
  },
  { 
    name: "Hardware & Design Tools", 
    icon: Box,
    description: "Advanced PCB layout in Proteus/KiCad and 3D mechanical modeling in SolidWorks for medical device prototyping.",
    tools: ["SolidWorks", "Proteus", "KiCad", "PCB Design"]
  },
  { 
    name: "Data Analysis & Visualization", 
    icon: BarChart3,
    description: "Working with structured datasets, research outputs, and analytical workflows to extract insights and present findings clearly.",
    tools: ["Pandas", "NumPy", "Matplotlib", "Excel"]
  },
  { 
    name: "Web Technologies & Tools", 
    icon: Layout,
    description: "Building and supporting digital solutions using modern web technologies and practical software development environments.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub"]
  },
  { 
    name: "AI Tools & Chatbot Platforms", 
    icon: MessageSquare,
    description: "Using AI-powered platforms and no-code tools to build, customize, and improve chatbot-based user interaction systems.",
    tools: ["Chatbase", "Prompt Design", "Knowledge Bases", "AI Chatbots"]
  },
];

export const leadershipExperience = [
  {
    role: "International Student Senate Member",
    organization: "Karabük University — Faculty of Engineering Sciences",
    date: "2026 – 2027",
    icon: ShieldCheck,
    logo: `${import.meta.env.BASE_URL}logos/karabuk-clean.png?v=2`,
    scale: 1.25,
    description: "Represented international engineering students as a university-appointed senate member, acting as a communication bridge between students and university administration. Collected academic and administrative concerns, communicated them to relevant bodies, and supported stronger student participation in faculty-level decision-making.",
    tags: ["Student Representation", "Leadership", "Communication", "Advocacy"]
  },
  {
    role: "Interpreter",
    organization: "Turkish Red Crescent",
    location: "Istanbul",
    date: "2019 – 2020",
    icon: Heart,
    logo: `${import.meta.env.BASE_URL}logos/kizilay-clean.png?v=2`,
    scale: 0.85,
    description: "Provided Arabic–Turkish interpretation support in humanitarian service environments, helping improve communication between Arabic-speaking beneficiaries and Turkish staff. Assisted with real-time guidance and service communication in high-pressure support settings.",
    tags: ["Translation", "Humanitarian Support", "Cross-Cultural Liaison", "Volunteering"]
  },
  {
    role: "Student Affairs Office",
    organization: "General Union of Syrian Students",
    location: "Türkiye",
    date: "2026 – 2027",
    icon: HandHelping,
    logo: `${import.meta.env.BASE_URL}logos/general-union-syrian-students-clean.png?v=2`,
    scale: 1.15,
    description: "Assisted Syrian students across Türkiye with academic, administrative, and student-life inquiries. Supported service workflows and contributed to the development of an AI-powered student-support chatbot for a nationwide community of approximately 5,000 students.",
    tags: ["Student Services", "Chatbot Support", "Community Impact", "Problem Solving"]
  },
  {
    role: "Science Office",
    organization: "Karabük",
    location: "Karabük",
    date: "2025 – 2026",
    icon: GraduationCap,
    logo: `${import.meta.env.BASE_URL}logos/syrian-students-federation-clean.png?v=2`,
    scale: 1.25,
    description: "Supported academic development initiatives by organizing exam-review sessions, coordinating educational workshops, and collaborating with academic staff and volunteer instructors. Contributed to learning programs serving approximately 500 Syrian students in Karabük.",
    tags: ["Academic Support", "Workshop Coordination", "Student Development", "Teamwork"]
  }
];

export const professionalSkills = [
  { 
    name: "Collaborative Leadership", 
    category: "Leadership",
    icon: UserRound,
    description: "Proven ability to guide technical teams through complex project-based workflows and high-stakes competitions."
  },
  { 
    name: "Strategic Problem Solving", 
    category: "Critical Thinking",
    icon: Zap,
    description: "Skilled at diagnosing multi-layered technical issues, evaluating alternative solutions, and applying practical, high-efficiency fixes."
  },
  { 
    name: "Cross-Functional Collaboration", 
    category: "Teamwork",
    icon: Users,
    description: "Fluent in bridging the gap between biomedical, electrical, and software engineering contexts to achieve unified project goals."
  },
  { 
    name: "Evidence-Based Research", 
    category: "Analytical",
    icon: Microscope,
    description: "A methodical approach to technical investigation and clinical research, ensuring all solutions are grounded in data and rigorous testing."
  },
  { 
    name: "Project Lifecycle Management", 
    category: "Execution",
    icon: Layers3,
    description: "Managing tasks, timelines, and technical deliverables from initial concept through implementation and validation."
  },
  { 
    name: "High-Impact Communication", 
    category: "Communication",
    icon: Globe,
    description: "Delivering clear, concise technical reporting and maintaining effective communication channels across multidisciplinary teams."
  },
];

export const languages = [
  { name: "Turkish", level: "Fluent, C1" },
  { name: "English", level: "Advanced, B2" },
];

export const biomedicalCourses = [
  // AA - HIGHLIGHTS & CORE BIOMEDICAL
  { title: "Biomedical Signal Processing", grade: "AA", score: 100, semester: "", category: "Signal Processing", note: "Advanced analysis of physiological signals (ECG, EEG, EMG) and digital filter design." },
  { title: "Biomedical Imaging Systems", grade: "AA", score: 100, semester: "", category: "Imaging", note: "Physics and engineering of MRI, CT, Ultrasound, and X-ray imaging modalities." },
  { title: "Biomedical Systems Modelling and Control", grade: "AA", score: 98, semester: "", category: "Control", note: "Mathematical modeling of biological systems and feedback control mechanisms." },
  { title: "Scientific Programming with Python", grade: "AA", score: 100, semester: "", category: "Machine Learning", note: "Data science and algorithmic solutions for complex biological data analysis." },
  { title: "Introduction to Soft Computing", grade: "AA", score: 97, semester: "", category: "Machine Learning", note: "Fuzzy logic, neural networks, and evolutionary algorithms in medicine." },
  { title: "Introduction to Clinical Engineering", grade: "AA", score: 100, semester: "", category: "Clinical Engineering", note: "Management of medical technology and hospital safety standards." },
  { title: "Human Anatomy and Physiology", grade: "AA", score: 96, semester: "", category: "Physiology", note: "Systemic analysis of human body functions and anatomical structures." },
  { title: "Lasers and Optoelectronics", grade: "AA", score: 95, semester: "", category: "Medical Electronics", note: "Laser-tissue interactions and optical diagnostic technologies." },
  { title: "Biomechanics", grade: "AA", score: 94, semester: "", category: "Biomechanics", note: "Mechanical principles applied to human movement and musculoskeletal systems." },
  { title: "Introduction to Biomaterials", grade: "AA", score: 92, semester: "", category: "Biomaterials", note: "Biocompatibility and properties of materials used in medical implants." },
  { title: "Nanomaterials", grade: "AA", score: 93, semester: "", category: "Nanotechnology", note: "Synthesis and characterization of materials at the nanoscale for medical use." },
  { title: "Introduction to Nanoscience and Nanotechnology", grade: "AA", score: 95, semester: "", category: "Nanotechnology", note: "Fundamental principles of nanoscale phenomena and applications." },
  { title: "Finite Element Method", grade: "AA", score: 94, semester: "", category: "Computational", note: "Numerical simulation of structural and fluid mechanics in biological tissues." },
  { title: "Computer Aided Design", grade: "AA", score: 98, semester: "", category: "Engineering", note: "3D modeling and technical drawing for medical device prototyping." },
  { title: "Medical Physics", grade: "AA", score: 92, semester: "", category: "Physics", note: "Application of physics principles to medical diagnosis and therapy." },
  { title: "Electromagnetic Field Theory", grade: "AA", score: 91, semester: "", category: "Electromagnetics", note: "Static and dynamic electromagnetic fields in biological environments." },
  { title: "Differential Equations", grade: "AA", score: 95, semester: "", category: "Mathematics", note: "Solving ODEs for modeling physiological and mechanical systems." },
  { title: "Electronics I", grade: "AA", score: 94, semester: "", category: "Medical Electronics", note: "Foundations of semiconductor devices and analog circuit design." },
  { title: "Electronics II", grade: "AA", score: 96, semester: "", category: "Medical Electronics", note: "Advanced op-amp circuits and signal conditioning for sensors." },
  { title: "Microprocessors and Microcontrollers", grade: "AA", score: 98, semester: "", category: "Embedded", note: "Interfacing and programming for medical instrumentation control." },
  { title: "Graduation Project I", grade: "AA", score: 100, semester: "", category: "Research", note: "Proposal and design phase for innovative healthcare technology." },
  { title: "Graduation Project II", grade: "AA", score: 100, semester: "", category: "Research", note: "Implementation and verification of the final biomedical engineering solution." },

  // BA - STRONG PERFORMANCE
  { title: "Medical Sensors", grade: "BA", score: 88, semester: "", category: "Medical Electronics", note: "Transduction principles for measuring physiological parameters." },
  { title: "Artificial Organs, Prostheses and Implant Design", grade: "BA", score: 87, semester: "", category: "Biomaterials", note: "Design and engineering of life-support systems and limb replacements." },
  { title: "Medical Biology and Genetics", grade: "BA", score: 86, semester: "", category: "Physiology", note: "Cellular biology and hereditary mechanisms in human health." },
  { title: "Signals and Systems", grade: "BA", score: 85, semester: "", category: "Signal Processing", note: "Analysis of continuous and discrete-time signals and LTI systems." },
  { title: "Database Management Systems", grade: "BA", score: 89, semester: "", category: "Machine Learning", note: "Structuring and querying medical records and health data." },
  { title: "Hydraulics and Pneumatics", grade: "BA", score: 84, semester: "", category: "Engineering", note: "Fluid power systems and their applications in medical devices." },
  { title: "Probability and Statistics", grade: "BA", score: 88, semester: "", category: "Mathematics", note: "Statistical analysis of clinical trials and medical data." },

  // BB & OTHERS
  { title: "Biomedical Instrumentation", grade: "BB", score: 82, semester: "", category: "Medical Electronics", note: "Design and safety of diagnostic and therapeutic instruments." },
  { title: "Introduction to Biomedical Engineering", grade: "BB", score: 80, semester: "", category: "Foundations", note: "Overview of the interdisciplinary field of medical engineering." },
  { title: "Circuit Theory", grade: "BB", score: 81, semester: "", category: "Foundations", note: "Basic electrical laws and network analysis for medical devices." },
];

export const electricalCourses = [
  // AA - HIGHLIGHTS & CORE SPECIALIZATIONS
  { title: "Machine Learning", grade: "AA", score: 100, semester: "", category: "Machine Learning", note: "Advanced neural networks, machine learning models, and intelligent system design." },
  { title: "Embedded Systems", grade: "AA", score: 100, semester: "", category: "Embedded", note: "Real-time operating systems, hardware-software co-design, and industrial integration." },
  { title: "Microprocessors and Microcontrollers", grade: "AA", score: 98, semester: "", category: "Embedded", note: "Architecture, assembly programming, and peripheral interfacing for ARM/AVR." },
  { title: "Logic Design of Digital Systems", grade: "AA", score: 100, semester: "", category: "Digital", note: "Combinational and sequential logic optimization with hardware description focus." },
  { title: "Electromagnetic Theory", grade: "AA", score: 96, semester: "", category: "Electromagnetics", note: "Maxwell's equations, static fields, and fundamental electromagnetic principles." },
  { title: "Communication Systems II", grade: "AA", score: 97, semester: "", category: "Communication", note: "Digital modulation, information theory, and advanced signal transmission." },
  { title: "Control Systems II", grade: "AA", score: 95, semester: "", category: "Control", note: "State-space analysis, digital control, and modern stability theory." },
  { title: "Electronics I", grade: "AA", score: 94, semester: "", category: "Electronics", note: "Semiconductor physics, diode circuits, and BJT/FET amplification." },
  { title: "Electronics II", grade: "AA", score: 96, semester: "", category: "Electronics", note: "Advanced analog design, feedback systems, and operational amplifiers." },
  { title: "Circuit Theory II", grade: "AA", score: 98, semester: "", category: "Circuits", note: "AC steady-state analysis, frequency response, and complex network theorems." },
  { title: "Numerical Analysis", grade: "AA", score: 93, semester: "", category: "Mathematics", note: "Computational methods for solving non-linear systems and differential equations." },
  { title: "Differential Equations", grade: "AA", score: 95, semester: "", category: "Mathematics", note: "Solving higher-order ODEs and system modeling." },
  { title: "Mathematics II", grade: "AA", score: 94, semester: "", category: "Mathematics", note: "Multivariable calculus and integral applications in engineering." },
  { title: "Electromechanical Energy Conversion I", grade: "AA", score: 92, semester: "", category: "Power", note: "Transformer theory, DC machines, and magnetic circuit analysis." },
  { title: "Electronics Laboratory", grade: "AA", score: 100, semester: "", category: "Laboratory", note: "Experimental verification of analog circuits and signal prototyping." },
  { title: "Circuit Theory Laboratory", grade: "AA", score: 100, semester: "", category: "Laboratory", note: "Hands-on implementation and measurement of electrical networks." },
  { title: "Graduation Project I", grade: "AA", score: 100, semester: "", category: "Research", note: "Initial design phase and literature review for machine learning-supported medical triage." },

  // BA - STRONG PERFORMANCE
  { title: "Signals and Systems", grade: "BA", score: 88, semester: "", category: "Signals", note: "LTI systems, Fourier analysis, and Laplace transforms for signal processing." },
  { title: "Electromagnetic Waves", grade: "BA", score: 86, semester: "", category: "Electromagnetics", note: "Wave propagation, transmission lines, and antenna fundamentals." },
  { title: "Control Systems I", grade: "BA", score: 87, semester: "", category: "Control", note: "Classical control theory, root locus, and frequency domain design." },
  { title: "Probability and Statistics", grade: "BA", score: 89, semester: "", category: "Mathematics", note: "Random variables and statistical methods for engineering data analysis." },
  { title: "Engineering Economics", grade: "BA", score: 85, semester: "", category: "Management", note: "Cost-benefit analysis and financial feasibility for technical projects." },

  // BB & OTHERS
  { title: "Communication Systems I", grade: "BB", score: 82, semester: "", category: "Communication", note: "Analog modulation techniques and noise performance analysis." },
  { title: "Circuit Theory I", grade: "BB", score: 81, semester: "", category: "Circuits", note: "DC analysis and fundamental Kirchhoff's laws." },
  { title: "Electromechanical Energy Conversion II", grade: "BB", score: 80, semester: "", category: "Power", note: "Synchronous and induction machines in power systems." },
  { title: "Fundamentals of Radar Systems", grade: "CB", score: 75, semester: "", category: "Radar", note: "Radar equation, target tracking, and signal detection principles." },
];

export const projects = [
  {
    title: "UAV Avionics System — Genç Sancaktarlar",
    year: "2025",
    category: "UAV Avionics",
    status: "Competition Project",
    description: "Critical design project for a fixed-wing UAV platform developed for the TEKNOFEST 2025 Savaşan İHA Competition. The system integrates autonomous flight, Pixhawk-based flight control, MAVLink communication, telemetry, sensor fusion, onboard AI processing, and real-time target detection using YOLOv11 and ByteTrack. Responsible for telemetry integration, sensor data coordination, and avionics architecture support.",
    tech: ["Pixhawk", "MAVLink", "Telemetry", "UAV Systems", "Sensor Integration", "NVIDIA Jetson", "YOLOv11", "ByteTrack", "ArduPilot", "Ground Control Station", "Autonomous Flight"],
    details: [
      "Pixhawk-based flight control and autonomous mission support",
      "MAVLink-based communication between onboard systems and ground station",
      "Telemetry and sensor data integration for UAV state monitoring",
      "NVIDIA Jetson Xavier NX integration for real-time machine learning processing",
      "YOLOv11 and ByteTrack-based UAV detection and tracking workflow",
      "Ground control station, communication, and user interface architecture",
      "Avionics-level contribution to electronic and flight subsystem integration"
    ],
    preview: `${import.meta.env.BASE_URL}project-media/genc-sancaktarlar-cover.jpg`,
    document: `${import.meta.env.BASE_URL}project-documents/genc-sancaktarlar-critical-design-report.pdf`,
    documentLabel: "Critical Design Report",
    documentDescription: "Comprehensive technical report detailing the avionics architecture, communication protocols, and AI integration for the Genç Sancaktarlar UAV."
  },
  {
    title: "YOLOv11 Industrial Inspection",
    year: "2025",
    category: "Computer Vision",
    status: "Production Ready",
    description: "This project is a YOLOv11-based industrial computer vision system developed for real-time detection, tracking, and counting of bread loaves on a conveyor belt. The system was implemented using Python, OpenCV, NumPy, Ultralytics YOLO, and a Roboflow YOLO-format dataset. The current implementation successfully performs bread loaf detection and counting in real time. Defect detection and automatic sorting are planned as the next quality-control layer for the complete industrial inspection system.",
    tech: ["YOLOv11", "Python", "Computer Vision", "OpenCV", "Industrial Inspection", "Object Detection"],
    details: [
      "Real-time YOLOv11 defect detection",
      "High-speed industrial counting logic",
      "Automated quality control metrics",
      "Low-latency inference optimization"
    ],
    preview: `${import.meta.env.BASE_URL}project-media/test_1_9-thumbnail.jpg`,
    media: [
        { type: "video", src: `${import.meta.env.BASE_URL}project-media/test_1_9-h264.mp4`, label: "Industrial Inference Run" }
    ]
  },
  {
    title: "Machine Learning-Powered Triage Routing Device",
    year: "2025",
    category: "Graduation Project",
    status: "Prototype",
    description: "A Machine Learning-supported triage system for contactless vital parameter measurement and automated patient routing in clinical settings. Utilizes computer vision and decision support logic.",
    tech: ["Python", "TensorFlow", "Computer Vision", "Medical Machine Learning", "Signal Processing"],
    details: [
      "Camera-based non-contact vital monitoring",
      "Automated routing decision support",
      "TUBITAK supported innovation",
      "Presented at 6th BILSEL Congress"
    ],
    preview: `${import.meta.env.BASE_URL}project-previews/ppg-1.png`,
    media: [
        { type: "document", src: `${import.meta.env.BASE_URL}project-documents/TRIAJ.pdf`, label: "TRIAJ.pdf" },
        { type: "document", src: `${import.meta.env.BASE_URL}project-documents/TRIAJ2.pdf`, label: "TRIAJ2.pdf" },
        { type: "document", src: `${import.meta.env.BASE_URL}project-documents/TRIAJ3.pdf`, label: "TRIAJ3.pdf" }
    ]
  },
  {
    title: "PPG-Based Blood Glucose Monitoring",
    year: "TEKNOFEST",
    category: "Health Tech",
    status: "Research Phase",
    description: "A smartphone-based non-invasive health monitoring project focused on estimating blood glucose levels using photoplethysmography (PPG) signals. The system captures fingertip PPG data through the phone’s front camera and screen light, then applies signal preprocessing, filtering, pulse segmentation, feature extraction, and machine-learning-based prediction using reference glucometer measurements. Technologies and methods used include smartphone camera-based PPG acquisition, screen-light illumination, ROI-based pixel averaging, upsampling, moving average and band-pass filtering, signal segmentation, feature extraction, machine learning, and mobile application development.",
    tech: ["PPG", "Machine Learning", "Signal Processing", "Mobile Health", "Computer Vision", "Python"],
    details: [
      "Non-invasive health monitoring",
      "Custom PPG signal processing pipeline",
      "Machine learning based glucose estimation"
    ],
    document: `${import.meta.env.BASE_URL}project-documents/ppg-glucose-monitoring-report.pdf`,
    preview: `${import.meta.env.BASE_URL}project-previews/ppg-1.png`,
    media: [
        { type: "image", src: `${import.meta.env.BASE_URL}project-previews/ppg-1.png`, label: "Analysis Result" }
    ]
  },
  {
    title: "Collaborative Robots",
    year: "2024",
    category: "Embedded Systems",
    status: "Completed",
    description: "This project is a low-cost, scalable, vision-based industrial and robotic coordination system designed to coordinate two heterogeneous mobile robots from a central vision system. The operator selects a target point, and the system calculates which robot is closest to the target using Euclidean distance. The selected robot is then guided toward the target through closed-loop heading correction. The system demonstrates centralized task allocation and real-time visual robot coordination using an overhead smartphone camera, ArUco marker tracking, Wi-Fi communication, and two different mobile robot platforms.",
    tech: ["Python", "Computer Vision", "ArUco", "STM32", "Arduino", "ESP8266", "Wi-Fi", "L298N", "3D Printing", "Euclidean Distance", "Closed-loop Control"],
    details: [
      "Python-based central control logic",
      "Computer vision with ArUco markers",
      "Smartphone overhead camera as the global vision sensor",
      "STM32F302R8 robot and Arduino Uno robot",
      "ESP8266 Wi-Fi communication",
      "3D-printed differential-drive chassis",
      "L298N motor driver for the STM32 robot",
      "Motor shield for the Arduino robot",
      "Laptop as the central controller / Wi-Fi hotspot",
      "Euclidean-distance task allocation",
      "Closed-loop heading correction"
    ],
    preview: `${import.meta.env.BASE_URL}project-media/robot-thumbnail.jpg`,
    document: `${import.meta.env.BASE_URL}project-documents/vision-task-allocation.pdf`,
    documentLabel: "Vision-Based Task Allocation Documentation",
    documentDescription: "Technical documentation for the vision-based centralized robot coordination and task allocation system using ArUco markers and global feedback.",
    media: [
        { type: "image", src: `${import.meta.env.BASE_URL}project-media/robot-thumbnail.jpg`, label: "Hardware Prototype" },
        { type: "video", src: `${import.meta.env.BASE_URL}project-media/robot-video.mp4`, label: "Collaborative Robot System Demo" }
    ]
  },
  {
    title: "GBM Subtype Drug Repositioning",
    year: "TEKNOFEST 2025",
    category: "Oncology Machine Learning",
    status: "Finalist",
    description: "A Machine Learning-driven GBM precision medicine platform that analyzes tumor RNA-seq data to predict molecular subtype, identify subtype-specific biomarkers, and prioritize biologically relevant targets for downstream therapeutic discovery. The implemented system combines bioinformatics, unsupervised clustering, multi-branch consensus prediction, and a web-based analysis interface. Its strongest current outputs are subtype classification, biomarker ranking, and target-ready gene prioritization, while the drug repurposing layer represents the platform’s final translational decision-support goal.",
    tech: ["Bioinformatics", "Python", "Genomics", "Machine Learning", "R"],
    details: [
      "Bioinformatics analysis for GBM",
      "Drug repurposing pipeline",
      "Team leadership and technical coordination"
    ],
    document: `${import.meta.env.BASE_URL}project-documents/gbm-drug-repositioning-report.pdf`,
    preview: `${import.meta.env.BASE_URL}project-previews/3t-in-oncology-pre-evaluation-form.png`
  }
];

export const certifications = [
  {
    title: "AI for Medical Diagnosis",
    issuer: "DeepLearning.AI",
    date: "Sep 2024",
    category: "Machine Learning & Healthcare",
    id: "CF19DGI7VAPZ",
    link: "https://coursera.org/verify/CF19DGI7VAPZ",
    document: `${import.meta.env.BASE_URL}certificates/CF19DGI7VAPZ.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/ai-medical-diagnosis.png`
  },
  {
    title: "Deep Learning Essentials",
    issuer: "IBM",
    date: "Sep 2024",
    category: "Deep Learning",
    link: "https://www.credly.com/go/Yy6yEUag",
    document: `${import.meta.env.BASE_URL}certificates/Deep_Learning_Essentials_Badge20240903-8-d3zu9k.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/deep-learning-essentials.png`
  },
  {
    title: "Deep Learning using TensorFlow",
    issuer: "IBM",
    date: "Sep 2024",
    category: "TensorFlow",
    link: "https://www.credly.com/go/GB99ehZR",
    document: `${import.meta.env.BASE_URL}certificates/Deep_Learning_using_TensorFlow_Badge20240902-7-7h4x8w.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/deep-learning-tensorflow.png`
  },
  {
    title: "Medical Device Quality Assurance",
    issuer: "Fluke Biomedical",
    date: "Aug 2024",
    category: "Biomedical Quality",
    document: `${import.meta.env.BASE_URL}certificates/4_4_33033_1724691780_Medical_Device_Quality_Assurance_Introduction.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/medical-device-quality-assurance.png`
  },
  {
    title: "PCB Design with Proteus",
    issuer: "BTK Akademi",
    date: "Aug 2024",
    category: "Electronics Design",
    document: `${import.meta.env.BASE_URL}certificates/Proteus_ile_Devre_Tasarımı_Sertifika.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/proteus-devre-tasarimi.png`
  },
  {
    title: "Advanced Python Training",
    issuer: "IIENSTITU",
    date: "Aug 2024",
    category: "Python Programming",
    document: `${import.meta.env.BASE_URL}certificates/python 0558c876-b333-4460-9efd-7b62d89ca38f.pdf`,
    image: `${import.meta.env.BASE_URL}certificate-previews/python-training-advanced.png`
  }
];

export const experience = [
  {
    title: "Internship I",
    place: "Karabük Training & Research Hospital",
    date: "Oct 2024 - Nov 2024",
    description: "Hands-on biomedical engineering experience involving troubleshooting, calibration, repair, testing, and maintenance of hospital medical equipment across operating rooms, ICU, radiology, ophthalmology, sterilization, and diagnostic units.",
    cases: [
      {
        title: "Device: Surgical Operating Light",
        category: "Operating Room / Lighting Systems",
        problem: "Problem: There was a problem in the main board affecting the light intensity control.",
        intervention: "Intervention: The faulty main board was replaced.",
        result: "Result: The lighting control system was restored and the unit became fully functional.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/surgical-light-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/surgical-light-01.jpg`, alt: "Operating light control interface and intensity fault inspection", caption: "Operating light control interface and intensity fault inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/surgical-light-02.jpg`, alt: "Main control board access during troubleshooting", caption: "Main control board access during troubleshooting" },
          { src: `${import.meta.env.BASE_URL}internship-cases/surgical-light-03.jpg`, alt: "Faulty lighting control board replacement process", caption: "Faulty lighting control board replacement process" },
          { src: `${import.meta.env.BASE_URL}internship-cases/surgical-light-04.jpg`, alt: "Post-repair verification of surgical light operation", caption: "Post-repair verification of surgical light operation" }
        ]
      },
      {
        title: "Device: Topcon IS-600 Slit Lamp",
        category: "Ophthalmology / Illumination",
        problem: "Problem: The illumination lamp was not working.",
        intervention: "Intervention: The device was temporarily connected to AUX 2 until a new potentiometer could be installed.",
        result: "Result: Temporary operation was restored and the device was prepared for final repair.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/slit-lamp-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/slit-lamp-01.jpg`, alt: "Internal illumination circuit and AUX connection inspection", caption: "Internal illumination circuit and AUX connection inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/slit-lamp-02.jpg`, alt: "Slit lamp lamp-power routing during temporary repair", caption: "Slit lamp lamp-power routing during temporary repair" },
          { src: `${import.meta.env.BASE_URL}internship-cases/slit-lamp-03.jpg`, alt: "Brightness potentiometer bypass verification", caption: "Brightness potentiometer bypass verification" },
          { src: `${import.meta.env.BASE_URL}internship-cases/slit-lamp-04.jpg`, alt: "Final illumination output test after temporary AUX 2 connection", caption: "Final illumination output test after temporary AUX 2 connection" }
        ]
      },
      {
        title: "Device: EEG System",
        category: "Neurodiagnostics / Calibration",
        problem: "Problem: Signal accuracy and channel response needed verification. A slight error was observed during calibration.",
        intervention: "Intervention: Calibration and signal verification were performed using the Netech MiniSim-EEG Simulator.",
        result: "Result: Channel response was checked and the error source was identified for further evaluation.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/eeg-system-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/eeg-system-01.jpg`, alt: "EEG system setup before calibration", caption: "EEG system setup before calibration" },
          { src: `${import.meta.env.BASE_URL}internship-cases/eeg-system-02.jpg`, alt: "Netech MiniSim-EEG Simulator calibration process", caption: "Netech MiniSim-EEG Simulator calibration process" },
          { src: `${import.meta.env.BASE_URL}internship-cases/eeg-system-03.jpg`, alt: "EEG channel response and signal accuracy verification", caption: "EEG channel response and signal accuracy verification" },
          { src: `${import.meta.env.BASE_URL}internship-cases/eeg-system-04.jpg`, alt: "Electrode gel replacement and final signal stability check", caption: "Electrode gel replacement and final signal stability check" }
        ]
      },
      {
        title: "Device: Endoscope Washing and Disinfection Machine",
        category: "Sterilization / Disinfection",
        problem: "Problem: The main control board and float-type water level sensor were defective.",
        intervention: "Intervention: Both faulty components were replaced, connections were rechecked, and the system was tested.",
        result: "Result: The machine was restored to proper operating condition.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-01.jpg`, alt: "Endoscope washer control system inspection", caption: "Endoscope washer control system inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-02.jpg`, alt: "Main control board fault diagnosis", caption: "Main control board fault diagnosis" },
          { src: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-03.jpg`, alt: "Float-type water level sensor replacement", caption: "Float-type water level sensor replacement" },
          { src: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-04.jpg`, alt: "Electrical connection recheck after component replacement", caption: "Electrical connection recheck after component replacement" },
          { src: `${import.meta.env.BASE_URL}internship-cases/endoscope-washer-05.jpg`, alt: "Final operational test after repair", caption: "Final operational test after repair" }
        ]
      },
      {
        title: "Device: Opera Fluoroscopy System",
        category: "Radiology / Communication",
        problem: "Problem: The device showed error code 98, indicating a communication failure.",
        intervention: "Intervention: Manufacturer guidance was reviewed, and the fiber optic cable was tested.",
        result: "Result: The fiber optic cable was confirmed to be functional, and the communication issue was narrowed down for further troubleshooting.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/fluoroscopy-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/fluoroscopy-01.jpg`, alt: "Fluoroscopy system error code 98 inspection", caption: "Fluoroscopy system error code 98 inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/fluoroscopy-02.jpg`, alt: "Fiber optic communication cable testing", caption: "Fiber optic communication cable testing" },
          { src: `${import.meta.env.BASE_URL}internship-cases/fluoroscopy-03.jpg`, alt: "Main board communication fault diagnosis", caption: "Main board communication fault diagnosis" },
          { src: `${import.meta.env.BASE_URL}internship-cases/fluoroscopy-04.jpg`, alt: "Preparation of faulty main board for manufacturer service", caption: "Preparation of faulty main board for manufacturer service" }
        ]
      }
    ]
  },
  {
    title: "Internship II",
    place: "Karabük Training & Research Hospital",
    date: "Jun 2025 - Jul 2025",
    description: "I actively participated in the maintenance, inspection, and fault-tracking processes of medical devices used in clinical environments. I gained practical experience in device performance checks, field applications, and hospital technical service workflows.",
    cases: [
      {
        title: "Device: Ventilator — Mindray SV300",
        category: "Critical Care / Ventilation",
        problem: "Problem: The ventilator showed a “Bellows service required” warning because the bellows unit had exceeded its operating hours.",
        intervention: "Intervention: The bellows unit was inspected and replaced.",
        result: "Result: The warning was cleared and the ventilator was restored to normal operating condition.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/ventilator-sv300-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-sv300-01.jpg`, alt: "Mindray SV300 bellows service warning inspection", caption: "Mindray SV300 bellows service warning inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-sv300-02.jpg`, alt: "Bellows unit replacement process", caption: "Bellows unit replacement process" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-sv300-03.jpg`, alt: "Operating hour reset and final ventilator function test", caption: "Operating hour reset and final ventilator function test" }
        ]
      },
      {
        title: "Device: Raphael XTC Ventilator — Mixer Valve Replacement",
        category: "Critical Care / Gas Mixing",
        problem: "Problem: The Raphael XTC ventilator displayed an error caused by a faulty mixer valve and oxygen sensor.",
        intervention: "Intervention: The faulty mixer valve was replaced, and the device was tested using a test lung.",
        result: "Result: The ventilation function was verified and the device was restored to working condition.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/ventilator-raphael-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-raphael-01.jpg`, alt: "Raphael XTC ventilator oxygen delivery error inspection", caption: "Raphael XTC ventilator oxygen delivery error inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-raphael-02.jpg`, alt: "Faulty mixer valve identification", caption: "Faulty mixer valve identification" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-raphael-03.jpg`, alt: "Mixer valve replacement and oxygen sensor check", caption: "Mixer valve replacement and oxygen sensor check" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ventilator-raphael-04.jpg`, alt: "Test lung verification of ventilation performance", caption: "Test lung verification of ventilation performance" }
        ]
      },
      {
        title: "Device: Defibrillator Paddle Replacement and Calibration",
        category: "Emergency / Cardiac Care",
        problem: "Problem: During calibration, the Philips defibrillator paddles failed to deliver the required energy output.",
        intervention: "Intervention: The defective paddles were replaced with new ones, and the device was recalibrated.",
        result: "Result: The energy output was verified and the device calibration was restored.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/defibrillator-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/defibrillator-01.jpg`, alt: "Philips defibrillator paddle output calibration test", caption: "Philips defibrillator paddle output calibration test" },
          { src: `${import.meta.env.BASE_URL}internship-cases/defibrillator-02.jpg`, alt: "Replacement paddles installed and energy delivery verified", caption: "Replacement paddles installed and energy delivery verified" }
        ]
      },
      {
        title: "Device: Mobile X-Ray Unit Arm",
        category: "Radiology / Mechanical Repair",
        problem: "Problem: The arm of the mobile X-Ray unit was not moving due to a failure in the internal steel cable.",
        intervention: "Intervention: The damaged cable was replaced and the broken wires were re-soldered.",
        result: "Result: Smooth and proper arm movement was successfully restored.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/mobile-xray-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/mobile-xray-01.jpg`, alt: "Mobile X-ray arm movement failure inspection", caption: "Mobile X-ray arm movement failure inspection" },
          { src: `${import.meta.env.BASE_URL}internship-cases/mobile-xray-02.jpg`, alt: "Steel cable replacement and wire re-soldering repair", caption: "Steel cable replacement and wire re-soldering repair" }
        ]
      },
      {
        title: "Device: ENT Unit Pump",
        category: "ENT / Fluid Systems",
        problem: "Problem: A malfunction was identified in the pump of the ENT unit.",
        intervention: "Intervention: The defective pump was removed and replaced with a new fully operational pump. Wiring and connections were completed.",
        result: "Result: The pump system was restored to working condition.",
        thumbnail: `${import.meta.env.BASE_URL}internship-cases/ent-unit-01.jpg`,
        images: [
          { src: `${import.meta.env.BASE_URL}internship-cases/ent-unit-01.jpg`, alt: "ENT unit pump malfunction diagnosis", caption: "ENT unit pump malfunction diagnosis" },
          { src: `${import.meta.env.BASE_URL}internship-cases/ent-unit-02.jpg`, alt: "Pump replacement, wiring completion, and final system test", caption: "Pump replacement, wiring completion, and final system test" }
        ]
      }
    ]
  }
];
