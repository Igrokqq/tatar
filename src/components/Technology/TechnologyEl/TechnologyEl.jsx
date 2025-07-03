import './TechnologyEl.scss';
export default ({ title, text, background }) => {
    return (
        <div className='TechnologyEl' style={{ backgroundImage: `url(${background})` }}>

            <img src={background} alt="" />
            {/* <div className='TechnologyEl_info'>
                <div className='TechnologyEl_title'>
                    {title}
                </div>
                <div className='TechnologyEl_text'>
                    {text}
                </div>
            </div> */}
        </div>
    )
}