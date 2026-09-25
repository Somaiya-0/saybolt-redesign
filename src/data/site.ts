// All wording in this file is copied VERBATIM from sayboltgroup.com (September 2026).
// Only stray "*" bullet characters and obvious list-formatting were cleaned up.
// Edit here to update text across the whole site.
import type { PageContent } from './types'
export { services } from './services'
export type { Service, IconName } from './services'
export { companies } from './companies'
export type { Company } from './companies'

const U = 'https://sayboltgroup.com/wp-content/uploads/'
// Photos are the ones already used on sayboltgroup.com (hot-linked). Copy them into /public for production.
export const IMG = {
  heroShip: U + '2026/07/anastasios-antoniadis-AMXFr97d00c-unsplash.webp',
  multimodal: U + '2026/07/Screenshot-2026-07-02-003021.webp',
  cover: U + '2026/07/cover.jpeg',
  containerShip: U + '2026/07/shipping-scaled.webp',
  sayboltShip: U + '2026/07/s-exp.jpeg',
  team: U + '2026/07/join-team.jpg',
  manufacturing: U + '2026/07/manu.jpg',
  officeBuilding: U + '2026/07/Warehouse.jpg',
  warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80',
  ceo: U + '2026/07/rony.webp',
  gm: U + '2026/07/gm.jpeg',
  logo: U + '2026/07/logo.webp',
}

export const PRIMARY_PHONE = '+88 01741-212517'
export const PRIMARY_PHONE_TEL = '+8801741212517'
export const PRIMARY_EMAIL = 'rony@sayboltgroup.com'
export const CAREERS_EMAIL = 'info@sayboltgroup.com'
export const FOUNDED = 1991

/* ---------------- HOMEPAGE ---------------- */
export const home = {
  heroTitle: 'Integrated Business Solutions.',
  heroLead: 'At Saybolt Group, our customers are at the heart of everything we do. We are committed to understanding their unique requirements and delivering reliable, efficient, and cost-effective solutions that create lasting value.',
  heroLead2: 'Our continued success has been built on a strong foundation of diligence, perseverance, professionalism, commitment, integrity, honesty, reliability, and customer trust. Supported by a highly skilled workforce, sound financial strength, and an unwavering dedication to excellence, we have established ourselves as a trusted and dependable business partner. These core values continue to drive our growth and inspire us to exceed our clients’ expectations.',
  coreValues: ['Diligence', 'Perseverance', 'Professionalism', 'Commitment', 'Integrity', 'Honesty', 'Reliability', 'Customer Trust'],
  gatewayTitle: 'Your Gateway To Global Solutions',
  gatewayParas: [
    'We are committed to delivering the highest standards of professional service across all our business sectors, ensuring customer satisfaction, operational excellence, and sustainable growth.',
    'Today, Saybolt Group is recognized as one of the leading names in Bangladesh’s international freight forwarding industry. Our Survey & Inspection division has earned a strong reputation for its professionalism, accuracy, and reliability, while our other business units continue to demonstrate consistent growth and outstanding performance across their respective sectors.',
  ],
  servicesTitle: 'Saybolt Group Is Dealing The Following Services',
  perfectSolution: 'The Only Place Where You’ll Get The Perfect Solution For All Your Industry Needs.',
  // Figures from the homepage / Company Overview counters
  stats: [
    { n: 100, s: '%', l: 'Client Satisfaction' },
    { n: 5, s: '+', l: 'Sister Concern' },
    { n: 35, s: '+', l: 'Year of Experience' },
    { n: 10, s: '+', l: 'Services' },
  ],
  whyTitle: 'Why Choose Saybolt Group?',
  whyUs: [
    'Diversified Multi-Industry Expertise',
    'Complete End-to-End Business Solutions',
    'Global Network & International Partnerships',
    'Experienced Professional Team',
    'Customer-Centric Service Approach',
    'Commitment to Quality & Compliance',
    'Innovative Technology-Driven Solutions',
    'Reliable, Transparent & Ethical Business Practices',
  ],
  partnerTitle: 'Your Trusted Partner For Complete Business Solutions',
  partnerText: 'Saybolt Group is more than a service provider—we are your strategic business partner. From logistics and manufacturing to technology, trading, advertising, and industrial solutions, we deliver integrated services that help organizations grow, innovate, and succeed in an increasingly competitive global marketplace.',
  groupTagline: 'One Group. Multiple Industries. Unlimited Possibilities.',
  groupTitle: 'Our Group Companies',
  membersTitle: 'We Are Member Of',
}

