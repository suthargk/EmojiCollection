import {v4 as uuid4} from 'uuid'
import "../../App.css"
import {memo} from 'react'


export default memo(function EmojiHubItem({ emoji}) {
    return <li className="emoji-hub-set-item">
       {emoji.unicode.map(code => {
        const emoji = code.slice(2).split(" ").map(item => parseInt(item, 16))
        const convertedEmoji = String.fromCodePoint.apply(null,emoji)  
           return <span key={uuid4()}>{convertedEmoji}</span>
       })}
    </li>
})