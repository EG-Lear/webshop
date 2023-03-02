import React, { useState, useEffect } from 'react'
import AdminNavBar from '../Components/AdminNavBar'

const Inventory = () => {
  const [values, setValues] = useState(
    {
      product: "test",
      picture: "a url",
      price: 0,
      description: "a blank description",
      category: "none"
    }
  )

  const handleChange = (event) => { //handles changes to input fields
    // console.log('in change')
    const { id, value } = event.target
    setValues({
      ...values,
      [id]: value
    })
  }

  return (
    <div>
      <AdminNavBar />
      inventory
      <br/>
      <br/>
      <form>
        <label>Product: </label>
        <input id='product' value={values.item} onChange={handleChange}></input>
        <br/>
        <label>Picture: </label>
        <input id='picture' value={values.picture} onChange={handleChange}></input>
        <br/>
        <label>Price: </label>
        <input id='price' value={values.price} onChange={handleChange}></input>
        <br/>
        <label>Description: </label>
        <input id='description' value={values.description} onChange={handleChange}></input>
        <br/>
        <label>Category: </label>
        <input id='category' value={values.category} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default Inventory