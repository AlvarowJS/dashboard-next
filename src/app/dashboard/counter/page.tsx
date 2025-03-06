import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: 'Shopping ccart',
  description: 'un simple contado'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito</span>
      <CartCounter value={44 } />
    </div>
  );
}