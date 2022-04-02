import EmojiHubItem from "./EmojiHubItem";
import { v4 as uuid4 } from "uuid";

export default function EmojiHubList({allEmoji, category }) {
  const filteredEmoji = allEmoji.filter((emoji) => emoji.category === category);

  return (
    <div style={{position: "relative"}}>
        <div className="emoji-hub-list-title">{category.replace('and', '&')}</div>
        <ul className="emoji-hub-list">
      {filteredEmoji.map((emoji) => (
        <EmojiHubItem
          key={uuid4()}
          className="emoji-hub-item"
          category={category}
          emoji={emoji}
        />
      ))}
    </ul>
    </div>
  );
}
