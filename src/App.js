import EmojiCategory from './components/EmojiCategory/EmojiCatergory'
import EmojiHub from './components/EmojiHub/EmojiHub'
import EmojiView from './components/EmojiView/EmojiView'
import EmojiHubSearch from './components/EmojiHubSearch/EmojiHubSearch'

import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([])
  const [allEmoji, setAllEmoji] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeLink, setActiveLink] = useState(categories[0] ?? "smileys and people")
  const [clickedCategory, setClickedCategory] = useState(categories[0] ?? 'smileys and people')

  useEffect(() => {
    fetch('https://emojihub.herokuapp.com/api/all')
    .then(response => response.json())
    .then(result => {
      const obj  = {}
      result.forEach(res => {
        obj[res.category] = res.category
      })
      setAllEmoji(result)
      setCategories(Object.keys(obj))
    }).catch(err => console.error(err))
  }, [])

  const onClickScrollTo = (categoryItem) => {
    setClickedCategory(categoryItem)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const searchedEmojis = allEmoji.filter(emoji => emoji.name.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(searchedEmojis)
  console.log(allEmoji)
  return (
    <div className="App">
      {!searchTerm && 
      <>
      <EmojiCategory activeLink={activeLink} categories={categories} onClickScrollTo={onClickScrollTo}/>
       <EmojiHub allEmoji={allEmoji} categories={categories} setActiveLink={setActiveLink} clickedCategory={clickedCategory}/>
       </>}
       {searchTerm && <>
        <EmojiCategory categories={['Frequently Used']} activeLink="Frequently Used"/>
        <EmojiHubSearch searchedEmojis={searchedEmojis}/>
        </>}
     <EmojiView handleSearch={handleSearch}  value={searchTerm}/>
    </div>
  );
}

export default App;
