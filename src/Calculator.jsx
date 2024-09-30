import { useState } from 'react';

const Calculator = () => {
    const[value1,setValue1]=useState(0);
    const[value2,setValue2]=useState(0);
    const[result,setResult]=useState(null);


    const increaseValue1=()=>setValue1(value1+1);
    const decreaseValue1=()=>setValue1(value1-1);
    const increaseValue2=()=>setValue2(value2+1);
    const decreaseValue2=()=>setValue2(value2-1);



    const add=()=>setResult(value1+value2);
    const subtract=()=>setResult(value1-value2);
    const multiply=()=>setResult(value1*value2);
    const percentage=()=>setResult(value1%value2);

    return (
        <div className="flex flex-col  items-center p-6   bg-gray-100  min-h-screen">
            <h1 className="text-3xl   font-bold mb-4">Calculator</h1>
            <div className="mb-4">
                <h2 className="text-xl">Value 1:{value1}</h2>
                <div className="flex  space-x-4">
                    <button 
                        onClick={increaseValue1} 
                        className=" px-4 py-2  bg-blue-500 text-white rounded  hover:bg-blue-600"
                    >
                        Increase
                    </button>
                    <button 
                        onClick={decreaseValue1} 
                        className=" px-4 py-2 bg-red-500 text-white rounded   hover:bg-red-600"
                    >
                        Decrease
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl" >Value 2: {value2}</h2>
                <div className="flex  space-x-4">
                    <button 
                        onClick={increaseValue2} 
                        className="px-4 py-2   bg-blue-500  text-white rounded  hover:bg-blue-600"
                    >
                        Increase
                    </button>
                    <button 
                        onClick={decreaseValue2} 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Decrease
                    </button>
                </div>
            </div>
            <div className="flex space-x-4 mb-4">
                <button 
                    onClick={add} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    +
                </button>
                <button 
                    onClick={subtract} 
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                    -
                </button>
                <button 
                    onClick={multiply} 
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                    *
                </button>
                <button 
                    onClick={percentage} 
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                    %
                </button>
            </div>
            {result!==null&&(
                <h2 className="text-xl font-bold">Result: {result}</h2>
            )}
        </div>
    );
};

export default Calculator;