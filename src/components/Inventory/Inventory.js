import React from 'react';
// import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct = () =>{
        const product = {};
        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        // .then(res => res.json())
        // .then(data =>console.log(data))
        // console.log(fakeData[0]);
    }
    
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>Price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image</span><input type="file"/></p>
            <button onClick={handleAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;