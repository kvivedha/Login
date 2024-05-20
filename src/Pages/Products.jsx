import React, { useEffect } from 'react';
import { dresses } from '../util';
import { motion } from 'framer-motion';
import axios from 'axios';

const Products = () => {

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        axios.get('')
            .then(function (response) {
                console.log("response", response);
            })
            .catch(function (error) {
                console.log("error", error);
            })
    }

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center dashboard_div">
                {dresses.map((v, i) => (
                    <div className="card m-4 p-4" style={{ width: "22rem", height: '32rem', backgroundColor: '#e1fafd' }} key={i}>
                        <div className="card-headers h-100">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.2 }}>
                                <img src={v.images} alt="profile" style={{ width: '100%' }} />
                            </motion.div>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">{v.title}</h6>
                            <h4 className="card-title text-success"> $ . {v.price}</h4>
                            <p className="card-text">
                            </p>
                            <button className="btn w-100 font-weight-bold add-to-cart">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
