import c from './FilterTabs.module.css';
import React from 'react';

function FilterTabs({tabs, filterValue, updateFilterValue}) {

    const filterHandler = (event) => {
        if (event.target.classList.contains(c.filterTab)) {
            updateFilterValue(event.target.id)
        }
    }

    return (
        <div className={c.filterContainer} onClick={(event) => filterHandler(event)}>
            {
                tabs.map( (elem, index) => {
                    return (index !== tabs.length - 1) ? 
                    (<React.Fragment key={elem.id}>
                        <div id={elem.id} className={`${c.filterTab} ${filterValue === elem.id ? c.selected : ''}`} >{elem.value}</div>
                        <div className={c.divider}/>
                    </React.Fragment>) :
                    (<React.Fragment key={elem.id}><div id={elem.id} className={`${c.filterTab} ${filterValue === elem.id ? c.selected : ''}`}>{elem.value}</div></React.Fragment>)
                })
            }
        </div>
    )
}

export default FilterTabs;