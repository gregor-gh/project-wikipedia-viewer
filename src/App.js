import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"

function App() {

  const [searchResults, setSearchResults] = useState()

  const searchWiki = async (search) => {
    // stop page refreshing
    search.preventDefault()

    // get searhc text and convert to URI format
    const searchText=search.target[0].value
    const searchURI = encodeURIComponent(searchText.trim())

    // check if search is empty // TODO maybe show top 10 pages or something
    if(!searchURI)
      return

    // fetch and await search reuslts
    const results = await fetch(
      `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchURI}`)
    const body = await results.json();
    
    // conver to array
    setSearchResults(Object.entries(body.query.pages))
  }

  return (
    <div className="app">
      <Header searchWiki={searchWiki}/>
      <Results searchResults={searchResults} />
    </div>
  );
}

export default App;
