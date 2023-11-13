import React,{useState} from 'react'
import Header from './pages/Bai1/Header'
import Body from './pages/Bai1/Body'
import Footter from './pages/Bai1/Footter'
import Product from './pages/Bai1/Bai2/Product'
import Cart from './pages/Bai1/Bai2/Cart'
export default function App() {
  const [cards,setCards]=useState([
    {
        image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Name Card",
        content:"This is Example",
        button:"Submit",
        price:300000
    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
    {
      image:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Name Card",
      content:"This is Example",
      button:"Submit",
      price:300000

    },
])
  return (
    <>
        {/* <Header></Header>
        <Body myCard={cards}></Body>
        <Footter></Footter>  */}

        <Product listProduct={cards}></Product>
        <Cart></Cart>
    </>
  )
}

