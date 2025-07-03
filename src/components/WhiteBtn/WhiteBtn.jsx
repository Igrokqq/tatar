import { Link } from 'react-router-dom';
import './WhiteBtn.scss';

export default ({ title, onclick, index, activeTab, white, to, preview, href }) => {
    const className = `WhiteBtn ${index == activeTab ? 'WhiteBtn_active' : ''} ${white ? 'WhiteBtn_white' : ''} ${preview ? 'WhiteBtn_preview' : ''}`;



    if (href) {
        return <a href={`#${href}`} className={className} to={to} onClick={onclick}>
            <div className='WhiteBtn_text fs_s fsw_l'>
                {title}
            </div>
            <div className='WhiteBtn_decor free_img'>
                <div className='WhiteBtn_decor_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_2 free_img'>
                <div className='WhiteBtn_decor_2_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_3 free_img'>
                <div className='WhiteBtn_decor_3_inner'>
                </div>
            </div>
        </a>
        // return <a href={`#${href}`} className={className}>{title}</a>
    }

    return to ? (
        <Link className={className} to={to} onClick={onclick}>
            <div className='WhiteBtn_text fs_s fsw_l'>
                {title}
            </div>
            <div className='WhiteBtn_decor free_img'>
                <div className='WhiteBtn_decor_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_2 free_img'>
                <div className='WhiteBtn_decor_2_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_3 free_img'>
                <div className='WhiteBtn_decor_3_inner'>
                </div>
            </div>
        </Link>
    ) : (
        <div className={className} onClick={onclick}>
            <div className='WhiteBtn_text fs_s fsw_l'>
                {title}
            </div>
            <div className='WhiteBtn_decor free_img'>
                <div className='WhiteBtn_decor_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_2 free_img'>
                <div className='WhiteBtn_decor_2_inner'>
                </div>
            </div>
            <div className='WhiteBtn_decor_3 free_img'>
                <div className='WhiteBtn_decor_3_inner'>
                </div>
            </div>
        </div>
    );
};
