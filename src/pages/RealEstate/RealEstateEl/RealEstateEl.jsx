import './RealEstateEl.scss';
export default ({ title, text1, text2, first, last, firstNlast }) => {
    return (
        <div className={`RealEstateEl ${first && 'RealEstateEl_first'} ${last && 'RealEstateEl_last'} ${firstNlast && 'RealEstateEl_firstNlast'}`}>
            <div className='RealEstateEl_title fsw_s fs_m'>
                {title}
            </div>
            <div className='RealEstateEl_content fsw_s fs_m'>
                <div className='RealEstateEl_content_first'>
                    <img src="/img/arrow.svg" alt="" />
                    {text1}
                </div>
                {
                    text2 && <div className='RealEstateEl_content_first'>
                        <img src="/img/arrow.svg" alt="" />
                        {text2}
                    </div>
                }
            </div>
        </div>
    )
}