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
        <div className='p-4 flex flex-wrap justify-center items-center'>
            <div className='flex flex-wrap sm:justify-center justify-start items-center gap-2'>
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
                <button className='px-3 py-1 bg-slate-300 text-white rounded-md cursor-pointer font-bold flex justify-end' onClick={handleFilter}>🔍</button>
            </div>
        </div>
    );
};

export default ShoeFilter;





// import { useState, useMemo } from 'react';
// import { Select } from "../hexta-ui/Select"; // Import Select from Hexa UI

// const ShoeFilter = ({ shoes, onFilter }) => {
//     const [brand, setBrand] = useState(null);
//     const [size, setSize] = useState(null);
//     const [color, setColor] = useState(null);
//     const [priceRange, setPriceRange] = useState(null);

//     // Memoize unique filter options for each category
//     const brandOptions = useMemo(() => {
//         const uniqueBrands = [...new Set(shoes.map(shoe => shoe.brand))];
//         return uniqueBrands.map(brand => ({ value: brand, label: brand }));
//     }, [shoes]);

//     const sizeOptions = useMemo(() => {
//         const uniqueSizes = [...new Set(shoes.map(shoe => shoe.size))];
//         return uniqueSizes.map(size => ({ value: size, label: size.toString() }));
//     }, [shoes]);

//     const colorOptions = useMemo(() => {
//         const uniqueColors = [...new Set(shoes.map(shoe => shoe.color))];
//         return uniqueColors.map(color => ({ value: color, label: color }));
//     }, [shoes]);

//     const priceOptions = useMemo(() => [
//         { value: '0-100', label: '0-100' },
//         { value: '100-150', label: '100-150' },
//         { value: '150-200', label: '150-200' },
//         { value: '200-300', label: '200-300' }
//     ], []);

//     const handleFilter = () => {
//         const filteredShoes = shoes.filter(shoe => {
//             const matchesBrand = brand === null || shoe.brand === brand.value;
//             const matchesSize = size === null || shoe.size === parseInt(size.value);
//             const matchesColor = color === null || shoe.color === color.value;
//             const matchesPrice = priceRange === null ||
//                 (priceRange.value === '0-100' && shoe.price >= 0 && shoe.price <= 100) ||
//                 (priceRange.value === '100-150' && shoe.price >= 100 && shoe.price <= 150) ||
//                 (priceRange.value === '150-200' && shoe.price >= 150 && shoe.price <= 200) ||
//                 (priceRange.value === '200-300' && shoe.price >= 200 && shoe.price <= 300);

//             return matchesBrand && matchesSize && matchesColor && matchesPrice;
//         });
//         onFilter(filteredShoes);
//     };

//     return (
//         <div className='p-4 flex flex-wrap justify-center items-center'>
//             <h2 className='mr-3 rounded bg-slate-300 p-1'>Filter</h2>
//             <div className='flex flex-wrap justify-center items-center'>

//                 {/* Brand Dropdown */}
//                 <div className='mr-3'>
//                     <label>Brand:</label>
//                     <Select
//                         isSearchable
//                         options={brandOptions}
//                         value={brand}  // Set the selected option object here
//                         onChange={setBrand}
//                         placeholder="Search by Brand"
//                     />
//                 </div>

//                 {/* Size Dropdown */}
//                 <div className='mr-3'>
//                     <label>Size:</label>
//                     <Select
//                         isSearchable
//                         options={sizeOptions}
//                         value={size}  // Set the selected option object here
//                         onChange={setSize}
//                         placeholder="Search by Size"
//                     />
//                 </div>

//                 {/* Color Dropdown */}
//                 <div className='mr-3'>
//                     <label>Color:</label>
//                     <Select
//                         isSearchable
//                         options={colorOptions}
//                         value={color}  // Set the selected option object here
//                         onChange={setColor}
//                         placeholder="Search by Color"
//                     />
//                 </div>

//                 {/* Price Range Dropdown */}
//                 <div className='mr-3'>
//                     <label>Price Range:</label>
//                     <Select
//                         isSearchable
//                         options={priceOptions}
//                         value={priceRange}  // Set the selected option object here
//                         onChange={setPriceRange}
//                         placeholder="Search by Price Range"
//                     />
//                 </div>

//                 <button
//                     className='p-2 bg-sky-500 text-white rounded-md cursor-pointer font-bold'
//                     onClick={handleFilter}
//                 >
//                     Apply
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ShoeFilter;
