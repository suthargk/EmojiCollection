import SearchEmoji from './SearchEmoji'
import EmojiPreview from './EmojiPreview'
import "../../App.css"

export default function EmojiView({handleSearch, value, setSearchTerm, selectedEmoji}) {
    return <div className="emoji-view">
        <SearchEmoji id="search" value={value} handleSearch={handleSearch} setSearchTerm={setSearchTerm}/>
        <EmojiPreview selectedEmoji={selectedEmoji}/>
    </div>
}

