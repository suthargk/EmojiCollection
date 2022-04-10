import EmojiCategoryItem from './EmojiCategoryItem'
import "../../App.css"

export default function EmojiCategory({categories, activeLink, onClickScrollTo}) {
    return <div className='emoji-categories'>
        <ul>
            {categories.map(category => <EmojiCategoryItem key={category.id} category={category} activeLink={activeLink} onClickScrollTo={onClickScrollTo}/>)}
        </ul>
    </div>
}