import EmojiHubItem from "./EmojiHubItem";
import { v4 as uuid4 } from "uuid";
import { useEffect, useRef, memo } from "react";
import "../../App.css";

export default memo(function EmojiHubList({
  allEmoji,
  category,
  emojiHubRef,
  setActiveLink,
  clickedCategory
}) {
  const filteredEmoji = allEmoji.filter((emoji) => emoji.category === category);
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
      emojiHubListRef.current.scrollIntoView({behavior: 'smooth'})
    }
    
  }, [emojiHubListRef, emojiHubRef, setActiveLink, clickedCategory, category ]);
  return (
    <div style={{ position: "relative" }} ref={emojiHubListRef}>
      <div className="emoji-hub-list-title">{category}</div>
      <ul className="emoji-hub-list">
        {filteredEmoji.map((emoji) => (
          <EmojiHubItem key={uuid4()} category={category} emoji={emoji} />
        ))}
      </ul>
    </div>
  );
});
