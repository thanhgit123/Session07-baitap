import React from 'react'
import "./Cart.scss"
export default function Cart() {
  return (
    <>
        <h1>Cart</h1>
        <div>
            <table className='myTable'>
                <thead className='table_title'>
                    <tr >
                        <th >Product</th>
                        <th >Quantity</th>
                        <th >Price</th>
                        <th >Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table_td'>
                        <td >aaaaa</td>
                        <td ><select style={{width:"200px"}}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select> </td>
                        <td >300000</td>
                        <td >1000</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
       
    </>
  )
}
