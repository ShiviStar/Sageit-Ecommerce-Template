import '../styles/Categories.css'
import CategoryImg from '../assets/18.png'
import { useSelector } from 'react-redux'

export const Categories = () => {
    const catImages = useSelector((state: any) => state.data);
    
    return (
        <>
            <div className='categories-container'>
                <div className='categories-text-container'>
                    <h3>
                        Explore new and popular styles
                    </h3>
                </div>
                <div className='categories-main-image-container'>
                    <img src={CategoryImg} />
                </div>
                <div className='categories-image-container'>
                 {catImages.categoryImages.map((img: any) =>
                    <img src={img.src} key={img.id} />
                 )}
            </div>
            </div>
        </>
    )
}