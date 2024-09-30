import { useState } from 'react';

const DarkMode = () => {
    const [darkMode,setDarkMode]=useState(false);

    const darkModee =()=>{
        setDarkMode(prevMode=>!prevMode);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Dark Mode</h1>
                <button 
                    onClick={darkModee} 
                    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default DarkMode;