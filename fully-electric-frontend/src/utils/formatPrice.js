export default function formatPrice(country, price) {
    switch(country.toLowerCase()) {
        case 'uk':
            if (parseInt(price) >= 1000) {
                let array = price.split('');
                return `£${array.splice(0, array.length - 3).join('')},${array.join('')}`;
            }
            return `£${price}`;
    }
}
