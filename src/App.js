import EmojiCategory from './components/EmojiCategory/EmojiCatergory'
import EmojiHub from './components/EmojiHub/EmojiHub'
import EmojiView from './components/EmojiView/EmojiView'
import './App.css';

import { useCallback, useEffect, useState } from 'react';

function App() {
  const [catogeries, setCatogeries] = useState([])
  const [allEmoji, setAllEmoji] = useState([])
  
  const [activeLink, setActiveLink] = useState("smileys and people")


  console.log(activeLink)
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

  const selectCategory = useCallback((item) => {
    // eslint-disable-next-line no-unused-vars
    const newEmojies = allEmoji.filter(emoji => emoji.category === item)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
     <EmojiCategory activeLink={activeLink} categories={catogeries} onSelectCategory={selectCategory}/>
     <EmojiHub allEmoji={allEmoji} categories={catogeries} setActiveLink={setActiveLink}/>
     <EmojiView/>
    </div>
  );
}

export default App;
