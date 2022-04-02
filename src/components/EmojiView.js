import SearchEmoji from './SearchEmoji'

export default function EmojiView({className}) {
    return <div className={className}>
        <SearchEmoji className="search-emoji" id="search"/>
    </div>
}

