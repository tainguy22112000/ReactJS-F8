import React, {useState} from 'react'
import { Title, Badge} from '@mantine/core'
import Button from '../Button/Button'

const GiftPage = () => {
    const gifts = [
        'Car',
        'RBG Keyboard',
        'House'
    ]

    const [like, setLike] = useState(0)
    const [gift, setGift] = useState('Not response')

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(index);
    }

    let firstAccess = true

    return (
        <>
            <Title>Gift Page</Title>

            <div className = "btn__element">
                {firstAccess && 
                    <Button
                        title = 'Create'
                        onClick = {randomGift}
                        isPrimaryColor = 'blue'
                    />  
                }

                <Button
                    title = 'Like'
                    onClick = {() => setLike(like + 1)}
                    isPrimaryColor = 'violet'
                />

                <Button
                    title = 'Reset'
                    onClick = {() => setLike(0)}
                    isPrimaryColor = 'red'
                />  
            </div>
            
            <div style = {{paddingTop: 20}}>
                <Badge size = 'xl'>{gifts[gift]}</Badge>
                <br/>
                <Badge size = 'xl'>{like}</Badge>
            </div>

     
        </>
    )
}

export default GiftPage