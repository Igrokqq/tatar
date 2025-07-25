import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurPeople from "./pages/OurPeople/OurPeople";
import Career from "./pages/Career/Career";
import Main from "./pages/Main/Main";
import RealEstate from "./pages/RealEstate/RealEstate";
import Contact from "./pages/Contact/Contact";
import FullPortfolio from "./pages/fullPortfolio/fullPortfolio";
import SkipMainPageAnim from "./pages/SkipMainPageAnim/SkipMainPageAnim.jsx";

import { observer } from "mobx-react-lite";
import { mainPageStore } from "./stores/mainPageStore";


import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { autorun } from 'mobx';
import { themeStore } from './stores/themeStore';
import { useEffect, useLayoutEffect, useRef } from "react";
import Digital from "./pages/Digital/Digital.jsx";
import Telecomunication from "./pages/Telecomunication/Telecomunication.jsx";
import GreenEnergy from "./pages/GreenEnergy/GreenEnergy.jsx";
import Water from "./pages/Water/Water.jsx";
import Energy from "./pages/Energy/Energy.jsx";
import { mmStore } from './stores/mmStore.jsx';

import { useGSAP } from '@gsap/react';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { ScrollToPlugin } from "gsap/all";
import { ScrollSmoother } from 'gsap/ScrollSmoother';


// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);


gsap.registerPlugin();

autorun(() => {
  document.body.classList.toggle('light', themeStore.isLight);
  document.body.classList.toggle('dark', !themeStore.isLight);

  document.documentElement.style.setProperty('--bg-color', themeStore.isLight ? '#fff' : '#000');
  document.documentElement.style.setProperty('--text-color', themeStore.isLight ? '#000' : '#fff');

  // 💡 Градиент как переменная
  const gradient = themeStore.isLight
    ? 'linear-gradient(35deg, #00000009, #0000)'
    : 'linear-gradient(180deg, rgba(16,16,16,0), #101010 50%)';

  document.documentElement.style.setProperty('--gradient-bg', gradient);

  document.documentElement.style.setProperty('--bg-blur-color', themeStore.isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)');

  document.documentElement.style.setProperty('--bg-border', themeStore.isLight ? '#DDD' : 'rgba(255, 255, 255, 0.2)');
});

function App() {

  const wrapperRef = useRef();
  const contentRef = useRef();

  useLayoutEffect(() => {
    if (window.innerWidth > 900 && mainPageStore.currentSlide === -1) {

      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        effects: true
      });
    }
  }, [mainPageStore.currentSlide]);

  // return <>kotiki kotyatki</> // котики
  return (
    <div className='App' ref={wrapperRef}>

      {
        mmStore.show && <div className={`OurPeopleEl_mm ${mmStore.show && 'OurPeopleEl_mm_active'}`} onClick={() => {
          // setopenMM(-1)
          mmStore.show = false
        }}>
          <div className='OurPeopleEl_mm_content'>
            <div className='OurPeopleEl_mm_content_title fsw_m fs_xl'>
              <div className='OurPeopleEl_mm_content_close free_img'>
                <div className='OurPeopleEl_mm_content_close_wrapper' onClick={() => {
                  mmStore.show = false
                  // setopenMM(-1)
                }}>
                  <div className='OurPeopleEl_mm_content_close_inner_1'></div>
                  <div className='OurPeopleEl_mm_content_close_inner_2'></div>
                </div>
              </div>
              {mmStore?.title}
            </div>
            <div className='OurPeopleEl_mm_content_position fsw_s fs_m'>
              {mmStore?.position}
            </div>
            <div className='OurPeopleEl_mm_content_line'></div>
            {
              mmStore?.description1 && <div className='OurPeopleEl_mm_content_description1 fsw_s fs_m'>
                {mmStore?.description1}
              </div>
            }
            {
              mmStore?.description2 && <div className='OurPeopleEl_mm_content_description1 fsw_s fs_m'>
                {mmStore?.description2}
              </div>
            }
            {
              mmStore?.description3 && <div className='OurPeopleEl_mm_content_description1 fsw_s fs_m'>
                {mmStore?.description3}
              </div>
            }

          </div>
        </div>
      }

      <div className='App_inner' ref={contentRef}>

        <Router>
          <Header bot={mainPageStore.currentSlide !== -1} />

          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />

            <Route element={<SkipMainPageAnim />}>
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/OurPeople" element={<OurPeople />} />
              <Route path="/Career" element={<Career />} />
              <Route path="/RealEstate" element={<RealEstate />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Portfolio" element={<FullPortfolio />} />
              <Route path="/Digital" element={<Digital />} />
              <Route path="/Telecomunication" element={<Telecomunication />} />
              <Route path="/GreenEnergy" element={<GreenEnergy />} />
              <Route path="/Water" element={<Water />} />
              <Route path="/Energy" element={<Energy />} />

            </Route>
          </Routes>
          {mainPageStore.currentSlide === -1 && <Footer />}
        </Router>
      </div>

    </div>
  )
}


export default observer(App)
