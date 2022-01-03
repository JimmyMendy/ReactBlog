import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="hero" />
    </div>
  )
}

export default Header
