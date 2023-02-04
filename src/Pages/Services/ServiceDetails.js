import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
    const allServices = useLoaderData();
    const {title,image,rating,details} = allServices;
    return (
        <div>
             <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
				<span className="text-xs dark:text-gray-400">{rating}</span>
				<p>{details}</p>
			</div>
		</a>
		
		<div className="flex justify-center">
			<Link to="/"><button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load Back To Home</button></Link>
		</div>
	</div>
</section>  
        </div>
    );
};

export default ServiceDetails;
