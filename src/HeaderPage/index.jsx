import logoSite from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import userIcon from '../images/image-avatar.png'
import product1 from '../images/image-product-1.jpg'
import deleteImage from '../images/icon-delete.svg'
import hambImg from '../images/icon-menu.svg'
import closeMenu from '../images/icon-close-menu.svg'
import Button from '../Button'


import { CartContext } from '../CartContext'
import { useState, useContext } from 'react'

export default function HeaderPage({ counter }) {

    const { quantity } = useContext(CartContext);
    const [cartQuantity, setCartQuantity] = quantity;

    const [openCart, setOpenCart] = useState(false);

    const [openMenu, setOpenMenu] =useState('')

    return (
        <div className="containerHeader">
            <div className="wrapperHeader">
                <div className="hamburguerM" onClick={() => setOpenMenu(prevState => !prevState)}>
                    <img src={hambImg} />
                </div>
                
                    <div className={`containerMenuOpen ${openMenu == true ? 'active' : ''}`}>
                        <div className="closeMenuIcon" onClick={() => setOpenMenu(prevState => !prevState)}>
                            <img src={closeMenu} />
                        </div>
                        <div className="containerOptionsMenuM">
                            <div className="opMenuM">
                                Collections
                            </div>
                            <div className="opMenuM">
                                Men
                            </div>
                            <div className="opMenuM">
                                Woman
                            </div>
                            <div className="opMenuM">
                                About
                            </div>
                            <div className="opMenuM">
                                Contact
                            </div>
                            <div className="shadowMenuOpen">

                            </div>
                        </div>
                    </div>
                

                <div className="logoSite">
                    <img src={logoSite} />
                </div>
                <div className="optionsMenu">
                    <div className="menuOp">
                        <span className='itemMenu'>Collections</span>
                    </div>
                    <div className="menuOp">
                        <span className='itemMenu'>Men</span>
                    </div>
                    <div className="menuOp">
                        <span className='itemMenu'>Women</span>
                    </div>
                    <div className="menuOp">
                        <span className='itemMenu'>About</span>
                    </div>
                    <div className="menuOp">
                        <span className='itemMenu'>Contact</span>
                    </div>
                </div>
                <div className="menuUser">
                    <div className="containerCartIcon">
                        <div className="cartIcon" onClick={() => setOpenCart(prevState => !prevState)}>
                            <img src={cartIcon} />
                        </div>
                        <div className="containerCartQ">
                            {
                                cartQuantity > 0 && (
                                    <span className='quantityCartIcon'>
                                        {cartQuantity}
                                    </span>
                                )
                            }
                        </div>
                        <div className={`containerCart ${openCart ? 'active' : ''}`}>
                            <div className="titleCartC">
                                Cart
                            </div>

                            {
                                cartQuantity > 0 ? (
                                    <div className="containerPurchase">
                                        <div className="infoPurchase">
                                            <div className="imgShoesCart">
                                                <img id='product1Cart' src={product1} />
                                            </div>
                                            <div className="fallXvalue">
                                                <div className="fallLimited">
                                                    Fall Limited Edition Sneakers
                                                </div>
                                                <div className="valuePurchase">
                                                    $125.00 x {cartQuantity} ${cartQuantity * 125}.00
                                                </div>
                                            </div>
                                            <div className="trashCam" onClick={() => setCartQuantity(prevState => prevState - 1)}>
                                                <img src={deleteImage} />
                                            </div>
                                        </div>
                                        <div className="buttonCheckout">
                                            <Button id='buttonCheckout'>Checkout</Button>
                                        </div>
                                    </div>
                                ) :
                                    (
                                        <div className="emptyCart">
                                            Your cart is empty.
                                        </div>
                                    )
                            }
                        </div>
                    </div>

                    <div className="userIcon">
                        <img id='iconUser' src={userIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}