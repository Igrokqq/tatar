import './HeadingHeroPageEl.scss';

export default ({ title, smallTitle }) => {
    return (
        <div className='HeadingHeroPageEl container'>
            <div className={`HeadingHeroPageEl_title ${smallTitle && 'HeadingHeroPageEl_title_small'}`}>
                {title}
            </div>
        </div>
    )
}