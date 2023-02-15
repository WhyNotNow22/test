import c from './CreateTileModal.module.css';
import { useState, useRef } from 'react';
import IconSelector from '../IconSelector/IconSelector.jsx';
import cancelIcon from '../../assets/icon_cancel.png';

function CreateTileModal({tiles, isCreateModalOpen, updateCreateModalStatus, updateTiles}) {
    const titleRef = useRef(null);
    const linkRef = useRef(null);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [iconIndex, setIconIndex] = useState(0);
    const addBookmarkHandler = () => {
        if (title && link) {
            updateTiles([...tiles, {
                class: 'custom',
                title: title,
                href: link,
                imageIndex: iconIndex
            }])
            setLink('');
            setTitle('');
            setIconIndex(0);
            updateCreateModalStatus(false);
        } else {
            titleRef.current.value ? linkRef.current.focus() : titleRef.current.focus();
        }
    }

    return (
        <div className={`${c.createTileModal} ${isCreateModalOpen ? c.isOpened : ''}`}>
            <div className={c.modal}>
                <div className={c.field}>
                    <input value={title} onChange={(event) => setTitle(event.target.value)} ref={titleRef}/>
                    <label>Title:</label>
                </div>
                <div className={c.field}>
                    <input value={link} onChange={(event) => setLink(event.target.value)} ref={linkRef}/>
                    <label>Link:</label>
                </div>
                <IconSelector iconIndex={iconIndex} setIconIndex={setIconIndex}/>
                <button className={c.addBtn} onClick={addBookmarkHandler}>Add Boodmark</button>
                <button className={c.cancelBtn} onClick={() => updateCreateModalStatus(false)}><img src={cancelIcon} alt='Back icon'/></button>
            </div>
            <div className={c.fade} onClick={() => updateCreateModalStatus(false)}/>
        </div>
    )
}

export default CreateTileModal;
