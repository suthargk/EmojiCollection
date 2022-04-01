import EmojiCategoryItem from './EmojiCategoryItem'
import {v4 as uuid4} from 'uuid'

export default function EmojiCategory({categories, className, onSelectCategory}) {
    return <div>
        <ul className={className}>
            {categories.map(category => <EmojiCategoryItem className="category" key={uuid4()} category={category} onSelectCategory={onSelectCategory}/>)}
        </ul>
    </div>
}