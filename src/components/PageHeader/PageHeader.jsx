import './PageHeader.scss';
export default ({ text }) => {
    return (
        <div className='PageHeader mt_xl'>
            <div className='PageHeader_title  fsw_m'>
                {text}
            </div>
        </div>
    )
}