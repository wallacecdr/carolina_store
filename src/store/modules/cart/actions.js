import { createAction } from "@reduxjs/toolkit"

export const addToCart = createAction("cart/add_part")
export const removeFromCart = createAction("cart/remove_part")
export const updateAmount = createAction("cart/update_amount")