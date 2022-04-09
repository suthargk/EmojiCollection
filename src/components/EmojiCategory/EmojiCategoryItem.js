import "../../App.css"
import { ReactComponent as Check } from '../../svg/Activity.svg'

export default function EmojiCategory({category, activeLink, onClickScrollTo}) {
    return <li data-active={activeLink === category} className="emoji-categories-item" onClick={() => onClickScrollTo?.(category)}>
        <span><Check height="18px" width="18px" /></span>
        <span>{category}</span>
    </li>
}
