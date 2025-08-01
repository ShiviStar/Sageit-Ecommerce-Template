import '../styles/TopNavigation.css'
import SearchImg from '../assets/v6-icon (free).png'
import AccountImg from '../assets/v6-icon (free) (1).png'
import ShoppingImg from '../assets/v6-icon (free) (2).png'
import Logo from '../assets/logo.png'

export const TopNavigation = () => {
    return (
    <div className="top-navigation-container">
        <div className="search-container">
            <img src={SearchImg} />
        </div>
        <div className="logo-container">
            <img src={Logo}></img>
        </div>
        <div className="right-container">
            <div className="account-container">
                <img src={AccountImg}></img><a>Account</a>
            </div>
            <div className="shopping-container">
               <img src={ShoppingImg}></img><a>Shopping</a>
            </div>
        </div>
    </div>
  )
}