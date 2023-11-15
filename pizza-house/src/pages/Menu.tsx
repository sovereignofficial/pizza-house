import React from "react"
import { MenuLayout } from "../components/menu/MenuLayout"
import { MenuView } from "../components/menu/MenuView"
import { useReduxSelector } from "../hooks/reduxHooks";
export const Menu = () => {
  const {menu} = useReduxSelector(state=>state.menuReducer);

  return (
    <React.Fragment>
      <MenuLayout>
        {menu && <MenuView menu={menu} />}
      </MenuLayout>
    </React.Fragment>
  )
}
