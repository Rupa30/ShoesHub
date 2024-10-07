import { useState, useMemo } from 'react';
import SearchableDropdown from '../SearchableDropDown/SearchableDropdown';


const ShoeFilter = ({ shoes, onFilter }) => {
    const [brand, setBrand] = useState(null);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [priceRange, setPriceRange] = useState(null);

    // Memoize unique filter options for each category
    const brandOptions = useMemo(() => {
        const uniqueBrands = [...new Set(shoes.map(shoe => shoe.brand))];
        return uniqueBrands.map(brand => ({ value: brand, label: brand }));
    }, [shoes]);

    const sizeOptions = useMemo(() => {
        const uniqueSizes = [...new Set(shoes.map(shoe => shoe.size))];
        return uniqueSizes.map(size => ({ value: size, label: size.toString() }));
    }, [shoes]);

    const colorOptions = useMemo(() => {
        const uniqueColors = [...new Set(shoes.map(shoe => shoe.color))];
        return uniqueColors.map(color => ({ value: color, label: color }));
    }, [shoes]);

    const priceOptions = useMemo(() => [
        { value: '0-100', label: '0-100' },
        { value: '100-150', label: '100-150' },
        { value: '150-200', label: '150-200' },
        { value: '200-300', label: '200-300' }
    ], []);

    const handleFilter = () => {
        const filteredShoes = shoes.filter(shoe => {
            const matchesBrand = brand === null || shoe.brand === brand.value;
            const matchesSize = size === null || shoe.size === parseInt(size.value);
            const matchesColor = color === null || shoe.color === color.value;
            const matchesPrice = priceRange === null ||
                (priceRange.value === '0-100' && shoe.price >= 0 && shoe.price <= 100) ||
                (priceRange.value === '100-150' && shoe.price >= 100 && shoe.price <= 150) ||
                (priceRange.value === '150-200' && shoe.price >= 150 && shoe.price <= 200) ||
                (priceRange.value === '200-300' && shoe.price >= 200 && shoe.price <= 300);

            return matchesBrand && matchesSize && matchesColor && matchesPrice;
        });
        onFilter(filteredShoes);
    };

    return (
        <div className='p-4 flex flex-wrap justify-center items-center'>
            <h2 className='mr-3 rounded bg-slate-300 p-1'>Filter</h2>
            <div className='flex flex-wrap justify-center items-center'>

                <div className='mr-3'>
                    <label>Brand:</label>
                    <SearchableDropdown
                        options={brandOptions}
                        value={brand}
                        onChange={setBrand}
                        placeholder="Search by Brand"
                    />
                </div>

                <div className='mr-3'>
                    <label>Size:</label>
                    <SearchableDropdown
                        options={sizeOptions}
                        value={size}
                        onChange={setSize}
                        placeholder="Search by Size"
                    />
                </div>

                <div className='mr-3'>
                    <label>Color:</label>
                    <SearchableDropdown
                        options={colorOptions}
                        value={color}
                        onChange={setColor}
                        placeholder="Search by Color"
                    />
                </div>

                <div className='mr-3'>
                    <label>Price Range:</label>
                    <SearchableDropdown
                        options={priceOptions}
                        value={priceRange}
                        onChange={setPriceRange}
                        placeholder="Search by Price Range"
                    />
                </div>

                <button
                    className='p-2 bg-sky-500 text-white rounded-md cursor-pointer font-bold'
                    onClick={handleFilter}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default ShoeFilter;