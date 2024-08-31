import { useState } from 'react';

const ShoeFilter = ({ shoes, onFilter }) => {
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const handleFilter = () => {
        const filteredShoes = shoes.filter(shoe => {
            return (
                (brand === '' || shoe.brand === brand) &&
                (size === '' || shoe.size === parseInt(size)) &&
                (color === '' || shoe.color === color) &&
                (priceRange === '' ||
                    (priceRange === '0-100' && shoe.price >= 0 && shoe.price <= 100) ||
                    (priceRange === '100-150' && shoe.price >= 100 && shoe.price <= 150) ||
                    (priceRange === '150-200' && shoe.price >= 150 && shoe.price <= 200) ||
                    (priceRange === '200-300' && shoe.price >= 200 && shoe.price <= 300)
                )
            );
        });
        onFilter(filteredShoes);
    };

    return (
        <div className='p-4 flex justify-center items-center'>
            <h2 className='mr-3 rounded bg-slate-300 p-1 '>Filter</h2>
            <div className='flex justify-center items-center'>
                <div className='mr-3'>
                    <label>Brand:</label>
                    <input className='ml-1 p-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" value={brand} onChange={e => setBrand(e.target.value)} />
                </div>
                <div className='mr-3'>
                    <label>Size:</label>
                    <input className='ml-1 p-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="number" value={size} onChange={e => setSize(e.target.value)} />
                </div>
                <div className='mr-3'>
                    <label>Color:</label>
                    <input className='ml-1 p-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" value={color} onChange={e => setColor(e.target.value)} />
                </div>
                <div className='mr-3'>
                    <label>Price Range:</label>
                    <select className='ml-1 p-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer' value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                        <option value="">All</option>
                        <option value="0-100">0-100</option>
                        <option value="100-150">100-150</option>
                        <option value="150-200">150-200</option>
                        <option value="200-300">200-300</option>
                    </select>
                </div>
                <button className='p-2 bg-sky-500 text-white rounded-md cursor-pointer font-bold' onClick={handleFilter}>Apply</button>
            </div>
        </div>
    );
};

export default ShoeFilter;
