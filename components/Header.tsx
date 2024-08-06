// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-2 bg-gray-100 border-b">
            <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full mr-4 font-bold text-xl">
                    P
                </div>
                <input 
                    type="text" 
                    placeholder="Search(ctrl +k)" 
                    className="p-1 border border-gray-300 rounded gap-10" 
                />

                <button className=' pl-72 pr-2'>Launches</button>
                <button className=' p-2'>Products</button>
                <button className=' p-2'>News</button>
                <button className=' p-2'>Community</button>
            </div>
                

            
            <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10  text-white rounded-full mr-4">
                    🔔
                </div>
                <div className="flex items-center justify-center w-10 h-10  bg-red-600 text-white rounded-full">
                    V
                </div>
            </div>
        </header>
    );
};

export default Header;
