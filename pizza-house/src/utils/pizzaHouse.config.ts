import { AppFeature,LandingSection } from "./global";

const landing1 = "https://images.unsplash.com/photo-1560202212-441ad59100fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";
const addressImg = "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
const pizzaMenuItem = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"


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
        path:'/cart'
    },
    {
        route:'Orders',
        path:'/order'
    },
];

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

export {
    landing1,
    addressImg,
    pizzaMenuItem,
    routes,
    appFeatures,
    landingSections,
    pizzaMenu
}