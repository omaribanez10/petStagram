import React, {Fragment} from "react";
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyle } from './GlobalStyles'
import { Logo } from './components/Logo'

export const App = () =>(

    <Fragment>
        <Logo/>
        <GlobalStyle/>
        <ListOfCategories/>
        <ListOfPhotoCards/>
    </Fragment>
   
)
 