import { useState } from "react";

export const AddPlace = () => {
    const [data, setData] = useState({})
    if (document.monetization) {
        return (
            
<div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
    <img alt="moto" src="/images/object/1.png" class="absolute -right-16 -bottom-16 h-40 w-40 mb-4"/>
    <div class="w-4/6">
        <p class="text-gray-800 text-lg font-medium mb-2">
            NextJS
        </p>
        <p class="text-gray-400 text-xs">
            NextJs build all free components and templates for React website.
        </p>
    </div>
</div>

        )
    }
};