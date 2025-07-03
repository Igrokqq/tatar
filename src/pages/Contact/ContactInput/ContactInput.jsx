import './ContactInput.scss';
export default ({ type, big, placeholder}) => {
    return (
        <input type={type} placeholder={placeholder} className={`ContactInput ${big ? 'ContactInput_big' : ''}`}/>
    )
}