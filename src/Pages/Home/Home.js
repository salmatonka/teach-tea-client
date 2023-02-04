import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import ServiceCarts from '../Services/ServiceCarts';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrand, toggleStock } from '../../redux/actionCreators/filterAction';
import { loadService } from '../../redux/actionCreators/serviceActions';
import loadServiceData from '../../redux/thunk/services/fetchServices';

const Home = () => {
    
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filters);
    const services = useSelector((state) => state.service.services);
    const { brands, stock } = filters;
   
    const activeClass = "text-white bg-gray-900 border-white";

    useEffect(() => {
       dispatch(loadServiceData());
    }, []);

    let content;
    if (services.length) {
        content = services?.map((service) => (<ServiceCarts key={service.title} service={service} />));
    }
    if (services.length && (stock || brands.length)) {
        content = services.filter((service) => {
            if (stock) {
                return service.status === true;
            }
            return service;
        }
        ).filter((service) =>{
            if(brands.length){
                return  brands.includes(service.brand);
            }
            return service;
        }).map((service) => ( <ServiceCarts key={service.title} service={service} />))
    }

    return (
        <div>
            <Hero />
            {/* <HomeCart /> */}

            <div className='py-10 flex align-center justify-center'>
                <button
                    onClick={() => dispatch(toggleStock())}
                    className={`btn btn-outline ${stock ? activeClass : null}`}
                >In Stock</button>

                <button
                    onClick={() => dispatch(toggleBrand("food"))}
                    className={`btn btn-outline mx-4 ${brands.includes("food") ? activeClass : null}`}>food</button>

                <button
                    onClick={() => dispatch(toggleBrand("logistics"))}
                    className={`btn btn-outline ms-4 ${brands.includes("logistics") ? activeClass : null}`}>logistics</button>

                <button
                    onClick={() => dispatch(toggleBrand("beverage"))}
                    className={`btn btn-outline mx-4 ${brands.includes("beverage") ? activeClass : null}`}>beverage</button>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 max-w-7xl gap-10 mx-auto my-10'>
                {content}
            </div>


        </div>
    );
};

export default Home;