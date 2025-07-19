import '../styles/Collections.css'
import ImgProduct from '../assets/image-product.png'
import ShopNowImg from '../assets/v6-icon (free) (3).png'

export const Collections = () => {
    return (
        <>
            <div className='collection-container'>
                 <div className='collection-left-container'>
                    <h1>
                        Collections
                    </h1>
                    <h4>
                        You can explore ans shop many differnt collection
                        from various barands here.
                    </h4>
                    <div>
                        <button className='btn-shopnow'>
                            <img src={ShopNowImg}></img>
                            Shop Now
                        </button>
                    </div>
                </div>
                 <div className='collection-right-container'>
                    <img src={ImgProduct} alt="ImgProduct" />
                </div>
            </div>
        </>
    )
}