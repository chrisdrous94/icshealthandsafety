import { Flame, Globe, Shield, Brain, Heart, UserCheck, Clock, FileText } from "lucide-react";

export interface SubSection {
  id: string;
  title: string;
  content: string[];
}

export interface ProtocolSection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Flame;
  color: "blue" | "green" | "yellow" | "red";
  subsections: SubSection[];
}

export const protocolData: ProtocolSection[] = [
  {
    id: "emergency",
    number: "1",
    title: "Emergency Procedures",
    description: "Fire and earthquake response protocols including evacuation procedures and assembly points.",
    icon: Flame,
    color: "red",
    subsections: [
      {
        id: "fire-activation",
        title: "1.1.1 Fire Incident - Activation and Evacuation Protocol",
        content: [
          "In the event of a fire, a continuous warning bell will sound. All staff must stop work and evacuate the building.",
          "An intermittent or unusual alarm should be treated as a potential emergency, and evacuation should be initiated.",
          "Students must line up quietly by their classroom door. Teachers lead the group to the assembly point where a register will be taken.",
          "Choose escape routes based on the location of the fire (refer to floor plan).",
          "Assembly Points are located at the front and back of the building.",
          "In case of a Critical Incident, Assembly Points should be located further away, as advised by the Headteacher."
        ]
      },
      {
        id: "fire-routes",
        title: "1.1.2 Assembly Points and Escape Routes",
        content: [
          "Primary Classrooms (Ground Floor): Line up, exit via back door, proceed to rear assembly points.",
          "Year 2B and Year 3: Exit through classroom front door, proceed to end of primary corridor, exit and turn right to rear assembly points.",
          "Canteen: Use canteen front fire exit door. Teachers lead students to front assembly point. Kitchen staff use rear exit to rear assembly point.",
          "Outside During Playtime: Line students up and proceed to front assembly point.",
          "First Floor: Use main stairs or corridor through sports hall to exit via back right corner.",
          "Second Floor: Proceed to ground floor, exit via staff entrance/exit, and assemble at the back."
        ]
      },
      {
        id: "winter-evacuation",
        title: "1.1.3 Winter Evacuation Procedure",
        content: [
          "Children will not collect coats but will be issued blankets upon exit.",
          "Fire exits and pathways must remain clear at all times."
        ]
      },
      {
        id: "after-school-evacuation",
        title: "1.1.4 Evacuation During After-School Activities",
        content: [
          "The supervising teacher is responsible for evacuating and taking attendance of students using club registers."
        ]
      },
      {
        id: "fire-roles",
        title: "1.1.5 Fire Evacuation - Roles and Responsibilities",
        content: [
          "Staff Duties: Teachers call register or perform headcount at assembly point. Close all doors upon exiting. Maintain silence to hear instructions.",
          "School Administrator (Elena/Marina): Brings all class registers to the main assembly point. Any missing students must be reported to the designated teacher.",
          "Head Teachers: Collect headcounts from teachers. Report to Principal and Health and Safety Officer.",
          "Student Instructions: 1. Stay calm. 2. Line up quietly. 3. Follow your teacher. 4. Do not run or shout. 5. Wait quietly at the assembly point.",
          "Ground Floor Sweep: Dr. Chris, Marina Banks, Marat Khakimov",
          "First Floor Sweep: Julia Lepine, Kosmas Ourkeroglou, Christina Pouladou",
          "Second Floor Sweep: Ilia Shumilin, Sandy Eldessouki, Maxim Vlasov",
          "Extra-Curricular Programme Sweep - Ground Floor: Daria | First/Second Floors: Karina Demidenko",
          "First Aid Team: Sandy Eldessouky, Dr. Christoforos Drousiotis, Christina Poulladou, Andria Nikolaou, Anastasiou Kiriaki, Giannakis Kythreotis, Kosmas Ourkeroglou, Marat Khakimov",
          "Fire Warden Team: Ilia Shumilin, Kosmas Ourkeroglou, Maxim Vlasov, Elena Puzirevich, Dr. Christoforos Drousiotis, Ekaterina Shipilova",
          "Communications Manager: Elena Pyzirevitch / Marina Banks"
        ]
      },
      {
        id: "earthquake-signal",
        title: "1.2.1 Earthquake - Signal and Immediate Actions",
        content: [
          "The earthquake itself is the trigger. No alarm will be used during shaking.",
          "All individuals must immediately perform 'Drop, Cover, and Hold On.'",
          "Movement begins only after the shaking stops. (exception is the primary)"
        ]
      },
      {
        id: "earthquake-safety",
        title: "1.2.2 Safety During Shaking",
        content: [
          "Inside classrooms: Take cover immediately under desks or sturdy furniture. Protect head and neck.",
          "In open indoor areas (corridors, halls): Move away from windows, exterior walls, glass, and tall unsecured objects. Protect head and neck with arms.",
          "Outdoors: Move away from buildings, trees, poles, and overhead hazards. Stay low and protect your head."
        ]
      },
      {
        id: "earthquake-evacuation",
        title: "1.2.3 Evacuation Procedure After Shaking Stops",
        content: [
          "A. Primary Classrooms (Immediate Evacuation Group): Primary classrooms will receive an instant evacuation signal via pagers. These classrooms must evacuate immediately after shaking stops, without waiting for the main alarm. Teachers lead students directly to the assembly point using the designated safe route. Report class status to the Head of Primary.",
          "B. First Floor & Second Floor (Standard Evacuation Group): Evacuation begins after the evacuation alarm is activated and the Health & Safety officer gives the order. These floors evacuate only after assessment confirms it is safe to move (no structural damage, no falling hazards). Follow normal evacuation routes and assembly procedures.",
          "Important Note: Evacuation must always follow the sequence: 1. Shaking stops 2. Safety assessment by H&S 3. Evacuation order given. Primary classrooms have a priority immediate exit, while other floors evacuate after the alarm."
        ]
      },
      {
        id: "earthquake-assembly",
        title: "1.2.4 Earthquake Assembly Point",
        content: [
          "Use assembly areas far from buildings, walls, windows, trees, and wires.",
          "Maintain class lines and complete roll call.",
          "Await instructions from the Health & Safety Lead."
        ]
      },
      {
        id: "earthquake-special",
        title: "1.2.5 Special Situations",
        content: [
          "Winter: Provide blankets for students as needed.",
          "After-School Activities: Apply the same principles: Drop–Cover–Hold On, then evacuate once shaking stops and the order is given. Activity leaders are responsible for their group."
        ]
      },
      {
        id: "earthquake-roles",
        title: "1.2.6 Earthquake Roles and Responsibilities",
        content: [
          "Staff responsibilities follow the same structure as the fire evacuation plan.",
          "Health & Safety Lead conducts the rapid post-shake assessment and authorises evacuation."
        ]
      }
    ]
  },
  {
    id: "health",
    number: "2",
    title: "Health Protocols",
    description: "Management of transmissible diseases and pandemic response guidelines.",
    icon: Heart,
    color: "green",
    subsections: [
      {
        id: "diseases-objective",
        title: "2.1.1 Transmissible Diseases - Objective and Scope",
        content: [
          "To minimize the spread of diseases such as flu, COVID-19, and other illnesses.",
          "Applies to all students, staff, and visitors."
        ]
      },
      {
        id: "illness-reporting",
        title: "2.1.2 Illness Reporting and Return-to-School Policy",
        content: [
          "Stay home if experiencing symptoms (fever, cough, etc.).",
          "Return only after 24 hours symptom-free without medication."
        ]
      },
      {
        id: "notification",
        title: "2.1.3 Notification and Reporting",
        content: [
          "Parents must inform the school if a child is diagnosed.",
          "Staff must notify their supervisor and Health & Safety Officer."
        ]
      },
      {
        id: "hygiene",
        title: "2.1.4 Health Screenings and Hygiene Practices",
        content: [
          "Daily self-checks encouraged.",
          "Random temperature checks.",
          "Frequent handwashing (20 seconds) and sanitizer use.",
          "Cough/sneeze etiquette enforced."
        ]
      },
      {
        id: "cleaning",
        title: "2.1.5 Cleaning and Disinfection Procedures",
        content: [
          "Daily cleaning of high-touch surfaces."
        ]
      },
      {
        id: "distancing",
        title: "2.1.6 Social Distancing and Mask Guidelines",
        content: [
          "Maintain distancing where possible.",
          "Follow public health mask guidance."
        ]
      },
      {
        id: "vaccinations",
        title: "2.1.7 Vaccinations and Documentation",
        content: [
          "Vaccination encouraged.",
          "Proof may be requested depending on public health directives."
        ]
      },
      {
        id: "communication",
        title: "2.1.8 Communication and Transparency",
        content: [
          "Updates via email/newsletter/website.",
          "Confirmed cases communicated with confidentiality."
        ]
      },
      {
        id: "support",
        title: "2.1.9 Support and Accommodations",
        content: [
          "Sick leave policy awareness for staff.",
          "Emotional support and learning accommodations when needed."
        ]
      },
      {
        id: "enforcement",
        title: "2.1.10 Enforcement",
        content: [
          "Compliance mandatory.",
          "Non-compliance may lead to disciplinary action."
        ]
      },
      {
        id: "review",
        title: "2.1.11 Review and Updates",
        content: [
          "Policy reviewed regularly per health guidelines and school needs."
        ]
      },
      {
        id: "pandemic-objectives",
        title: "2.2.1 Pandemic Response - Objectives and Information Flow",
        content: [
          "Ensure continued operations and health safety.",
          "Head of Health & Safety must monitor and relay updates from authorities."
        ]
      },
      {
        id: "pandemic-risk",
        title: "2.2.2 Risk Scenarios (Color-Coded)",
        content: [
          "Risk scenarios are color-coded for quick identification."
        ]
      },
      {
        id: "pandemic-response",
        title: "2.2.3 Response Measures",
        content: [
          "Communicate status and risks to staff and families.",
          "Secure sanitary supplies and medical support.",
          "Enforce isolation, report infections, and support those affected.",
          "Reorganize schedules as needed.",
          "Enforce hygiene and PPE compliance."
        ]
      },
      {
        id: "pandemic-reentry",
        title: "2.2.4 Reentry and Reintegration",
        content: [
          "Require medical clearance before returning to school.",
          "Monitor symptoms and ensure classroom hygiene.",
          "Coordinate with health authorities for ongoing updates."
        ]
      }
    ]
  },
  {
    id: "threat",
    number: "3",
    title: "Threat Response Protocols",
    description: "Procedures for bomb threats, armed attacks, and harmful substance incidents.",
    icon: Shield,
    color: "yellow",
    subsections: [
      {
        id: "threat-overview",
        title: "3.1 Overview: Purpose and Scope",
        content: [
          "This protocol establishes a coordinated response to threats such as bomb scares, armed intrusions, and exposure to harmful substances.",
          "It applies during school hours, staff/student transit times, and off-site events."
        ]
      },
      {
        id: "threat-definitions",
        title: "3.2 Definitions",
        content: [
          "Explosive Device Threat: Warning or suspicion of a bomb on or near school property.",
          "Armed Attack Threat: Suspected or confirmed use of weapons (firearms, knives, etc.).",
          "Harmful Substance Threat: Presence or warning of chemical, toxic, or biological substances.",
          "Unauthorized Person: Any individual on campus without permission or clear purpose.",
          "Suspicious Object: Any unattended or unusual item emitting smells, sounds, or visible danger indicators."
        ]
      },
      {
        id: "threat-guidelines",
        title: "3.3 General Guidelines for Threat Response",
        content: [
          "3.3.1 Calm and Structured Response: Maintain calm and order. Follow defined protocols depending on the type of threat.",
          "3.3.2 Role of Principal and Head of Health & Safety: Notify law enforcement and Civil Defence. Assess threat level with police. Determine response (lockdown, evacuation, or assembly).",
          "3.3.3 Notification Channels: Immediate threats - Call emergency services (112), Ministry of Education. Broader alerts - Use Telegram/email to notify school staff."
        ]
      },
      {
        id: "bomb-threat",
        title: "3.4.1 Bomb Threat Protocol",
        content: [
          "Use Appendix A questions to gather information from the caller.",
          "Notify Head of Health & Safety and Principal immediately.",
          "Principal coordinates with police and MOESY.",
          "Avoid fire alarms — use loudhailer or Telegram to announce evacuation.",
          "Evacuate to designated areas, avoiding threat sites. Designated area for assembly is the seaside opposite to the Glaros fish tavern. (300 meters radius)",
          "Leave doors and windows open to minimize blast impact and aid ventilation during evacuation. This applies specifically during bomb threat evacuations only.",
          "Avoid mobile/radio use near suspected devices (within 30 meters)."
        ]
      },
      {
        id: "armed-attack",
        title: "3.4.2 Armed Attack Protocol",
        content: [
          "Immediately inform Head of Health & Safety and Principal.",
          "Secure rooms: Lock doors, close blinds, remain silent.",
          "Move away from the attacker's known location.",
          "Do not engage with the attacker under any circumstances.",
          "Notify police with critical information about attacker location and description.",
          "Only police are authorized to manage direct contact with armed persons."
        ]
      },
      {
        id: "substance-threat",
        title: "3.4.3 Harmful Substance Threat Protocol",
        content: [
          "Gather information using Appendix A threat communication form.",
          "Notify Head of Health & Safety and Principal immediately.",
          "If contamination is suspected in closed spaces: Evacuate individuals from the room, closing doors and windows behind them. Ensure those possibly affected avoid physical contact with others.",
          "If contamination is suspected in open spaces or airborne: Move upwind.",
          "Do not touch or consume any food, drinks, or other consumables until cleared by the police.",
          "Conduct visual inspection only of areas such as water tanks, canteen, and ventilation systems for signs of tampering, but avoid direct contact."
        ]
      },
      {
        id: "special-cases",
        title: "3.5 Handling Special Cases",
        content: [
          "3.5.1 Persons with Disabilities (PWDs): Activate Support Team for PWDs. Use designated evacuation routes and equipment (e.g., stair chairs). Provide verbal/visual communication as appropriate.",
          "3.5.2 Visitors, Delivery Personnel, Parents: Direct to safe evacuation routes. Parents may pick up students only if it does not interfere with safety or police operations.",
          "3.5.3 Student Attendance Verification: Ensure registers are taken during threat response to confirm student locations."
        ]
      },
      {
        id: "evacuation-communication",
        title: "3.6 Evacuation and Communication Protocols",
        content: [
          "3.6.1 Alarm and Communication Systems: Use separate signals or direct announcements to avoid confusion between fire and bomb threats.",
          "3.6.2 Assembly Area Inspection: The Head of Health & Safety visually inspects the area before use. Avoid moving near suspicious objects.",
          "3.6.3 Use of Devices Near Threat Sites: Avoid using phones or radios within 30 meters of suspicious packages."
        ]
      }
    ]
  },
  {
    id: "psychological",
    number: "4",
    title: "Psychological Support and Recovery",
    description: "Support during incidents, post-incident recovery, and preventative measures.",
    icon: Brain,
    color: "blue",
    subsections: [
      {
        id: "during-crisis",
        title: "4.1.1 Crisis Management and Emotional Support",
        content: [
          "Ensure safety protocols are strictly followed.",
          "Provide access to basic needs such as food, water, and blankets if evacuation is prolonged.",
          "Assign designated staff to monitor and support students showing immediate emotional distress."
        ]
      },
      {
        id: "during-confidentiality",
        title: "4.1.2 Confidentiality and Controlled Communication",
        content: [
          "Only verified information should be shared to avoid panic.",
          "All communication must be approved by the Head of Health & Safety or Principal."
        ]
      },
      {
        id: "during-vulnerable",
        title: "4.1.3 Support for Vulnerable Students",
        content: [
          "Monitor students with pre-existing conditions, trauma, or special needs.",
          "Provide additional comfort and supervision as necessary."
        ]
      },
      {
        id: "post-safety",
        title: "4.2.1 Ensuring Safety and Reassurance",
        content: [
          "Inspect all school premises before resuming operations.",
          "Communicate safety measures to parents and staff.",
          "Reaffirm school's security protocols."
        ]
      },
      {
        id: "post-emotional",
        title: "4.2.2 Emotional Care and Routines",
        content: [
          "Maintain familiar routines for students.",
          "Create a supportive environment for sharing feelings, especially for older students.",
          "Use comforting gestures and reassurance for younger students."
        ]
      },
      {
        id: "post-monitoring",
        title: "4.2.3 Monitoring and Guidance",
        content: [
          "Teachers observe student behavior in the days following the incident.",
          "Re-establish normalcy through routine reinforcement without being overly strict or lenient."
        ]
      },
      {
        id: "long-term-referral",
        title: "4.3.2 Referral to Specialists",
        content: [
          "Refer to professionals if symptoms persist for several weeks or affect functioning.",
          "Indicators include emotional outbursts, decline in academic performance, or social withdrawal.",
          "Parents should contact Mental Health Services (e.g., CAMHS: 22284700) if specialist care is needed."
        ]
      },
      {
        id: "long-term-vulnerable",
        title: "4.3.3 Vulnerable Populations",
        content: [
          "Students with a history of trauma or limited support systems should receive prioritized monitoring.",
          "Ongoing check-ins may be required."
        ]
      },
      {
        id: "preventative-training",
        title: "4.4.1 Emergency Preparedness Training",
        content: [
          "Conduct regular drills for both students and staff.",
          "Include role-specific actions and realistic scenarios."
        ]
      },
      {
        id: "preventative-coping",
        title: "4.4.2 Coping Skills and Resilience",
        content: [
          "Promote activities and conversations that build confidence and problem-solving skills.",
          "Teach emotional regulation and mindfulness strategies."
        ]
      },
      {
        id: "preventative-observation",
        title: "4.4.3 Ongoing Observation and Engagement",
        content: [
          "Staff to regularly check in with students, especially those identified as high risk.",
          "Encourage peer support and teacher involvement to maintain a positive environment."
        ]
      }
    ]
  },
  {
    id: "firstaid",
    number: "5",
    title: "First Aid & Medical Emergency",
    description: "First aid principles, emergency protocols, equipment locations, and documentation.",
    icon: Heart,
    color: "red",
    subsections: [
      {
        id: "firstaid-purpose",
        title: "5.1 Purpose and Scope",
        content: [
          "This protocol establishes a unified, systematic response to medical emergencies occurring during the Main School Programme (07:30–15:00) and the Extracurricular Programme (15:00–18:00).",
          "It ensures that all students, staff, visitors, and contractors receive timely and appropriate care and that roles and responsibilities are clearly defined.",
          "This protocol applies to: All school premises, playgrounds, and extracurricular activity areas. All school staff, visiting teachers, and external associates."
        ]
      },
      {
        id: "firstaid-chain",
        title: "5.2 Chain of Medical Responsibility",
        content: [
          "5.2.1 Main School Programme (07:30–16:00): The School Doctor is the Primary Medical Responder for all incidents. All medical emergencies—minor or severe—must be reported immediately to the School Doctor. No teacher or staff member should make medical decisions without the School Doctor's assessment unless life-saving urgent actions are required.",
          "If the School Doctor is absent or off-site before 16:00: 1. The First Aid Team is activated in the order defined by the H&S Lead. 2. Reception must attempt to reach the next available First Aid Team member. 3. The most senior available First Aid Team member becomes the coordinator for that incident.",
          "5.2.2 Extracurricular Programme (16:00–18:00): If the School Doctor is still on-site → he remains the Primary Medical Responder. If he has left → incident is managed by Head of EXTRA.",
          "5.2.3 Teachers and Activity Leaders: Provide initial supervision and ensure the safety of the injured individual. Must never leave the child alone. Must never provide medical treatment unless trained. Must call Reception immediately.",
          "5.2.4 Reception Staff: Reception is the central communication hub during working hours. Call the School Doctor immediately for all incidents. If unavailable, activate the First Aid Team."
        ]
      },
      {
        id: "firstaid-drabc",
        title: "5.3 General First Aid Principles (DRABC Framework)",
        content: [
          "1. Danger – Ensure the area is safe.",
          "2. Response – Check for responsiveness.",
          "3. Airway – Open and maintain.",
          "4. Breathing – Check for normal breathing.",
          "5. Circulation – Control severe bleeding.",
          "General Staff Rules: Never leave an injured student unsupervised. Do not give food, drink, or medication. Remove bystanders. Stay calm and reassuring."
        ]
      },
      {
        id: "firstaid-112",
        title: "5.3.3 When to Call 112 Immediately",
        content: [
          "Difficulty breathing or choking",
          "Severe bleeding",
          "Seizure >5 minutes",
          "Unresponsive student",
          "Suspected spine/neck injury",
          "Anaphylaxis",
          "Snake bite",
          "Severe asthma attack"
        ]
      },
      {
        id: "firstaid-roles",
        title: "5.4 Roles and Responsibilities",
        content: [
          "5.4.1 Health & Safety Lead / Primary Responder (School Doctor): Responds to all medical emergencies until 16:00. Conducts assessment. Directs First Aid Team. Calls emergency services when needed. Completes documentation. Updates the Medical Log.",
          "5.4.2 First Aid Team: Act when the School Doctor is absent or delegated. Provide first aid within scope of training. Call emergency services if needed. Inform the School Doctor as soon as possible.",
          "5.4.3 Reception: Coordinates communication. Logs times. Contacts parents upon instruction.",
          "5.4.4 Teachers / Activity Leaders: Keep the child safe and supervised. Provide factual information to responders.",
          "5.4.5 Head of EXTRA (Karina): Manages all emergencies after 16:00 if the School Doctor is not on site. Ensures club registers are available. Coordinates with the First Aid Team.",
          "5.4.6 Security Guards: Assist responders. Open gates. Guide ambulance."
        ]
      },
      {
        id: "firstaid-scenarios",
        title: "5.5 Scenario-Based Emergency Protocols",
        content: [
          "A. Severe Bleeding / Open Wounds: Apply pressure. Call the School Doctor. 112 if bleeding does not stop or is arterial.",
          "B. Suspected Fracture / Spinal Injury: Do NOT move the child. Immobilise. 112 for spine, neck, or open fractures.",
          "C. Head Injury / Concussion: Observe closely. No return to sports the same day. 112 for vomiting, unconsciousness, confusion.",
          "D. Asthma Attack: Sit upright. Assist with an inhaler. 112 if no improvement after 10 minutes.",
          "E. Allergic Reaction / Anaphylaxis: Administer EpiPen/Anapen if trained. 112 immediately.",
          "F. Seizures: Do NOT restrain. Protect head. Time seizure. 112 if >5 minutes.",
          "G. Diabetic Emergencies: Follow care plan. Give sugar only if conscious. 112 if unconscious or confused.",
          "H. Choking: Back blows / abdominal thrusts (if trained). 112 if not resolved.",
          "I. Burns / Scalds: Cool 20 minutes. 112 for large or facial burns.",
          "J. Nosebleeds: Lean forward, pinch nose. 112 if >30 minutes or injury-related.",
          "K. Fainting: Lay flat, elevate legs. 112 if breathing is abnormal.",
          "L. Vomiting / Diarrhea: Monitor hydration. Isolate if infectious suspected.",
          "M. Poisoning / Chemical Exposure: Move away from substance. Do not induce vomiting. 112 immediately.",
          "N. Mental Health Crisis: Move to a quiet space. Reassure. 112 for self-harm risk.",
          "O. Animal / Snake Bite: Keep still. Immobilise. 112 immediately."
        ]
      },
      {
        id: "firstaid-equipment",
        title: "5.6 First Aid Equipment and Locations",
        content: [
          "Main First Aid Room.",
          "Mobile kits: Assembly hall, Science room.",
          "AED location (reception). Only trained staff may use it."
        ]
      },
      {
        id: "firstaid-communication",
        title: "5.7 Communication Protocol",
        content: [
          "Parents contacted only after assessment.",
          "Principal informed for serious cases.",
          "112 activated by the School Doctor or First Aid Team unless immediate life-saving action is needed."
        ]
      },
      {
        id: "firstaid-documentation",
        title: "5.8 Documentation Requirements",
        content: [
          "Incident Form.",
          "Severe Injury Report if applicable.",
          "Parent acknowledgement."
        ]
      }
    ]
  },
  {
    id: "security",
    number: "6",
    title: "Security Guard Protocol",
    description: "Guard responsibilities, reporting incidents, emergency protocols, and interaction guidelines.",
    icon: UserCheck,
    color: "blue",
    subsections: [
      {
        id: "security-behavior",
        title: "6.1 General Behavior Expectations",
        content: [
          "Professional Tone: Security guards must always interact with students, staff, and visitors in a respectful, professional, and formal manner. They should be polite, calm, and neutral in their interactions.",
          "Respectful Communication: Guards should never raise their voices unnecessarily or use harsh language. All communication should be clear and concise.",
          "Appropriate Interaction: Guards should refrain from unnecessary physical contact with students or others. Any contact should be limited to what is absolutely necessary to ensure safety.",
          "Non-Verbal Communication: Guards should be attentive and focused, using body language that conveys respect and authority, such as standing upright and maintaining eye contact when speaking.",
          "De-Escalation: In situations where tensions rise, guards must remain calm, speak slowly and clearly, and avoid any actions or words that might escalate the situation. Use calming phrases and gestures to diffuse conflict.",
          "Appearance: Guards must be in complete uniform at all times during their shift. The uniform should be clean, properly fitted, and presentable. Guards must maintain good personal hygiene and grooming."
        ]
      },
      {
        id: "security-responsibilities",
        title: "6.2 Guard Responsibilities",
        content: [
          "Access Control: Guards must monitor all entrances and exits to the school premises, ensuring only authorized individuals are permitted entry.",
          "Visitor Identification: They should verify the identity of all visitors and ensure they sign in and receive appropriate visitor passes before entering. Guards should escort visitors when necessary.",
          "Monitoring for Unauthorized Access: If a person attempts to enter without proper identification or authorization, guards should calmly inform them of the school's access protocols and deny entry if they do not comply.",
          "Surveillance: Guards should be alert to signs of suspicious activity around entrances, such as individuals loitering or attempting to enter during off-hours.",
          "Routine Patrols: Guards should conduct regular and random patrols throughout both the internal and external areas of the school, ensuring all areas are secure.",
          "High-Risk Areas: Particular attention should be given to areas such as parking lots, hallways, stairwells, and school perimeters, where risks may be higher.",
          "Visibility: Guards should maintain high visibility, especially during critical times (arrival and dismissal times), to ensure a presence that deters potential security threats.",
          "Safety Drill Participation: Guards must actively participate in regular safety drills (fire, lockdown, evacuation) and understand their role within each drill."
        ]
      },
      {
        id: "security-reporting",
        title: "6.3 Reporting Incidents",
        content: [
          "Types of Incidents to Report: Accidents (minor injuries, medical emergencies), Suspicious Behavior (loitering, unauthorized presence), Unauthorized Entry (breaches of security protocols), Disturbances (fights, verbal altercations), Other Security Concerns (vandalism, theft, trespassing).",
          "Reporting Process: Immediate Communication - Notify the health and safety lead immediately through phone or radio.",
          "Written Report: Complete the designated incident report form, including: Date and time of the incident, Location, Names of individuals involved (if applicable), Description of the event and actions taken, Follow-up actions or recommendations.",
          "Submission Deadline: Reports must be submitted by the following day."
        ]
      },
      {
        id: "security-emergency",
        title: "6.4 Emergency Protocols",
        content: [
          "Fire Protocols: Assist with evacuation and ensure fire exits remain clear. Guide students, staff, and visitors to designated assembly areas.",
          "Medical Emergencies: Provide basic first aid and contact emergency medical services if needed. Notify the health and safety lead immediately.",
          "Lockdown Protocols: Secure entrances and exits. Assist in coordinating communication between school staff and emergency responders.",
          "Active Threat Situations: Notify law enforcement and the health and safety lead immediately. Maintain a safe distance and avoid direct confrontation unless absolutely necessary."
        ]
      },
      {
        id: "security-students",
        title: "6.5 Interaction with Students",
        content: [
          "Professional Behavior: Security guards must maintain a formal, respectful, and neutral demeanor with students at all times.",
          "Sexual Harassment Prevention: Guards must refrain from any form of sexual harassment, inappropriate comments, or suggestive behavior towards students, staff, or visitors. Any misconduct will result in immediate disciplinary action and possible legal consequences.",
          "Handling Student Behavior: If a student's behavior raises concern (e.g., fighting, bullying, disruptive behavior), guards should report the incident to the appropriate school staff immediately. Guards should not intervene directly in such situations unless physical safety is at risk."
        ]
      },
      {
        id: "security-contingency",
        title: "6.6 Contingency Procedure – Absence or Delay of Security Personnel",
        content: [
          "1. Notification & Escalation: The security guard must inform the Health & Safety Lead (Dr. Christoforos Drousiotis) immediately in case of absence, illness, or delay. If the security guard is not on site by 7:20 AM, the Health & Safety Lead must: Contact the security company immediately to report the absence/delay and request instructions or replacement coverage. Inform the Front Desk.",
          "2. Temporary Morning Coverage (Security Absent): If security is absent or delayed in the morning: The morning cleaner (first to arrive on site) is responsible for opening the main school gate. The morning cleaner must NOT: Escort visitors, Manage visitor access. If both security and cleaner are absent, the Front Desk opens the school gates.",
          "3. Visitor & Access Control: All visitors must be: Directed immediately to the Front Desk, Logged by the Front Desk staff. No visitor is allowed to move within the school without authorization.",
          "4. Ongoing Monitoring: The Health & Safety Lead remains responsible for monitoring.",
          "5. Documentation: Any absence or delay of security personnel must be documented."
        ]
      }
    ]
  },
  {
    id: "operations",
    number: "7",
    title: "Operational Coverage & Daily Handover",
    description: "Daily handover procedures, working hours, responsibility hierarchy, and documentation requirements.",
    icon: Clock,
    color: "green",
    subsections: [
      {
        id: "operations-purpose",
        title: "7.1 Purpose and Scope",
        content: [
          "This protocol establishes a structured and consistent system for daily operational coverage and the formal transfer of responsibility between shifts.",
          "Its purpose is to prevent gaps in supervision, ensure continuity of safety and medical oversight, and eliminate reliance on ad hoc or informal arrangements.",
          "This protocol applies to: Health & Safety Lead, Deputy Health & Safety, Security personnel."
        ]
      },
      {
        id: "operations-committee",
        title: "7.2 Health & Safety Committee – Governance and Oversight",
        content: [
          "The Health & Safety Committee provides governance, coordination, and oversight for the operational coverage and responsibility framework.",
          "The Committee operates in accordance with the principles of Directive 89/391/EEC and the Cyprus Safety and Health at Work Law, acting in a consultative and advisory capacity.",
          "Committee Members: Employer's Representative (Principal or delegated senior manager), the Health & Safety Lead, the Deputy Health & Safety Lead, the Head of EXTRA, employee representatives (Primary and secondary headteachers).",
          "The Committee is responsible for: Reviewing incidents, near misses, audit findings, and operational feedback. Endorsing procedures related to coverage, escalation, and responsibility transfer. Supporting training, communication, and system improvements.",
          "Designated Roles: The appointed Health & Safety Lead for the school is Dr. Christoforos Drousiotis. The appointed Deputy Health & Safety Lead is Mr. Ilia Shumilin, Headteacher of Secondary."
        ]
      },
      {
        id: "operations-hours",
        title: "7.3 Standard Working Hours and Responsibility Hierarchy",
        content: [
          "The standard working hours of the Health & Safety Lead are 08:00–16:00.",
          "During this period, the Health & Safety Lead holds primary responsibility for: Health and safety oversight, Coordination of medical incidents and first aid escalation, Security and operational coordination, Completion of incident reporting and documentation.",
          "In the absence or temporary unavailability of the Health & Safety Lead during 08:00–16:00, responsibility is assumed by the Deputy Health & Safety Lead, who is granted full authority to act in accordance with school policies.",
          "At 16:00, operational responsibility formally transfers to the Head of EXTRA / designated Manager on Duty.",
          "Operational Responsibility Hierarchy: 08:00-16:00: Health & Safety Lead (if unavailable: Deputy H&S Lead) | After 16:00: Head of EXTRA / Manager on Duty",
          "Authority is time-based and protocol-driven. Responsibility is held by one designated role at any given time."
        ]
      },
      {
        id: "operations-morning",
        title: "7.4 Morning Coverage Principles",
        content: [
          "School opening, gate control, and arrival supervision are the responsibility of security personnel.",
          "In the event of security absence or delay, the Contingency Procedure – Absence or Delay of Security Personnel (Section 6.6) applies.",
          "The Health & Safety Lead is required to be on site at 07:30."
        ]
      },
      {
        id: "operations-handover",
        title: "7.5 Daily 16:00 Handover Procedure",
        content: [
          "A mandatory daily handover must take place at 16:00.",
          "The handover is communicated via an official Telegram message to: Head of EXTRA / Extra coordinator.",
          "The handover must confirm: Presence and status of security and cleaning staff, Access control and gate status, Medical / first aid status and any ongoing cases, Status of after-school activities, Identified risks, incidents, or required follow-up actions."
        ]
      },
      {
        id: "operations-transfer",
        title: "7.6 Transfer of Responsibility",
        content: [
          "At 16:00, operational responsibility is formally transferred to: The Head of EXTRA / Extra coordinator, Evening security personnel.",
          "After this time, the Health & Safety Lead is not required to remain on site unless: A pre-agreed extended duty has been scheduled, or An active incident requires continued involvement.",
          "If an active incident begins before 16:00, the Health & Safety Lead retains operational authority until the incident is formally closed, regardless of time."
        ]
      },
      {
        id: "operations-extended",
        title: "7.7 Extended Working Hours",
        content: [
          "Any work beyond 08:00–16:00 must: Be pre-approved or justified by an active incident, Be communicated to management, Be recorded as extended duty.",
          "Extended working hours must not become routine, implicit, or assumed."
        ]
      },
      {
        id: "operations-documentation",
        title: "7.8 Documentation and Accountability",
        content: [
          "The daily handover message serves as: Formal proof of operational responsibility transfer, A real-time operational record, Supporting documentation for audits, inspections, or incident reviews.",
          "Any unresolved issues must be clearly stated and explicitly assigned to the receiving party."
        ]
      }
    ]
  },
  {
    id: "appendices",
    number: "8",
    title: "Appendices",
    description: "Reference forms and detailed protocols for specific threat scenarios.",
    icon: FileText,
    color: "yellow",
    subsections: [
      {
        id: "appendix-a",
        title: "Appendix A - Threat Communication Form (Guiding Questions)",
        content: [
          "Guiding questions for managing communication with the threatening individual to gather information related to the threat:",
          "1. Depending on the type of threat: For an explosive device: Where is it? What is it? For an armed threat: Where is it? What is the weapon (e.g., gun, knife)? For harmful substances: Where is it? What is it?",
          "2. Why and when?",
          "3. Speech characteristics: Caller's voice analysis (Man/Woman/Child, Accent, Calm/Excited/Angry/Scared/Crying, Clearing throat/Cracking voice/Slurred, Fast/Slow, Deep/Raspy/Screaming, Disguised)",
          "4. Exact words or phrases used (notable words or repetitions)",
          "5. Background noise: Street noises, Kitchen noises, Factory machinery, Laughter, House noises, Music, Voices, Animal noises, Engines or motors, Office machinery, Without background noises, Other",
          "6. Note the time, place, and how the threat was made (orally or in writing)",
          "7. Details of the staff member who received the threat: Full name, Service, Time/place, To whom and when it was passed on"
        ]
      },
      {
        id: "appendix-b",
        title: "Appendix B - Bomb Threat Protocol",
        content: [
          "Purpose: The Bomb Threat Protocol is designed to guide I CAN SCHOOL's initial response to bomb threats or suspicious objects.",
          "A. Handling Communication: Staff should refer to Appendix A questions to gather critical information. Immediately inform the Head of Health and Safety and/or Principal.",
          "B. Notification Procedures: The Head of Health and Safety and/or Principal contacts: Police (Emergency: 112), MOESY (Relevant Education Directorate and Civil Defence, Security, and Health Office).",
          "C. Arrival of Police and Coordination: Work with police on threat assessment.",
          "D. Evacuation Procedures: Upon determining a need for evacuation, the Head of Health and Safety initiates the evacuation plan.",
          "E. Use of Communication Devices: To prevent accidental detonation, avoid using mobile phones or radio equipment within 30 metres of a suspected explosive device.",
          "F. Police Handover and Incident Resolution: Upon arrival, the police will assume full control. Staff must follow police instructions precisely."
        ]
      },
      {
        id: "appendix-c",
        title: "Appendix C - Armed Attack Protocol",
        content: [
          "Purpose: The Armed Attack Protocol aims to protect students and staff in the event of a threat involving firearms, knives, or other weapons.",
          "A. Communication and Notification: Immediately inform the Head of Health and Safety and/or Principal. Contact Police (112) and MOESY.",
          "B. Safe Space Protocol – Lockdown: If no active shooter is confirmed within school premises: Lock doors from the inside, Close all windows and blinds, Use silent communication, Remain as quiet as possible.",
          "C. Inspection Protocol: The Head of Health and Safety or designated personnel should visually inspect school premises for suspicious individuals, prioritizing common-sense assessments without placing staff at undue risk.",
          "D. Response if an Armed Individual is Located: Move all individuals as far as possible from the area. Staff and students should not engage with or approach the armed individual. Only police are authorized to manage direct contact.",
          "E. Police Handover: Once police arrive, they will control the situation. All staff must strictly follow police instructions."
        ]
      },
      {
        id: "appendix-d",
        title: "Appendix D - Harmful Substance Threat Protocol",
        content: [
          "Purpose: This protocol enables effective response to threats involving harmful substances (chemical or toxic materials).",
          "A. Handling Communication: Staff should follow Appendix A to gather critical details about location and type of harmful substance.",
          "B. Notification: The Head of Health and Safety and/or Principal should contact emergency services.",
          "C. Evacuation or Sheltering: If contamination is suspected in closed spaces: Evacuate individuals from the room, closing doors and windows behind them. Ensure those possibly affected avoid physical contact with others. If airborne contamination suspected: Move upwind.",
          "D. Handling and Inspection: Do not touch or consume any food, drinks, or consumables until cleared by police. Conduct visual inspection only of water tanks, canteen, and ventilation systems.",
          "E. Police and Emergency Services Coordination: On arrival, police or emergency responders assume control, managing containment and assessing the area for residual risk."
        ]
      },
      {
        id: "appendix-e",
        title: "Appendix E - Educational Psychology Recommendations",
        content: [
          "Purpose: To ensure the mental and emotional wellbeing of students, staff, and parents.",
          "1. Psychological Support During the Incident: A. Crisis Management - Ensure all protocols are followed. Basic needs available at assembly areas if prolonged evacuation. B. Confidentiality - Limit information to verified facts to prevent panic. C. Support for Vulnerable Individuals - Monitor those with previous trauma, mental health issues, or special needs.",
          "2. Post-Incident Care ('Next-Day' Strategies): A. Confirm safety of school premises and communicate safety measures. B. Create supportive environment, maintain familiar routines. C. Teachers observe for signs of distress or behavioural changes.",
          "3. Guidelines for Communicating with Students: A. Age-Appropriate Discussions - Adapt to cognitive development level. B. Consider cultural factors and needs of vulnerable students. C. Emphasise normalcy and optimism.",
          "4. Long-Term Support: A. Monitor temporary distress and behavioural changes. B. Prioritize support for students with past trauma or limited support at home. C. Signs for Specialist Referrals: Persistent symptoms affecting functioning, emotional outbursts, academic decline, social withdrawal. Contact Mental Health Services (CAMHS: 22284700) if needed."
        ]
      },
      {
        id: "appendix-f",
        title: "Appendix F - Daily Operational Handover Template (16:00)",
        content: [
          "This template should be used for the mandatory daily 16:00 handover via Telegram message.",
          "Contents to confirm: Presence and status of security and cleaning staff, Access control and gate status, Medical / first aid status and any ongoing cases, Status of after-school activities, Identified risks, incidents, or required follow-up actions, Any unresolved issues with explicit assignment to receiving party."
        ]
      }
    ]
  }
];

