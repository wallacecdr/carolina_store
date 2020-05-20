import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Api from "../../services/api"
import ProductService from "../../services/product"
import * as CartActions from "../../store/modules/cart/actions"

import { FiShoppingBag } from 'react-icons/fi';
import "./styles.css"

function Cart() {

  const [clothingParts, setClothingParts] = useState([])
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, part) => {
      sumAmount[part.id] = part.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadClothingParts() {
      const response = await ProductService.index()

      setClothingParts(response.data)
    }

    loadClothingParts()
  }, [])

  function handleAddProduct(part) {
    dispatch(CartActions.addToCart(part))
  }

  return (
    < main className="container" >
      <ul className="book-catalog">
        {
          clothingParts.map(part => (
            <li key={part._id} className="book-container">
              <img src={process.env.REACT_APP_BASE_API + part.productImage} alt={part.title} />
              <strong>{part.title}</strong>
              <span>R$ {part.price}</span>

              <button type="button" onClick={() => { handleAddProduct(part) }}>
                <div>
                  <FiShoppingBag size={16} color="#33BFCB" />{' '}
               {amount[part.id] || 0}
             </div>

                <span>Adiconar</span>
              </button>
            </li>
          ))
        }
      </ul>
    </main >
  )
}

export default Cart