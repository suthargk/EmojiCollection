import EmojiCategory from './components/EmojiCatergory'
import EmojiHub from './components/EmojiHub'
import EmojiView from './components/EmojiView'
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [catogeries, setCatogeries] = useState([])
  const [allEmoji, setAllEmoji] = useState([])
  useEffect(() => {
    fetch('https://emojihub.herokuapp.com/api/all')
    .then(response => response.json())
    .then(result => {
      const obj  = {}
      result.forEach(res => {
        obj[res.category] = res.category
      })
      setAllEmoji(result)
      setCatogeries(Object.keys(obj))
    }).catch(err => console.error(err))
  }, [])

  const selectCategory = (item) => {
    const newEmojies = allEmoji.filter(emoji => emoji.category === item)
  }
  return (
    <div className="App">
     <EmojiCategory className="emoji-categories" categories={catogeries} onSelectCategory={selectCategory}/>
     <EmojiHub className="emoji-hub" allEmoji={allEmoji}/>
     <EmojiView className="emoji-view"/>
    </div>
  );
}

export default App;
