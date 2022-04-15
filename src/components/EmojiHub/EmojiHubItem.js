import {v4 as uuid4} from 'uuid'
import "../../App.css"
import {memo} from 'react'

export function convertUnicode(emoji) {
  let emojis = emoji.unicode.map(code => {
    return [...code.slice(2).split(" ").map(item => parseInt(item, 16))]
   })
   const convertedEmoji = String.fromCodePoint.apply(null,[...emojis])
   const obj = {...emoji, convertedEmoji}
   return obj;
}
export default memo(function EmojiHubItem({emoji, onSelectEmojiHandler}) {
    const emojiObj = convertUnicode(emoji)
    return <li className="emoji-hub-set-item" onClick={() => onSelectEmojiHandler(emojiObj)}>
      <span key={uuid4()}>{emojiObj.convertedEmoji}</span>
    </li>
})
