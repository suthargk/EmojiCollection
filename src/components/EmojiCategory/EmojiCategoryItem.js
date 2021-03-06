import "../../App.css"
import * as Icons from "../../svg";

export default function EmojiCategory({category, activeLink, onClickScrollTo}) {

   const CategoryIcon = Icons[category.iconName];
    return <>
    <li data-active={activeLink === category.categoryName} className="emoji-categories-item" onClick={() => onClickScrollTo(category.categoryName)}>
        <span>{CategoryIcon && <CategoryIcon/>}</span>
        <span>{category.categoryName}</span>
    </li>
    {category.id === 1 ? <div className="divider"><span></span></div> : null}
    </>
}

// #A1A5AC