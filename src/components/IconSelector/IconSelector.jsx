import c from './IconSelector.module.css';
import { TILES_ICONS } from '../../mocks/testData';

function IconSelector({setIconIndex, iconIndex}) {
    const selectHandler = (event) => {
        if (event.target.closest('.' + c.icon)) {
            setIconIndex(Number(event.target.closest('.' + c.icon).dataset.imageIndex));
        }
    }

    return (
        <div className={c.iconSelector}>
            <div className={c.results}>
                <p>Icon:</p>
                <img src={TILES_ICONS[iconIndex]} alt='Selected icon'/>
            </div>
            <div className={c.iconContainer} onClick={(event) => selectHandler(event)}>
                {
                    TILES_ICONS.map( (icon, index) => {
                        return (
                            <div className={`${c.icon} ${iconIndex === index ? c.selected : ''}`} key={index} data-image-index={index}>
                                <img src={icon} alt='Icon variant'/>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default IconSelector;