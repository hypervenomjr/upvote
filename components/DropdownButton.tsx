"use client"
import { useState } from 'react';

const DropdownButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)} // Keep dropdown open on hover
      onMouseLeave={() => setIsOpen(false)} // Close dropdown when not hovering
    >
      <div>
        <button
          className="inline-flex justify-center w-full px-4 py-5 text-sm font-medium text-black bg-white rounded-md hover:bg-white focus:outline-none shadow-md"
        >
          Visit
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Website: VideoDubber.ai
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Learn More : VideoDubber.ai
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Learn More : VideoDubber.ai
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
