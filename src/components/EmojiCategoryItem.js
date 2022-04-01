

export default function EmojiCategory({category, className, onSelectCategory}) {
    return <li className={className} onClick={() => onSelectCategory(category)}>
        {category.replace('and', '&')}
    </li>
}