export const memberships = ['FIATA', 'DCCI', 'ISO', 'ISPAB', 'WCA', 'ACAB', 'CAAB']

/* ---------------- COMPANY OVERVIEW ---------------- */
export const overview = {
  eyebrow: 'Our story',
  title: 'Delivering Trusted Business Solutions Since 1991',
  story: [
    "Founded in 1991, Saybolt Group has grown into one of Bangladesh's most respected and diversified business groups. Over the past three decades, we have built a strong reputation for delivering reliable, innovative, and customer-focused solutions across international freight forwarding, shipping agency, survey & inspection, warehousing, manufacturing, internet services, advertising, and other strategic business sectors.",
    'Our commitment to excellence, operational efficiency, and customer satisfaction has enabled us to establish a trusted presence not only in Bangladesh but also in the international marketplace.',
    "Today, Saybolt Group is recognized as one of the leading names in Bangladesh's international freight forwarding industry. Our Survey & Inspection division has earned an outstanding reputation for its professionalism, technical expertise, and reliability, while our other business units continue to achieve consistent growth and deliver exceptional value to our clients and partners.",
    'We continue to expand our capabilities while maintaining the highest standards of service. Our corporate headquarters are located in Dhaka, supported by our own branch office in Chattogram, enabling us to serve customers efficiently throughout Bangladesh.',
    'At Saybolt Group, our customers are at the heart of everything we do. We are committed to understanding their unique requirements and providing reliable, efficient, and cost-effective solutions that create long-term value. Our success has been built on the enduring principles of integrity, professionalism, dedication, accountability, innovation, and customer trust.',
    "Driven by skilled professionals, sound financial strength, and an unwavering commitment to excellence, we strive to build lasting partnerships and contribute to the sustainable growth of our clients' businesses. Our corporate purpose is to achieve long-term success by delivering exceptional services, creating value for our stakeholders, and exceeding customer expectations in every engagement.",
    'Saybolt is dedicated and loyal to their customers and always ready to fulfill their requirements in an easier way. We are standing in the present position due our diligence, perseverance, commitment, dedication, sincerity, honesty, integrity, trustworthy, loyalty, solidarity, prosperity, skilled manpower and sound financial background. Our corporate purpose is long-term success through serving the unique services toward our clients.',
  ],
  numbersTitle: 'Saybolt in Numbers',
  numbers: [
    { n: 5, s: '+', l: 'Sister Concern' },
    { n: 10, s: '+', l: 'Services' },
    { n: 35, s: '+', l: 'Year of Experience' },
  ],
  purposeTitle: 'Our purpose',
  purpose: [
    'At Saybolt Group, our purpose is to connect businesses, industries, and communities by delivering reliable, innovative, and sustainable solutions that drive economic growth and create lasting value. We believe that every shipment, every inspection, every connection, and every service we provide contributes to something greater than business—it helps strengthen global trade and improve lives.',
    'Since our establishment in 1991, we have remained committed to supporting our clients with dependable, efficient, and customer-centric services across logistics, shipping, freight forwarding, survey & inspection, warehousing, internet services, manufacturing, and other diversified business sectors. Our mission is to simplify complex operations while enabling our customers to achieve their business goals with confidence.',
    'As a responsible corporate organization, we are dedicated to conducting our business with integrity, professionalism, and respect for people and the environment. We continuously invest in technology, innovation, skilled professionals, and sustainable business practices to enhance operational efficiency and reduce our environmental impact wherever possible.',
    'We believe that long-term success is built on trust, quality, and strong partnerships. By consistently delivering excellence and adapting to the evolving needs of global commerce, we aim to be the preferred partner for businesses across Bangladesh and international markets.',
    'At Saybolt Group, we don’t just move cargo or deliver services—we build connections, create opportunities, and power progress for businesses, communities, and future generations.',
  ],
  ctaTitle: 'Need Reliable Business Solutions?',
  ctaText: 'Whether you require freight forwarding, shipping agency services, survey & inspection, warehousing, internet connectivity, or other integrated business solutions, Saybolt Group is your trusted partner—delivering excellence with professionalism, integrity, and over three decades of experience.',
}

