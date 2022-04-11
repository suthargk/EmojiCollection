import EmojiHubItem from "./EmojiHubItem";
import { v4 as uuid4 } from "uuid";
import { useEffect, useRef, memo } from "react";
import "../../App.css";

export default memo(function EmojiHubList({
  category,
  filteredEmoji,
  emojiHubRef,
  setActiveLink,
  clickedCategory,

  onSelectEmojiHandler,
}) {
  const emojiHubListRef = useRef();
  useEffect(() => {
    const callbackObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(category.categoryName)
          setActiveLink(category.categoryName);

        }
      });
    };
    const option = {
      root: emojiHubRef.current,
      rootMargin: "0px 0px -100% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(callbackObserver, option);
    observer.observe(emojiHubListRef.current);
    if (clickedCategory === category.categoryName) {
      emojiHubListRef.current.scrollIntoView();
    }
  }, [emojiHubListRef, emojiHubRef, setActiveLink, clickedCategory, category]);
  return (
    <div className="emoji-hub-set-main" ref={emojiHubListRef}>
      <div className="emoji-hub-set-title">{category.categoryName}</div>
      <ul className="emoji-hub-set-list">
        {filteredEmoji.map((emoji) => (
          <EmojiHubItem
            key={uuid4()}
            category={category.categoryName}
            emoji={emoji}
            onSelectEmojiHandler={onSelectEmojiHandler}
          />
        ))}
      </ul>
    </div>
  );
});
