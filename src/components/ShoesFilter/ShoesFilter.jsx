import { useState, useMemo } from 'react';
import SearchableDropdown from '../SearchableDropDown/SearchableDropdown';

const ShoeFilter = ({ shoes, onFilter }) => {
    const [brand, setBrand] = useState(null);
    const [color, setColor] = useState(null);
    const [priceRange, setPriceRange] = useState(null);

    // Memoize unique filter options for each category
    const brandOptions = useMemo(() => {
        const uniqueBrands = [...new Set(shoes.map(shoe => shoe.brand))];
        return uniqueBrands.map(brand => ({ value: brand, label: brand }));
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
            const matchesColor = color === null || shoe.color === color.value;
            const matchesPrice = priceRange === null ||
                (priceRange.value === '0-100' && shoe.price >= 0 && shoe.price <= 100) ||
                (priceRange.value === '100-150' && shoe.price >= 100 && shoe.price <= 150) ||
                (priceRange.value === '150-200' && shoe.price >= 150 && shoe.price <= 200) ||
                (priceRange.value === '200-300' && shoe.price >= 200 && shoe.price <= 300);

            return matchesBrand && matchesColor && matchesPrice;
        });
        onFilter(filteredShoes);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
                Filter Your Shoes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Brand:
                    </label>
                    <SearchableDropdown
                        options={brandOptions}
                        value={brand}
                        onChange={setBrand}
                        placeholder="Search by Brand"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Color:
                    </label>
                    <SearchableDropdown
                        options={colorOptions}
                        value={color}
                        onChange={setColor}
                        placeholder="Search by Color"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Price Range:
                    </label>
                    <SearchableDropdown
                        options={priceOptions}
                        value={priceRange}
                        onChange={setPriceRange}
                        placeholder="Search by Price"
                    />
                </div>
            </div>
            <div className="mt-6 text-center">
                <button
                    className="px-6 py-2 bg-black hover:bg-gray-700 text-white font-semibold  shadow-md transition duration-300"
                    onClick={handleFilter}
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default ShoeFilter;
