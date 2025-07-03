import './BlockTitle.scss';
export default ({ text1, text2, container }) => {
    return (
        <div className={`BlockTitle ${container && 'container'}`}>
            {text1} {text2 && <><br /> {text2}</>}
        </div>
    )
}