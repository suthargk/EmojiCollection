import { v4 as uuid4 } from "uuid";
import EmojiHubItem from "../EmojiHub/EmojiHubItem";
const EmojiHubSearch = ({ searchedEmojis }) => {
  return (
    <div className="emoji-hub">
      <div className="emoji-hub-set">
        <div className="emoji-hub-set-main">
          <ul className="emoji-hub-set-list">{searchedEmojis.map(emoji =>  <EmojiHubItem key={uuid4()} emoji={emoji} />)}</ul>
        </div>
      </div>
    </div>
  );
};

export default EmojiHubSearch;
