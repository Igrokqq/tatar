import './AboutUsKeypointsEl.scss';
export default ({ title, text, img }) => {
    return (
        <div className='AboutUsKeypointsEl' style={{
            backgroundImage: `url(${img})`
        }}>

            <div className='AboutUsKeypointsEl_text free_img'>
                <div className='AboutUsKeypointsEl_text_title fs_2xl fsw_m'>{title}</div>
                <div className='AboutUsKeypointsEl_text_address fs_xl fsw_s'>Address</div>
                <div className='AboutUsKeypointsEl_text_street fs_xl fsw_s'>{text}</div>
            </div>
        </div>
    )
}