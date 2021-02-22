import HeaderSearch from "./HeaderSearch"
import HeaderRandom from "./HeaderRandom"

const Header = ({ searchWiki }) => {
  return (
    <div className="header">
      <HeaderSearch searchWiki={searchWiki} />
      <HeaderRandom />
    </div>
  )
}

export default Header
