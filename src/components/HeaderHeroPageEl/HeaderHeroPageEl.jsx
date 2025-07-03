import './HeaderHeroPageEl.scss';

export default ({ bg, title, text, description2, description, smallTitle }) => {
    return (
        <div className='HeaderHeroPageEl container'>
            <div className={`HeaderHeroPageEl_title ${smallTitle && 'HeaderHeroPageEl_title_small'}`}>
                {title}
            </div>
            <div className='HeaderHeroPageEl_text'>
                <div className='HeaderHeroPageEl_text_title'>
                    {text}
                </div>
                <div className='HeaderHeroPageEl_text_description'>
                    {description}
                    {
                        description2 && <>
                            <br /> <br />
                            {description2}
                        </>
                    }
                </div>

            </div>
        </div>
    )
}