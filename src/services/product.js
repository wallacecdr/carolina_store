import Api from "./api"

const ProductService = {
  index: () => Api.get("/products")
}

export default ProductService