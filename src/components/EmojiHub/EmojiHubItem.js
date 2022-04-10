import {v4 as uuid4} from 'uuid'
import "../../App.css"
import {memo} from 'react'


export default memo(function EmojiHubItem({emoji, onSelectEmojiHandler}) {
    let emojis = emoji.unicode.map(code => {
        return [...code.slice(2).split(" ").map(item => parseInt(item, 16))]
       })
    const convertedEmoji = String.fromCodePoint.apply(null,[...emojis])
    return <li className="emoji-hub-set-item" onClick={() => onSelectEmojiHandler({emojiName: emoji.name, convertedEmoji})}>
      <span key={uuid4()}>{convertedEmoji}</span>
    </li>
})
