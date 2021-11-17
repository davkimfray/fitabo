import * as React from "react"
import FontStyles from "./styles/FontStyles";

import { GlobalStyles } from "../styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
    <FontStyles/>
      <GlobalStyles/>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
