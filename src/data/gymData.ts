import coachChakriImg from '../assets/images/coach_chakri_1793536277690.jpg';
import coachJaniImg from '../assets/images/coach_jani_1793536277908.jpg';
import gymInteriorImg from '../assets/images/gym_interior_floor_1793539142844.jpg';

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  savings?: string;
  isPopular?: boolean;
  features: string[];
}

export interface Trainer {
  name: string;
  role: string;
  quote: string;
  image: string;
  experience: string;
  specialties: string[];
}

export interface FacilityZone {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryPhoto {
  id: number;
  category: 'interior' | 'strength' | 'cardio' | 'functional' | 'recovery' | 'coaching';
  categoryLabel: string;
  caption: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const GYM_INFO = {
  name: "Fitlife Gym Guntur",
  tagline: "Build Your Stronger Self",
  rating: 4.9,
  reviewCount: 1420,
  phonePrimary: "+91 94913 83444",
  phoneSecondary: "+91 85200 32793",
  phonePrimaryRaw: "919491383444",
  email: "fitlifegymgnt@gmail.com",
  instagramHandle: "@fitlifegym_guntur",
  instagramUrl: "https://www.instagram.com/fitlifegym_guntur/",
  mapsUrl: "https://maps.app.goo.gl/EtFt9QCrCJp4qFwS6",
  address: {
    line1: "3rd Floor, Phoenix Padmavathi Building",
    line2: "Koritepadu Main Road, Opp. LVR Club",
    line3: "Directly above Puma Showroom, Lakshmipuram",
    city: "Guntur",
    state: "Andhra Pradesh",
    pincode: "522007",
    full: "3rd Floor, Phoenix Padmavathi Building, Koritepadu Main Road, Opp. LVR Club, above Puma Showroom, Lakshmipuram, Guntur, AP - 522007"
  },
  timings: {
    weekdayMorning: "5:30 AM – 12:00 PM",
    weekdayEvening: "4:00 PM – 9:30 PM",
    sundayMorning: "6:00 AM – 11:00 AM",
    sundayEvening: "Closed (Maintenance & Sanitization)"
  }
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly-starter",
    name: "Monthly Starter",
    tagline: "Ideal for testing the waters and establishing routine",
    price: "₹1,500",
    period: "per month",
    features: [
      "Full Floor & Strength Machine Access",
      "Commercial Cardio Deck (Treadmills & Cycles)",
      "General Floor Trainer Guidance",
      "Locker Room & Clean Restrooms",
      "Morning or Evening Shift Flexibility"
    ]
  },
  {
    id: "quarterly-progress",
    name: "Quarterly Progress",
    tagline: "3 Months of dedicated physical transformation",
    price: "₹3,999",
    period: "for 3 months",
    savings: "Save ₹500",
    isPopular: true,
    features: [
      "Full Floor, Cardio & CrossFit Rig Access",
      "Individualized Starter Workout Routine",
      "Bi-weekly Weight & Progress Checks",
      "Weekly Sauna Recovery Access",
      "Discounted Personal Training Add-on"
    ]
  },
  {
    id: "annual-elite",
    name: "Annual Elite",
    tagline: "12 Months of permanent lifestyle transformation",
    price: "₹11,999",
    period: "for 12 months",
    savings: "Best Value (~₹999/mo)",
    features: [
      "Unlimited Year-Round Floor & Cardio Access",
      "Complimentary Nutrition & Diet Blueprint",
      "Full Access to Thermal Sauna Recovery",
      "Zumba & Group Fitness Inclusions",
      "Priority Floor Support & Locker Reservation"
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    name: "Coach Chakri",
    role: "Head Strength & Body Transformation Coach",
    quote: "Transformation is never about starving yourself; it is about respecting your metabolism, lifting with progressive intent, and maintaining patience. Consistency will build what intensity alone cannot.",
    image: coachChakriImg,
    experience: "8+ Years Experience",
    specialties: [
      "Progressive Overload",
      "Fat Loss Programming",
      "Indian Macro Diet Customization",
      "Posture & Movement Alignment"
    ]
  },
  {
    name: "Coach Jani",
    role: "Senior Personal & Functional Fitness Coach",
    quote: "Every human body has the capability to be strong, lean, and resilient. My role is to eliminate self-doubt, dial in your mechanical execution, and make sure every workout moves you closer to your goal.",
    image: coachJaniImg,
    experience: "6+ Years Experience",
    specialties: [
      "Hypertrophy Mechanics",
      "Cardiovascular Endurance",
      "Core & Stability Coaching",
      "Functional Athletic Conditioning"
    ]
  }
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: "zone-strength",
    number: "01",
    tag: "STRENGTH & HYPERTROPHY",
    title: "OLYMPIC STRENGTH & FREE WEIGHTS",
    description: "The cornerstone of serious muscle building. Featuring Olympic barbell stations, heavy power cages, squat racks, rubberized Olympic bumper plates, and a full dumbbell lineup extending past 40+ kg with zero wait times.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Olympic Power Cages & Squat Racks",
      "Solid Steel Dumbbell Array (2.5 kg – 45+ kg)",
      "Flat, Incline & Decline Olympic Benches",
      "Multi-Station Cable Crossover Tower",
      "Dedicated Deadlift Platform with Bumper Plates"
    ]
  },
  {
    id: "zone-cardio",
    number: "02",
    tag: "CARDIOVASCULAR HEALTH",
    title: "CARDIO & ENDURANCE DECK",
    description: "Equipped with commercial high-incline treadmills, magnetic resistance spin cycles, and elliptical cross-trainers. Positioned near panoramic 3rd-floor windows overlooking Koritepadu for energetic conditioning.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Heavy-Duty Commercial Treadmills (Up to 15% Incline)",
      "Magnetic Smooth-Resistance Spin Bikes",
      "Full-Body Elliptical Cross-Trainers",
      "Heart Rate & Calorie Target Monitors",
      "Cooling Breeze & Natural Elevated Sunlight"
    ]
  },
  {
    id: "zone-coaching",
    number: "03",
    tag: "PERSONALIZED RESULTS",
    title: "1-ON-1 PERSONAL TRAINING & DIET",
    description: "No cookie-cutter routines. Work directly alongside Coach Chakri or Coach Jani with biomechanical form checks, progressive loading logs, and customized South Indian / North Indian macro meal charts designed around your daily lifestyle.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Dedicated 1-on-1 Form & Spotting Assistance",
      "Custom Macro Nutrition Chart (Veg & Non-Veg)",
      "Weekly Body Composition & Girth Tracking",
      "Injury Rehabilitation & Mobility Protocols",
      "Accountability & Daily WhatsApp Check-ins"
    ]
  },
  {
    id: "zone-functional",
    number: "04",
    tag: "ATHLETIC CONDITIONING",
    title: "FUNCTIONAL & CROSS-TRAINING",
    description: "Build explosive power, rotational torque, grip endurance, and lung capacity. Our functional cross-training area features heavy double battle ropes, cast-iron kettlebells, plyometric jump boxes, and slam balls.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Heavy-Duty Double Battle Ropes",
      "Competition Cast-Iron Kettlebells (8 kg – 32 kg)",
      "3-Sided Plyometric Jump Boxes",
      "Medicine Slam Balls & Core Rigs",
      "Agility Ladders & Resistance Bands"
    ]
  },
  {
    id: "zone-group",
    number: "05",
    tag: "GROUP ENERGY",
    title: "GROUP SESSIONS, ZUMBA & BOXING",
    description: "Experience the infectious camaraderie of group training. Our scheduled community sessions include energetic Zumba dance fitness, boxing heavy bag conditioning, and intense full-body HIIT circuits that keep workouts fun and social.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Zumba Dance Rhythm & Calorie Torching",
      "Boxing Heavy Bag & Hand-Eye Drills",
      "High-Intensity Interval Training (HIIT) Circuits",
      "Acoustic Motivational Sound & High Energy",
      "Supportive All-Levels Community Vibe"
    ]
  },
  {
    id: "zone-recovery",
    number: "06",
    tag: "RECOVERY & WELLNESS",
    title: "RECOVERY, SAUNA & AMENITIES",
    description: "Real muscular adaptation and growth happens during recovery. Our 3rd-floor facility features a clean, hygienic thermal dry sauna that accelerates blood circulation, soothes sore joints, and relieves mental fatigue.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Therapeutic High-Heat Dry Sauna",
      "Sparkling Clean Showers & Restrooms",
      "Secure Member Locker Facilities",
      "Modern Air-Conditioned Training Ambience",
      "Wheelchair-Accessible Passenger Elevator"
    ]
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 1,
    category: 'interior',
    categoryLabel: 'GYM INTERIOR',
    caption: 'Fitlife Main Workout Floor & Olympic Stations',
    image: gymInteriorImg
  },
  {
    id: 2,
    category: 'strength',
    categoryLabel: 'STRENGTH',
    caption: 'Solid Steel Dumbbell Lineup (Up to 40+ kg)',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'cardio',
    categoryLabel: 'CARDIO DECK',
    caption: 'Speed & Incline Commercial Treadmill Deck',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'functional',
    categoryLabel: 'FUNCTIONAL',
    caption: 'Double Battle Ropes Explosive Conditioning',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'recovery',
    categoryLabel: 'RECOVERY',
    caption: 'Post-Workout Thermal Dry Sauna & Wellness Room',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'strength',
    categoryLabel: 'STRENGTH',
    caption: 'Olympic Deadlift & Heavy Squat Power Rack Station',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    category: 'coaching',
    categoryLabel: 'COACHING',
    caption: '1-on-1 Biomechanical Form Check & Dedicated Spotting',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'functional',
    categoryLabel: 'FUNCTIONAL',
    caption: 'Cast Iron Competition Kettlebells & Core Rigs',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    category: 'interior',
    categoryLabel: 'GYM INTERIOR',
    caption: 'Evening Training Shift Ambiance on the 3rd Floor',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 10,
    category: 'cardio',
    categoryLabel: 'CARDIO DECK',
    caption: 'High-Resistance Spin Cycles with Digital Consoles',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    category: 'coaching',
    categoryLabel: 'GROUP CLASSES',
    caption: 'Zumba Rhythm & Conditioning Group Sessions',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 12,
    category: 'strength',
    categoryLabel: 'STRENGTH',
    caption: '8-Stack Multi-Grip Cable Crossover System',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "I am a complete beginner. Will I receive guidance on how to workout?",
    answer: "Yes, absolutely! At Fitlife Gym Guntur, both Coach Chakri and Coach Jani are present on the floor during morning and evening shifts. Every new member receives an orientation covering machine adjustments, proper posture, safe lifting technique, and a beginner-friendly progressive workout split."
  },
  {
    question: "What are the gym operating hours and training shifts?",
    answer: "We operate dual shifts to avoid overcrowding and provide dedicated trainer attention. Monday through Saturday: Morning Shift is 5:30 AM – 12:00 PM, and Evening Shift is 4:00 PM – 9:30 PM. On Sundays, we are open in the morning from 6:00 AM – 11:00 AM for workout access, while the evening is reserved for facility deep cleaning."
  },
  {
    question: "Is the sauna recovery included in my membership?",
    answer: "Sauna access is included complimentary in our Quarterly Progress and Annual Elite plans. Monthly Starter members can access the sauna via affordable recovery add-on passes."
  },
  {
    question: "Do you offer customized Indian diet and nutrition charts?",
    answer: "Yes. Our trainers specialize in culturally realistic nutrition planning. We craft balanced calorie and protein blueprints incorporating home-cooked South Indian and North Indian foods (vegetarian, egg-based, and non-vegetarian options) with no unscientific starving."
  },
  {
    question: "Where is Fitlife Gym located, and is parking available?",
    answer: "We are situated on the 3rd Floor of Phoenix Padmavathi Building on Koritepadu Main Road, directly opposite LVR Club and above the Puma Showroom in Lakshmipuram, Guntur. Ample street and building parking is available for two-wheelers and four-wheelers."
  },
  {
    question: "Can I take a tour or schedule a free trial workout before joining?",
    answer: "Yes! You are welcome to walk in during either shift to tour our 3rd-floor workout arena, inspect the Olympic equipment, and consult with Coach Chakri or Coach Jani regarding your fitness goals."
  }
];
