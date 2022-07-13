
import React, {useState, useEffect} from 'react'

const Avatar = () => {

    const [avatar, setAvatar] = useState();


    // Clean up
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }

    }, [avatar])


    const handledPreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview  = URL.createObjectURL(file);
        console.log(URL.createObjectURL(file))

        setAvatar(file)
    }

    return (
        <div>
            <input 
                type = 'file'
                onChange={handledPreviewAvatar}
            />
            {
                avatar && (
                    <img src= {avatar.preview} alt="" width="400px" height="300px" />
                )
            }
        </div>
    )
}

export default Avatar