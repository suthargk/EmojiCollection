import EmojiHubList from "./EmojiHubList"
import {v4 as uuid4} from 'uuid'
import "../../App.css"
import { useRef, memo } from "react"

export default memo(function EmojiHub({allEmoji, frequentlyUsed, categories, setActiveLink, clickedCategory, setClickedCategory, onSelectEmojiHandler}) {
    const emojiHubRef = useRef()
    return <div className="emoji-hub">
       <div data-result="true" className="emoji-hub-set" ref={emojiHubRef}>
       {categories.map(category => {
           const filteredEmoji = allEmoji.filter((emoji) => emoji.category === category.categoryName);
           return <EmojiHubList key={uuid4()} category={category} filteredEmoji={filteredEmoji.length !== 0 ? filteredEmoji : frequentlyUsed} emojiHubRef={emojiHubRef} setActiveLink={setActiveLink} clickedCategory={clickedCategory} setClickedCategory={setClickedCategory} onSelectEmojiHandler={onSelectEmojiHandler}/>
       })}
       </div>
    </div>
})