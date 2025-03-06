'use client';

import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0}: Props) => {
    const [count, setCount] = useState(value)

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <span className="text-9xl">
                {count}
            </span>

            <div className="flex gap-4">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
                    onClick={() => setCount(count + 1)}
                >
                    + 1
                </button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
                    onClick={() => setCount(count - 1)}
                >
                    - 1
                </button>
            </div>
        </div>
    )
}
