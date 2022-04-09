import SearchEmoji from './SearchEmoji'
import "../../App.css"

export default function EmojiView({handleSearch, value}) {
    return <div className="emoji-view">
        <SearchEmoji id="search" value={value} handleSearch={handleSearch}/>
    </div>
}

