import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderSearch = ({ searchWiki }) => {
  return (
    <div className="header-search">
      
      <form onSubmit={searchWiki}>
        <input id="search-bar" type="search" id="search" name="search" placeholder="search wikipedia"/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>  
      </form>
    </div>
  )
}

export default HeaderSearch
