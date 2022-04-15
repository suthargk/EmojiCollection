const EmojiPreview = ({ selectedEmoji }) => {
  return (
    <div className="emoji-preview">
      <div className="emoji-sketch">
        {selectedEmoji.convertedEmoji}
        <div className="horizontal-box"></div>
        <div className="vertical-box"></div>
      </div>
      <div className="emoji-sketch-name">{selectedEmoji?.name?.split("≊")[0]}</div>
    </div>
  );
};

export default EmojiPreview;
