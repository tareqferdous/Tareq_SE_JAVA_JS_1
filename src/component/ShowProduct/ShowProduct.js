import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProductDetails from '../ProductDetails/ProductDetails';

const ShowProduct = () => {

    const [services, setServices] = useState([])
    let history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/productList`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    },[])

    console.log(services);

    const handleClick = (id) => {
        history.push(`/checkout/${id}`)
    }

    return (
        <section className="py-5">
            <div className="text-center">
                <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Our Exclusive Products</h2>
    
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        services.map((service) => <ProductDetails handleClick={handleClick} key={service._id} service={service} />)
                    }                
                </div>
            </div>
        </section>
    );
};

export default ShowProduct;