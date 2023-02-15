import c from './TilesContainer.module.css';
import { TILES_ICONS } from '../../mocks/testData'
import iconAdd from '../../assets/icon_add.png';

function TilesContainer({tiles, filterValue, updateCreateModalStatus}) {
    const filterClass = filterValue === 'all' ? '' : filterValue;

    return (
        <div className={c.tilesContainer}>
            {
                tiles.map( (elem, index) => {
                    return (
                        // ToDo: use key generator
                        <a href={elem.href} className={`${c.tile} ${elem.class} ${filterClass && filterClass !== elem.class ? c.hidden : ''}`} key={elem.title.length + elem.class + index}>
                            <img src={TILES_ICONS[elem.imageIndex]} alt='Tile icon'/>
                            <p>{elem.title}</p>
                        </a>
                    )
                })
            }
            <button className={c.tile} onClick={() => updateCreateModalStatus(true)}>
                <img src={iconAdd} alt='Add icon'/>
                <p>Add Bookmark</p>
            </button>
        </div>
    )
}

export default TilesContainer;