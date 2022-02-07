import React from 'react';
import Product from './Product';

export default function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) =>
                <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
            )}
            <div className='md:col-span-full mx-auto bg-white w-full'>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/Build_Trust/Amplify_Brand_truths/Workplace/Virtual_Tours/XCM_Manual_1369887_fr_brand_truth_ratatouille_1150x323_134de59c-d842-4d94-ae65-b4f0b08c7312._CB638733761_.jpg" alt="ads" className='w-3/4 mx-auto p-5 sm:w-full' />
            </div>
            <div className='md:col-span-2'>
                {products.slice(4, 5).map(({ id, title, price, description, category, image, rating }) =>
                    <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                )}
            </div>
            {products.slice(5, products.length).map(({ id, title, price, description, category, image, rating }) =>
                <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
            )}
        </div>
    );
}
