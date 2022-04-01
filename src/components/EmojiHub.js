import EmojiHubItem from "./EmojiHubItem"
import {v4 as uuid4} from 'uuid'

export default function EmojiHub({allEmoji, className}) {
    return <div className={className}>
        <ul className="emoji-hub-list">
        {allEmoji.map((emoji => <EmojiHubItem key={uuid4()} className="emoji-hub-item" emoji={emoji}/>))}
    </ul>
    </div>
}