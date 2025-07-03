import { observer } from 'mobx-react-lite';
import Advantages from '../../components/Advantages/Advantages';
import Hero from '../../components/Hero/Hero';
import Keypoints from '../../components/Keypoints/Keypoints';
import Sectors from '../../components/Sectors/Sectors';
import Lines from '../../components/Lines/Lines';
import { mainPageStore } from '../../stores/mainPageStore';
import './Main.scss';
import Technology from '../../components/Technology/Technology';
import MapBlockMain from '../../components/mapBlockMain/mapBlockMain';
import HeroOld from '../../components/Hero/HeroOld';



export default observer(() => {
    return (
        <div className={`Main ${mainPageStore.currentSlide !== -1 && 'Main_fixed'}`}>
            <Hero />
            {/* <HeroOld /> */}
            {mainPageStore.currentSlide === -1 && <>
                {/* <Sectors /> */}
                <Lines />

                <MapBlockMain />
                <Technology />
                {/* <Advantages /> */}
                {/* <Keypoints /> */}
            </>}
        </div>
    )
})