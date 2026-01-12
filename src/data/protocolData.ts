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
        id: "fire",
        title: "1.1 Fire Incident Response",
        content: [
          "In the event of a fire, a continuous warning bell will sound. All staff must stop work and evacuate the building.",
          "Students must line up quietly by their classroom door. Teachers lead the group to the assembly point where a register will be taken.",
          "Assembly Points are located at the front and back of the building.",
          "Close all doors upon exiting and maintain silence to hear instructions."
        ]
      },
      {
        id: "fire-routes",
        title: "1.1.2 Assembly Points and Escape Routes",
        content: [
          "Primary Classrooms (Ground Floor): Line up, exit via back door, proceed to rear assembly points.",
          "Year 2B and Year 3: Exit through classroom front door, proceed to end of primary corridor, exit and turn right to rear assembly points.",
          "Canteen: Use canteen front fire exit door. Teachers lead students to front assembly point.",
          "First Floor: Use main stairs or corridor through sports hall to exit via back right corner.",
          "Second Floor: Proceed to ground floor, exit via staff entrance/exit, and assemble at the back."
        ]
      },
      {
        id: "earthquake",
        title: "1.2 Earthquake Incident Response",
        content: [
          "The earthquake itself is the trigger. No alarm will be used during shaking.",
          "All individuals must immediately perform 'Drop, Cover, and Hold On.'",
          "Inside classrooms: Take cover immediately under desks or sturdy furniture. Protect head and neck.",
          "Outdoors: Move away from buildings, trees, poles, and overhead hazards. Stay low and protect your head.",
          "Evacuation begins only after shaking stops and the Health & Safety officer gives the order."
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
        id: "diseases",
        title: "2.1 Management of Transmissible Diseases",
        content: [
          "Stay home if experiencing symptoms (fever, cough, etc.).",
          "Return only after 24 hours symptom-free without medication.",
          "Parents must inform the school if a child is diagnosed.",
          "Staff must notify their supervisor and Health & Safety Officer.",
          "Daily self-checks encouraged with random temperature checks."
        ]
      },
      {
        id: "hygiene",
        title: "2.1.4 Health Screenings and Hygiene Practices",
        content: [
          "Frequent handwashing for at least 20 seconds with soap and water.",
          "Hand sanitizer use when soap is not available.",
          "Cough/sneeze etiquette: use elbow or tissue, dispose of tissues properly.",
          "Daily cleaning of high-touch surfaces.",
          "Maintain distancing where possible and follow public health mask guidance."
        ]
      },
      {
        id: "pandemic",
        title: "2.2 Pandemic Response Plan",
        content: [
          "Head of Health & Safety monitors and relays updates from authorities.",
          "Risk scenarios are color-coded for quick identification.",
          "Communicate status and risks to staff and families promptly.",
          "Enforce isolation protocols and report infections.",
          "Require medical clearance before returning to school after illness."
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
        id: "overview",
        title: "3.1 Overview and Definitions",
        content: [
          "Explosive Device Threat: Warning or suspicion of a bomb on or near school property.",
          "Armed Attack Threat: Suspected or confirmed use of weapons (firearms, knives, etc.).",
          "Harmful Substance Threat: Presence or warning of chemical, toxic, or biological substances.",
          "Maintain calm and order. Follow defined protocols depending on the type of threat."
        ]
      },
      {
        id: "bomb",
        title: "3.4.1 Bomb Threat Protocol",
        content: [
          "Use Appendix A questions to gather information from the caller.",
          "Notify Head of Health & Safety and Principal immediately.",
          "Avoid fire alarms — use loudhailer or direct communication to announce evacuation.",
          "Evacuate to designated areas at least 300 meters away, avoiding threat sites.",
          "Leave doors and windows open to minimize blast impact.",
          "Avoid mobile/radio use near suspected devices."
        ]
      },
      {
        id: "armed",
        title: "3.4.2 Armed Attack Protocol",
        content: [
          "Inform Head of Health & Safety and Principal immediately.",
          "Secure rooms: Lock doors, close blinds, remain silent.",
          "Move away from the attacker's known location.",
          "Do not engage with the attacker under any circumstances.",
          "Notify police with critical information about attacker location and description."
        ]
      },
      {
        id: "substance",
        title: "3.4.3 Harmful Substance Protocol",
        content: [
          "Gather information using threat communication form.",
          "Notify Head & Safety and Principal immediately.",
          "Evacuate if indoors and contamination is suspected.",
          "Move upwind in open space.",
          "Do not touch potentially contaminated items."
        ]
      }
    ]
  },
  {
    id: "psychological",
    number: "4",
    title: "Psychological Support",
    description: "Support during incidents, post-incident recovery, and preventative measures.",
    icon: Brain,
    color: "blue",
    subsections: [
      {
        id: "during",
        title: "4.1 Support During the Incident",
        content: [
          "Provide calm reassurance to students and staff.",
          "Keep communication clear and age-appropriate.",
          "Identify individuals who may need immediate support.",
          "Assign trained staff to assist with emotional regulation."
        ]
      },
      {
        id: "post",
        title: "4.2 Post-Incident Support",
        content: [
          "Conduct debriefing sessions for affected individuals.",
          "Provide access to school counselor or psychologist.",
          "Monitor for signs of trauma or distress in the following days.",
          "Communicate with parents about available support resources."
        ]
      },
      {
        id: "long-term",
        title: "4.3 Long-Term Psychological Support",
        content: [
          "Ongoing counseling for those who need it.",
          "Regular check-ins with affected students and staff.",
          "Referral to external mental health professionals if needed.",
          "Create a supportive classroom environment."
        ]
      }
    ]
  },
  {
    id: "firstaid",
    number: "5",
    title: "First Aid & Medical Emergency",
    description: "First aid principles, emergency protocols, and equipment locations.",
    icon: Heart,
    color: "red",
    subsections: [
      {
        id: "principles",
        title: "5.3 General First Aid Principles",
        content: [
          "Assess the scene for safety before approaching.",
          "Call for help and activate emergency services if needed.",
          "Provide basic life support: check airway, breathing, circulation.",
          "Do not move injured persons unless absolutely necessary.",
          "Stay with the person until medical help arrives."
        ]
      },
      {
        id: "scenarios",
        title: "5.5 Scenario-Based Protocols",
        content: [
          "Choking: Perform back blows and abdominal thrusts.",
          "Bleeding: Apply direct pressure and elevate if possible.",
          "Burns: Cool with running water for at least 10 minutes.",
          "Allergic reaction: Administer epinephrine if available and trained.",
          "Seizures: Protect from injury, do not restrain, time the seizure."
        ]
      },
      {
        id: "equipment",
        title: "5.6 First Aid Equipment",
        content: [
          "First aid kits located in each classroom, office, and common area.",
          "AED devices located at main entrance and sports hall.",
          "Emergency medications stored in nurse's office.",
          "All equipment checked and restocked monthly."
        ]
      }
    ]
  },
  {
    id: "security",
    number: "6",
    title: "Security Guard Protocol",
    description: "Guard responsibilities, reporting incidents, and interaction guidelines.",
    icon: UserCheck,
    color: "blue",
    subsections: [
      {
        id: "behavior",
        title: "6.1 General Behavior Expectations",
        content: [
          "Maintain professional demeanor at all times.",
          "Be visible and approachable to staff, students, and visitors.",
          "Follow all school policies and procedures.",
          "Report any concerns to administration immediately."
        ]
      },
      {
        id: "responsibilities",
        title: "6.2 Guard Responsibilities",
        content: [
          "Monitor all entry and exit points during school hours.",
          "Verify identity of all visitors and issue visitor badges.",
          "Patrol grounds at regular intervals.",
          "Respond immediately to any security concerns or alarms.",
          "Escort unauthorized persons off the premises."
        ]
      },
      {
        id: "emergency",
        title: "6.4 Emergency Protocols",
        content: [
          "Assist with evacuation procedures during emergencies.",
          "Secure perimeter during lockdown situations.",
          "Communicate with emergency services upon arrival.",
          "Provide crowd control at assembly points."
        ]
      }
    ]
  },
  {
    id: "operations",
    number: "7",
    title: "Operational Coverage",
    description: "Daily handover procedures, working hours, and documentation requirements.",
    icon: Clock,
    color: "green",
    subsections: [
      {
        id: "hours",
        title: "7.2 Standard Working Hours",
        content: [
          "Regular school hours: 7:30 AM to 4:00 PM.",
          "Extended hours for after-school activities: until 6:00 PM.",
          "Minimum supervision requirements must be maintained at all times.",
          "Staff schedules posted weekly in the staff room."
        ]
      },
      {
        id: "handover",
        title: "7.4 Daily 16:00 Handover Procedure",
        content: [
          "Outgoing staff completes handover form.",
          "Review any ongoing situations or concerns.",
          "Confirm student pickup status and remaining students.",
          "Transfer responsibility for remaining activities.",
          "Document any incidents from the day."
        ]
      },
      {
        id: "documentation",
        title: "7.7 Documentation and Accountability",
        content: [
          "All incidents must be documented within 24 hours.",
          "Use standardized forms for consistency.",
          "Submit reports to administration and file copies.",
          "Review documentation during safety audits."
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
    id: 4,
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
    id: 5,
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
    id: 6,
    moduleId: "threat",
    question: "During a bomb threat evacuation, you should:",
    options: [
      "Use the fire alarm to alert everyone",
      "Close all doors and windows tightly",
      "Leave doors and windows open",
      "Use mobile phones to coordinate"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    moduleId: "firstaid",
    question: "For how long should you cool a burn with running water?",
    options: [
      "30 seconds",
      "2 minutes",
      "10 minutes",
      "30 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    moduleId: "security",
    question: "What is a primary responsibility of security guards?",
    options: [
      "Teaching classes when needed",
      "Verify identity of all visitors and issue badges",
      "Managing the school budget",
      "Counseling students"
    ],
    correctAnswer: 1
  }
];
