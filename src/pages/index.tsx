import React from 'react'; 

import { Link } from 'gatsby';

import Helmet from 'react-helmet';

import styled from "styled-components";


const MenuButton = styled.div`

display: block; 

right: 0;

position: absolute;

z-index: 999; 

`


export default function Home() {

return ( 

<div id="grid-container">

<MenuButton> 

<svg id="quadicon" width={100} height={100}>

<g className="icon"> 

<rect className="frstbox" x="12.5" y="12.5" width={35} height={35} fill="#a2a2a2" />

<rect className="scndbox" x={50} y="12.5" width={35} height={35} fill="#a2a2a2" /> 

<rect className="thrdbox" x="12.5" y={50} width={35} height={35} fill="#a2a2a2" /> 

<rect className="frthbox" x={50} y={50} width={35} height={35} fill="#a2a2a2" />

</g> 

</svg> 

</MenuButton> 

<nav id="top-drawer"> 

</nav>

</div> 

);

}
