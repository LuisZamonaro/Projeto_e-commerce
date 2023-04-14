import { useContext, useState } from 'react'
import { useEffect } from 'react'

import OverlayGallery from '../OverlayGalery'

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

import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'

import cartIcon from '../images/icon-cart-bottom.svg'

import { CartContext } from '../CartContext'
import Button from '../Button'

export default function ParteEsq({ openGallery, setOpenGallery }) {


    const [counter, setCounter] = useState(1)
    const { quantity } = useContext(CartContext)
    const [cartQuantity, setCartQuantity] = quantity

    const handleCounter = (action) => {
        if (action === 'minus') {
            if (counter > 0) {
                setCounter(prevState => prevState - 1)
                return
            }
            setCounter(0)
        }

        if (action === 'plus') {
            setCounter(prevState => prevState + 1)
            return
        }
        return
    }

    const [image, setImage] = useState(product1)
    const [imageCount, setImageCount] = useState(1)

    const handleImage = (clickedImage) => {

        if (clickedImage === 1) {
            setImage(product1)
            setImageCount(1)
            return
        }

        if (clickedImage === 2) {
            setImage(product2)
            setImageCount(2)
            return
        }

        if (clickedImage === 3) {
            setImage(product3)
            setImageCount(3)
            return
        }

        if (clickedImage === 4) {
            setImage(product4)
            setImageCount(4)
            return
        }
    }

    const prevImage = () => {
        if (imageCount === 1) {
            setImageCount(4)
            //handle image é a imagem Maior atual 
        } else {
            setImageCount(prevState => prevState - 1);
            // aqui é pra ele  voltar na última (4) imagem no 'next'
        }
    }

    const nextImage = () => {
        if (imageCount === 4) {
            setImageCount(1);
            // imageCount é a imagem atual
            //handle image é a imagem Maior atual 
        } else {
            setImageCount(prevState => prevState + 1);
            // aqui é pra ele voltar na primeira(1) imagem no 'previous'
        }
    }

    useEffect(() => {
        handleImage(imageCount)
    }, [imageCount])



    return (
        <>
            <div className="containerBodyPage">
                <div className="containerParteEsq">
                    <div className="containerFotoPrincipal">
                        <div className="fotoPrinc" onClick={() => setOpenGallery(true)}>
                            <img id='product1' src={image} />
                            <div className="iconNextM">
                                <img src={iconNext} onClick={nextImage} />
                            </div>
                            <div className="iconPrevM">
                                <img src={iconPrev} onClick={prevImage} />
                            </div>
                        </div>
                        <div className="containerMiniFotos">
                            <div className="fotoMini-1">
                                <div className="shadowProductThumb">
                                    <img className='productThumb' src={product1Thumb} onClick={() => handleImage(1)} />
                                </div>
                            </div>
                            <div className="fotoMini-2">
                                <div className="shadowProductThumb">
                                    <img className='productThumb' src={product2Thumb} onClick={() => handleImage(2)} />
                                </div>
                            </div>
                            <div className="fotoMini-3">
                                <div className="shadowProductThumb">
                                    <img className='productThumb' src={product3Thumb} onClick={() => handleImage(3)} />
                                </div>
                            </div>
                            <div className="fotoMini-4">
                                <div className="shadowProductThumb">
                                    <img className='productThumb' src={product4Thumb} onClick={() => handleImage(4)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerParteDir">
                    <div className="sneakerCompany">
                        SNEAKER COMPANY
                    </div>
                    <div className="titleParteDir">
                        Fall Limited Edition Sneakers
                    </div>
                    <div className="textParteDir">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </div>
                    <div className="containerValores">
                    <div className="valoresAtuais">
                        <div className="precoAtual">
                            $125.00
                        </div>
                        <div className="descontoAtual">
                            <div className="valorDescAtual">
                                50%
                            </div>
                        </div>
                    </div>
                    <div className="descontoAntigo">
                        $250.00
                    </div>
                    </div>
                 
                    <div className="quantityCard">
                        <div className="optionsQuantity">
                            <div className="iconMinus" onClick={() => handleCounter('minus')}>
                                <img src={iconMinus} />
                            </div>
                            <div className="CounterItem">
                                <span>{counter}</span>
                            </div>
                            <div className="iconPlus" onClick={() => handleCounter('plus')}>
                                <img src={iconPlus} />
                            </div>
                        </div>
                        <div className="addToCard">
                            <Button onClick={() => setCartQuantity(counter)} id='buttonAdd'><img src={cartIcon} /> <span id='addToCard'>Add to card</span>  </Button>
                        </div>
                    </div>
                </div>
            </div>
            {
                openGallery && (
                    <OverlayGallery setOpenGallery={setOpenGallery} image={image} handleImage={handleImage} nextImage={nextImage} prevImage={prevImage} />
                )
            }
        </>

    )
}



