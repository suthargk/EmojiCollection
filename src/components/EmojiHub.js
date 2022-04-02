import EmojiHubList from "./EmojiHubList"
import {v4 as uuid4} from 'uuid'

export default function EmojiHub({allEmoji, categories, className}) {
    return <div className={className}>
       <div className="emoji-hub-set">
       {categories.map(category => <EmojiHubList key={uuid4()} category={category} allEmoji={allEmoji}/>)}
       </div>
    </div>
}