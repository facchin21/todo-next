

// 'use client' 

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {

    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }

    return {};
}


export const addProductToCart = (id: string) => {

    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] += 1;
    } else {
        cookieCart[id] = 1;
    }

    setCookie('cart', JSON.stringify(cookieCart));

}

export const removeProductFromCart = (id: string) => {

    const cookieCart = getCookieCart();

    // Pregunto si el producto ya está en el carrito y borro todas sus unidades
    if (cookieCart[id]) {
        delete cookieCart[id];
        setCookie('cart', JSON.stringify(cookieCart));
    }

}

export const addOneProduct = (id: string) => {

    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] += 1;
        setCookie('cart', JSON.stringify(cookieCart));
    }
}

export const removeSingleItemFromCart = (id: string) => {

    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] -= 1;
        if (cookieCart[id] === 0) {
            delete cookieCart[id];
        }
        setCookie('cart', JSON.stringify(cookieCart));
    }
}