import EmojiCategoryItem from './EmojiCategoryItem'
import "../../App.css"
import {v4 as uuid4} from 'uuid'

export default function EmojiCategory({categories, onSelectCategory, activeLink}) {
    return <div className='emoji-categories'>
        <ul>
            {categories.map(category => <EmojiCategoryItem key={uuid4()} category={category} onSelectCategory={onSelectCategory} activeLink={activeLink}/>)}
        </ul>
    </div>
}