import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from "./styles";

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio :(</p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1665964800&Signature=ayiXgZjMUaFbk7h98auM9E9WNwNln31bOajoMmysyoznYRNnp~d851Rj-PRlfTEAYXa2jfZ648ou-pdsaXs-LfLYALyoYU98Ia2w~zL7m8y4FlcbSkFIKfiXrmNtstcZrPODUXYJDYQeSNn710fQaq-Z1gJTJ5a1EV4uLCHVn-Az4LdY~W4hQadaEvkJgDm2bX0Bs2oN4mb77uyizN1N5RrsTbMtF9jgIr2Wd5h614jURwjzrh0CRQotspkWDMnnyzA-c7g3SQmAptcX-8T1TEF94F2zhvChmWZ18gV3pn-fNlp5tLM8IdtARL~BzeYfl~y2i0uzndS1i-yVyFzS0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50.00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100.00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
