
import { Outlet, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";


let MyLayout = function (){


    return(
        <>
            <MyHeader/>
            <Outlet/> 
            <MyFooter/>
        </>
    )
}

export default MyLayout;


