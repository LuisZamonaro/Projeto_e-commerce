import { createContext, useState } from 'react';
// para criar o estado, tem que usar o useState obrigatóriamente
export const CartContext = createContext();
// context API do react (padrão), cria o contexto

const CartProvider = ({children}) => {
    // Provedor, para prover o que for pra qualquer componente
  const [cartQuantity, setCartQuantity] = useState(0);
  //cartQuantity vai fazer a ligação com o contador // useState valor inicial do estado que recebe a quantidade de produtos
  const provider = {
    // provider é um objeto que vai armazenar qualquer coisa que precisar enviar para o contexto
    quantity: [cartQuantity, setCartQuantity]
  }

  return ( // esse Provider e o value são regras, precisam ser utilizados
    <CartContext.Provider value={provider}>
      {/* serve como forma de transporte de informação pq ele leva pro 'children' */}
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider