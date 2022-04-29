const EmojiPreview = ({ selectedEmoji }) => {
  let emojiName = selectedEmoji?.name?.split("≊")[0]
  if(selectedEmoji.category === 'flags') {
      emojiName = `flag of ${emojiName}`
    emojiName = [...emojiName.split(" ").slice(0, 2), emojiName.split(" ")[2][0].toUpperCase() + emojiName.split(" ")[2].slice(1)].join(" ")
  }
  return (
    <div className="emoji-preview">
      <div className="emoji-sketch">
        {selectedEmoji.convertedEmoji}
        <div className="horizontal-box"></div>
        <div className="vertical-box"></div>
      </div>
      <div className="emoji-sketch-name">{emojiName}</div>
    </div>
  );
};

export default EmojiPreview;
