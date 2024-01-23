import React, { useState } from "react";
import Product, { NonNullColors, VariantNames } from "../interfaces/Products";

export interface AddToCartForm {
  variant: VariantNames;
  quantity: number;
  color: NonNullColors;
  unitPrice: number;
}

export default function useAddToCartForm({
  product,
  defaultVariant = "normal",
  defaultColor = typeof product.colors == "string"
    ? product.colors
    : product.colors[0],
  defaultUnitPrice = product.defaultPrice,
  defaultQuantity = 1,
}: {
  product: Product;
  defaultVariant?: VariantNames;
  defaultColor?: NonNullColors;
  defaultUnitPrice?: number;
  defaultQuantity?: number;
}) {
  const [formValues, setFormValues] = useState<AddToCartForm>({
    variant: defaultVariant,
    quantity: defaultQuantity,
    color: defaultColor,
    unitPrice: defaultUnitPrice,
  });

  function handleVariantChange(
    event: React.MouseEvent<HTMLElement>,
    value: AddToCartForm["variant"] | null
  ) {
    if (value !== null)
      setFormValues({
        ...formValues,
        variant: value,
        unitPrice:
          product.variants.find((v) => v.name == value)?.price ??
          product.defaultPrice,
      });
  }
  function handleColorChange(
    event: React.MouseEvent<HTMLElement>,
    value: AddToCartForm["color"] | null
  ) {
    if (value !== null) setFormValues({ ...formValues, color: value });
  }
  function handleQuantityChange(
    event: React.SyntheticEvent,
    value: number | undefined
  ) {
    event.preventDefault();
    setFormValues({ ...formValues, quantity: value ?? 0 });
  }

  return {
    formValues,
    handleVariantChange,
    handleColorChange,
    handleQuantityChange,
  };
}