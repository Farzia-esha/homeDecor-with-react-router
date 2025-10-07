import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";
import { useState } from "react";

const Products = () => {
    const {products}=useProducts();
    const [search,setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = 
    term ? products.filter(product =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products


    return (
        // <div>
        //     Products: {products.length}
        // </div>

        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>All Products {' '}
                <p>
                <span className='text-sm text-gray-500'>
            ({searchedProducts.length}) Products Found.
          </span> </p>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'/>
        </label>

                {/* <button className='btn btn-outline' to='/products'>
                Search
                </button> */}
        </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {searchedProducts.map(product=>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </div>
        
    );
};

export default Products;