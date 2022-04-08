
import "../../App.css"

export default function EmojiCategory({category, activeLink, onClickScrollTo}) {

    return <li data-active={activeLink === category} className="emoji-categories-item" onClick={() => onClickScrollTo(category)}>
        {category}
    </li>
}
