import EmojiHubItem from "./EmojiHubItem";
import { v4 as uuid4 } from "uuid";
import { useEffect, useRef, memo } from "react";
import "../../App.css";

export default memo(function EmojiHubList({
  category,
  filteredEmoji,
  emojiHubRef,
  setActiveLink,
  clickedCategory
}) {
  
  const emojiHubListRef = useRef();
  useEffect(() => {
    const callbackObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(category);
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
    if(clickedCategory === emojiHubListRef.current.children[0].textContent) {
      emojiHubListRef.current.scrollIntoView()
    }
    
  }, [emojiHubListRef, emojiHubRef, setActiveLink, clickedCategory, category ]);
  return (
    <div className="emoji-hub-set-main" ref={emojiHubListRef}>
      <div className="emoji-hub-set-title">{category}</div>
      <ul className="emoji-hub-set-list">
        {filteredEmoji.map((emoji) => (
          <EmojiHubItem key={uuid4()} category={category} emoji={emoji} />
        ))}
      </ul>
    </div>
  );
});
