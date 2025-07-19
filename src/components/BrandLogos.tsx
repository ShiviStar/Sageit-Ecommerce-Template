import { useSelector } from 'react-redux'
import '../styles/BrandLogos.css'

export const BrandLogos = () => {
    const brandImages = useSelector((state: any) => state.data);

    return (
        <>
            <div className='brand-container'>
                 {brandImages.staticImages.map((img: any) =>
                    <img src={img.src} key={img.id} />
                 )}
            </div>
        </>
    )
}