import React from "react"
import { MenuLayout } from "../components/menu/MenuLayout"
import { MenuView } from "../components/menu/MenuView"
export const Menu = () => {
  return (
    <React.Fragment>
      <MenuLayout>
        <MenuView/>
      </MenuLayout>
    </React.Fragment>
  )
}
