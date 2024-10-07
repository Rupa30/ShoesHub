import React, { useState } from 'react';

const SearchableDropdown = ({ options, value, onChange, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Filter options based on the search term
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        onChange(option);  // Set the selected option
        setSearchTerm(option.label);  // Show selected option in input field
        setDropdownOpen(false);  // Close dropdown after selection
    };

    return (
        <div className="relative w-48">
            <input
                type="text"
                value={searchTerm}
                placeholder={placeholder}
                onFocus={() => setDropdownOpen(true)}  // Open dropdown when focused
                onChange={(e) => setSearchTerm(e.target.value)}  // Update search term
                className="w-full p-2 border border-gray-300 rounded"
            />
            {isDropdownOpen && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded max-h-40 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="p-2 text-gray-500">No options found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchableDropdown;
