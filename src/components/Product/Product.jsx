import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useRef } from 'react';
import {useState, useEffect, useMemo} from 'react'

const Product = () => {

    
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }]) 

        setName('')
        setPrice('')
        nameRef.current.focus();
    }

    const total = useMemo (() => {
        const result = products.reduce((result, prod) => {
            console.log('Calculate again !!')
            return result + prod.price
        }, 0)
        return result
    }, [products])
    

    return (
        <div style = {{padding: '10px 32px'}}>
            <input 
                type="text"
                value = {name}
                onChange = {e => setName(e.target.value)}
                placeholder = 'Enter name ...'
                required 
                ref = {nameRef}
            />
            <br/>
            <input 
                type="number"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
                placeholder = 'Enter price ...'
                required
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br/>
                Total: {total}
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                {products.map((product) => (
                    <>
                        <tr>{product.name}</tr>
                    </>
                )
                )}



            </table>
        </div>
    )
}

export default Product