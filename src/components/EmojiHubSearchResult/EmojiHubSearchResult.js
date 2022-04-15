import { v4 as uuid4 } from "uuid";
import EmojiHubItem from "../EmojiHub/EmojiHubItem";
import {memo} from 'react'
const EmojiHubSearchResult = memo(({ searchedEmojis, onSelectEmojiHandler }) => {
  return (
    <div className="emoji-hub">
      <div data-result={searchedEmojis.length !== 0} className="emoji-hub-set">
        <div className="emoji-hub-set-main">
        <div className="emoji-hub-set-title">search results</div>
        {searchedEmojis.length === 0 ? <div className="search-result-not-found"><div className="search-result-not-found--emoji">🕵🏻</div><div className="search-result-not-found--error">No Emoji found</div></div> : <ul className="emoji-hub-set-list">{searchedEmojis.map(emoji =>  <EmojiHubItem key={uuid4()} emoji={emoji} onSelectEmojiHandler={onSelectEmojiHandler}/>)}</ul>}
        </div>
      </div>
    </div>
  );
});

export default EmojiHubSearchResult;
