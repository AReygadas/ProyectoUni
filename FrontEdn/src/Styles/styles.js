import styled from 'styled-components'
import F1 from '../images/F1.jpeg'

export const Enlace = styled.h1`
    font-family: verdana;
    text-align: center;
    font-size: 16px;
    color: #337AFF;
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
`
export const Lista = styled.li`
     color: #FFFFFF;
`
export const FondoTabla = styled.div`
    background-color: white;
`

export const Texto = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #FFFFFF;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
`
export const Contenedor = styled.div`
    
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.5);
    -moz-box-shadow:10px 10px 5px #000000;
    -webkit-box-shadow:10px 10px 5px #000000;
    box-shadow:10px 10px 5px #000000;
`
export const FondoH = styled.div `
    padding-top: 9%;
    padding-bottom: 15%;
    position: static;
    width: 100%;
    height: auto;
    background-image: url(${F1});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -o-background-size: 100% 100%, auto;
    -moz-background-size: 100% 100%, auto;
    -webkit-background-size: 100% 100%, auto;
    background-size: 100% 100%, auto;
    display: flex;
    z-index:-99999;
   
`
export const Fondo404 = styled.div `
   padding-top: 9%;
    padding-bottom: 50px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://images.alphacoders.com/476/thumb-1920-476980.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -o-background-size: 100% 100%, auto;
    -moz-background-size: 100% 100%, auto;
    -webkit-background-size: 100% 100%, auto;
    background-size: 100% 100%, auto;
    display: flex;
    z-index:-99999;
` 
export const Fondo1 = styled.div `
   
    padding-top: 9%;
    padding-bottom: 50px;
    position: static;
    width: 100%;
    height: auto;
    background-image: url("https://lh3.googleusercontent.com/proxy/h-IkJd0eAExA7vStAYYqaPg1_QMDLUyKuKrXh19LA_0IH7muuEx8TEQKA59vMsi6yBRR7YB7LjOYyj762775LwE6ZYwTNjkJrSCgv4p2L_2r");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -o-background-size: 100% 100%, auto;
    -moz-background-size: 100% 100%, auto;
    -webkit-background-size: 100% 100%, auto;
    background-size: 100% 100%, auto;
    display: flex;
    z-index:-99999;
 
`
export const Fondo2 = styled.div `
    padding-top: 12%;
    position:absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://image.shutterstock.com/image-photo/blue-chalkboard-abstract-background-260nw-1061899094.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -o-background-size: 100% 100%, auto;
    -moz-background-size: 100% 100%, auto;
    -webkit-background-size: 100% 100%, auto;
    background-size: 100% 100%, auto;
    display: flex;
    
`
export const Pie = styled.div`
   width: 100%;
   z-index:999999; 
   background-color: rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.7);
    -moz-box-shadow:10px 10px 5px #000000;
    -webkit-box-shadow:10px 10px 5px #000000;
    box-shadow:10px 10px 5px #000000;
    position: fixed;
	bottom: 0;
`
export const Foto = styled.img `
    width: 90px;
    height: auto;
    overflow: hidden;
   
   `
   export const Foto2 = styled.img `
   width: 30px;
   height: auto;
   overflow: hidden;
  
  `