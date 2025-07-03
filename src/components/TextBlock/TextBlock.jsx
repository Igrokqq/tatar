import './TextBlock.scss';
export default ({ title, text }) => {return (
    <div className='TextBlock gradienBlock'>
        <div className='TextBlock_title'>
            {title}
        </div>
        <div className='TextBlock_description'>
            {text}
        </div>
    </div>
)}