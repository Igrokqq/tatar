import './mapNumBlock.scss';
export default ({ index, title, text, width, small}) => {return (
    <div className={`mapNumBlock ${width && 'mapNumBlock_wide'} ${small && 'mapNumBlock_small'}`}>
        <div className='mapNumBlock_num'>
            {index + 1}
        </div>
        <div className='mapNumBlock_content'>
            <div className='mapNumBlock_content_title'>
                {title}
            </div>
            <div className='mapNumBlock_content_text'>
                {text}
            </div>
        </div>
    </div>
)}