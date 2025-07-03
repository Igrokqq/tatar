import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          who_we_are: "Who we are",
          about_us: "About us",
          our_people: "Our People",
          career: "Career",
          what_we_do: "What we do",
          real_estate: "Real Estate",
          infrastructure: "Infrastructure",
          it_technology: "IT-Technology",
          insurance: "Insurance",
          contact: "Contact",
          modal_who_title: "Who we are",
          modal_what_title: "What we do",
          modal_contact_title: "Contact",
          capital_with_vision: "Capital with Vision",
          growth_for_generations: "Growth for Generations",
          scroll_down: "SCROLL DOWN",
          advantages: {
            real_estate: {
              header: "REAL ESTATE",
              description: "From acquisition and financing to leasing and asset management, we are involved in every detail.",
            },
            energy: {
              header: "ENERGY",
              description: "From acquisition and financing to leasing and asset management.",
            },
            water: {
              header: "WATER",
              description: "From acquisition and financing to leasing and asset management.",
            },
            transport: {
              header: "TRANSPORT",
              description: "From acquisition and financing to leasing and asset management.",
            },
            digital: {
              header: "DIGITAL",
              description: "From acquisition and financing to leasing and asset management.",
            },
            ai: {
              header: "AI",
              description: "From acquisition and financing to leasing and asset management.",
            }
          },
          keypoints: {
            title: "Our key points",
            sicherheit_title: "SECURITY.",
            sicherheit_text: "We are financially strong and can therefore carry out real estate acquisitions quickly and independently of banks.",
            sicherheit_title2: 'Stability',
            sicherheit_text2: 'Transaction security is our top priority.',
            sicherheit_title3: 'DYNAMISM',
            sicherheit_text3: 'We are straightforward and also acquire real estate without unnecessary bureaucracy.'

          },
          aboutUs: {
            hero_title: "Our Mission & Story",
            keypoints_title: "Our key points",
            unternehmen_title: "Company",
            els: [
              {
                title: "Global",
                text: "Through our active presence in America, Europe, and Asia, we can identify and pursue strategic investment opportunities in multiple global markets.",
                country: ["Europe", "Asia/Pacific", "USA"]
              },
              {
                title: "Today",
                text: "We focus on conservative investment strategies and cautiously expand into selected markets, including recent real estate purchases in New York and further investments in Germany."
              },
              {
                title: "Future",
                text: "As a private and independent company, we maintain the flexibility to think across generations, act decisively, and selectively enter into partnerships."
              }
            ],
            keypointsEl: [
              { title: "New York", text: "More", img: "/img/build.webp" },
              { title: "New York", text: "More", img: "/img/build.webp" }
            ],
            textEl: [
              {
                title: "Our Profile",
                text: "Strength in patience. Value in discipline. Wealth in time."
              },
              {
                title: "Practical operational expertise",
                text: "Our experienced team has deep knowledge in investment strategy, asset management, and operational efficiency to ensure consistent and predictable results."
              },
              {
                title: "Practical operational",
                text: "Over 1,000 professionals work in our portfolio of franchise and investment projects. Supported by dedicated asset management teams based in Paderborn, Düsseldorf, Munich, New York, and Hong Kong, we actively manage our assets leveraging profound local knowledge and global insights."
              }
            ],
            infoEl: [
              {
                title: "Our History",
                text: "Our journey began in 2013 with our founder Onur Tatar, whose entrepreneurial spirit and early experience operating successful KFC franchises laid a solid foundation for strategic growth..."
              },
              {
                title: "Our Story",
                text: "While real estate remains at the core of our activities, we have expanded our investments into carefully selected sectors aligned with our long-term vision."
              },
              {
                title: "Founded in Germany, invested globally",
                text: "Rooted in Germany, now strategically active worldwide."
              },
              {
                title: "Global",
                text: "Through our active presence in America, Europe, and Asia, we can identify and pursue strategic investment opportunities in multiple global markets."
              },
              {
                title: "Today",
                text: "We focus on conservative investment strategies and cautiously expand into selected markets, including recent real estate purchases in New York and further investments in Germany. As a private and independent company, we maintain the flexibility to think across generations, act decisively, and selectively enter into partnerships."
              }
            ]
          },
          our_people: "Our People",
          our_people_text: "Our company is defined by the people who drive it.\nThe way they think, the decisions they make.",
          board_members: "Board Members",
          executive_officers: "Executive Officers",
          senior_leadership: "Senior Leadership",
          career: "Career",
          career_expands_mind: "A great career expands your mind, challenges your thinking, and shapes your worldview.",
          work_alongside_brilliant_minds: "Work Alongside Brilliant Minds. Solve Meaningful Problems",
          company_strength_part1: "A company is only as strong as the people who drive it—their ideas, principles, and ambitions.",
          company_strength_part2: "We believe in bringing together the brightest minds and creating an environment where they are challenged, inspired, and empowered.",
          purpose_driven_work: "If you’re looking for a place where your work has purpose, your ideas drive impact, and your career has no ceiling, we’d love to meet you.",
          view_open_positions: "View Open Positions",
          unternehmen: "Unternehmen",
          rental_manager_title: "Rental Manager",
          rental_manager_short: "We are searching for a Rental Manager fulltime",
          rental_manager_description: "We are a growing real estate company specializing in high-quality residential and commercial properties. To strengthen our team, we are looking for a committed and organized Rental Manager (m/f/d). In this role, you will be responsible for the complete rental process – from marketing and viewings to tenant management – and serve as the key point of contact for prospective and current tenants.",
          apply: "Apply",
          task: "Task",
          profile: "Profile",
          we_offer: "We Offer",
          real_estate: "Real Estate",
          real_estate_heading: "Navigating Markets with a Long-Term Perspective",
          real_estate_description: "We’ve been building our real estate portfolio since 2013 — steadily, deliberately, and always with a hands-on approach. Today, we own and operate over 300,000 square meters (~3.2 million square feet) of real estate across Germany and the United States, with a portfolio value of over €1 billion.",
          info_1: "Our roots are in Germany, where we began acquiring and managing commercial and mixed-use properties in urban centers. Since then, we’ve expanded internationally, bringing the same mindset to our growing portfolio in the U.S. We don’t just invest — we operate everything ourselves. From acquisition and financing to leasing and asset management, we’re involved in every detail.",
          info_2: "What sets us apart is not just scale, but the way we work. We focus on long-term value, not quick wins. We manage risk conservatively but move fast when the right opportunity comes along. We believe in the power of good buildings, great locations, and solid relationships — and we’ve built a portfolio that reflects that.",
          info_3: "Our team combines the speed and flexibility of a private owner with the rigor and discipline of an institutional investor. The result: a resilient platform designed to grow thoughtfully and perform over time.",
          guiding_principles: "Guiding Principles in Real Estate",
          residential_investments_title: "Residential Investments",
          residential_investments_text: "Strategically focused on multi-family properties and select residential developments in stable markets, we prioritize investments in regions with strong economic fundamentals and sustainable demand. Our approach emphasizes long-term capital preservation while generating steady returns, ensuring a balance between stability and growth.",
          commercial_investments_title: "Commercial Investments",
          commercial_investments_text: "While our primary focus remains on residential properties, we selectively invest in commercial spaces such as offices, hotels and retail units with strong fundamentals. Priority is given to assets with established tenant profiles and predictable income streams, avoiding speculative ventures to ensure reliable, consistent performance.",
          income_generation_title: "Income Generation",
          income_generation_text: "Our investment strategy is built around generating stable, recurring income through well-managed, long-term holdings. We prioritize properties that offer secure cash flows, targeting investments with strong occupancy rates and reliable tenancy agreements to ensure sustainable performance across market cycles.",
          capital_preservation_title: "Capital Preservation",
          capital_preservation_text: "Preserving capital is at the core of our investment philosophy. We focus on acquiring assets with intrinsic value, capable of weathering market fluctuations while safeguarding investor capital. By targeting resilient markets and properties with strong fundamentals, we ensure stability and long-term performance.",
          gallery_title: "Privately held, globally invested.",
          gallery_subtitle: "A strategic presence across America, Europe, and Asia.",
          view_portfolio: "View Full Portfolio",
          deal_execution_title: "Seamless Deal Execution",
          deal_execution_left: "We ensure swift and reliable transactions through streamlined decision-making and direct communication. Privately capitalized for swift execution, we act independently, free from external financing constraints. This autonomy allows us to offer immediate financial commitments and maintain maximum flexibility in every transaction, ensuring clarity and certainty for all parties involved.",
          deal_execution_right: "Looking to present an opportunity? View our Acquisition Profile to understand our investment criteria and submit relevant properties. We actively assess high-quality assets that align with our strategic focus Acquisition Profile",
          acquisition_profile: "Acquisition Profile",
          acquisition_modal_title: "Acquisition profile",
          acquisition_modal_text: "For detailed acquisition criteria, please see below or download our PDF guide",
          portfolios: "Portfolios",
          office: "Office",
          residential: "Residential",
          hotel: "Hotel/Hostel",
          investment_volume: "Investment Volume",
          investment_volume_value: "Up to €50 million",
          location_quality: "Location Quality",
          location_quality_values: "A, B",
          location_types: "Established Office Locations, Mixed-Use Areas",
          property_condition: "Property Condition",
          property_condition_values: "No Full-Scale Redevelopment Required, Redevelopment Considered Only in Case of Repurposing",
          tenants: "Tenants",
          tenants_values: "Includes Partially Vacant Properties, Long-Term Leases Preferred",
          other: "Other",
          other_values: "Properties with Development Potentials",

          contact: "Contact",
          chat_to_sales: "Chat to sales",
          contact_us: "Contact us",
          location: "Location",
          location_text: "New york, USA",
          send_message: "Send a message",
          you_first_name: "Your First name",
          you_last_name: "Your Last name",
          enter_email: "Enter your email",
          subject: "Subject",
          portfolio: "Portfolio",
          all: "All",
          office: "Office",
          residential: "Residential",
          retail: "Retail",
          services: "Services",
          infrastructure: "Infrastructure",
          insurance: "Insurance",
          it_technology: "IT-Technology",
          real_estate: "Real Estate",
          residential_properties: "Residential properties",
          commercial_properties: "Commercial properties",
          company: "Company",
          profile: "Profile",
          people: "People",
          career: "Career",
          assets: "Assets",
          office: "Office",
          retail: "Retail",
          residential: "Residential",
          hotel_hostel: "Hotel/Hostel",
          holding: "Holding",
          impressum: "Impressum",
          privacy_policy: "Privacy Policy",
          terms_conditions: "Terms of Conditions",
          cookies: "Cookies",
          grow: "Grow",
          for_generations: "for generations",
          "slide": {
            "energie": {
              "header": "ENERGY"
            },
            "transport": {
              "header": "TRANSPORT"
            },
            "franchise": {
              "header": "FRANCHISE"
            },
            "digital": {
              "header": "DIGITAL"
            },
            "common": {
              "desc": "From acquisition and financing to leasing and asset management"
            }
          },
          newsletter: 'Subscribe to email newsletter.',
          submit_now: "Submit Now",
          enter: 'Enter',
          Aram: 'Aram Aras has been part of Tatar Holding since 2018, beginning his journey in the technical department before rising through the ranks. In 2020, he was appointed Head of Technical Asset Management, where he played a key role in overseeing maintenance planning, project coordination, and the operational integrity of the real estate portfolio.',
          Aram2: 'In 2025, Aram transitioned into the Rental Management department, bringing with him a strong technical background and a deep understanding of asset performance. His cross-functional expertise and hands-on leadership style make him an invaluable contributor to the team.',
          Aram3: 'Aram is known for his strong work ethic, attention to detail, and results-driven mindset. He is highly regarded for his commitment to quality and reliability in every aspect of his work.',
          Ali: 'Ali Bakteari joined Tatar Holding in 2020 as part of the Project Management team, where he contributed to various development and reconstruction projects within the company’s real estate portfolio. His strong technical insight and ability to manage complex on-site processes quickly distinguished him as a reliable and results-driven team member.',
          Ali2: 'In 2025, Ali advanced to a senior role in the Technical Asset Management department, where he now oversees the coordination of daily repairs, maintenance planning, and building operations across Tatar Holding’s real estate assets. His role is central to ensuring the functionality, efficiency, and long-term performance of the portfolio.',
          Ali3: 'As a key lead within the technical team, Ali brings a hands-on approach, strong problem-solving skills, and a deep understanding of asset-level operations. He plays a vital role in supporting the company’s operational standards and long-term asset value.',
          André: 'André Führing has been with Tatar Holding since 2019 and leads the Service Charge Accounting department. He is responsible for managing all aspects of operating cost settlements (Nebenkostenabrechnung) across the company’s real estate portfolio, ensuring accuracy, transparency, and compliance in tenant billing processes.',
          André2: 'André oversees the annual preparation and review of service charge statements, coordinates with property and facility management teams, and ensures that all cost allocations are handled efficiently and in line with legal and contractual requirements.',
          André3: 'With a strong analytical skill set and deep knowledge of real estate cost structures, André plays a key role in supporting the financial and operational integrity of Tatar Holding’s property assets.',
          Erik: 'Erik Buchwald is part of the Accounting team at Tatar Holding, serving as the in-house Tax Advisor. He is responsible for managing tax-related matters across the organization, including compliance, reporting, and coordination with external tax authorities and advisors.',
          Erik2: 'With his deep expertise in German tax law and financial regulations, Erik supports the finance department in ensuring accuracy, transparency, and efficiency in all tax-related processes. His structured approach and strong analytical skills make him a trusted advisor within the team.',
          Erik3: 'Erik plays a key role in maintaining the company’s fiscal integrity and supports ongoing financial operations from a tax compliance perspective.',
          Michael: 'Michael Bensky is part of the Technical Asset Management team at Tatar Holding, working closely alongside Horst Stiensmeier on the planning and execution of maintenance strategies across the company’s real estate portfolio. His focus lies in the coordination of preventive maintenance schedules, contractor management, and the technical oversight of recurring building services.',
          Michael2: 'Michael supports the implementation of long-term maintenance planning, ensuring that building systems remain compliant, functional, and aligned with operational standards. His structured and detail-oriented approach contributes significantly to the technical stability and efficiency of the assets under management.',
          Michael3: 'With a strong understanding of building systems and lifecycle management, Michael plays an essential role in safeguarding the long-term performance and reliability of the portfolio.',
          Koray: 'Koray Arslan joined Tatar Holding in 2020 and is a key member of the rental team, supporting the ongoing management and optimization of the company’s leasing activities across its real estate portfolio. He works closely with both internal stakeholders and external partners to ensure smooth tenant relations, occupancy planning, and operational efficiency.',
          Koray2: 'Koray brings a hands-on approach, strong organizational skills, and a deep understanding of day-to-day rental operations. His attention to detail and proactive mindset make him a valuable asset within the broader property management function.',
          Koray3: 'Outside of work, Koray enjoys football and stays active in his free time. He is also passionate about teamwork and bringing a solution-oriented attitude to every challenge.',
          Nadeza: 'Nadezda Vahidov joined Tatar Holding in 2020 and has been an integral part of the Technical Asset Management team ever since. With a focus on the company’s real estate portfolio, she has consistently contributed to the coordination of maintenance activities, repairs, and operational planning across multiple assets.',
          Nadeza2: 'In 2024, Nadezda stepped into a leadership role within the technical team, taking on increased responsibility for daily operations and guiding junior colleagues. Her structured approach, reliability, and commitment to quality have made her a trusted point of contact within the department.',
          Nadeza3: 'Highly motivated and detail-oriented, Nadezda plays a key role in maintaining the performance and integrity of Tatar Holding’s real estate assets, while continuously seeking ways to improve internal processes and operational outcomes.',
          Annamarie: 'Annamarie Simon began her career at Tatar Holding in 2023 through a vocational training program (Ausbildung), gaining hands-on experience across various departments. In 2025, she joined the Technical Asset Management team full-time, where she supports the ongoing operations and maintenance of the company’s real estate portfolio.',
          Annamarie2: 'Annamarie assists the team with day-to-day coordination of repairs, service provider communication, and documentation processes. Her enthusiasm, attention to detail, and willingness to learn make her a valuable and dependable team member.',
          Annamarie3: 'Highly motivated and team-oriented, Annamarie continues to grow in her role while contributing to the smooth functioning of asset operations.',
          Greta: 'Greta Wotschal is part of the Rental Management team at Tatar Holding, where she supports the coordination of leasing activities and tenant services across the company’s real estate portfolio. Her role includes managing rental agreements, assisting with tenant communications, and ensuring the smooth handling of day-to-day administrative tasks.',
          Greta2: 'Greta brings a structured and service-oriented approach to her work, contributing to the efficiency and reliability of the department. Her attention to detail and proactive mindset make her a valuable member of the team.',
          Greta3: '',
          Ralf: 'Ralf Burshille leads the Human Resources department at Tatar Holding, overseeing all HR-related functions including recruitment, employee relations, organizational development, and compliance. With a focus on supporting both operational and strategic HR initiatives, Ralf plays a central role in shaping the company’s people strategy and workplace culture.',
          Ralf2: 'He works closely with leadership and departmental teams to ensure that HR policies and practices align with business objectives, while fostering a supportive and performance-driven environment. Ralf is known for his structured approach, discretion, and commitment to effective personnel management.',
          Ralf3: 'As a trusted partner across the organization, Ralf contributes to the long-term growth and stability of Tatar Holding through his leadership in all aspects of human resources.',
          Alex: 'Alex Usubyan began his journey at Tatar Holding in 2020 through a vocational training program (Ausbildung) and officially joined the company full-time in 2021. As a member of the Rental Management team, he supports day-to-day leasing operations, tenant coordination, and administrative processes with precision and dedication.',
          Alex2: 'In addition to his core responsibilities, Alex brings valuable support to the company’s internal IT matters, contributing to system efficiency and technical troubleshooting. His adaptability, proactive mindset, and willingness to take on cross-functional tasks make him a dependable member of the team.',
          Alex3: 'Known for his motivation and enthusiasm, Alex continues to grow professionally while playing an important role in the smooth functioning of daily operations.',
          Olga: 'Olga Trost has been with Tatar Holding since 2019 and currently leads the Receivables and Dunning team. As a key leader within the finance department, she is responsible for overseeing the company’s accounts receivable processes, including payment tracking, dunning procedures, and customer account reconciliation.',
          Olga2: 'Olga plays a central role in ensuring consistent cash flow, minimizing outstanding receivables, and maintaining strong financial discipline across the organization. Her structured approach, attention to detail, and deep knowledge of receivables management contribute significantly to the company’s financial operations.',
          Olga3: 'Known for her reliability and proactive mindset, Olga fosters a culture of accountability within the team while supporting continuous process improvement.',
          Daniel: 'Daniel Gemsen supports the Service Charge Accounting team at Tatar Holding, working closely with André Führing to manage operating cost settlements across the real estate portfolio. His responsibilities include assisting in the preparation and review of service charge statements, maintaining billing accuracy, and coordinating with internal departments to ensure smooth financial operations.',
          Daniel2: 'With a reliable and detail-oriented approach, Daniel plays a valuable role in supporting the transparency and efficiency of the company’s service charge processes.',
          Daniel3: '',
          Horst: 'Horst Stiensmeier is a senior member of the Technical Asset Management team at Tatar Holding, with a specialized focus on planned maintenance and building lifecycle strategy across the real estate portfolio. With extensive experience in technical operations, Horst is responsible for overseeing the development and execution of maintenance schedules, capex planning, and long-term asset preservation measures.',
          Horst2: 'His role includes coordinating with service providers, conducting technical assessments, and ensuring that all building systems operate efficiently and in compliance with regulatory standards. Horst plays a key role in aligning technical operations with the company’s broader asset strategy, supporting value retention and operational reliability across the portfolio.',
          Horst3: 'Known for his methodical approach and in-depth technical knowledge, Horst is a trusted leader within the department and a critical contributor to the performance and sustainability of Tatar Holding’s real estate assets.',
          Mia: 'Mia Matzke joined the Technical Asset Management team at Tatar Holding in 2024, supporting the ongoing operations and maintenance of the company’s real estate portfolio. Her responsibilities include assisting with repair coordination, documentation, and service provider communication across a diverse range of assets.',
          Mia2: 'With a background in facility and real estate management, Mia brings a structured and reliable approach to her work. Her focus on efficiency, clear communication, and day-to-day execution makes her a valuable part of the technical operations team.',
          Mia3: 'Mia plays an important role in maintaining the operational integrity of the portfolio and supporting the team in delivering high-quality asset performance.',
          Kerstin: 'Kerstin Sowada is part of the Technical Asset Management team at Tatar Holding, where she supports the management and coordination of day-to-day repair and maintenance activities across the real estate portfolio. Her role involves handling service requests, liaising with contractors, and assisting in the documentation and follow-up of technical issues.',
          Kerstin2: 'With a practical and solutions-oriented approach, Kerstin contributes to the smooth operation of the company’s assets and plays a valuable role in maintaining the quality and functionality of the portfolio.',
          Kerstin3: '',
          Lara: 'Lara Gronemeier joined Tatar Holding in 2022 as part of the Franchise department, where she contributed to the coordination and support of operational activities across multiple locations. In 2025, she transitioned into the Rental Management team, bringing with her valuable experience in process coordination and stakeholder communication.',
          Lara2: 'In her current role, Lara supports the management of leasing operations, tenant relations, and administrative workflows within the real estate portfolio. Her adaptability, organizational skills, and proactive mindset make her a reliable and effective member of the team.',
          Lara3: '',
          Waldemar: 'Waldemar Gergert has been serving as the Chief Financial Officer at Tatar Holding since 2017. With a strong background in finance and strategic planning, Waldemar brings extensive experience in financial management, corporate governance, and operational efficiency. Over the years, he has played a key role in driving the company’s financial stability and supporting its long-term growth.',
          Waldemar2: 'Prior to joining Tatar Holding, Waldemar held finance roles across a range of industries, where he developed a reputation for his analytical approach and results-driven leadership. He is committed to fostering transparency and sustainability in all aspects of the company’s financial operations.',
          Waldemar3: 'Waldemar holds a degree in finance and is passionate about building high-performing teams and promoting a culture of continuous improvement.',
          Onur: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          Onur2: '',
          Onur3: '',
          Sefkan: 'Sefkan Kaynak is the Chief Operating Officer of Tatar Holding, overseeing the company’s diverse operations with a strong focus on the real estate sector. Since joining the company in 2017 as a Portfolio Manager, Sefkan has steadily risen through the ranks, taking on increasing responsibility and demonstrating a deep understanding of operational strategy and asset management.',
          Sefkan2: 'In 2018, he was appointed COO, where he has since played a vital role in shaping and executing the company’s operational roadmap. From streamlining internal processes to supporting development initiatives, Sefkan’s hands-on approach and leadership have been instrumental in driving efficiency and growth across the organization.',
          Sefkan3: 'His broad involvement spans multiple facets of the business, particularly within the real estate division, where he ensures that day-to-day operations align with long-term strategic goals. Sefkan brings a dynamic and solution-oriented mindset to the leadership team, contributing to the continued success and adaptability of Tatar Holding.',
          Zoran: 'Zoran Filipovic has been leading Tatar Holding’s franchise operations since 2020, with a primary focus on the company’s expanding KFC business in Germany. As Director of Franchise, he oversees the strategic development and operational performance of over 25 KFC locations across the country.',
          Zoran2: 'With a strong background in quick-service restaurant management and multi-unit operations, Zoran brings deep industry knowledge and hands-on leadership to the role. He is responsible for driving growth, ensuring brand standards, and optimizing performance across all franchise locations.',
          Zoran3: 'Under his direction, Tatar Holding’s franchise division has continued to scale steadily, delivering consistent quality and customer experience in a competitive market.',
          Laura: 'Laura Wintermantel has been leading the Accounting department at Tatar Holding since 2020. With a strong background in finance and controlling, she brings precision, structure, and a deep understanding of regulatory compliance to the company’s financial operations.',
          Laura2: 'Her responsibilities include overseeing all accounting processes, financial reporting, and internal controls, ensuring transparency and accuracy across the board. Laura plays a key role in aligning the company’s financial practices with its strategic goals, supporting both day-to-day operations and long-term planning.',
          Laura3: 'Prior to joining Tatar Holding, Laura held various roles in accounting and financial management, gaining broad experience in both corporate and real estate finance environments.',
          Robert: 'Robert Titze has been with Tatar Holding since 2018, currently serving as Head of Asset Management. In this role, he oversees the strategic performance and development of the company’s real estate portfolio, ensuring long-term value creation and operational efficiency.',
          Robert2: 'With a solid background in real estate and investment management, Robert brings a methodical and insight-driven approach to asset oversight. His responsibilities span across asset strategy, financial performance, and identifying opportunities for growth within the portfolio.',
          Robert3: 'Since joining Tatar Holding, Robert has been instrumental in strengthening the company’s asset base, contributing to both stability and innovation in a dynamic market environment.',
          task1: '• Manage the end-to-end rental process for residential and commercial properties',
          task2: '• Organize and conduct property viewings',
          task3: '• Prepare rental agreements and handle negotiations with potential tenants',
          task4: '• Advertise listings on various platforms and create compelling property descriptions',
          task5: '• Maintain accurate tenant records and documentation',
          task6: '• Act as the liaison between tenants, service providers, and internal departments',
          task7: '• Monitor the rental market and provide input on pricing and occupancy strategies',
          profile1: '• Previous experience in property rental, real estate, or customer service',
          profile2: '• Strong communication and negotiation skills',
          profile3: '• Professional appearance and confident demeanor',
          profile4: '• Excellent organizational skills and attention to detail',
          profile5: '• Ability to work independently and handle multiple priorities',
          profile6: '• Proficiency in MS Office and familiarity with property management software',
          profile7: '• Fluent in English(German or other languages is a plus)',
          offer1: '• A dynamic work environment in a fast - growing real estate company',
          offer2: '• Flat hierarchies and short decision - making processes',
          offer3: '• Competitive salary and performance - based bonuses',
          offer4: '• Opportunities for professional growth and development',
          offer5: '• Modern office space and flexible working hours',
          offer6: '• A motivated, supportive, and international team',
          Office: 'Office',
          Revitalisation: 'Revitalisation',
          Administration: 'Administration',
          Retail: 'Retail',
          Residental: 'Residental'

        }
      },
      de: {
        translation: {
          who_we_are: "Wer wir sind",
          about_us: "Über uns",
          our_people: "Unser Team",
          career: "Karriere",
          what_we_do: "Was wir tun",
          real_estate: "Immobilien",
          infrastructure: "Infrastruktur",
          it_technology: "IT-Technologie",
          insurance: "Versicherung",
          contact: "Kontakt",
          modal_who_title: "Wer wir sind",
          modal_what_title: "Was wir tun",
          modal_contact_title: "Kontakt",
          capital_with_vision: "Kapital mit Vision",
          growth_for_generations: "Wachstum für Generationen",
          scroll_down: "RUNTER SCROLLEN",
          advantages: {
            real_estate: {
              header: "IMMOBILIEN",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset Management sind wir in jedes Detail involviert.",
            },
            energy: {
              header: "ENERGIE",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset.",
            },
            water: {
              header: "WASSER",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset.",
            },
            transport: {
              header: "TRANSPORT",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset.",
            },
            digital: {
              header: "DIGITAL",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset.",
            },
            ai: {
              header: "KI",
              description: "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset.",
            }
          },
          keypoints: {
            title: "Unsere Kernpunkte",
            sicherheit_title: "SICHERHEIT.",
            sicherheit_text: "Wir sind finanzstark und können deshalb Immobilienankäufe schnell und bankenunabhängig durchführen.",
            sicherheit_title2: 'Stabilität.',
            sicherheit_text2: 'Transaktionssicherheit ist unsere höchste Priorität.',
            sicherheit_title3: 'DYNAMIC',
            sicherheit_text3: 'Wir sind unkompliziert und erwerben Immobilien auch unbürokratisch.'
          },
          aboutUs: {
            hero_title: "Unsere Mission & Geschichte",
            keypoints_title: "Unsere Schwerpunkte",
            unternehmen_title: "Unternehmen",
            els: [
              {
                title: "Global",
                text: "Durch unsere aktive Präsenz in Amerika, Europa und Asien sind wir in der Lage, strategische Investitionsmöglichkeiten auf mehreren globalen Märkten zu erkennen und zu verfolgen.",
                country: ["Europa", "Europa", "Asien/Pazifik", "USA"]
              },
              {
                title: "Heute",
                text: "Wir konzentrieren uns auf konservative Anlagestrategien und expandieren vorsichtig in ausgewählte Märkte, einschließlich der jüngsten Immobilienkäufe in New York und weiterer Investitionen in Deutschland."
              },
              {
                title: "Zukunft",
                text: "Als privates und unabhängiges Unternehmen bewahren wir uns die Flexibilität, generationenübergreifend zu denken, entschlossen zu handeln und selektiv Partnerschaften einzugehen."
              }
            ],
            keypointsEl: [
              { title: "New York", text: "Mehr", img: "/img/build.webp" },
              { title: "New York", text: "Mehr", img: "/img/build.webp" }
            ],
            textEl: [
              {
                title: "Unser Profil",
                text: "Stärke in Geduld. Wert in Disziplin. Wohlstand in der Zeit."
              },
              {
                title: "Praktische operative Fachkompetenz",
                text: "Unser erfahrenes Team verfügt über fundierte Kenntnisse in Anlagestrategie, Vermögensverwaltung und operativer Effizienz, um konsistente und vorhersehbare Ergebnisse zu gewährleisten."
              },
              {
                title: "",
                text: "Über 1.000 Fachleute arbeiten in unserem Portfolio von Franchise- und Investitionsprojekten. Unterstützt von engagierten Asset-Management-Teams mit Sitz in Paderborn, Düsseldorf, München, New York und Hongkong verwalten wir unsere Anlagen aktiv und nutzen dabei fundierte lokale Kenntnisse und globale Einblicke."
              }
            ],
            infoEl: [
              {
                title: "Unsere Geschichte",
                text: "Unsere Reise begann 2013 mit unserem Gründer Onur Tatar, dessen Unternehmergeist und frühe Erfahrung im Betrieb erfolgreicher KFC-Franchises eine solide Grundlage für strategisches Wachstum bildeten..."
              },
              {
                title: "Unsere Story",
                text: "Während Immobilien nach wie vor im Mittelpunkt unserer Aktivitäten stehen, haben wir unsere Investitionen auf sorgfältig ausgewählte Sektoren ausgeweitet, die mit unserer langfristigen Vision im Einklang stehen."
              },
              {
                title: "In Deutschland gegründet, weltweit investiert",
                text: "In Deutschland verwurzelt, jetzt weltweit strategisch aktiv."
              },
              {
                title: "Global",
                text: "Durch unsere aktive Präsenz in Amerika, Europa und Asien sind wir in der Lage, strategische Investitionsmöglichkeiten auf mehreren globalen Märkten zu erkennen und zu verfolgen."
              },
              {
                title: "Heute",
                text: "Wir konzentrieren uns auf konservative Anlagestrategien und expandieren vorsichtig in ausgewählte Märkte, einschließlich der jüngsten Immobilienkäufe in New York und weiterer Investitionen in Deutschland. Als privates und unabhängiges Unternehmen bewahren wir uns die Flexibilität, generationenübergreifend zu denken, entschlossen zu handeln und selektiv Partnerschaften einzugehen."
              }
            ]
          },
          our_people: "Unsere Leute",
          our_people_text: "Unser Unternehmen wird durch die Menschen definiert, die es antreiben.\nWie sie denken, welche Entscheidungen sie treffen.",
          board_members: "Vorstandsmitglieder",
          executive_officers: "Geschäftsführer",
          senior_leadership: "Führungsebene",
          career: "Karriere",
          career_expands_mind: "Eine großartige Karriere erweitert Ihren Geist, fordert Ihr Denken heraus und prägt Ihre Weltanschauung.",
          work_alongside_brilliant_minds: "Arbeiten Sie mit brillanten Köpfen zusammen. Lösen Sie bedeutungsvolle Probleme",
          company_strength_part1: "Ein Unternehmen ist nur so stark wie die Menschen, die es antreiben – ihre Ideen, Prinzipien und Ambitionen.",
          company_strength_part2: "Wir glauben daran, die klügsten Köpfe zusammenzubringen und eine Umgebung zu schaffen, in der sie herausgefordert, inspiriert und gestärkt werden.",
          purpose_driven_work: "Wenn Sie einen Ort suchen, an dem Ihre Arbeit einen Zweck hat, Ihre Ideen Wirkung erzielen und Ihre Karriere keine Grenzen kennt, würden wir Sie gerne kennenlernen.",
          view_open_positions: "Offene Stellen ansehen",
          unternehmen: "Unternehmen",
          rental_manager_title: "Vermietungsleiter",
          rental_manager_short: "Wir suchen einen Vermietungsleiter in Vollzeit",
          rental_manager_description: "Wir sind ein wachsendes Immobilienunternehmen, das sich auf hochwertige Wohn- und Gewerbeimmobilien spezialisiert hat. Zur Verstärkung unseres Teams suchen wir einen engagierten und organisierten Vermietungsleiter (m/w/d). In dieser Rolle sind Sie für den gesamten Vermietungsprozess verantwortlich – vom Marketing und Besichtigungen bis hin zur Mieterbetreuung – und fungieren als Hauptansprechpartner für potenzielle und aktuelle Mieter.",
          apply: "Bewerben",
          task: "Aufgabe",
          profile: "Profil",
          we_offer: "Wir bieten",
          real_estate: "Immobilien",
          real_estate_heading: "Märkte mit langfristiger Perspektive navigieren",
          real_estate_description: "Wir bauen unser Immobilienportfolio seit 2013 stetig, bewusst und immer mit einer praktischen Herangehensweise auf. Heute besitzen und betreiben wir über 300.000 Quadratmeter (~3,2 Millionen Quadratfuß) Immobilien in Deutschland und den Vereinigten Staaten, mit einem Portfolio im Wert von über 1 Milliarde Euro.",
          info_1: "Unsere Wurzeln liegen in Deutschland, wo wir mit dem Erwerb und der Verwaltung von Gewerbe- und Mischimmobilien in urbanen Zentren begannen. Seitdem haben wir uns international ausgeweitet und bringen die gleiche Denkweise in unser wachsendes Portfolio in den USA ein. Wir investieren nicht nur – wir betreiben alles selbst. Von Akquisition und Finanzierung bis hin zu Vermietung und Asset Management sind wir in jedes Detail involviert.",
          info_2: "Was uns unterscheidet, ist nicht nur die Größe, sondern auch unsere Arbeitsweise. Wir setzen auf langfristigen Wert, nicht auf schnelle Gewinne. Wir managen Risiken konservativ, agieren aber schnell, wenn sich die richtige Gelegenheit bietet. Wir glauben an die Kraft guter Gebäude, großartiger Lagen und solider Beziehungen – und haben ein Portfolio aufgebaut, das dies widerspiegelt.",
          info_3: "Unser Team vereint die Schnelligkeit und Flexibilität eines privaten Eigentümers mit der Disziplin und Strenge eines institutionellen Investors. Das Ergebnis ist eine belastbare Plattform, die durchdacht wachsen und über die Zeit hinweg performen soll.",
          guiding_principles: "Leitprinzipien im Immobilienbereich",
          residential_investments_title: "Wohnimmobilien-Investitionen",
          residential_investments_text: "Strategisch fokussiert auf Mehrfamilienhäuser und ausgewählte Wohnprojekte in stabilen Märkten priorisieren wir Investitionen in Regionen mit soliden wirtschaftlichen Fundamentaldaten und nachhaltiger Nachfrage. Unser Ansatz betont langfristigen Kapitalschutz bei gleichzeitiger Generierung stetiger Renditen, um eine Balance zwischen Stabilität und Wachstum zu gewährleisten.",
          commercial_investments_title: "Gewerbliche Investitionen",
          commercial_investments_text: "Obwohl unser Hauptfokus auf Wohnimmobilien liegt, investieren wir selektiv in Gewerbeflächen wie Büros, Hotels und Einzelhandelsflächen mit soliden Fundamentaldaten. Priorität haben Assets mit etablierten Mietern und vorhersehbaren Einnahmenströmen, wobei spekulative Projekte vermieden werden, um eine verlässliche, konsistente Performance sicherzustellen.",
          income_generation_title: "Einkommensgenerierung",
          income_generation_text: "Unsere Investitionsstrategie basiert auf der Erzielung stabiler, wiederkehrender Einnahmen durch gut verwaltete, langfristige Beteiligungen. Wir priorisieren Immobilien, die sichere Cashflows bieten, und zielen auf Investitionen mit hohen Belegungsquoten und verlässlichen Mietverträgen ab, um nachhaltige Performance über Marktzyklen hinweg sicherzustellen.",
          capital_preservation_title: "Kapitalerhalt",
          capital_preservation_text: "Kapitalerhalt steht im Mittelpunkt unserer Investmentphilosophie. Wir konzentrieren uns auf den Erwerb von Vermögenswerten mit intrinsischem Wert, die Marktschwankungen standhalten und das Kapital der Investoren schützen können. Durch die Fokussierung auf widerstandsfähige Märkte und Immobilien mit soliden Fundamentaldaten gewährleisten wir Stabilität und langfristige Performance.",
          gallery_title: "Privat gehalten, global investiert.",
          gallery_subtitle: "Eine strategische Präsenz in Amerika, Europa und Asien.",
          view_portfolio: "Gesamtes Portfolio ansehen",
          deal_execution_title: "Nahtlose Transaktionsabwicklung",
          deal_execution_left: "Wir sorgen für schnelle und zuverlässige Transaktionen durch schlanke Entscheidungsprozesse und direkte Kommunikation. Privat finanziert für zügige Ausführung, handeln wir unabhängig und frei von externen Finanzierungseinschränkungen. Diese Autonomie ermöglicht es uns, sofortige finanzielle Zusagen zu geben und maximale Flexibilität bei jeder Transaktion zu gewährleisten – für Klarheit und Sicherheit aller Beteiligten.",
          deal_execution_right: "Möchten Sie eine Gelegenheit präsentieren? Sehen Sie sich unser Akquisitionsprofil an, um unsere Investitionskriterien zu verstehen und relevante Immobilien einzureichen. Wir bewerten aktiv hochwertige Assets, die mit unserem strategischen Fokus übereinstimmen.",
          acquisition_profile: "Akquisitionsprofil",
          acquisition_modal_title: "Akquisitionsprofil",
          acquisition_modal_text: "Für detaillierte Akquisitionskriterien siehe unten oder laden Sie unseren PDF-Leitfaden herunter",
          portfolios: "Portfolios",
          office: "Büro",
          residential: "Wohnen",
          hotel: "Hotel/Hostel",
          investment_volume: "Investitionsvolumen",
          investment_volume_value: "Bis zu 50 Millionen €",
          location_quality: "Lagequalität",
          location_quality_values: "A, B",
          location_types: "Etablierte Bürostandorte, Mischgenutzte Bereiche",
          property_condition: "Zustand der Immobilie",
          property_condition_values: "Keine vollständige Sanierung erforderlich, Sanierung nur bei Umnutzung vorgesehen",
          tenants: "Mieter",
          tenants_values: "Beinhaltet teilweise leerstehende Immobilien, langfristige Mietverträge bevorzugt",
          other: "Sonstiges",
          other_values: "Immobilien mit Entwicklungspotenzial",

          contact: "Kontakt",
          chat_to_sales: "Mit dem Vertrieb chatten",
          contact_us: "Kontaktieren Sie uns",
          location: "Standort",
          location_text: "New York, USA",
          send_message: "Nachricht senden",
          you_first_name: "Ihr Vorname",
          you_last_name: "Ihr Nachname",
          enter_email: "Geben Sie Ihre E-Mail ein",
          subject: "Betreff",
          portfolio: "Portfolio",
          all: "Alle",
          office: "Büro",
          residential: "Wohnimmobilien",
          retail: "Einzelhandel",
          services: "Dienstleistungen",
          infrastructure: "Infrastruktur",
          insurance: "Versicherung",
          it_technology: "IT-Technologie",
          real_estate: "Immobilien",
          residential_properties: "Wohnimmobilien",
          commercial_properties: "Gewerbeimmobilien",
          company: "Unternehmen",
          profile: "Profil",
          people: "Mitarbeiter",
          career: "Karriere",
          assets: "Vermögenswerte",
          office: "Büro",
          retail: "Einzelhandel",
          residential: "Wohnen",
          hotel_hostel: "Hotel/Hostel",
          holding: "Holding",
          impressum: "Impressum",
          privacy_policy: "Datenschutzrichtlinie",
          terms_conditions: "Nutzungsbedingungen",
          cookies: "Cookies",
          grow: "Wachsen",
          for_generations: "für Generationen",
          "slide": {
            "energie": {
              "header": "ENERGIE"
            },
            "transport": {
              "header": "TRANSPORT"
            },
            "franchise": {
              "header": "FRANCHISE"
            },
            "digital": {
              "header": "DIGITAL"
            },
            "common": {
              "desc": "Von der Akquisition und Finanzierung bis hin zur Vermietung und dem Asset Management"
            }
          },
          newsletter: 'Zum E-Mail-Newsletter anmelden',
          submit_now: "Jetzt absenden",
          enter: 'Eintreten',
          Aram: 'Aram Aras ist seit 2018 Teil von Tatar Holding und begann seine Laufbahn in der technischen Abteilung, bevor er in höhere Positionen aufstieg. Im Jahr 2020 wurde er zum Leiter des Technischen Asset Managements ernannt, wo er eine Schlüsselrolle bei der Wartungsplanung, Projektkoordination und der operativen Integrität des Immobilienportfolios spielte.',
          Aram2: 'Im Jahr 2025 wechselte Aram in die Abteilung für Mietmanagement und brachte dabei seine fundierten technischen Kenntnisse und sein tiefes Verständnis für die Leistungsfähigkeit von Vermögenswerten mit. Seine bereichsübergreifende Expertise und sein praxisnaher Führungsstil machen ihn zu einem wertvollen Mitglied des Teams.',
          Aram3: 'Aram ist bekannt für seine starke Arbeitsmoral, seine Liebe zum Detail und seine ergebnisorientierte Denkweise. Er genießt hohes Ansehen für sein Engagement für Qualität und Zuverlässigkeit in allen Aspekten seiner Arbeit.',
          Ali: 'Ali Bakteari kam 2020 als Mitglied des Projektmanagement-Teams zu Tatar Holding und war an verschiedenen Entwicklungs- und Sanierungsprojekten innerhalb des Immobilienportfolios des Unternehmens beteiligt. Sein ausgeprägtes technisches Verständnis und seine Fähigkeit, komplexe Abläufe auf der Baustelle zu steuern, machten ihn schnell zu einem zuverlässigen und ergebnisorientierten Teammitglied.',
          Ali2: 'Im Jahr 2025 übernahm Ali eine leitende Position in der Abteilung Technisches Asset Management. Dort ist er für die Koordination von täglichen Reparaturen, die Wartungsplanung und den Gebäudebetrieb über die Immobilienwerte von Tatar Holding hinweg verantwortlich. Seine Rolle ist entscheidend für die Funktionalität, Effizienz und langfristige Leistungsfähigkeit des Portfolios.',
          Ali3: 'Als zentrale Führungskraft im technischen Team bringt Ali eine praxisorientierte Herangehensweise, starke Problemlösungskompetenz und ein tiefes Verständnis für operative Abläufe auf Objektebene mit. Er spielt eine wichtige Rolle bei der Sicherstellung der betrieblichen Standards und der nachhaltigen Wertentwicklung der Immobilien.',
          André: 'André Führing ist seit 2019 bei Tatar Holding und leitet die Abteilung für Nebenkostenabrechnung. Er ist verantwortlich für das Management aller Aspekte der Betriebskostenabrechnungen im Immobilienportfolio des Unternehmens und sorgt dabei für Genauigkeit, Transparenz und rechtliche Konformität im Abrechnungsprozess gegenüber den Mietern.',
          André2: 'André betreut die jährliche Erstellung und Prüfung der Nebenkostenabrechnungen, koordiniert sich mit dem Property- und Facility-Management und stellt sicher, dass alle Kostenverteilungen effizient sowie gesetzes- und vertragskonform erfolgen.',
          André3: 'Mit ausgeprägten analytischen Fähigkeiten und fundiertem Wissen über Immobilienkostenstrukturen spielt André eine zentrale Rolle bei der Sicherung der finanziellen und betrieblichen Integrität der Immobilienwerte von Tatar Holding.',
          Erik: 'Erik Buchwald ist Teil des Buchhaltungsteams bei Tatar Holding und fungiert als interner Steuerberater. Er ist verantwortlich für die Betreuung sämtlicher steuerlicher Angelegenheiten im Unternehmen – einschließlich Compliance, Reporting sowie die Koordination mit externen Steuerbehörden und -beratern.',
          Erik2: 'Mit seiner fundierten Expertise im deutschen Steuerrecht und in Finanzvorschriften unterstützt Erik die Finanzabteilung dabei, Genauigkeit, Transparenz und Effizienz in allen steuerbezogenen Prozessen sicherzustellen. Sein strukturiertes Vorgehen und seine ausgeprägten analytischen Fähigkeiten machen ihn zu einem geschätzten Ansprechpartner im Team.',
          Erik3: 'Erik spielt eine zentrale Rolle bei der Wahrung der steuerlichen Integrität des Unternehmens und unterstützt die laufenden Finanzprozesse aus Sicht der Steuer-Compliance.',
          Michael: 'Michael Bensky ist Teil des Teams für Technisches Asset Management bei Tatar Holding und arbeitet eng mit Horst Stiensmeier an der Planung und Umsetzung von Instandhaltungsstrategien im gesamten Immobilienportfolio des Unternehmens zusammen. Sein Schwerpunkt liegt auf der Koordination von vorbeugenden Wartungsplänen, dem Management von Dienstleistern sowie der technischen Überwachung wiederkehrender Gebäudeservices.',
          Michael2: 'Michael unterstützt die Umsetzung einer langfristigen Instandhaltungsplanung und stellt sicher, dass Gebäudesysteme gesetzeskonform, funktionsfähig und im Einklang mit den betrieblichen Standards bleiben. Sein strukturiertes und detailorientiertes Vorgehen trägt maßgeblich zur technischen Stabilität und Effizienz der betreuten Objekte bei.',
          Michael3: 'Mit seinem fundierten Verständnis von Gebäudetechnik und Lebenszyklusmanagement spielt Michael eine entscheidende Rolle bei der Sicherstellung der langfristigen Leistungsfähigkeit und Zuverlässigkeit des Portfolios.',
          Koray: 'Koray Arslan ist seit 2020 bei Tatar Holding und ein wichtiges Mitglied des Vermietungsteams. Er unterstützt das laufende Management und die Optimierung der Leasingaktivitäten im gesamten Immobilienportfolio des Unternehmens. Dabei arbeitet er eng mit internen Ansprechpartnern und externen Partnern zusammen, um reibungslose Mieterbeziehungen, eine effiziente Belegungsplanung und einen reibungslosen Betriebsablauf sicherzustellen.',
          Koray2: 'Koray bringt eine praxisnahe Arbeitsweise, ausgeprägte organisatorische Fähigkeiten und ein tiefes Verständnis für die täglichen Abläufe im Mietgeschäft mit. Seine Liebe zum Detail und seine proaktive Denkweise machen ihn zu einer wertvollen Stütze im Bereich des Immobilienmanagements.',
          Koray3: 'In seiner Freizeit spielt Koray gerne Fußball und bleibt körperlich aktiv. Er legt großen Wert auf Teamarbeit und bringt bei jeder Herausforderung eine lösungsorientierte Haltung mit.',
          Nadeza: 'Nadezda Vahidov ist seit 2020 Teil von Tatar Holding und seither ein fester Bestandteil des Teams für Technisches Asset Management. Mit Fokus auf das Immobilienportfolio des Unternehmens trägt sie kontinuierlich zur Koordination von Instandhaltungsmaßnahmen, Reparaturen und zur operativen Planung über mehrere Objekte hinweg bei.',
          Nadeza2: 'Im Jahr 2024 übernahm Nadezda eine Führungsrolle innerhalb des technischen Teams und trägt seither mehr Verantwortung für den täglichen Betrieb sowie für die Anleitung jüngerer Kolleginnen und Kollegen. Ihr strukturiertes Vorgehen, ihre Zuverlässigkeit und ihr Qualitätsbewusstsein machen sie zu einer geschätzten Ansprechpartnerin innerhalb der Abteilung.',
          Nadeza3: 'Hoch motiviert und detailorientiert spielt Nadezda eine zentrale Rolle bei der Sicherstellung der Leistungsfähigkeit und Integrität der Immobilienwerte von Tatar Holding und sucht dabei stets nach Möglichkeiten zur Optimierung interner Prozesse und operativer Ergebnisse.',
          Annamarie: 'Annamarie Simon begann ihre Laufbahn bei Tatar Holding im Jahr 2023 im Rahmen eines Ausbildungsprogramms und sammelte dabei praktische Erfahrungen in verschiedenen Abteilungen. Im Jahr 2025 trat sie dem Team des Technischen Asset Managements in Vollzeit bei und unterstützt seither den laufenden Betrieb und die Instandhaltung des Immobilienportfolios des Unternehmens.',
          Annamarie2: 'Annamarie unterstützt das Team bei der täglichen Koordination von Reparaturen, der Kommunikation mit Dienstleistern sowie bei Dokumentationsprozessen. Ihre Begeisterung, ihr Auge fürs Detail und ihre Lernbereitschaft machen sie zu einem wertvollen und verlässlichen Teammitglied.',
          Annamarie3: 'Hoch motiviert und teamorientiert entwickelt sich Annamarie stetig in ihrer Rolle weiter und trägt aktiv zum reibungslosen Ablauf der Objektbewirtschaftung bei.',
          Greta: 'Greta Wotschal ist Teil des Vermietungsteams bei Tatar Holding und unterstützt die Koordination von Leasingaktivitäten sowie den Mieter-Service im gesamten Immobilienportfolio des Unternehmens. Zu ihren Aufgaben gehören die Verwaltung von Mietverträgen, die Unterstützung bei der Mieterkommunikation und die Sicherstellung eines reibungslosen Ablaufs der täglichen administrativen Aufgaben.',
          Greta2: 'Greta bringt eine strukturierte und serviceorientierte Arbeitsweise in ihre Tätigkeit ein und trägt so zur Effizienz und Zuverlässigkeit der Abteilung bei. Ihre Liebe zum Detail und ihre proaktive Denkweise machen sie zu einem wertvollen Mitglied des Teams.',
          Greta3: '',
          Ralf: 'Ralf Burshille leitet die Personalabteilung bei Tatar Holding und ist verantwortlich für alle HR-bezogenen Funktionen, einschließlich Recruiting, Mitarbeiterbeziehungen, Organisationsentwicklung und Compliance. Mit dem Fokus auf die Unterstützung operativer und strategischer HR-Initiativen spielt Ralf eine zentrale Rolle bei der Gestaltung der Personalstrategie und der Unternehmenskultur.',
          Ralf2: 'Er arbeitet eng mit der Führungsebene und den Abteilungen zusammen, um sicherzustellen, dass HR-Richtlinien und -Praktiken mit den Geschäftszielen übereinstimmen und gleichzeitig ein unterstützendes sowie leistungsorientiertes Arbeitsumfeld gefördert wird. Ralf ist bekannt für seine strukturierte Vorgehensweise, Diskretion und sein Engagement für effektives Personalmanagement.',
          Ralf3: 'Als vertrauenswürdiger Partner innerhalb der Organisation trägt Ralf durch seine Führung in allen Bereichen des Personalwesens zur langfristigen Entwicklung und Stabilität von Tatar Holding bei.',
          Alex: 'Alex Usubyan begann seine Laufbahn bei Tatar Holding im Jahr 2020 im Rahmen eines Ausbildungsprogramms und trat 2021 offiziell in Vollzeit in das Unternehmen ein. Als Mitglied des Vermietungsteams unterstützt er die täglichen Leasingprozesse, die Koordination mit Mietern sowie administrative Abläufe mit Präzision und Engagement.',
          Alex2: 'Neben seinen Kernaufgaben leistet Alex wertvolle Unterstützung bei internen IT-Angelegenheiten des Unternehmens und trägt zur Systemeffizienz sowie zur technischen Problemlösung bei. Seine Anpassungsfähigkeit, sein proaktives Denken und seine Bereitschaft, bereichsübergreifende Aufgaben zu übernehmen, machen ihn zu einem verlässlichen Teammitglied.',
          Alex3: 'Alex ist bekannt für seine Motivation und Begeisterung, entwickelt sich beruflich stetig weiter und spielt eine wichtige Rolle für den reibungslosen Ablauf des Tagesgeschäfts.',
          Olga: 'Olga Trost ist seit 2019 bei Tatar Holding und leitet derzeit das Team für Forderungsmanagement und Mahnwesen. Als zentrale Führungskraft in der Finanzabteilung ist sie verantwortlich für die Überwachung der Debitorenprozesse des Unternehmens, einschließlich Zahlungsüberwachung, Mahnverfahren und Abstimmung von Kundenkonten.',
          Olga2: 'Olga spielt eine entscheidende Rolle bei der Sicherstellung eines kontinuierlichen Cashflows, der Minimierung offener Forderungen und der Aufrechterhaltung einer starken finanziellen Disziplin im gesamten Unternehmen. Ihre strukturierte Arbeitsweise, ihr ausgeprägtes Auge fürs Detail und ihr fundiertes Wissen im Forderungsmanagement tragen wesentlich zu den Finanzprozessen von Tatar Holding bei.',
          Olga3: 'Olga ist bekannt für ihre Zuverlässigkeit und ihre proaktive Denkweise. Sie fördert eine Kultur der Verantwortlichkeit im Team und unterstützt kontinuierlich die Optimierung von Prozessen.',
          Daniel: 'Daniel Gemsen unterstützt das Team der Betriebskostenabrechnung bei Tatar Holding und arbeitet eng mit André Führing zusammen, um die Abrechnung der Betriebskosten im gesamten Immobilienportfolio zu betreuen. Zu seinen Aufgaben gehören die Unterstützung bei der Erstellung und Prüfung von Betriebskostenabrechnungen, die Sicherstellung der Abrechnungsgenauigkeit sowie die Koordination mit internen Abteilungen, um einen reibungslosen Finanzablauf zu gewährleisten.',
          Daniel2: 'Mit seiner zuverlässigen und detailorientierten Arbeitsweise leistet Daniel einen wertvollen Beitrag zur Transparenz und Effizienz der Betriebskostenprozesse des Unternehmens.',
          Daniel3: '',
          Horst: 'Horst Stiensmeier ist ein erfahrener Mitarbeiter im Team des Technischen Asset Managements bei Tatar Holding mit einem besonderen Fokus auf geplante Instandhaltung und Strategien zum Lebenszyklus von Gebäuden im gesamten Immobilienportfolio. Mit seiner umfangreichen Erfahrung im technischen Betrieb ist Horst verantwortlich für die Entwicklung und Umsetzung von Wartungsplänen, Capex-Planung und langfristigen Maßnahmen zur Werterhaltung der Objekte.',
          Horst2: 'Zu seinen Aufgaben gehören die Koordination mit Dienstleistern, die Durchführung technischer Bewertungen sowie die Sicherstellung eines effizienten und gesetzeskonformen Betriebs aller Gebäudesysteme. Horst spielt eine zentrale Rolle dabei, die technischen Abläufe mit der übergeordneten Asset-Strategie des Unternehmens in Einklang zu bringen und so Werterhalt und Betriebssicherheit im Portfolio zu gewährleisten.',
          Horst3: 'Horst ist bekannt für seine methodische Herangehensweise und sein fundiertes technisches Fachwissen. Er gilt als vertrauenswürdige Führungskraft innerhalb der Abteilung und leistet einen wesentlichen Beitrag zur Leistungsfähigkeit und Nachhaltigkeit der Immobilienwerte von Tatar Holding.',
          Mia: 'Mia Matzke ist seit 2024 Teil des Teams für Technisches Asset Management bei Tatar Holding und unterstützt den laufenden Betrieb sowie die Instandhaltung des Immobilienportfolios des Unternehmens. Zu ihren Aufgaben gehören die Unterstützung bei der Koordination von Reparaturen, die Dokumentation sowie die Kommunikation mit Dienstleistern über eine Vielzahl von Objekten hinweg.',
          Mia2: 'Mit ihrem Hintergrund im Facility- und Immobilienmanagement bringt Mia eine strukturierte und verlässliche Arbeitsweise mit. Ihr Fokus auf Effizienz, klare Kommunikation und die Umsetzung täglicher Aufgaben macht sie zu einem wertvollen Mitglied des technischen Betriebsteams.',
          Mia3: 'Mia spielt eine wichtige Rolle bei der Aufrechterhaltung der Betriebssicherheit im Portfolio und unterstützt das Team bei der Sicherstellung einer hochwertigen Objektperformance.',
          Kerstin: 'Kerstin Sowada ist Teil des Teams für Technisches Asset Management bei Tatar Holding und unterstützt die Verwaltung und Koordination der täglichen Reparatur- und Instandhaltungsmaßnahmen im gesamten Immobilienportfolio. Ihre Aufgaben umfassen die Bearbeitung von Serviceanfragen, die Abstimmung mit Dienstleistern sowie die Unterstützung bei der Dokumentation und Nachverfolgung technischer Anliegen.',
          Kerstin2: 'Mit ihrer praxisorientierten und lösungsfokussierten Arbeitsweise trägt Kerstin zum reibungslosen Betrieb der Unternehmensimmobilien bei und spielt eine wichtige Rolle bei der Sicherstellung von Qualität und Funktionalität des Portfolios.',
          Kerstin3: '',
          Lara: 'Lara Gronemeier kam 2022 zu Tatar Holding und war zunächst Teil der Franchise-Abteilung, wo sie die Koordination und Unterstützung operativer Abläufe an mehreren Standorten mitgestaltete. Im Jahr 2025 wechselte sie ins Team des Mietmanagements und brachte wertvolle Erfahrungen in der Prozesskoordination und Kommunikation mit internen und externen Partnern mit.',
          Lara2: 'In ihrer aktuellen Rolle unterstützt Lara die Verwaltung von Mietabläufen, Mieterbeziehungen und administrativen Prozessen innerhalb des Immobilienportfolios. Ihre Anpassungsfähigkeit, Organisationsstärke und proaktive Denkweise machen sie zu einem verlässlichen und wirkungsvollen Mitglied des Teams.',
          Lara3: '',
          Waldemar: 'Waldemar Gergert ist seit 2017 Chief Financial Officer (CFO) bei Tatar Holding. Mit einem fundierten Hintergrund in den Bereichen Finanzen und strategische Planung bringt Waldemar umfassende Erfahrung in Finanzmanagement, Corporate Governance und operativer Effizienz mit. Im Laufe der Jahre spielte er eine entscheidende Rolle bei der Sicherung der finanziellen Stabilität des Unternehmens und der Unterstützung seines langfristigen Wachstums.',
          Waldemar2: 'Vor seiner Zeit bei Tatar Holding war Waldemar in verschiedenen Finanzfunktionen in unterschiedlichen Branchen tätig und erarbeitete sich einen Ruf für seinen analytischen Ansatz und seine ergebnisorientierte Führung. Er setzt sich für Transparenz und Nachhaltigkeit in allen Bereichen der finanziellen Unternehmensführung ein.',
          Waldemar3: 'Waldemar hat ein Studium im Bereich Finanzen abgeschlossen und engagiert sich leidenschaftlich für den Aufbau leistungsstarker Teams sowie für die Förderung einer Kultur der kontinuierlichen Verbesserung.',
          Onur: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          Onur2: '',
          Onur3: '',
          Sefkan: 'Sefkan Kaynak ist Chief Operating Officer (COO) von Tatar Holding und verantwortet die vielfältigen Geschäftsabläufe des Unternehmens mit einem besonderen Fokus auf den Immobilienbereich. Seit seinem Einstieg als Portfoliomanager im Jahr 2017 hat sich Sefkan kontinuierlich weiterentwickelt, zunehmend Verantwortung übernommen und ein tiefes Verständnis für operative Strategien und Asset Management bewiesen.',
          Sefkan2: 'Im Jahr 2018 wurde er zum COO ernannt. Seitdem spielt er eine zentrale Rolle bei der Gestaltung und Umsetzung der operativen Ausrichtung des Unternehmens. Von der Optimierung interner Prozesse bis hin zur Unterstützung von Entwicklungsinitiativen – Sefkans praxisorientierter Führungsstil war maßgeblich für die Effizienz und das Wachstum der Organisation.',
          Sefkan3: 'Sein breites Engagement umfasst zahlreiche Unternehmensbereiche, insbesondere im Immobiliensektor, wo er sicherstellt, dass die täglichen Abläufe mit den langfristigen strategischen Zielen im Einklang stehen. Sefkan bringt eine dynamische und lösungsorientierte Denkweise ins Führungsteam ein und trägt damit wesentlich zum anhaltenden Erfolg und zur Anpassungsfähigkeit von Tatar Holding bei.',
          Zoran: 'Zoran Filipovic leitet seit 2020 das Franchising-Geschäft von Tatar Holding mit einem besonderen Fokus auf das wachsende KFC-Geschäft des Unternehmens in Deutschland. Als Director of Franchise verantwortet er die strategische Entwicklung und operative Leistung von über 25 KFC-Standorten im ganzen Land.',
          Zoran2: 'Mit einem starken Hintergrund im Bereich Schnellrestaurant-Management und der Steuerung mehrerer Standorte bringt Zoran tiefgehendes Branchenwissen und einen praxisnahen Führungsstil in seine Rolle ein. Er ist verantwortlich für das Wachstum, die Einhaltung der Markenstandards und die Leistungsoptimierung aller Franchise-Standorte.',
          Zoran3: 'Unter seiner Leitung wächst die Franchise-Sparte von Tatar Holding kontinuierlich weiter und liefert gleichbleibende Qualität und Kundenerlebnisse in einem wettbewerbsintensiven Markt.',
          Laura: 'Laura Wintermantel leitet seit 2020 die Buchhaltungsabteilung bei Tatar Holding. Mit einem fundierten Hintergrund in Finanzen und Controlling bringt sie Präzision, Struktur und ein tiefes Verständnis für regulatorische Vorgaben in die Finanzprozesse des Unternehmens ein.',
          Laura2: 'Zu ihren Aufgaben gehört die Überwachung aller Buchhaltungsprozesse, des Finanzreportings und der internen Kontrollen, um Transparenz und Genauigkeit sicherzustellen. Laura spielt eine Schlüsselrolle bei der Ausrichtung der finanziellen Praktiken des Unternehmens an den strategischen Zielen und unterstützt sowohl das Tagesgeschäft als auch die langfristige Planung.',
          Laura3: 'Vor ihrem Eintritt bei Tatar Holding hatte Laura verschiedene Positionen im Bereich Buchhaltung und Finanzmanagement inne und sammelte umfassende Erfahrungen in den Bereichen Unternehmens- und Immobilienfinanzierung.',
          Robert: 'Robert Titze ist seit 2018 bei Tatar Holding und derzeit als Leiter des Asset Managements tätig. In dieser Funktion überwacht er die strategische Leistung und Entwicklung des Immobilienportfolios des Unternehmens und sorgt für langfristige Wertschöpfung sowie operative Effizienz.',
          Robert2: 'Mit einem fundierten Hintergrund im Immobilien- und Investmentmanagement bringt Robert einen methodischen und erkenntnisorientierten Ansatz in die Vermögensverwaltung ein. Seine Aufgaben umfassen die Asset-Strategie, finanzielle Leistungsüberwachung und das Erkennen von Wachstumschancen innerhalb des Portfolios.',
          Robert3: 'Seit seinem Eintritt bei Tatar Holding ist Robert maßgeblich an der Stärkung der Vermögensbasis des Unternehmens beteiligt und trägt sowohl zur Stabilität als auch zur Innovation in einem dynamischen Marktumfeld bei.',
          task1: '• Verwaltung des gesamten Mietprozesses für Wohn- und Gewerbeimmobilien',
          task2: '• Organisation und Durchführung von Besichtigungen',
          task3: '• Erstellung von Mietverträgen und Verhandlung mit potenziellen Mietern',
          task4: '• Inserieren von Immobilien auf verschiedenen Plattformen und Erstellung ansprechender Objektbeschreibungen',
          task5: '• Pflege genauer Mieterunterlagen und Dokumentationen',
          task6: '• Schnittstelle zwischen Mietern, Dienstleistern und internen Abteilungen',
          task7: '• Beobachtung des Mietmarktes und Mitwirkung an Preis- und Belegungsstrategien',

          profile1: '• Berufserfahrung in der Immobilienvermietung, im Immobilienbereich oder im Kundenservice',
          profile2: '• Ausgeprägte Kommunikations- und Verhandlungsfähigkeiten',
          profile3: '• Professionelles Auftreten und sicheres Erscheinungsbild',
          profile4: '• Hervorragende organisatorische Fähigkeiten und hohe Detailgenauigkeit',
          profile5: '• Selbstständige Arbeitsweise und Fähigkeit, mehrere Aufgaben gleichzeitig zu bewältigen',
          profile6: '• Gute MS-Office-Kenntnisse und Vertrautheit mit Immobilienverwaltungssoftware',
          profile7: '• Fließende Englischkenntnisse (Deutsch oder andere Sprachen von Vorteil)',

          offer1: '• Ein dynamisches Arbeitsumfeld in einem schnell wachsenden Immobilienunternehmen',
          offer2: '• Flache Hierarchien und kurze Entscheidungswege',
          offer3: '• Wettbewerbsfähiges Gehalt und leistungsbezogene Boni',
          offer4: '• Möglichkeiten zur beruflichen Weiterentwicklung',
          offer5: '• Moderne Büroräume und flexible Arbeitszeiten',
          offer6: '• Ein motiviertes, unterstützendes und internationales Team',
          Office: 'Büro',
          Revitalisation: 'Revitalisierung',
          Administration: 'Verwaltung',
          Retail: 'Einzelhandel',
          Residental: 'Wohnimmobilien'


        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
