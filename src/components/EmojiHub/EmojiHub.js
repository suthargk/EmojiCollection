import EmojiHubList from "./EmojiHubList"
import {v4 as uuid4} from 'uuid'
import "../../App.css"
import { useRef, memo } from "react"

export default memo(function EmojiHub({allEmoji, categories, setActiveLink}) {
    const emojiHubRef = useRef()
    return <div className="emoji-hub">
       <div className="emoji-hub-set" ref={emojiHubRef}>
       {categories.map(category => <EmojiHubList key={uuid4()} category={category} allEmoji={allEmoji} emojiHubRef={emojiHubRef} setActiveLink={setActiveLink}/>)}
       </div>
    </div>
})