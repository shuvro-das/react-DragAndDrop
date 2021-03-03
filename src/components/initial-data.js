import menu1 from "../assets/1.jpg";
import menu2 from "../assets/2.jpeg";
import menu3 from "../assets/3.jpeg";
import menu4 from "../assets/4.jpeg";
import menu5 from "../assets/5.jpg";
import menu6 from "../assets/6.jpeg";
import menu7 from "../assets/7.jpg";

const initialData = {
    products: {
        'product-1': {id: 'product-1', content: menu1, price: '80'},
        'product-2': {id: 'product-2', content: menu2, price: '140'},
        'product-3': {id: 'product-3', content: menu3, price: '180'},
        'product-4': {id: 'product-4', content: menu4, price: '120'},
        'product-5': {id: 'product-5', content: menu5, price: '100'},
        'product-6': {id: 'product-6', content: menu6, price: '70'},
        'product-7': {id: 'product-7', content: menu7, price: '90'}
    },
    totalPrice: 0,
    productsColumn: {
        products:{
            id: 'products',
            title: 'Products',
            productIds: ['product-1', 'product-2', 'product-3', 'product-4', 'product-5', 'product-6', 'product-7']
        }
    },
    days: {
        'monday': {
            id: 'monday',
            title: 'Monday',
            productIds: [],
        },
        'tuesday': {
            id: 'tuesday',
            title: 'Tuesday',
            productIds: [],
        },
        'wednesday': {
            id: 'wednesday',
            title: 'Wednesday',
            productIds: [],
        },
        'thursday': {
            id: 'thursday',
            title: 'Thursday',
            productIds: [],
        },
        'friday': {
            id: 'friday',
            title: 'Friday',
            productIds: [],
        },
        'saturday': {
            id: 'saturday',
            title: 'Saturday',
            productIds: [],
        },
        'sunday': {
            id: 'sunday',
            title: 'Sunday',
            productIds: [],
        },
    },
    daysOrder: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
}

export default initialData;
