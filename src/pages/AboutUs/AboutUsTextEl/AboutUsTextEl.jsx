import './AboutUsTextEl.scss';
export default ({ title, text, width, small, index }) => {
    return (
        <div className={`AboutUsTextEl AboutUsTextEl_${index}  ${width && 'AboutUsTextEl_width'} ${small && 'AboutUsTextEl_small'}`}>
            <div className='AboutUsTextEl_title fs_xl fsw_m'>{title}</div>
            <div className='AboutUsTextEl_text fs_m fsw_s'>{text}</div>
        </div>
    )
}