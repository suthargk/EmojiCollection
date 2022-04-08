import EmojiCategory from './components/EmojiCategory/EmojiCatergory'
import EmojiHub from './components/EmojiHub/EmojiHub'
import EmojiView from './components/EmojiView/EmojiView'
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [catogeries, setCatogeries] = useState([])
  const [allEmoji, setAllEmoji] = useState([])
  
  const [activeLink, setActiveLink] = useState(catogeries[0] ?? "smileys and people")
  const [clickedCategory, setClickedCategory] = useState(catogeries[0] ?? 'smileys and people')

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

  const onClickScrollTo = (categoryItem) => {
    setClickedCategory(categoryItem)
  }

  return (
    <div className="App">
     <EmojiCategory activeLink={activeLink} categories={catogeries} onClickScrollTo={onClickScrollTo}/>
     <EmojiHub allEmoji={allEmoji} categories={catogeries} setActiveLink={setActiveLink} clickedCategory={clickedCategory}/>
     <EmojiView/>
    </div>
  );
}

export default App;