export const quizQuestions = [
  {
    id: 1,
    moduleId: "emergency",
    question: "What should you do immediately when the fire alarm sounds?",
    options: [
      "Continue working until you finish your task",
      "Stop work and evacuate the building",
      "Call the fire department first",
      "Collect your personal belongings"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    moduleId: "emergency",
    question: "What is the correct response during an earthquake?",
    options: [
      "Run outside immediately",
      "Stand near windows",
      "Drop, Cover, and Hold On",
      "Use the elevator to evacuate"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    moduleId: "emergency",
    question: "During a bomb threat evacuation, what should you do with doors and windows?",
    options: [
      "Close and lock them tightly",
      "Leave them open to minimize blast impact",
      "Break the windows for ventilation",
      "It doesn't matter"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    moduleId: "health",
    question: "How long should you wash your hands for proper hygiene?",
    options: [
      "5 seconds",
      "10 seconds",
      "20 seconds",
      "1 minute"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    moduleId: "health",
    question: "When can a sick student return to school?",
    options: [
      "As soon as they feel better",
      "After 24 hours symptom-free without medication",
      "After taking antibiotics for one day",
      "Immediately with a doctor's note"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    moduleId: "threat",
    question: "What should you do during an armed attack?",
    options: [
      "Confront the attacker",
      "Run towards the nearest exit regardless of location",
      "Lock doors, close blinds, remain silent",
      "Use your phone to record the incident"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    moduleId: "threat",
    question: "How far should you stay away from suspected explosive devices when using communication devices?",
    options: [
      "5 meters",
      "10 meters",
      "30 meters",
      "100 meters"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    moduleId: "psychological",
    question: "What should staff do when observing students after an incident?",
    options: [
      "Ignore minor behavioral changes",
      "Immediately send all students to counseling",
      "Observe for signs of distress in the following days",
      "Avoid talking about the incident entirely"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    moduleId: "firstaid",
    question: "What is the first step in the DRABC framework?",
    options: [
      "Response - Check for responsiveness",
      "Danger - Ensure the area is safe",
      "Airway - Open and maintain",
      "Breathing - Check for normal breathing"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    moduleId: "firstaid",
    question: "For how long should you cool a burn with running water?",
    options: [
      "5 minutes",
      "10 minutes",
      "20 minutes",
      "30 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    moduleId: "firstaid",
    question: "When should you call 112 for a seizure?",
    options: [
      "Immediately when it starts",
      "If it lasts more than 5 minutes",
      "Only if the person is unconscious",
      "After 30 minutes"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    moduleId: "security",
    question: "What is a primary responsibility of security guards?",
    options: [
      "Teaching classes when needed",
      "Verify identity of all visitors and issue badges",
      "Managing the school budget",
      "Counseling students"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    moduleId: "security",
    question: "By what time must the security guard be on site?",
    options: [
      "7:00 AM",
      "7:20 AM",
      "7:30 AM",
      "8:00 AM"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    moduleId: "operations",
    question: "At what time does operational responsibility formally transfer from the Health & Safety Lead?",
    options: [
      "15:00",
      "16:00",
      "17:00",
      "18:00"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    moduleId: "operations",
    question: "Who assumes operational responsibility after 16:00?",
    options: [
      "The School Doctor",
      "The Principal",
      "The Head of EXTRA / Manager on Duty",
      "The Security Guard"
    ],
    correctAnswer: 2
  }
];
