import './BigNumBlock.scss';
export default ({ index, title, text}) => {return (
        <div className={`RealEstate_steps_content_el  RealEstate_steps_content_el_${index}`} key={`RealEstate_steps_content_el_${index}`}>
            <div className='RealEstate_steps_content_el_num' style={{zIndex: -1}}>{index + 1}</div>
                <div className='RealEstate_steps_content_el_content gradienBlock'>
                    <div className='RealEstate_steps_content_el_content_title fs_xl fsw_m'>
                        {title}
                    </div>
                <div className='RealEstate_steps_content_el_content_text fs_m fsw_s'>
                    {text}
                </div>
            </div>
        </div>
)}