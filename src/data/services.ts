// VERBATIM copy from sayboltgroup.com.
//  - `home`  = the text for this service in the homepage "Services" section.
//  - `page`  = the full text of the service's own page (e.g. /sea-freight/).
// Only obvious typos/list-formatting were normalised (stray "*" bullets removed).
import type { PageContent } from './types'

export type IconName =
  | 'plane' | 'ship' | 'crane' | 'network' | 'shirt' | 'factory'
  | 'cpu' | 'briefcase' | 'printer' | 'megaphone'

export interface Service {
  slug: string
  title: string
  icon: IconName
  group: 'Logistics' | 'Industry' | 'Commerce & Media'
  image: string
  home: { paras: string[]; listTitle?: string; list?: string[] }
  page: PageContent
}

const U = 'https://sayboltgroup.com/wp-content/uploads/'

export const services: Service[] = [
  {
    slug: 'air-freight',
    title: 'Air Freight',
    icon: 'plane',
    group: 'Logistics',
    image: U + '2026/07/patrick-campanale-oCsQLKENz34-unsplash-scaled-e1784036009149.jpg',
    home: {
      paras: [
        'Time-critical cargo requires speed, precision, and reliability. Our international air freight services are designed to deliver shipments quickly and securely to destinations across the globe.',
        'Leveraging an extensive global network of airline partners, experienced logistics professionals, and advanced shipment tracking systems, we ensure that every consignment reaches its destination safely and on schedule. Whether handling urgent documents, high-value cargo, pharmaceuticals, perishables, or oversized shipments, Saybolt delivers efficient air transportation tailored to every business requirement.',
      ],
      listTitle: 'Our Air Freight Services Include:',
      list: ['Express & Priority Shipments', 'Import & Export Air Cargo', 'Door-to-Door Delivery', 'Customs Clearance', 'Cargo Insurance', 'Real-Time Shipment Tracking', 'Temperature-Controlled Cargo', 'Dangerous Goods Handling'],
    },
    page: {
      title: 'Air Freight',
      tagline: 'Fast, Secure & Reliable Global Air Cargo Solutions',
      intro: [
        'When speed is critical, Saybolt Express delivers dependable air freight solutions that connect your business to destinations around the world. With decades of experience in international logistics, we provide fast, secure, and efficient air cargo services designed to meet the demands of today’s global supply chains.',
        'Whether you are shipping urgent documents, high-value goods, time-sensitive cargo, pharmaceuticals, electronics, perishables, or industrial equipment, our experienced logistics professionals ensure your shipment reaches its destination safely, on time, and in full compliance with international regulations.',
        'Saybolt Express maintains strong partnerships with major international and regional airlines operating in Bangladesh, enabling us to offer flexible scheduling, competitive freight rates, and reliable transit times to virtually any destination worldwide.',
      ],
      blocks: [
        {
          heading: 'Our Air Freight Services',
          intro: 'We offer a comprehensive range of air freight solutions, including:',
          items: ['International Import and Export Air Freight', 'Airport-to-Airport and Door-to-Door Delivery', 'Express and Time-Critical Shipments', 'Full Charter and Part Charter Aircraft Services', 'Consolidated Air Freight Services', 'Priority Cargo Handling', 'Dangerous Goods (DG) Handling', 'Perishable and Temperature-Controlled Cargo', 'Oversized and Project Cargo Transportation', 'Customs Clearance and Documentation', 'Cargo Insurance Services', 'Real-Time Shipment Tracking and Status Updates'],
        },
        {
          heading: 'Our Capabilities',
          items: ['Strategic partnerships with leading international airlines', 'Guaranteed cargo space on major global routes', 'Competitive freight rates and flexible transit options', 'Electronic customs documentation and efficient clearance procedures', 'Secure cargo handling and international compliance', 'Professional logistics planning and dedicated customer support'],
          after: ['Through advanced cargo management systems and proactive shipment monitoring, we provide complete visibility throughout the transportation process, ensuring every shipment is handled with precision, efficiency, and care.'],
        },
      ],
      closing: ['At Saybolt Express, we understand that every minute matters. Our commitment to speed, reliability, and operational excellence enables us to deliver world-class air freight solutions that keep your business moving across global markets.'],
    },
  },
  {
    slug: 'sea-freight',
    title: 'Sea Freight',
    icon: 'ship',
    group: 'Logistics',
    image: U + '2026/07/shipping-scaled.webp',
    home: {
      paras: [
        'Sea freight has been the cornerstone of our logistics expertise since the company’s inception. Today, Saybolt Group manages international ocean freight solutions connecting businesses with global markets through reliable, cost-effective shipping services.',
        'Whether Full Container Load (FCL), Less than Container Load (LCL), project cargo, or specialized shipments, our experienced logistics team coordinates every stage of the transportation process with maximum efficiency. Through our worldwide agency network and strategic partnerships with leading shipping lines, we ensure seamless cargo movement across international trade routes.',
      ],
      listTitle: 'Our Sea Freight Solutions Include:',
      list: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Import & Export Cargo', 'Break Bulk & Heavy Lift Cargo', 'Project Shipments', 'Customs Brokerage', 'Warehousing & Distribution', 'Marine Cargo Insurance'],
    },
    page: {
      title: 'Sea Freight',
      tagline: 'Reliable Ocean Freight Solutions Connecting Global Markets',
      intro: [
        'Sea freight has been the foundation of Saybolt Express since our establishment in 1991. With more than three decades of experience in international shipping and logistics, we have built a strong reputation for delivering reliable, cost-effective, and efficient ocean freight solutions to customers across the globe.',
        'Today, we handle over 20,000 TEUs of containerized cargo annually, serving importers, exporters, manufacturers, and multinational businesses through an extensive global network of shipping lines, overseas agents, and logistics partners. Whether transporting standard cargo, oversized equipment, or specialized project shipments, we provide customized solutions tailored to every client’s requirements.',
        'Our experienced logistics professionals ensure every shipment is planned, coordinated, and executed with the highest standards of safety, efficiency, and operational excellence.',
      ],
      blocks: [
        {
          heading: 'Our Sea Freight Services',
          intro: 'We provide a comprehensive range of international ocean freight services, including:',
          items: ['Full Container Load (FCL) – Import & Export', 'Less than Container Load (LCL) Consolidation Services', 'Door-to-Door Sea Freight Solutions', 'Port-to-Port Transportation', 'Roll-on/Roll-off (RoRo) Shipping', 'Breakbulk and Conventional Cargo Handling', 'Heavy Lift and Project Cargo Transportation', 'Full and Part Vessel Charter Services', 'Inland Transportation and Multimodal Logistics', 'Customs Brokerage and Documentation', 'Cargo Insurance and Risk Management', 'Warehousing, Distribution, and Supply Chain Solutions'],
        },
        {
          heading: 'Integrated Multimodal Logistics',
          paras: [
            'To optimize transit times and reduce logistics costs, we seamlessly integrate ocean freight with road, rail, inland waterways, and air transportation, providing complete end-to-end supply chain solutions from origin to final destination.',
            'Our dedicated logistics team carefully plans every shipment to ensure maximum efficiency, regulatory compliance, and on-time delivery.',
          ],
        },
        {
          heading: 'Advanced Cargo Visibility',
          paras: ['Using modern cargo tracking and shipment monitoring systems, we provide customers with real-time updates throughout the transportation process. Our proactive communication and shipment visibility enable clients to monitor their cargo at every stage, ensuring complete transparency and peace of mind.'],
        },
        {
          heading: 'Why Choose Saybolt Express?',
          items: ['More than three decades of shipping expertise', 'Over 20,000 TEUs handled annually', 'Strong relationships with leading global shipping lines', 'Extensive worldwide agency and partner network', 'Competitive freight rates and flexible sailing schedules', 'Comprehensive customs clearance and documentation support', 'Reliable shipment tracking and customer service', 'Safe, secure, and timely cargo delivery', 'Tailor-made logistics solutions for every industry'],
        },
      ],
      closing: ['At Saybolt Express, we combine global reach with local expertise to deliver dependable ocean freight solutions that keep international trade moving efficiently. From a single container to complex project cargo, we are committed to providing world-class sea freight services that create lasting value for our customers.'],
    },
  },
  {
    slug: 'project-logistics',
    title: 'Project Logistics',
    icon: 'crane',
    group: 'Logistics',
    image: U + '2026/07/project-scaled.jpg',
    home: {
      paras: [
        'Complex industrial projects demand more than transportation—they require strategic planning, engineering expertise, and flawless execution.',
        'Saybolt Group provides complete project logistics solutions for large-scale industrial developments, infrastructure projects, power plants, manufacturing facilities, and heavy equipment transportation. From route surveys and cargo planning to customs coordination, heavy lifting, and final site delivery, our specialists manage every detail to ensure projects are completed safely, efficiently, and on schedule.',
      ],
    },
    page: {
      title: 'Project Handling',
      tagline: 'Specialized Project Cargo & Heavy Logistics Solutions',
      intro: [
        'At Saybolt Express, we go beyond conventional freight forwarding by delivering comprehensive Project Cargo and Heavy Lift Logistics solutions for industries with complex transportation requirements. From initial planning to final delivery, we manage every stage of the logistics process with precision, safety, and efficiency.',
        'Our experienced project logistics team specializes in handling oversized, heavy-lift, high-value, and time-critical cargo for industries such as energy, power, oil & gas, construction, manufacturing, infrastructure, telecommunications, and industrial engineering.',
        'Whether transporting a single piece of specialized equipment or coordinating the movement of an entire industrial plant, we provide customized logistics solutions designed to ensure safe, timely, and cost-effective project execution.',
      ],
      blocks: [
        {
          heading: 'Our Project Handling Services',
          intro: 'We provide complete end-to-end project logistics solutions, including:',
          items: ['Project planning and logistics consultancy', 'Route surveys and transportation feasibility studies', 'Selection of the most suitable transport modes', 'Cost estimation and logistics budgeting', 'Coordination with government authorities and regulatory agencies', 'Oversized and heavy-lift cargo transportation', 'Review of road conditions, bridges, tunnels, and transport restrictions', 'Customs clearance and regulatory documentation', 'Professional packing, crating, cargo labeling, and secure storage', 'Temporary road preparation and site access arrangements where required', 'Air, sea, road, and multimodal transportation management', 'Site logistics planning and on-site delivery coordination', 'Cargo tracking and real-time shipment status updates', 'Risk management, quality control, and project supervision', 'End-to-end process management and performance monitoring'],
        },
        {
          heading: 'Integrated Project Logistics',
          paras: [
            'Large-scale industrial projects require meticulous planning and flawless execution. At Saybolt Express, we serve as a single, reliable logistics partner, coordinating every aspect of the supply chain—from procurement and transportation to final delivery and site logistics.',
            'Our integrated approach minimizes operational risks, improves efficiency, reduces project costs, and ensures that critical equipment and materials arrive safely and on schedule.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express?',
          items: ['Over three decades of logistics expertise', 'Experienced project cargo specialists', 'Customized logistics solutions for complex projects', 'Global network of trusted shipping partners and agents', 'Safe handling of oversized and heavy-lift cargo', 'End-to-end project management and coordination', 'Competitive pricing with complete operational transparency', 'Reliable shipment tracking and timely reporting', 'Commitment to safety, quality, and customer satisfaction'],
        },
      ],
      closing: ['At Saybolt Express, we understand that every project is unique. Our mission is to deliver dependable, innovative, and fully integrated project logistics solutions that keep your operations moving and your projects on schedule—anywhere in the world.'],
    },
  },
  {
    slug: 'supply-chain',
    title: 'Integrated Logistics & Supply Chain Management',
    icon: 'network',
    group: 'Logistics',
    image: U + '2026/07/Screenshot-2026-07-02-003021.webp',
    home: {
      paras: [
        'Modern businesses require intelligent logistics that extend far beyond moving cargo from one location to another.',
        'Saybolt Group designs, manages, and optimizes complete supply chain solutions that improve operational efficiency, reduce costs, and enhance business performance. By integrating transportation, warehousing, inventory management, customs compliance, and digital visibility into one seamless operation, we enable our clients to focus on their core business while we manage the complexity of global logistics.',
      ],
      listTitle: 'Our logistics capabilities include:',
      list: ['Freight Forwarding', 'Warehousing & Distribution', 'Inventory Management', 'Supply Chain Optimization', 'Customs Brokerage', 'Multimodal Transportation', 'Last-Mile Delivery', 'End-to-End Shipment Visibility'],
    },
    page: {
      title: 'Logistics',
      tagline: 'Integrated Logistics & Supply Chain Solutions',
      intro: [
        'In today’s global marketplace, logistics extends far beyond simply transporting goods from one location to another. Modern businesses require intelligent, flexible, and fully integrated supply chain solutions that improve efficiency, reduce costs, and ensure complete visibility throughout the logistics process.',
        'At Saybolt Express, we provide comprehensive logistics and supply chain management solutions designed to optimize the movement of goods, information, and resources across domestic and international markets. By combining industry expertise with advanced technology, we help our clients streamline operations, improve productivity, and gain a competitive advantage.',
        'Our experienced logistics professionals work closely with customers to design customized solutions that meet the unique requirements of each business, regardless of shipment size or industry.',
      ],
      blocks: [
        {
          heading: 'Our Logistics Services',
          intro: 'We offer a complete range of integrated logistics solutions, including:',
          items: ['End-to-End Supply Chain Management', 'Freight Forwarding and Transportation Management', 'Warehousing and Inventory Management', 'Distribution and Last-Mile Delivery', 'Customs Brokerage and Trade Compliance', 'Multimodal Transportation Solutions', 'Cargo Consolidation and Deconsolidation', 'Order Fulfillment and Distribution', 'Project Logistics and Heavy Cargo Management', 'Reverse Logistics Solutions', 'Procurement and Vendor Coordination'],
        },
        {
          heading: 'Digital Logistics Solutions',
          paras: ['Leveraging modern information technology and advanced logistics management systems, we provide customers with greater operational visibility and control.'],
          intro: 'Our technology-driven capabilities include:',
          items: ['Automated Order Processing', 'Shipment Planning and Transport Optimization', 'Real-Time Cargo Tracking and Status Reporting', 'Proactive Event Monitoring and Exception Management', 'Logistics Cost Analysis and Performance Reporting', 'Supply Chain Simulation and Process Optimization', 'Electronic Documentation and Workflow Management', 'Data-Driven Decision Support', 'Secure Communication and Customer Portal Access'],
        },
        {
          heading: 'Why Choose Saybolt Express?',
          items: ['Customized logistics solutions for every industry', 'Advanced technology and digital supply chain management', 'Global logistics network with experienced partners', 'Cost-effective transportation planning', 'Reliable warehousing and distribution services', 'End-to-end shipment visibility', 'Experienced logistics professionals', 'Commitment to efficiency, reliability, and customer satisfaction'],
        },
      ],
      closing: ['At Saybolt Express, we believe successful logistics is about creating value throughout the entire supply chain. By integrating transportation, warehousing, technology, and supply chain management into one seamless solution, we help businesses operate more efficiently, respond faster to market demands, and achieve sustainable growth.'],
    },
  },
  {
    slug: 'ready-made-garments',
    title: 'Ready-Made Garments (RMG)',
    icon: 'shirt',
    group: 'Industry',
    image: U + '2026/07/rmg.jpg',
    home: {
      paras: ['Bangladesh is one of the world’s leading apparel manufacturing hubs, and Saybolt Group proudly contributes to this globally recognized industry. We manufacture and supply premium-quality garments that meet international standards for fashion brands, retailers, wholesalers, and private-label customers worldwide. Our commitment to quality assurance, ethical manufacturing, timely delivery, and sustainable production ensures lasting partnerships with global buyers.'],
    },
    page: {
      title: 'Ready-Made Garments (RMG)',
      tagline: 'End-to-End Apparel Manufacturing & Supply Chain Solutions',
      intro: [
        'At Saybolt Express, we offer tailored logistics and supply chain management designed specifically for the fast-paced Ready-Made Garments (RMG) and textile industry. We understand that in modern fashion, timing, product integrity, and cost efficiency are crucial. From sourcing raw fabrics to delivering finished apparel directly to global retail floors, we streamline every step of your garment supply chain.',
        'Our dedicated apparel logistics team handles all categories of knitwear, woven garments, denim, outerwear, and specialized fashion products for international brands, manufacturers, and retailers. Whether you require standard container shipping or specialized garment-on-hanger (GOH) solutions, we ensure your products arrive market-ready, crease-free, and on schedule.',
      ],
      blocks: [
        {
          heading: 'Our Ready-Made Garments Services',
          intro: 'We provide seamless, end-to-end garment logistics solutions, including:',
          items: [
            { label: 'Raw Material Transport', text: 'Swift shipping of fabrics, trims, yarn, and accessories to garment factories.' },
            { label: 'Garment-On-Hanger (GOH) Transport', text: 'Specialized containers and trailers designed to keep apparel ready for store display without pressing.' },
            { label: 'Consolidation & Warehousing', text: 'High-capacity, climate-controlled storage and order consolidation for multiple suppliers.' },
            { label: 'Quality Control & Packaging', text: 'Professional sorting, labeling, hang-tagging, re-packing, and kitting services.' },
            { label: 'Customs Clearance & Compliance', text: 'Expert handling of export/import documentation, textile quotas, duties, and trade regulations.' },
            { label: 'Multimodal Freight', text: 'Flexible air, sea, road, and sea-air combined transport options to balance speed and budget.' },
            { label: 'Purchase Order (PO) Management', text: 'Real-time visibility and track-and-trace down to the individual style, color, and size (SKU) level.' },
            { label: 'Reverse Logistics', text: 'Efficient management of garment returns and inventory re-processing.' },
          ],
        },
        {
          heading: 'Integrated RMG Logistics',
          paras: [
            'The fashion industry relies on short lead times and strict seasonal deadlines. At Saybolt Express, we operate as a complete logistics partner, connecting textile mills, manufacturing plants, regional distribution centers, and retail stores into one fluid network.',
            'Our integrated approach reduces cycle times, prevents stockouts, minimizes transit damage, and gives fashion brands the agility needed to respond quickly to market trends.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express For Apparel Logistics?',
          items: [
            { label: 'Industry Expertise', text: 'Decades of experience in textile and garment transportation dynamics.' },
            { label: 'GOH Capability', text: 'Dedicated facilities and transport gear for premium hang-garment care.' },
            { label: 'Peak Season Readiness', text: 'Scalable freight capacity during high-demand retail surges.' },
            { label: 'Global Footprint', text: 'Extensive network covering major textile manufacturing hubs and global consumer markets.' },
            { label: 'End-to-End Visibility', text: 'Advanced tracking technology for precise inventory monitoring.' },
            { label: 'Compliance Assurance', text: 'Deep knowledge of international customs regulations and trade agreements.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: 'factory',
    group: 'Industry',
    image: U + '2026/07/manu.jpg',
    home: {
      paras: [
        'Saybolt Group operates modern manufacturing facilities dedicated to producing high-quality products through precision engineering, advanced technology, and stringent quality control.',
        'Our production capabilities are supported by skilled professionals, efficient manufacturing systems, and continuous innovation to ensure consistent product excellence, operational efficiency, and scalable production for both domestic and international markets.',
      ],
    },
    page: {
      title: 'Manufacturing Solutions',
      tagline: 'Advanced Logistics & Supply Chain Management for Manufacturing',
      intro: [
        'At Saybolt Express, we provide comprehensive logistics and supply chain solutions tailored to support the unique demands of the manufacturing sector. In an era where production downtime can result in significant financial loss, we ensure a seamless flow of raw materials, sub-assemblies, and finished goods to keep your assembly lines operating at peak performance.',
        'Our manufacturing logistics specialists serve a broad range of sectors, including automotive, electronics, heavy machinery, consumer packaged goods, and industrial equipment. Whether managing inbound supply chains for just-in-time (JIT) production or distributing completed products to global markets, we deliver scalable, dependable solutions designed to optimize your operations.',
      ],
      blocks: [
        {
          heading: 'Our Manufacturing Logistics Services',
          intro: 'We deliver end-to-end support for manufacturing supply chains, including:',
          items: [
            { label: 'Inbound Materials Management', text: 'Scheduled transport of raw materials, components, and parts directly to production facilities.' },
            { label: 'Just-In-Time (JIT) & Just-In-Sequence (JIS) Delivery', text: 'Precise, synchronized delivery to minimize inventory holding costs and eliminate line stoppages.' },
            { label: 'Production Logistics', text: 'On-site material handling, sub-assembly support, line-side replenishment, and internal plant logistics.' },
            { label: 'Finished Goods Distribution', text: 'Multimodal freight management (sea, air, rail, and road) for distribution to global warehouses and end customers.' },
            { label: 'Warehousing & VMI', text: 'Vendor-Managed Inventory (VMI) services, climate-controlled storage, and safety stock management.' },
            { label: 'Customs Clearance & Trade Compliance', text: 'Expert handling of duty deferrals, tariff classifications, and international trade regulations.' },
            { label: 'Reverse Logistics & Aftermarket Parts', text: 'Efficient returns management, scrap transport, and spare parts distribution for post-sale support.' },
            { label: 'End-to-End Visibility', text: 'Advanced tracking systems providing continuous status updates across your entire supply chain network.' },
          ],
        },
        {
          heading: 'Integrated Manufacturing Logistics',
          paras: [
            'Modern manufacturing demands agile, resilient supply chains that can quickly adapt to demand shifts and supplier disruptions. At Saybolt Express, we serve as your central logistics partner, bridging the gap between raw material vendors, manufacturing plants, and consumer markets into a unified operational network.',
            'Our integrated approach reduces lead times, optimizes inventory carrying costs, mitigates supply chain risks, and enables manufacturers to maintain strict lean manufacturing standards.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express For Manufacturing Logistics?',
          items: [
            { label: 'Unmatched Reliability', text: 'High on-time delivery performance to prevent costly production line delays.' },
            { label: 'Tailored Solutions', text: 'Customized transport and warehousing strategies built around your specific production schedules.' },
            { label: 'Global Footprint', text: 'Extensive transport networks covering key industrial regions and emerging manufacturing hubs worldwide.' },
            { label: 'Scalable Capacity', text: 'Flexible logistics resources to easily accommodate seasonal surges and production fluctuations.' },
            { label: 'Proactive Risk Mitigation', text: 'Advanced monitoring and contingency planning to protect critical shipments.' },
            { label: 'Commitment to Quality', text: 'Strict adherence to safety standards, quality control protocols, and industry-specific regulations.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'trading-it',
    title: 'Trading & Information Technology',
    icon: 'cpu',
    group: 'Commerce & Media',
    image: U + '2026/07/TRADING.jpg',
    home: {
      paras: [
        'Global commerce is increasingly driven by technology, connectivity, and intelligent business solutions.',
        'Saybolt Group combines international trading expertise with innovative IT services to deliver comprehensive commercial and digital solutions. We facilitate global sourcing, procurement, import-export operations, software solutions, IT infrastructure, networking, internet services, and digital transformation initiatives that help businesses operate more efficiently in today’s competitive marketplace.',
      ],
      listTitle: 'Our expertise includes:',
      list: ['International Trading', 'Import & Export Management', 'Procurement Solutions', 'Internet & Network Services', 'Software & IT Solutions', 'Digital Infrastructure', 'Business Technology Consulting'],
    },
    page: {
      title: 'Trading & IT Solutions',
      tagline: 'Integrated Supply Chain & Logistics for Global Trade & Tech Infrastructure',
      intro: [
        'At Saybolt Express, we deliver high-precision logistics and end-to-end supply chain management designed to power the fast-paced Trading and Information Technology (IT) sectors. In industries driven by rapid market fluctuations, strict product life cycles, and high-value hardware, speed, security, and absolute reliability are essential. We ensure seamless international trade flows and secure distribution networks that keep global trade moving and tech infrastructure connected.',
        'Our specialized trade and IT logistics team manages a wide array of commodities—from high-tech electronics, servers, and telecom hardware to general consumer goods, raw materials, and trading merchandise. Whether you are an international trading house managing cross-border transactions or a technology provider deploying critical data center equipment, we deliver custom logistics solutions engineered to protect your assets and accelerate your time-to-market.',
      ],
      blocks: [
        {
          heading: 'Our Trading & IT Services',
          intro: 'We provide comprehensive, end-to-end support for trade merchants and technology providers, including:',
          items: [
            { label: 'Global Trade Facilitation', text: 'Complete import/export management, cross-border freight forwarding, and multi-country trade logistics.' },
            { label: 'High-Value Tech Transport', text: 'Secure, climate-controlled, and shock-monitored shipping for sensitive IT equipment, servers, and microelectronics.' },
            { label: 'White-Glove & Technical Delivery', text: 'Specialized unpacking, rack mounting, and site delivery for data centers and corporate IT infrastructure.' },
            { label: 'Customs Clearance & Regulatory Compliance', text: 'Expert handling of complex trade tariffs, dual-use technology regulations, and import/export documentation.' },
            { label: 'Secure Warehousing & Asset Tracking', text: 'High-security storage facilities featuring real-time, SKU-level serial number tracking and inventory management.' },
            { label: 'Just-In-Time (JIT) Tech Deployment', text: 'Synchronized freight scheduling to support rapid hardware rollouts and IT system upgrades.' },
            { label: 'Vendor Managed Inventory (VMI)', text: 'Stock management solutions for traders to maintain optimal buffer inventory near target consumer markets.' },
            { label: 'Reverse Logistics & E-Waste Handling', text: 'Efficient return processing, refurbishing logistics, and compliant e-waste disposal for tech hardware.' },
          ],
        },
        {
          heading: 'Integrated Trading & IT Logistics',
          paras: [
            'Modern global trade and technology deployments demand high visibility and total operational flexibility. At Saybolt Express, we bridge the gap between global suppliers, trading houses, tech manufacturers, and end consumers by providing a unified supply chain platform.',
            'Our integrated approach reduces transit times, minimizes exposure to supply chain vulnerabilities, eliminates costly customs delays, and gives businesses the agility required to react instantly to market demands.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express For Trading & IT Logistics?',
          items: [
            { label: 'High-Security Protocols', text: 'Advanced theft prevention, continuous surveillance, and specialized handling for high-value electronic assets.' },
            { label: 'Global Trade Expertise', text: 'Extensive knowledge of international trade laws, customs duties, and import regulations across major global trade corridors.' },
            { label: 'Rapid Transit Capabilities', text: 'Air and express freight options designed to meet demanding IT deployment schedules and market opportunities.' },
            { label: 'End-to-End Asset Visibility', text: 'Complete shipment tracking with live monitoring of location, temperature, and handling conditions.' },
            { label: 'Scalable Storage Solutions', text: 'Flexible warehousing space to handle bulk trading merchandise and seasonal tech inventory surges.' },
            { label: 'Turnkey Execution', text: 'A single, dependable partner managing everything from origin sourcing to final on-site installation support.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'business-solutions',
    title: 'Business Solutions',
    icon: 'briefcase',
    group: 'Commerce & Media',
    image: U + '2026/07/join-team.jpg',
    home: {
      paras: [
        'Every business faces unique operational challenges that require customized solutions.',
        'Saybolt Group partners with organizations to develop integrated business strategies that streamline operations, optimize resources, improve productivity, and create sustainable long-term growth. By combining industry expertise with innovative thinking, we transform business challenges into measurable opportunities.',
      ],
    },
    page: {
      title: 'Solution',
      tagline: 'Customized, End-to-End Supply Chain Management',
      intro: [
        'At Saybolt Express, we deliver comprehensive, end-to-end logistics solutions tailored to solve the most complex supply chain challenges facing modern businesses. We believe that no two businesses are alike; therefore, we move away from standardized transport to engineer dynamic, fully integrated strategies that align directly with your operational goals, timelines, and budget requirements.',
        'Our team of supply chain experts combines deep industry knowledge, cutting-edge technology, and a global network of transportation assets to optimize every stage of your logistics journey. Whether you require streamlined freight forwarding, intricate multi-modal transport, specialized warehousing, or complex regulatory guidance, we provide a unified platform that drives efficiency and eliminates operational friction.',
      ],
      blocks: [
        {
          heading: 'Key Capabilities Of Our Logistics Solutions',
          intro: 'We design and execute flexible, results-driven strategies across your entire supply chain, including:',
          items: [
            { label: 'End-to-End Supply Chain Design', text: 'Custom routing and process modeling built to optimize lead times and minimize total operational costs.' },
            { label: 'Multimodal Freight Integration', text: 'Seamlessly synchronized sea, air, road, and rail transport solutions for maximum flexibility and cost-efficiency.' },
            { label: 'Advanced Warehousing & Fulfillment', text: 'Scalable storage, pick-and-pack operations, inventory management, and value-added processing.' },
            { label: 'Customs Clearance & Trade Governance', text: 'Comprehensive international compliance management, tariff optimization, and regulatory documentation.' },
            { label: 'Real-Time Supply Chain Visibility', text: 'Advanced tracking platforms providing full transparency, predictive alerts, and actionable performance data.' },
            { label: 'Risk Management & Contingency Planning', text: 'Proactive disruption mitigation, cargo insurance options, and continuous route monitoring.' },
            { label: 'Vendor & Purchase Order Management', text: 'Centralized coordination with suppliers to guarantee timely order consolidation and dispatch.' },
            { label: 'Sustainable Logistics Operations', text: 'Eco-efficient routing and carbon-footprint reduction strategies for greener supply chain performance.' },
          ],
        },
        {
          heading: 'Strategic Partnership & Operational Synergy',
          paras: [
            'Siloed supply chains lead to hidden costs, delays, and lost opportunities. At Saybolt Express, our approach integrates sourcing, transit, warehousing, and final delivery into one seamless, continuous network.',
            'By serving as your single point of contact and accountability, we reduce administrative burdens, eliminate supply chain bottlenecks, and give your organization the agility needed to rapidly adapt to fluctuating market conditions and customer demands.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express As Your Solution Partner?',
          items: [
            { label: 'Tailored Engineering', text: 'Bespoke logistics frameworks designed specifically around your unique business rules and constraints.' },
            { label: 'Global Network, Local Expertise', text: 'A vast international presence backed by hands-on knowledge of local markets and transit corridors.' },
            { label: 'Data-Driven Optimization', text: 'Utilization of real-time analytics to continuously refine routes, reduce transit times, and lower overhead costs.' },
            { label: 'Proven Reliability', text: 'A strong track record of high on-time performance and safe cargo delivery across diverse industries.' },
            { label: 'Scalable Infrastructure', text: 'Flexible capacity that easily scales up or down alongside your business growth and seasonal demands.' },
            { label: 'Unwavering Service Commitment', text: 'Dedicated account management teams providing 24/7 proactive support and operational oversight.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'printing-publishing',
    title: 'Printing & Publishing',
    icon: 'printer',
    group: 'Commerce & Media',
    image: U + '2026/07/printing.jpg',
    home: {
      paras: [
        'From corporate branding materials to commercial publications, Saybolt Group provides comprehensive printing and publishing solutions with exceptional quality and precision.',
        'Our modern production capabilities ensure vibrant colour reproduction, premium finishing, fast turnaround, and cost-effective printing services for businesses, institutions, publishers, and government organizations.',
      ],
      listTitle: 'Our services include:',
      list: ['Commercial Printing', 'Corporate Stationery', 'Books & Magazines', 'Annual Reports', 'Marketing Materials', 'Packaging Printing', 'Large Format Printing', 'Digital Publishing'],
    },
    page: {
      title: 'Printing & Publishing',
      tagline: 'Global Print Logistics, Distribution & Materials Management',
      intro: [
        'At Saybolt Express, we deliver end-to-end supply chain and logistics management tailored to the specialized demands of the Printing and Publishing industry. In a market where strict publication dates, time-sensitive distributions, and product protection are paramount, we ensure paper stock, printed collateral, books, and high-volume periodicals move seamlessly from mills and pressrooms to final retail shelves and end subscribers.',
        'Our dedicated media logistics team manages every stage of the publishing supply chain for global publishing houses, commercial printers, marketing agencies, and educational institutions. Whether you need reliable transport for raw paper rolls, secure climate-controlled storage for finished books, or time-critical global air freight for time-sensitive magazines and promotional materials, we provide customized, dependable solutions engineered to meet non-negotiable print deadlines.',
      ],
      blocks: [
        {
          heading: 'Our Printing & Publishing Services',
          intro: 'We offer comprehensive logistics support for all print and publishing formats, including:',
          items: [
            { label: 'Raw Materials Supply Chain', text: 'Transport of heavy paper reels, raw stock, printing plates, inks, and binding supplies directly to press facilities.' },
            { label: 'Time-Critical Publication Delivery', text: 'Expedited air and road freight for daily, weekly, and monthly periodicals and time-sensitive newsprint.' },
            { label: 'Book & Mass-Market Distribution', text: 'Large-scale consolidation and transport of hardcover, paperback, and educational textbooks to global booksellers and distributors.' },
            { label: 'Specialized Packaging & Protection', text: 'Custom crating, shrink-wrapping, and moisture-controlled shipping to preserve paper quality and prevent damage.' },
            { label: 'Warehousing & Inventory Fulfillment', text: 'Secure, climate-controlled storage, pick-and-pack, and direct-to-retail or direct-to-consumer order fulfillment.' },
            { label: 'Customs Clearance & Cultural Compliance', text: 'Expert handling of international trade documentation, customs tariffs, and regulatory clearance for printed matter.' },
            { label: 'Direct Mail & Marketing Distribution', text: 'Targeted delivery networks for catalogs, brochures, direct mailers, and point-of-sale (POS) promotional displays.' },
            { label: 'Reverse Logistics & Returns Processing', text: 'Efficient management of unsold publication returns, overstock inventory, and paper recycling logistics.' },
          ],
        },
        {
          heading: 'Integrated Print Logistics',
          paras: [
            'Meeting press schedules and release dates requires flawless timing and complete operational synergy. At Saybolt Express, we integrate paper suppliers, printing facilities, regional fulfillment centers, and retail channels into one continuous, transparent logistics network.',
            'Our unified approach eliminates transit delays, minimizes inventory holding costs, protects delicate printed assets against environmental harm, and gives publishers the agility required to react quickly to market demands.',
          ],
        },
        {
          heading: 'Why Choose Saybolt Express For Print & Publishing Logistics?',
          items: [
            { label: 'Time-Definite Delivery', text: 'Strict adherence to print deadlines to guarantee synchronized product launches and newsstand releases.' },
            { label: 'Heavy-Cargo & Bulk Capabilities', text: 'Specialized equipment for handling dense, heavy paper rolls and palletized book shipments safely.' },
            { label: 'Global Distribution Network', text: 'Widespread transit corridors connecting international print hubs to global retail and subscriber networks.' },
            { label: 'Climate & Quality Control', text: 'Secure transit and storage environments designed to prevent paper warping, moisture absorption, and edge damage.' },
            { label: 'Real-Time Shipment Visibility', text: 'Advanced SKU and batch tracking to monitor your inventory from the pressroom floor to final delivery.' },
            { label: 'End-to-End Account Oversight', text: 'A dedicated logistics partner providing continuous monitoring and proactive support across your entire supply chain.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'advertising',
    title: 'Advertising & Brand Communication',
    icon: 'megaphone',
    group: 'Commerce & Media',
    image: 'https://images.unsplash.com/photo-1758613654806-fa787b741bba?auto=format&fit=crop&w=1600&q=80',
    home: {
      paras: [
        'Strong brands are built through strategic communication and creative excellence.',
        'Saybolt Group develops integrated advertising and marketing campaigns that strengthen brand identity, increase customer engagement, and deliver measurable business results. Combining creative design, digital marketing, media planning, branding, and strategic communication, we help businesses establish lasting market presence and competitive advantage.',
      ],
      listTitle: 'Our advertising services include:',
      list: ['Brand Development', 'Corporate Identity Design', 'Digital Marketing', 'Media Planning & Buying', 'Creative Campaigns', 'Outdoor Advertising', 'Print & Electronic Media', 'Marketing Communications'],
    },
    page: {
      title: 'Advertising Service',
      tagline: 'Cross-Border Brand Activation & Global Campaign Management',
      intro: [
        'At Saybolt Express, our International Multimedia Advertising (IMA) services help businesses establish a powerful, unified brand presence across global markets. In an interconnected digital economy, launching campaigns overseas requires navigating complex media landscapes, local compliance regulations, and localized consumer behaviors. We manage end-to-end multimedia advertising strategies—seamlessly integrating digital media, broadcast, print, out-of-home (OOH), and interactive platforms—to ensure your brand message resonates culturally while driving measurable international growth.',
        'Our team of global marketing specialists and media strategists handles every stage of your advertising lifecycle. Whether you are launching a global consumer brand, expanding tech products into new territories, or managing cross-border promotional campaigns, we deliver synchronized multimedia solutions engineered for maximum audience reach and return on investment.',
      ],
      blocks: [
        {
          heading: 'Our IMA Capabilities',
          intro: 'We deliver end-to-end multimedia advertising solutions tailored for international scale, including:',
          items: [
            { label: 'Global Media Strategy & Planning', text: 'Data-driven media allocation across international digital platforms, TV, radio, print, and high-impact OOH locations.' },
            { label: 'Cross-Cultural Content Adaptation', text: 'Transcreation, localized copywriting, video production, and multi-language voiceover services tailored for regional nuances.' },
            { label: 'Digital & Interactive Campaigns', text: 'Target-driven programmatic video ads, rich media formats, mobile campaign deployment, and social media management.' },
            { label: 'Global Public Relations & Event Support', text: 'Coordinating press releases, event sponsorships, and localized promotional rollouts across key market hubs.' },
            { label: 'Regulatory & Ad Compliance', text: 'Managing local advertising standards, trademark rules, broadcast guidelines, and cross-border data privacy regulations.' },
            { label: 'Campaign Analytics & Performance Tracking', text: 'Unified dashboards providing real-time engagement data, brand impression tracking, and ROI reporting.' },
          ],
        },
        {
          heading: 'Integrated Campaign Execution',
          paras: [
            'Fragmented advertising across multiple countries often leads to diluted brand identity and ballooning agency costs. At Saybolt Express, we serve as a single management hub for your global ad campaigns, linking creative production, media buying, and localized distribution into one streamlined operation.',
            'Our integrated approach shortens campaign setup times, eliminates communication gaps between regional teams, optimizes ad spend, and gives your organization the agility needed to launch synchronized global campaigns effortlessly.',
          ],
        },
        {
          heading: 'Why Partner With Saybolt Express For IMA?',
          items: [
            { label: 'Global Reach, Local Relevance', text: 'Access to extensive worldwide media networks with tailored execution for target regional markets.' },
            { label: 'Unified Brand Oversight', text: 'Centralized management ensuring consistent brand messaging across all digital and traditional channels.' },
            { label: 'Scalable Campaign Assets', text: 'Flexible campaign infrastructure designed to handle small market entries or large multi-region product launches.' },
            { label: 'Data-Driven Optimization', text: 'Live monitoring of campaign performance to dynamically reallocate media budgets toward top-performing channels.' },
            { label: 'Seamless Turnkey Delivery', text: 'A reliable partner overseeing everything from creative localization and media placement to final campaign audits.' },
          ],
        },
      ],
    },
  },
]
