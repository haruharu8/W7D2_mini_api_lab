
import { useEffect, useState } from "react";
import axios from "axios";


const PhonesList = () => {
    const [phoneObjects, setPhoneObjects] = useState([])

    useEffect(() => {

    axios('https://dummyjson.com/products').then((response)=> {
        let array = response.data.products;
        setPhoneObjects(array);
    })

    }, [])

return(
    <div>
        {phoneObjects.map((product, index) => {
            return (

                <div key={index}>
                    <h2> {product.title} </h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description} </p>
                
                </div>

            )
        })}
    </div>


)


}

export default PhonesList;