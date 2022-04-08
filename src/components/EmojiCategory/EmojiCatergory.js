import EmojiCategoryItem from './EmojiCategoryItem'
import "../../App.css"
import {v4 as uuid4} from 'uuid'

export default function EmojiCategory({categories, activeLink, onClickScrollTo}) {
    return <div className='emoji-categories'>
        <ul>
            {categories.map(category => <EmojiCategoryItem key={uuid4()} category={category} activeLink={activeLink} onClickScrollTo={onClickScrollTo}/>)}
        </ul>
    </div>
}