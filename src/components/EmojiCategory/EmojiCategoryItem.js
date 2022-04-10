// import { useEffect, useRef } from "react"
import "../../App.css"
import { ReactComponent as Check } from '../../svg/Activity.svg'

export default function EmojiCategory({category, activeLink, onClickScrollTo}) {
    // const ImportedIconRef = useRef()
    // useEffect(() => {
    //     const importIcon = async () => {
    //         try {
    //             ImportedIconRef.current = (
    //                 await import(`../../svg/${category}.svg`)
    //             ).ReactComponent;
    //         }
    //         catch(err) {
    //             console.error(err)
    //         }
    //     }
    //     importIcon()
    // }, [category])
    return <li data-active={activeLink === category.categoryName} className="emoji-categories-item" onClick={() => onClickScrollTo(category.categoryName)}>
        <span><Check height="18px" width="18px" /></span>
        <span>{category.categoryName}</span>
    </li>
}
