
// TODO implement link
const Result = ({ link, title, extract, index }) => {
  return (
    <a href={link}>
    <div className="result" key={index}>
      <div className="result-title">
       {title}
      </div>
      <div className="result-extract">
        {extract}
      </div>
    </div>
    </a>
  )
}

export default Result
