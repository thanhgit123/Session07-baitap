import React from 'react'

export default function Product({listProduct}) {
  return (
    <>
        <div style={{width:"100%",background:"linear-gradient(#7bf2e9,#b65eba)"}}>
            <h4>My Shop</h4>
            <p>Cart : zzzz</p>
        </div>
        <h1>Product List</h1>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"40px" }}>
            {listProduct.map((item,index)=>{
                return(
                    <div key={index}  style={{
                        height: "50vh",
                        background: "linear-gradient(#cfd9df,#e2ebf0)",
                        width: "350px",
                        padding: "24px",
                      }}>
                            <img src={item.image} alt="" style={{ width: "300px" }} />
                            <p>{item.title}</p>
                            <p>Giá : ${item.price}</p>
                            <button
                            style={{
                                width: "150px",
                                height: "40px",
                                borderRadius: "7px",
                                outline: "none",
                                background: "linear-gradient(  #F0F600,#00A8AA )",
                            }}
                            >
                            {item.button}{" "}
                            </button>
                    </div>
                )
            })}
        </div><br /><br />
        
    </>
  )
}
