import Styled from 'styled-components'

export const Box = Styled.div `
    margin-top: 200px;
    margin-left: 50px;
    width: 240px;
    height: 370px;
    -webkit-box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);
    -moz-box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);
    box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);

`
export const Degradado = Styled.div `
 
    margin: 0;
    padding: 0;
    
    width: 100%;
    height: 33%;
    background: rgba(112,206,235,1);
    background: -moz-linear-gradient(45deg, rgba(112,206,235,1) 0%, rgba(112,206,235,1) 25%, rgba(182,245,37,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(112,206,235,1)), color-stop(25%, rgba(112,206,235,1)), color-stop(100%, rgba(182,245,37,1)));
    background: -webkit-linear-gradient(45deg, rgba(112,206,235,1) 0%, rgba(112,206,235,1) 25%, rgba(182,245,37,1) 100%);
    background: -o-linear-gradient(45deg, rgba(112,206,235,1) 0%, rgba(112,206,235,1) 25%, rgba(182,245,37,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(112,206,235,1) 0%, rgba(112,206,235,1) 25%, rgba(182,245,37,1) 100%);
    background: linear-gradient(45deg, rgba(112,206,235,1) 0%, rgba(112,206,235,1) 25%, rgba(182,245,37,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#70ceeb', endColorstr='#b6f525', GradientType=1 );

`

export const Foto = Styled.img `

    margin-top: -25%;
    margin-left: 20%;
    width: 60%;
    height: 38%;
    overflow: hidden;
    object-fit: cover;

    border-radius: 50%;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 3px solid #ffffff;

    -webkit-box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);
    -moz-box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);
    box-shadow: 2px 5px 11px 1px rgba(0,0,0,1);

`
export const Ancort = Styled.h1 `

    text-align: center;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 30px;
    letter-spacing: -0.6px;
    word-spacing: -1.4px;
    color: #09579C;
    font-weight: 700;
    text-decoration: none;
    font-style: italic;
    font-variant: normal;
    text-transform: none;
`
 
export const Subtitulo = Styled.h3 `
    text-align: center;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 25px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #288ED9;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;

`
export const Parrafo = Styled.p `
    text-align: center;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 16px;
    letter-spacing: -0.6px;
    word-spacing: -1.4px;
    color: #000000;
    font-weight: 700;
    text-decoration: none;
    font-style: italic;
    font-variant: normal;
    text-transform: none;
`
export const Info = Styled.div `
    width: 150px;
    height: 100px;
    border: black;
`