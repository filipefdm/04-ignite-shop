import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51LkmicDEVJAJOXAylPBk88qZC9iQ17OJsaMiTjlhTHA6m3wlowhf5MZjepUn0xf8YlaIL4k3R3KrEFKHJSZlfZ1q00RcAQJXse",
  {
    apiVersion: "2022-08-01",
    appInfo: {
      name: "Ignite Shop",
    },
  }
);
