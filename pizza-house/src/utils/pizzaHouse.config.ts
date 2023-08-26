import { AppFeature,CartItemType,LandingSection, OrderType } from "./global";

const landing1 = "https://images.unsplash.com/photo-1560202212-441ad59100fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";
const addressImg = "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
const pizzaMenuItem = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"




const appFeatures:AppFeature[] = [
    {
        title:'🚚 Fast Delivery',
        description:'Get your order delivered to your doorstep quickly and efficiently. We prioritize fast delivery so you can enjoy your fresh meals as soon as possible.',
    },
    {
        title:"🌟 High Quality",
        description:'Our ingredients are sourced from trusted suppliers to ensure the highest quality. Experience the richness of flavors and textures in every bite.'
    },
    {
        title:'🧼 100% Hygienic',
        description:"Your health and safety are our top priorities. We maintain strict hygiene standards throughout our cooking and packaging processes to provide you with meals you can trust."
    }
]

const landingSections:{
    [key:string]:LandingSection
} = {
    section1:{
        title:'Welcome to Pizza House',
        subtitle:"We're passionate about pizza and we're here to make your pizza dreams come true.",
        bgImage:landing1,
        titleHighlight:'Pizza House'
    },
    section2:{
        title:'Our Location',
        subtitle:"We are located at the heart of the city, surrounded by the bustling life and energy of urban living. Our address is 1234 Example Street, Cityville, ABC123.",
        bgImage:addressImg,
        titleHighlight:'Location'
    }
}

const pizzaMenu = [
    {
        name: "Margherita",
        description: "Classic tomato sauce, mozzarella, fresh basil",
        price: "$10.99",
    },
    {
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, pepperoni",
        price: "$12.99",
    },
    {
        name: "Vegetarian",
        description: "Tomato sauce, mozzarella, bell peppers, mushrooms, onions",
        price: "$11.99",
    },
    {
        name: "Supreme",
        description: "Tomato sauce, mozzarella, pepperoni, sausage, bell peppers, olives, onions",
        price: "$14.99",
    },
    {
        name: "Hawaiian",
        description: "Tomato sauce, mozzarella, ham, pineapple",
        price: "$13.49",
    },
    {
        name: "Meat Lovers",
        description: "Tomato sauce, mozzarella, pepperoni, sausage, bacon, ground beef",
        price: "$15.99",
    },
];

const menuFilters = [
    {
        contains: 'Tomatoes',
        checked: false,
    },
    {
        contains: 'Chicken',
        checked: false,
    },
    {
        contains: 'Mushrooms',
        checked: false,
    },
    {
        contains: 'Pepperoni',
        checked: false,
    },
    {
        contains: 'Bacon',
        checked: false,
    },
];

const priceFilter = {
    name:'Price',
    price:[0,100],
    current:0,
}

const cartData:CartItemType[] = [
    {
        itemImg:pizzaMenuItem,
        name: "Pepperoni",
        price:"$12.99",
        quantity:1,
        description: "Tomato sauce, mozzarella, pepperoni",

    },
    {
        itemImg:pizzaMenuItem,
        name: "Margherita",
        price:"$10.99",
        quantity:3,
        description: "Classic tomato sauce, mozzarella, fresh basil",

    }
];

const ordersData:OrderType[] = [
    {
        client:"JohnDoe",
        phone:"123456789",
        address:"XXX street 1 , Warsaw",
        date: new Date().toLocaleString(),
        status:"Delivered",
        items:[
            {
                itemImg:pizzaMenuItem,
                name: "Pepperoni",
                price:"$12.99",
                quantity:1,
                description: "Tomato sauce, mozzarella, pepperoni",
        
            },
            {
                itemImg:pizzaMenuItem,
                name: "Margherita",
                price:"$10.99",
                quantity:3,
                description: "Classic tomato sauce, mozzarella, fresh basil",
        
            }
        ],
        paid:46.99,
    },
    {
        client: "JaneSmith",
        phone: "987654321",
        address: "YYY avenue 5 , Berlin",
        date:  new Date().toLocaleString().toLocaleString(),
        status: "Preparing",
        items: [
            {
                itemImg: pizzaMenuItem,
                name: "Hawaiian",
                price: "$14.99",
                quantity: 2,
                description: "Tomato sauce, mozzarella, ham, pineapple",
            },
            {
                itemImg: pizzaMenuItem,
                name: "Vegetarian",
                price: "$11.99",
                quantity: 1,
                description: "Tomato sauce, mozzarella, bell peppers, mushrooms, olives",
            }
        ],
        paid: 41.97,
    },
    {
        client: "RobertJohnson",
        phone: "555111222",
        address: "ZZZ road 10 , Paris",
        date:  new Date().toLocaleString(),
        status: "Delivered",
        items: [
            {
                itemImg: pizzaMenuItem,
                name: "Supreme",
                price: "$15.99",
                quantity: 1,
                description: "Tomato sauce, mozzarella, pepperoni, sausage, onions, bell peppers",
            }
        ],
        paid: 15.99,
    }
]

const routes = [
    {
        route:'Home',
        path:'/'
    },
    {
        route:'Menu',
        path:'/menu'
    },
    {
        route:'Cart',
        path:'/cart',
        itemsAmount:cartData.length,
    },
    {
        route:'Orders',
        path:'/order',
        itemsAmount:ordersData.length
    },
];

export {
    landing1,
    addressImg,
    pizzaMenuItem,
    routes,
    appFeatures,
    landingSections,
    pizzaMenu,
    menuFilters,
    priceFilter,
    cartData,
    ordersData
}