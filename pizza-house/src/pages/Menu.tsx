import React from "react"
import { MenuLayout } from "../components/menu/MenuLayout"
import { MenuView } from "../components/menu/MenuView"
import { useLoaderData } from "react-router-dom"
import { MenuItem } from "../utils/global"
export const Menu = () => {
  const menu = useLoaderData() as MenuItem[] | undefined
  return (
    <React.Fragment>
      <MenuLayout>
        {menu && <MenuView menu={menu} />}
      </MenuLayout>
    </React.Fragment>
  )
}
