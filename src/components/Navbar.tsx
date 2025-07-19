import '../styles/Navbar.css'

export const Navbar = () => {
    const menuItems = [
        'Jwellery & Accessaries',
        'Clothing & Shoes',
        'Home & Living',
        'Wedding & Party',
        'Toys & Entertainment',
        'Art & Collectibles',
        'Craft Supplies & Tools'
    ]
    return (
        <>
            <div className='nav-container'>
                {menuItems.map((item) => 
                    <div className="navbar-items" key={item}>{item}</div>
                )}
            </div>
        </>
    )
}