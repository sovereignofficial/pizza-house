import { store } from "../redux/store";

export type AppFeature = { title: string, description: string };

export type LandingSection = { title: string, subtitle: string, bgImage: string, titleHighlight: string }

export type CartItemType = { name: string, itemImg: string, price: string, quantity: number, description: string }

export type OrderType = {
    client: string
    phone: string,
    address: string,
    date: string,
    status: string,
    items: CartItemType[]
    paid: number
}

export type MenuItem = {
    id:number,
    name:string,
    unitPrice:number,
    imageUrl:string,
    ingredients:string[],
    soldOut:boolean
}

//redux
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;