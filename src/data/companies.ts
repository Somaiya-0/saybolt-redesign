// VERBATIM copy from sayboltgroup.com.
//  - `description` = the homepage "Our Group Companies" text.
//  - `page`        = the full text of the company's own page.
import type { PageContent } from './types'
import { pic } from './img'

export interface Company {
  slug: string
  name: string
  initials: string
  image: string
  flagship?: boolean
  description: string
  page: PageContent
}


export const companies: Company[] = [
  {
    slug: 'saybolt-adjusters',
    name: 'Saybolt Adjusters',
    initials: 'SA',
    image: pic('cover'),
    flagship: true,
    description: "Saybolt Adjusters is the flagship company of Saybolt Group and one of Bangladesh's leading survey, inspection, and loss-adjusting organisations. Since 1991, we have earned the trust of clients through professionalism, technical expertise, and uncompromising service quality.",
    page: {
      title: 'Saybolt Adjusters',
      tagline: 'Trusted Survey, Inspection & Loss Adjusting Services Since 1991.',
      intro: [
        'Saybolt Adjusters, the flagship survey and inspection company of Saybolt Group, is one of Bangladesh’s most trusted names in the field of survey, inspection, and loss adjusting services. Since 1991, we have been delivering independent, professional, and reliable inspection solutions to clients across a wide range of industries, earning a reputation for integrity, technical excellence, and impartiality.',
        'With our own offices in Dhaka and Chattogram, and a dedicated team of more than 35 full-time technical and non-technical professionals, we provide comprehensive inspection and assessment services throughout Bangladesh and beyond. Our multidisciplinary team includes Master Mariners, Marine Engineers, Technical Surveyors, Refrigeration Engineers, Loss Adjusters, Lawyers, Chartered Accountants, and other experienced specialists, enabling us to deliver accurate evaluations and expert technical advice.',
      ],
      blocks: [
        {
          heading: 'Our Services',
          intro: 'We provide a comprehensive range of survey and inspection services, including:',
          items: ['Pre-shipment and post-landing inspections', 'Marine, cargo, vessel, and container surveys', 'Loss assessment and insurance claim adjustment', 'Quality and quantity inspections of consumer goods, industrial products, electronics, chemicals, and raw materials', 'Capital machinery inspections and stock verification', 'Project evaluation and technical inspections', 'Risk assessment and damage investigation', 'Independent inspection, certification, and consultancy services'],
        },
        {
          heading: 'Why Choose Saybolt Adjusters?',
          paras: ['Our commitment to professionalism, impartiality, and technical excellence makes us the preferred inspection partner for businesses, insurers, financial institutions, shipping companies, exporters, importers, and government organizations.'],
          intro: 'Our strengths include:',
          items: ['Modern laboratory and testing facilities', 'Internationally recognized inspection reports and certificates', 'Extensive global network of agents and professional associates', 'Highly qualified and experienced multidisciplinary survey team', 'Fast, reliable, and responsive service delivery', 'Competitive and transparent pricing', 'Independent, unbiased, and confidential assessments', 'Strict adherence to international standards and ethical practices'],
        },
      ],
      closing: ['At Saybolt Adjusters, we understand that every inspection plays a critical role in protecting our clients’ interests. Our mission is to deliver accurate, timely, and impartial survey and inspection services that support informed decision-making, minimize risk, and build confidence in every transaction.'],
    },
  },
  {
    slug: 'saybolt-express',
    name: 'Saybolt Express',
    initials: 'SE',
    image: pic('s-exp'),
    description: 'Saybolt Express delivers comprehensive international freight forwarding, shipping agency, customs brokerage, and logistics solutions. Since 1991, we have successfully handled more than 20,000 TEUs annually, serving clients through a trusted global logistics network.',
    page: {
      title: 'Saybolt Express',
      intro: [
        "Saybolt Express, a flagship company of Saybolt Group, has been delivering comprehensive logistics and shipping solutions since 1991. Over the past three decades, we have grown from a small team of three professionals into one of Bangladesh's leading logistics service providers, employing more than 100 skilled professionals and handling over 20,000 TEUs annually.",
        'We provide end-to-end shipping and logistics solutions, including NVOCC services, international freight forwarding, sea freight, air freight, inland transportation, customs brokerage, warehousing, project cargo handling, and integrated supply chain solutions. Our commitment to reliability, efficiency, and customer satisfaction has earned us the trust of clients across diverse industries.',
        'With an extensive global network of offices, strategic partners, and agents, Saybolt Express serves customers in more than 69 countries through collaborations with over 500 international affiliated companies and logistics partners. This strong international presence enables us to provide seamless cargo movement across global trade routes while maintaining the highest standards of service.',
        "As one of Bangladesh's most trusted and established NVOCCs (Non-Vessel Operating Common Carriers), we offer competitive freight rates, flexible shipping solutions, dependable transit schedules, and personalized customer support. Whether moving cargo to or from South Asia, Southeast Asia, the Far East, the Middle East, Europe, North America, or Australia, we ensure every shipment is handled safely, efficiently, and delivered on schedule.",
        'Our long-standing relationships with leading shipping lines, airlines, port operators, customs authorities, and overseas logistics partners enable us to deliver reliable, cost-effective, and tailor-made transportation solutions. Backed by decades of industry experience and a commitment to operational excellence, Saybolt Express continues to be the preferred logistics partner for businesses engaged in international trade.',
      ],
      blocks: [],
      closing: ["At Saybolt Express, we don't just transport cargo—we deliver confidence, reliability, and long-term value through world-class logistics solutions."],
    },
  },
  {
    slug: 'nandita-enterprise',
    name: 'Nandita Enterprise',
    initials: 'NE',
    image: pic('nandita'),
    description: 'Nandita Enterprise is a trusted trading and sourcing company specializing in international import, export, indenting, merchandising, procurement, distribution, and commercial agency services. Our commitment to integrity and efficiency has made us a reliable partner for businesses across diverse industries.',
    page: {
      title: 'Nandita Enterprise',
      tagline: 'Your Trusted Partner in Global Trade & Commercial Solutions',
      intro: [
        "Nandita Enterprise, a proud concern of Saybolt Group, is one of Bangladesh's leading and well-established trading companies, providing comprehensive import, export, indenting, merchandising, distribution, and commercial trading solutions. Since its inception, the company has built a strong reputation for professionalism, integrity, and excellence in both domestic and international trade.",
        'With extensive industry knowledge and a customer-focused approach, Nandita Enterprise serves as a reliable business partner for manufacturers, exporters, importers, distributors, and international suppliers. Our commitment to quality, efficiency, and long-term relationships has enabled us to earn the confidence of clients and business partners both in Bangladesh and abroad.',
      ],
      blocks: [
        {
          heading: 'Our Business Activities',
          intro: 'We offer a broad range of commercial and trading services, including:',
          items: ['International Indenting Services', 'Import and Export Management', 'General Trading', 'Product Sourcing and Procurement', 'Merchandising Services', 'Distribution and Supply Chain Solutions', 'Agency Representation', 'Business Development and Commercial Consultancy', 'International Trade Facilitation'],
        },
        {
          heading: 'Strategic Locations',
          paras: [
            "Our Corporate Head Office is located on Topkhana Road, Dhaka, one of the country's traditional commercial and business districts. Our Branch Office is strategically situated in Double Mooring, Chattogram, adjacent to Bangladesh's largest seaport, enabling efficient coordination of import, export, and logistics operations.",
            'Both offices are equipped with modern communication systems, advanced technology, and experienced professionals dedicated to delivering responsive and reliable services to our clients.',
          ],
        },
        {
          heading: 'Professional Excellence',
          paras: ['Nandita Enterprise is managed by a team of highly qualified professionals with extensive expertise in international trade, procurement, supply chain management, and commercial operations. We continuously strive to provide efficient, transparent, and value-driven solutions that help our clients succeed in today\'s competitive global marketplace.'],
        },
        {
          heading: 'Quality, Safety & Compliance',
          paras: ['We are committed to maintaining the highest standards of occupational health, workplace safety, ethical business practices, and regulatory compliance. Our objective is to create a safe, responsible, and productive working environment while fostering strong partnerships with clients, suppliers, and stakeholders both locally and internationally.'],
        },
        {
          heading: 'Corporate Credentials',
          paras: ["Nandita Enterprise is officially registered with the Chief Controller of Imports and Exports (CCI&E), Government of the People's Republic of Bangladesh. We are also proud members of:"],
          items: ['Dhaka Chamber of Commerce & Industry (DCCI)', "Bangladesh Indenting Agents' Association (BIAA)"],
          after: ['These memberships reflect our commitment to maintaining the highest professional and ethical standards in international trade.'],
        },
        {
          heading: 'Financial Strength',
          paras: ['Nandita Enterprise is financially sound and well-positioned to support large-scale commercial operations. Our long-standing relationships with leading national and international financial institutions enable us to conduct business with confidence, stability, and credibility while meeting the evolving needs of our clients and business partners.'],
        },
      ],
      closing: ['At Nandita Enterprise, we are committed to delivering reliable trading solutions, building lasting partnerships, and creating value through professionalism, integrity, and excellence in global commerce.'],
    },
  },
  {
    slug: 'net-access-bangladesh',
    name: 'Net Access Bangladesh',
    initials: 'NA',
    image: pic('isp'),
    description: 'Net Access Bangladesh is a leading provider of internet connectivity, network infrastructure, cloud solutions, cybersecurity, and enterprise IT services. We empower businesses with reliable, secure, and scalable technology solutions that drive digital transformation.',
    page: {
      title: 'Net Access Bangladesh',
      tagline: 'Delivering Reliable Internet & IT Solutions',
      intro: [
        "Net Access Bangladesh, a proud concern of Saybolt Group, is one of Bangladesh's leading Internet Service Providers (ISP) and Information Technology solution companies. We deliver reliable internet connectivity and innovative IT services to residential, corporate, and enterprise clients, helping them stay connected, productive, and competitive in today's digital world.",
        'Whether you require high-speed broadband for your home, dedicated internet connectivity for your business, or end-to-end IT infrastructure and digital solutions, Net Access Bangladesh provides comprehensive, cost-effective, and scalable services tailored to your specific requirements.',
        'Our mission is to deliver reliable technology solutions with exceptional customer service, enabling individuals and businesses to achieve their goals through secure, high-performance digital connectivity.',
      ],
      blocks: [
        {
          heading: 'Residential Internet Solutions',
          paras: ['We provide fast, stable, and affordable broadband services designed for modern households.'],
          intro: 'Our residential services include:',
          items: ['High-speed broadband internet', 'Reliable and uninterrupted connectivity', 'No telephone line required', 'Online gaming and HD/4K streaming support', 'Voice over IP (Internet Telephony)', 'Remote work and online learning solutions', 'Flexible packages and attractive promotional offers', 'Professional installation and responsive customer support'],
        },
        {
          heading: 'Business & Enterprise Solutions',
          paras: ['We help organizations build secure, scalable, and high-performance communication networks.'],
          intro: 'Our business solutions include:',
          items: ['Dedicated internet connectivity', 'Corporate broadband solutions', 'Enterprise networking and connectivity', 'Multi-site network deployment and management', 'Network design, implementation, and maintenance', 'Professional IT consulting and solution planning', 'Rapid installation and project management', 'Single point of contact for internet, voice, and data services', 'Cost-effective and customized enterprise solutions'],
        },
        {
          heading: 'IT Services & Digital Solutions',
          paras: ['Beyond internet connectivity, we provide a complete range of IT services to support your digital transformation.'],
          intro: 'Our services include:',
          items: ['Website design and development', 'Web hosting and domain registration', 'Software development and customized business applications', 'Network infrastructure design and implementation', 'Network maintenance and technical support', 'Server installation and management', 'Cybersecurity and IT consultancy', 'Cloud-based solutions and managed IT services'],
        },
        {
          heading: 'Why Choose Net Access Bangladesh?',
          items: ['Reliable high-speed internet services', 'Experienced IT professionals and engineers', 'Customized solutions for homes and businesses', 'Competitive pricing and transparent service plans', 'Fast technical support and responsive customer service', 'Modern technology and scalable infrastructure', 'Commitment to quality, innovation, and customer satisfaction'],
        },
      ],
      closing: ['At Net Access Bangladesh, we believe technology should simplify life and accelerate business growth. Through dependable connectivity, innovative digital solutions, and dedicated customer support, we are committed to helping our clients succeed in an increasingly connected world.'],
    },
  },
  {
    slug: 'international-multimedia-advertising',
    name: 'International Multimedia Advertising (IMA)',
    initials: 'IMA',
    image: pic('photo-1763705857736-2b4f16a33758'),
    description: 'International Multimedia Advertising (IMA) delivers innovative branding, digital marketing, media planning, printing, and advertising solutions. Combining creativity with modern technology, we help businesses build powerful brands and connect with their target audiences across multiple platforms.',
    page: {
      title: 'International Multimedia Advertising (IMA)',
      tagline: 'Creative Communication. Strategic Marketing. Lasting Impact.',
      intro: [
        'International Multimedia Advertising (IMA), a proud concern of Saybolt Group, is a full-service advertising, branding, and integrated marketing communications company dedicated to helping businesses build strong brands, connect with their audiences, and achieve sustainable growth.',
        "In today's rapidly evolving digital landscape, successful communication requires creativity, innovation, and strategic thinking. At IMA, we combine cutting-edge technology, market insights, and creative excellence to develop impactful marketing solutions that strengthen brand identity and deliver measurable results.",
        'Our mission is to provide innovative communication, advertising, and business information solutions that empower organizations to achieve their commercial, corporate, and social objectives. Whether supporting a product launch, enhancing brand awareness, or executing a nationwide communication campaign, we are committed to delivering solutions that create lasting value for our clients.',
        'Working as an integrated team of creative professionals, strategists, designers, and marketing specialists, we uncover the unique strengths of every brand and transform them into compelling stories that inspire action and build meaningful relationships with customers. We develop customized marketing strategies and communication campaigns that influence consumer behavior, enhance brand recognition, and support long-term business success.',
      ],
      blocks: [
        {
          heading: 'Our Services',
          intro: 'We offer a comprehensive range of advertising and marketing solutions, including:',
          items: ['Brand Strategy and Brand Development', 'Corporate Identity Design', 'Creative Advertising Campaigns', 'Digital Marketing and Social Media Management', 'Website Design and Digital Content Development', 'Graphic Design and Multimedia Production', 'Print Media and Publication Services', 'Outdoor and Indoor Advertising Solutions', 'Event Branding and Promotional Campaigns', 'Public Relations and Corporate Communications', 'Market Research and Consumer Insights', 'Commercial and Social Marketing Campaigns'],
        },
        {
          heading: 'Why Choose IMA?',
          items: ['Creative and experienced marketing professionals', 'Innovative, data-driven communication strategies', "Customized solutions tailored to each client's objectives", 'Integrated online and offline marketing expertise', 'Commitment to quality, creativity, and measurable results', 'End-to-end project management from concept to execution', 'Customer-focused approach with long-term partnership values'],
        },
      ],
      closing: ['At International Multimedia Advertising (IMA), we believe that effective communication has the power to transform businesses, influence communities, and create meaningful connections. Through creativity, technology, and strategic thinking, we help organizations communicate with confidence, strengthen their brands, and achieve sustainable success.'],
    },
  },
]
