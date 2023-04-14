import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'

import product1Thumb from '../images/image-product-1-thumbnail.jpg'
import product2Thumb from '../images/image-product-2-thumbnail.jpg'
import product3Thumb from '../images/image-product-3-thumbnail.jpg'
import product4Thumb from '../images/image-product-4-thumbnail.jpg'


import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'

import cartIcon from '../images/icon-cart-bottom.svg'

import iconClose from '../images/icon-close.svg'
import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'


export default function OverlayGallery({setOpenGallery, image, handleImage, nextImage, prevImage}) {
    return (

        <>
        <div className="containerOverlay">
            <div className="wrapperOverlay">
                <div className="containerFotoPrincipalOverlay">
                    <div className="iconCloseOverlay" onClick={() => setOpenGallery(false)}>
                        <img src={iconClose} />
                    </div>
                    <div className="iconNextOverlay" onClick={nextImage}>
                        <img className='iconsOverlayNP' src={iconNext} />
                    </div>
                    <div className="iconPrevOverlay" onClick={prevImage}>
                        <img className='iconsOverlayNP' src={iconPrev} />
                    </div>
                    <div className="fotoPrincOver">
                        <img id='product1' src={image} />
                    </div>
                    <div className="containerMiniFotosOverl">
                        <div className="fotoMini-1-overlay">
                            <div className="shadowProductThumbOverl" onClick={() => handleImage(1)}>
                                <img className='productThumb' src={product1Thumb} />
                            </div>
                        </div>
                        <div className="fotoMini-2-overlay">
                            <div className="shadowProductThumbOverl" onClick={() => handleImage(2)}>
                                <img className='productThumb' src={product2Thumb} />
                            </div>
                        </div>
                        <div className="fotoMini-3-overlay">
                            <div className="shadowProductThumbOverl" onClick={() => handleImage(3)}>
                                <img className='productThumb' src={product3Thumb} />
                            </div>
                        </div>
                        <div className="fotoMini-4-overlay">
                            <div className="shadowProductThumbOverl" onClick={() => handleImage(4)}>
                                <img className='productThumb' src={product4Thumb} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}