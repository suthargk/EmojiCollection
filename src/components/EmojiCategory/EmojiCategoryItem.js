import "../../App.css"

export default function EmojiCategory({category, onSelectCategory, activeLink}) {
    const activeClass = activeLink === category ? "emoji-categories-item--active" : ""
    return <li className={`emoji-categories-item ${activeClass}`} onClick={() => onSelectCategory(category)}>
        {category}
    </li>
}