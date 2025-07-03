import './KeypointsEl.scss';
export default ({ title, text, small }) => {
    return (
        <div className={`KeypointsEl ${small ? 'KeypointsEl_small' : ''}`}>
            <div className='KeypointsEl_decor free_img'>
                <div className='KeypointsEl_decor_inner'></div>
            </div>
            <div className='KeypointsEl_content'>
                <div className='KeypointsEl_content_wraper fs_l'>
                    <span className='fs_l fsw_l'>{title}</span>&nbsp;{text}
                </div>
            </div>
        </div>
    )
}