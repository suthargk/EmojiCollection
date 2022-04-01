


export default function EmojiHubItem({className, emoji}) {
    return <li className={className}>
       {emoji.unicode.map(code => {
        const emoji = code.slice(2).split(" ").map(item => parseInt(item, 16))
        const convertedEmoji = String.fromCodePoint.apply(null,emoji)  
           return <span>{convertedEmoji}</span>
       })}
    </li>
}