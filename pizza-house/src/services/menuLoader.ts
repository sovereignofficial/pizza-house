import { getMenu } from "./apiMenu";

export async function menuLoader(){
    const menu = await getMenu();
    return menu
}