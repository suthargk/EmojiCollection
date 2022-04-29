import SearchEmoji from './SearchEmoji'
import EmojiPreview from './EmojiPreview'
import "../../App.css"
import { memo } from 'react'

// Will edit soon
export default memo(function EmojiView({handleSearch, value, setSearchTerm, selectedEmoji}) {
    return <div className="emoji-view">
        <SearchEmoji id="search" value={value} handleSearch={handleSearch} setSearchTerm={setSearchTerm}/>
        {Object.keys(selectedEmoji).length !== 0 && <EmojiPreview selectedEmoji={selectedEmoji}/>} 
    </div>
})

