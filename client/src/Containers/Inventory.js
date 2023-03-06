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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sub')
    fetch('products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product: values.product,
        price: values.price,
        description: values.description,
        category: values.category,
        picture_url: values.picture
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else (
        console.log(data)
      )
    })
  }

  return (
    <div>
      <AdminNavBar />
      inventory
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
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
        <br/>
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default Inventory