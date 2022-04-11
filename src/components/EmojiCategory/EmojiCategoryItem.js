import "../../App.css"
import * as Icons from "../../svg";

export default function EmojiCategory({category, activeLink, onClickScrollTo}) {

   const CategoryIcon = Icons[category.iconName];
    return <li data-active={activeLink === category.categoryName} className="emoji-categories-item" onClick={() => onClickScrollTo(category.categoryName)}>
        {CategoryIcon && <CategoryIcon/>}
        <span>{category.categoryName}</span>
    </li>
}

// #A1A5AC