/* ---------------- LEADERSHIP ---------------- */
export const leaders = [
  {
    slug: 'ceo',
    heading: 'Message From The Chief Executive Officer',
    name: 'Golam Maula Rony',
    role: 'Chief Executive Officer',
    photo: IMG.ceo,
    message: [
      'It is my great pleasure to welcome you to Saybolt Group.',
      'Since our establishment in 1991, Saybolt Group has evolved from a small enterprise into one of Bangladesh’s leading and most diversified business groups. Today, we proudly operate across a wide range of industries, including Shipping Agency, International Freight Forwarding, Survey & Inspection, Trading, Manufacturing, Internet Service Providing, Advertising, and Printing & Publication.',
      'For more than three decades, our commitment has remained unchanged—to deliver exceptional quality, reliable services, and innovative solutions that create lasting value for our customers and business partners. Through our dedication to excellence, professionalism, and customer satisfaction, Saybolt Group has earned the trust of clients in Bangladesh and the international marketplace.',
      'Our growth has been built on the enduring values of integrity, hard work, commitment, sincerity, accountability, and financial strength. Supported by our own office buildings in Dhaka and Chattogram, a skilled workforce, and a strong operational foundation, we continue to expand our capabilities while maintaining the highest standards of service.',
      'We are grateful to Almighty Allah for His countless blessings and guidance throughout our journey. I extend my sincere appreciation to our dedicated employees, whose passion and commitment have been the driving force behind our success. I also express my heartfelt gratitude to our valued customers, banking partners, overseas agents, and all stakeholders for their continued trust, confidence, and unwavering support.',
      'As we look toward the future, we remain committed to sustainable growth, innovation, and operational excellence. We will continue to strengthen our services, embrace new opportunities, and build long-term partnerships that contribute to the success of our clients and the economic development of Bangladesh.',
      'Thank you for your continued confidence in Saybolt Group. We look forward to serving you with excellence for many years to come.',
    ],
  },
  {
    slug: 'gm',
    heading: "General Manager's Message",
    name: 'Touhid Mohammad Sadique',
    role: 'General Manager',
    photo: IMG.gm,
    message: [
      'It is an honor and privilege to welcome you to Saybolt Group.',
      'Since our establishment in 1991, Saybolt Group has evolved from a single business venture into one of Bangladesh’s respected and diversified business conglomerates. Through unwavering commitment, strategic vision, and a customer-centric approach, we have successfully expanded our presence across Shipping Agency, International Freight Forwarding, Survey & Inspection, Trading, Manufacturing, Internet Service Providing, Advertising, Printing, and Publication.',
      'As General Manager, I am proud to be part of an organization whose reputation has been built upon integrity, professionalism, reliability, and operational excellence. These principles are deeply embedded in our corporate culture and continue to guide every aspect of our business. Our objective is not merely to provide services, but to deliver value-driven solutions that enable our clients and partners to achieve sustainable success in an increasingly competitive global marketplace.',
      'In today’s rapidly evolving business environment, adaptability and innovation are essential. At Saybolt Group, we continuously invest in modern technologies, strengthen our operational capabilities, develop our human resources, and enhance our global network to ensure that we remain responsive to the changing needs of our customers. Our focus is on delivering services that are efficient, dependable, cost-effective, and aligned with international standards of quality and compliance.',
      'Our success is the result of collective dedication. Behind every achievement is a team of talented professionals whose passion, expertise, and commitment drive the organization forward. Supported by a strong financial foundation, modern infrastructure, and our own corporate facilities in Dhaka and Chattogram, we are well positioned to serve both domestic and international markets with confidence and consistency.',
      'As we look toward the future, our vision extends beyond business growth. We aspire to build long-term partnerships, contribute to the economic development of Bangladesh, create sustainable value for our stakeholders, and strengthen our position as a trusted business partner in the global marketplace.',
      'On behalf of the management, I extend my sincere gratitude to our valued customers, overseas partners, principals, bankers, suppliers, and all stakeholders for their continued trust and confidence in Saybolt Group. My heartfelt appreciation also goes to every member of our organization whose dedication, integrity, and hard work remain the cornerstone of our continued success.',
      'We remain committed to excellence, innovation, and responsible business practices. Together, we will continue to embrace new opportunities, overcome future challenges, and build a stronger, more prosperous future for our clients, our partners, and our nation.',
      'Thank you for your trust and continued support.',
    ],
  },
]

