import './NumBlock.scss';
export default ({ index, title, text }) => {return (
    <div className='NumBlock'>
        <div className={`NumBlock_num ${index == 1 && 'NumBlock_num_first'}`}>
            {index}
        </div>
        <div className='NumBlock_content'>
            <div className='NumBlock_content_title'>
                {title}
            </div>
            <div className='NumBlock_content_text'>
                {text}
            </div>
        </div>
    </div>
)}