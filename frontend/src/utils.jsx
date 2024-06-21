// utils.js

// Function to format price into "IDR 22.499 K" format
export function formatPrice(price) {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${formattedPrice}`;
}