/* ---------------- WAREHOUSE ---------------- */
export const warehouse: PageContent & { eyebrow: string; motto: string } = {
  eyebrow: 'Warehousing & Distribution',
  title: '1,00,000 Sq Ft Warehouse At Savar',
  tagline: 'Secure Storage. Efficient Distribution. Reliable Logistics.',
  intro: [
    'Saybolt Group offers modern warehousing and distribution solutions designed to support the growing needs of importers, exporters, manufacturers, retailers, and e-commerce businesses. Strategically located in Savar, Bangladesh, our 100,000 square feet warehouse facility provides secure, efficient, and scalable storage solutions for a wide range of cargo and commodities.',
    'Our warehouse is equipped to ensure safe handling, systematic inventory management, and timely distribution, enabling businesses to optimize their supply chain while reducing operational costs. Whether you require short-term storage, long-term warehousing, or value-added logistics services, our experienced team is committed to delivering reliable and cost-effective solutions tailored to your business requirements.',
  ],
  blocks: [
    {
      heading: 'Our Warehouse Services',
      items: ['General Cargo Storage', 'Import & Export Cargo Handling', 'Distribution & Order Fulfillment', 'Inventory Management', 'Cargo Consolidation & Deconsolidation', 'Container Loading & Unloading', 'Cross-Docking Services', 'Packaging, Labeling & Palletization', 'Project Cargo Storage', 'Supply Chain & Logistics Support'],
    },
    {
      heading: 'Why Choose Saybolt Group?',
      items: ['100,000 sq. ft. modern warehouse facility', 'Strategic location in Savar, providing excellent connectivity to Dhaka and major transportation routes', 'Safe, secure, and professionally managed storage environment', 'Experienced logistics and warehouse management team', 'Integrated warehousing, freight forwarding, customs brokerage, and transportation solutions', 'Flexible storage options for businesses of all sizes', 'Commitment to efficiency, reliability, and customer satisfaction'],
    },
  ],
  closing: ['At Saybolt Group, we understand that effective warehousing is more than storage—it’s a critical part of your supply chain. Our mission is to provide dependable warehousing and distribution services that help our clients improve operational efficiency, reduce logistics costs, and ensure the timely movement of goods.'],
  motto: 'Your Cargo. Our Responsibility.',
}

/* ---------------- CAREERS ---------------- */
export const careers = {
  title: 'Join Us! & Make An Impact.',
  lead: 'If You Want To Build Your Career With Us, Please Send Your CV To:',
  benefitsTitle: 'Why Join Saybolt Group',
  benefits: [
    'Competitive Salary & Performance Incentives', 'Career Growth & Professional Development',
    'Supportive & Collaborative Work Environment', 'Experienced Leadership & Mentorship',
    'Modern Workplace & Advanced Technology', 'Employee Recognition & Rewards',
    'Safe & Inclusive Working Environment', 'Flexible Work Arrangements (where applicable)',
    'Transportation Facilities (if provided)', 'Training & Skill Development Programmes',
    'Team-Building & Employee Engagement Activities', 'Equal Opportunity Employer',
    'Health & Medical Benefits', 'Provident Fund', 'Festival Bonus', 'Paid Annual Leave',
    'Overtime Benefits', 'Performance Bonus',
  ],
}

/* ---------------- CONTACT ---------------- */
export const contact = {
  title: 'Get In Touch',
  intro: 'We have our two own office buildings; Head Office is located in Dhaka and Branch Office is in Chittagong. One Representative Finland Office is attached with us.',
  formTitle: 'Send Us A Message',
  formIntro: 'Visit our office or simply send us an email anytime you want. If you have any questions, please feel free to contact us.',
}

export interface Office {
  city: string
  label: string
  address: string
  phones: string[]
  email?: string
}

export const offices: Office[] = [
  {
    city: 'Dhaka',
    label: 'Dhaka Office',
    address: 'Meherba Plaza (9th & 10th floor), 33, Topkhana Road, Dhaka–1000.',
    phones: ['+88 01741-212517', '+88 01819-497861', '+88 01720-502290'],
    email: 'rony@sayboltgroup.com',
  },
  {
    city: 'Chattogram',
    label: 'Chattogram Office',
    address: 'M.F Tower (Ground Floor), 57/60, Aju Shah By Lane, Agrabad C/A, Chattogram.',
    phones: ['+02 720502280', '+88 01819 497861', '+88 01827 358318'],
    email: 'ctg@sayboltgroup.com',
  },
  {
    city: 'Helsinki',
    label: 'Helsinki Representative Office',
    address: 'Vienankatu 1 B, 00920 Helsinki, Finland.',
    phones: ['+35 8406512056'],
  },
  {
    city: 'Savar',
    label: 'Warehousing & Distribution',
    address: 'Savar, Dhaka',
    phones: [],
  },
]
