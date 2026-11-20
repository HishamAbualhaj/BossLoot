"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { PaymentMethod } from "@/types/checkout";
import type { InferType } from "yup";
import type { shippingSchema } from "@/validation/shipping/address";
import { products } from "@/data/products";
export type CheckoutStep = "shipping" | "payment" | "review" | null;
export type ShippingAddress = InferType<typeof shippingSchema>;
export type CartItem = { productId: number; quantity: number };
export const emptyAddress: ShippingAddress = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
};
export type DemoOrder = {
  id: string;
  total: number;
  email: string;
  itemCount: number;
};
interface CheckoutState {
  cart: CartItem[];
  shipping: ShippingAddress;
  delivery: "standard" | "express";
  coupon: string;
  shippingComplete: boolean;
  paymentComplete: boolean;
  paymentMethod: PaymentMethod | null;
  demoCard: { holder: string; lastFour: string } | null;
  order: DemoOrder | null;
  step: CheckoutStep;
  shippingAddressId?: string;
  setQuantity: (id: number, quantity: number) => void;
  addItem: (id: number) => void;
  setCoupon: (coupon: string) => void;
  saveDraft: (address: ShippingAddress) => void;
  saveShipping: (address: ShippingAddress) => void;
  setDelivery: (delivery: "standard" | "express") => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setDemoCard: (holder: string, lastFour: string) => void;
  markPaymentComplete: () => void;
  confirmOrder: (total: number) => void;
  setShipping: (id: string) => void;
  setStep: (step: CheckoutStep) => void;
  nextStep: () => void;
  prevStep: () => void;
}
export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set, get) => ({
      cart: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 1 },
        { productId: 3, quantity: 1 },
      ],
      shipping: emptyAddress,
      delivery: "standard",
      coupon: "",
      shippingComplete: false,
      paymentComplete: false,
      paymentMethod: null,
      demoCard: null,
      order: null,
      step: "shipping",
      setQuantity: (id, quantity) =>
        set((state) => {
          const product = products.find((item) => item.id === id);
          const count = Math.max(
            0,
            Math.min(product?.stock || 0, Math.floor(quantity)),
          );
          return {
            cart: state.cart.flatMap((item) =>
              item.productId !== id
                ? [item]
                : count > 0
                  ? [{ ...item, quantity: count }]
                  : [],
            ),
            order: null,
          };
        }),
      addItem: (id) => {
        const product = products.find((item) => item.id === id);
        if (!product?.stock) return;
        set((state) => ({
          order: null,
          cart: state.cart.some((item) => item.productId === id)
            ? state.cart.map((item) =>
                item.productId === id
                  ? {
                      ...item,
                      quantity: Math.min(product.stock, item.quantity + 1),
                    }
                  : item,
              )
            : [...state.cart, { productId: id, quantity: 1 }],
        }));
      },
      setCoupon: (coupon) => set({ coupon }),
      saveDraft: (shipping) =>
        set((state) =>
          JSON.stringify(state.shipping) === JSON.stringify(shipping)
            ? state
            : {
                shipping,
                shippingComplete: false,
                paymentComplete: false,
                order: null,
              },
        ),
      saveShipping: (shipping) =>
        set({
          shipping,
          shippingComplete: true,
          paymentComplete: false,
          shippingAddressId: "demo-address",
          order: null,
        }),
      setDelivery: (delivery) => set({ delivery, order: null }),
      setPaymentMethod: (paymentMethod) =>
        set({ paymentMethod, paymentComplete: false, order: null }),
      setDemoCard: (holder, lastFour) =>
        set({
          demoCard: { holder, lastFour },
          paymentMethod: {
            option: "credit",
            data: { visaCardId: "demo-custom" },
          },
          paymentComplete: false,
        }),
      markPaymentComplete: () => set({ paymentComplete: true }),
      confirmOrder: (total) => {
        const state = get();
        if (
          !state.cart.length ||
          !state.shippingComplete ||
          !state.paymentComplete ||
          !state.paymentMethod ||
          state.order
        )
          return;
        set({
          order: {
            id: `BL-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
            total,
            email: state.shipping.email,
            itemCount: state.cart.reduce((sum, item) => sum + item.quantity, 0),
          },
          cart: [],
          coupon: "",
          shippingComplete: false,
          paymentComplete: false,
          paymentMethod: null,
          demoCard: null,
        });
      },
      setShipping: (shippingAddressId) => set({ shippingAddressId }),
      setStep: (step) => set({ step }),
      nextStep: () =>
        set({ step: get().step === "shipping" ? "payment" : "review" }),
      prevStep: () =>
        set({ step: get().step === "review" ? "payment" : "shipping" }),
    }),
    {
      name: "bossloot-checkout-v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        cart: state.cart,
        shipping: state.shipping,
        delivery: state.delivery,
        coupon: state.coupon,
        shippingComplete: state.shippingComplete,
        paymentComplete: state.paymentComplete,
        paymentMethod: state.paymentMethod,
        demoCard: state.demoCard,
        order: state.order,
        step: state.step,
      }),
    },
  ),
);
