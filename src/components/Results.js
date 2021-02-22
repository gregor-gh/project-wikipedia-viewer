import React from 'react'
import Result from "./Result"
const Results = ({ searchResults }) => {

  let results;
  if(searchResults) {
    results = searchResults.map((el,index) => {
      const data = el[1]
      const link = `https://en.wikipedia.org/?curid=${data.pageid}`
      return (
        <Result link={link} title={data.title} extract={data.extract} index={index}/>
      )
    })
  }
  return (
    <div className="results">
      {results}
    </div>
  )
}

export default Results
