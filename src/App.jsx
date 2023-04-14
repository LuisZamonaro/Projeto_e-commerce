import { useState } from 'react'
import HeaderPage from './HeaderPage'
import OverlayGalery from './OverlayGalery'
import BodyPage from './BodyPage'
import './styles.css'
import CartProvider from './CartContext'


function App() {

  const [openGallery, setOpenGallery] = useState(false);


  return (
    <CartProvider>
      <div className="container">
        {
          openGallery && (
            <div className='shadow' onClick={() => setOpenGallery(false)}>

            </div>
          )
        }

        <HeaderPage />
        <BodyPage openGallery={openGallery} setOpenGallery={setOpenGallery} />
      </div>
    </CartProvider>
  )
}

export default App
