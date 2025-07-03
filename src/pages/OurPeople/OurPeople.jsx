import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import './OurPeople.scss';
import OurPeopleEl from './OurPeopleEl/OurPeopleEl';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader/PageHeader';
import { observer } from 'mobx-react-lite';
import { mmStore } from '../../stores/mmStore.jsx';


gsap.registerPlugin(ScrollTrigger);

export default observer(() => {
  const { t } = useTranslation();

  const peopleRef = useRef([]);
  peopleRef.current = [];

  const people = [
    {
      title: 'Aram Aras',
      text: t('board_members'),
      tab: 1,
      description1: t('Aram'),
      description2: t('Aram2'),
      description3: t('Aram3'),
      position: 'Rental Management',
    },
    {
      title: 'Ali Bakteari',
      text: t('board_members'),
      tab: 1,
      description1: t('Ali'),
      description2: t('Ali2'),
      description3: t('Ali3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'André Führung',
      text: t('board_members'),
      tab: 1,
      description1: t('André'),
      description2: t('André2'),
      description3: t('André3'),
      position: 'Service Charge Accounting'
    },
    {
      title: 'Erik Buchwald',
      text: t('board_members'),
      tab: 1,
      description1: t('Erik'),
      description2: t('Erik2'),
      description3: t('Erik3'),
      position: 'Tax Advisor – Accounting'
    },
    {
      title: 'Michael Bensky',
      text: t('board_members'),
      tab: 1,
      description1: t('Michael'),
      description2: t('Michael2'),
      description3: t('Michael3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Koray Arslan',
      text: t('board_members'),
      tab: 1,
      description1: t('Koray'),
      description2: t('Koray2'),
      description3: t('Koray3'),
      position: 'Rental Management'
    },
    {
      title: 'Nadeza Vahidov',
      text: t('board_members'),
      tab: 1,
      description1: t('Nadeza'),
      description2: t('Nadeza2'),
      description3: t('Nadeza3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Annamarie Simon',
      text: t('board_members'),
      tab: 1,
      description1: t('Annamarie'),
      description2: t('Annamarie2'),
      description3: t('Annamarie3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Greta Wotschal',
      text: t('board_members'),
      tab: 1,
      description1: t('Greta'),
      description2: t('Greta2'),
      description3: t('Greta3'),
      position: 'Rental Management'
    },
    {
      title: 'Ralf Burshille',
      text: t('board_members'),
      tab: 1,
      description1: t('Ralf'),
      description2: t('Ralf2'),
      description3: t('Ralf3'),
      position: 'Human Resources'
    },
    {
      title: 'Alex Usubyan',
      text: t('board_members'),
      tab: 1,
      description1: t('Alex'),
      description2: t('Alex2'),
      description3: t('Alex3'),
      position: 'Rental Management'
    },
    {
      title: 'Olga Trost',
      text: t('board_members'),
      tab: 1,
      description1: t('Olga'),
      description2: t('Olga2'),
      description3: t('Olga3'),
      position: 'Receivables Management'
    },
    {
      title: 'Daniel Gemsen',
      text: t('board_members'),
      tab: 1,
      description1: t('Daniel'),
      description2: t('Daniel2'),
      description3: t('Daniel3'),
      position: 'Service Charge Accounting'
    },
    {
      title: 'Horst Stiensmeier',
      text: t('board_members'),
      tab: 1,
      description1: t('Horst'),
      description2: t('Horst2'),
      description3: t('Horst3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Mia Matzke',
      text: t('board_members'),
      tab: 1,
      description1: t('Mia'),
      description2: t('Mia2'),
      description3: t('Mia3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Kerstin Sowada',
      text: t('board_members'),
      tab: 1,
      description1: t('Kerstin'),
      description2: t('Kerstin2'),
      description3: t('Kerstin3'),
      position: 'Technical Asset Management'
    },
    {
      title: 'Lara Gronemeier',
      text: t('board_members'),
      tab: 1,
      description1: t('Lara'),
      description2: t('Lara2'),
      description3: t('Lara3'),
      position: 'Rental Management'
    },
    {
      title: 'Waldemar Gergert',
      text: t('executive_officers'),
      tab: 2,
      description1: t('Waldemar'),
      description2: t('Waldemar2'),
      description3: t('Waldemar3'),
      position: 'Chief Financial Officer'
    },
    {
      title: 'Onur Tatar',
      text: t('executive_officers'),
      tab: 2,
      description1: t('Onur'),
      description2: t('Onur2'),
      description3: t('Onur3'),
      position: 'Principal & Chief Executive Officer'
    },
    {
      title: 'Sefkan Kaynak',
      text: t('executive_officers'),
      tab: 2,
      description1: t('Sefkan'),
      description2: t('Sefkan2'),
      description3: t('Sefkan3'),
      position: 'Chief Operating Officer'
    },
    {
      title: 'Zoran Filipovic',
      text: t('senior_leadership'),
      tab: 3,
      description1: t('Zoran'),
      description2: t('Zoran2'),
      description3: t('Zoran3'),
      position: 'Director of Franchise'
    },
    {
      title: 'Laura Wintermantel',
      text: t('senior_leadership'),
      tab: 3,
      description1: t('Laura'),
      description2: t('Laura2'),
      description3: t('Laura3'),
      position: 'Head of Accounting'
    },
    {
      title: 'Robert Titze',
      text: t('senior_leadership'),
      tab: 3,
      description1: t('Robert'),
      description2: t('Robert2'),
      description3: t('Robert3'),
      position: 'Head of Asset Management'
    }
  ]

  const [activeTab, setactiveTab] = useState(1);

  useEffect(() => {
    peopleRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          y: '100%',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.2
        }
      );
    });
  }, [activeTab]);

  const addToRefs = (el) => {
    if (el && !peopleRef.current.includes(el)) {
      peopleRef.current.push(el);
    }
  };

  // Переводим текст и заголовки кнопок
  const tabs = [
    t('board_members'),
    t('executive_officers'),
    t('senior_leadership')
  ];

  const [openMM, setopenMM] = useState(-1);
  const [showMM, setshowMM] = useState(-1);

  const showMMTimerRef = useRef(null)

  useEffect(() => {
    clearTimeout(showMMTimerRef.current)
    if (openMM > -1) {
      mmStore.show = true
      mmStore.title = people[openMM]?.title
      mmStore.position = people[openMM]?.position
      mmStore.description1 = people[openMM]?.description1
      mmStore.description2 = people[openMM]?.description2
      mmStore.description3 = people[openMM]?.description3
      // setshowMM(openMM)
    } else {
      mmStore.show = false
    }
  }, [openMM])


  return (
    <>

      <div className='OurPeople container'>
        <PageHeader text={t('our_people')} />
        <div className='OurPeople_content mt_xl'>
          <div className='OurPeople_content_btns'>
            {
              tabs.map((el, index) => (
                <WhiteBtn
                  title={el}
                  key={`WhiteBtn_${index}`}
                  index={index + 1}
                  activeTab={activeTab}
                  onclick={() => setactiveTab(index + 1)}
                />
              ))
            }
          </div>




          <div className='OurPeople_content_items'>

            {
              people.map((el, index) => {
                if (activeTab === el.tab) return <OurPeopleEl title={el.title} text={el.text} key={`OurPeopleEl_${index}`} ref={addToRefs} index={index} setopenMM={setopenMM} />
              })
            }
          </div>
        </div>
      </div>
    </>

  );
})
