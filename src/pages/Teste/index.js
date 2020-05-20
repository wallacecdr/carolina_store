import React, { useEffect } from "react"

import ProductService from "../../services/product"

export default function Teste() {

  async function fetchParts() {
    const response = await ProductService.index()

    console.log(response)
    //console.log(response.data)
  }

  useEffect(() => {
    fetchParts()
  })


  return (
    <h1>Teste</h1>


  )
}