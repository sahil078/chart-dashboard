import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../redux/dashboardSlice';


import ImageChart from './chart/ImageChart';
import CloudChart from './chart/CloudChart';
import RiskChart from './chart/RiskChart';


const Dashboard = () => {
    const categories = useSelector((state) => state.dashboard.categories);
    const dispatch = useDispatch();

    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetText, setNewWidgetText] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);
    const [showWidgetModal, setShowWidgetModal] = useState(false);

    const handleAddWidget = () => {
        const newWidget = {
            id: Date.now(), // Unique ID
            name: newWidgetName,
            text: newWidgetText,
        };
        dispatch(addWidget({ categoryId: selectedCategoryId, widget: newWidget }));
        setNewWidgetName('');
        setNewWidgetText('');
        setShowWidgetModal(false); // Close the modal
    };

    return (
        <div className="bg-[#F4F7FC] min-h-screen p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                    <span>Home</span>
                    <span>&gt;</span>
                    <span className="font-semibold">Dashboard V2</span>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="border p-2 rounded w-64"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Last 2 days
                    </button>
                </div>
            </div>

            {/* Add Widget Button */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setShowWidgetModal(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    + Add Widget
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/* Pie Chart */}
                <div className="bg-white border p-4 rounded shadow-lg">
                    <h3 className="font-semibold mb-2">Cloud Chart</h3>
                    <CloudChart />
                </div>
                        {/* Donaut Chart */}
                <div className="bg-white border p-4 rounded shadow-lg">
                    <h3 className="font-semibold mb-2">Risk Chart</h3>
                    <RiskChart />
                </div>
                        {/* Bar Chart */}
                <div className="bg-white border p-4 rounded shadow-lg">
                    <h3 className="font-semibold mb-2">Bar Chart</h3>
                    <ImageChart />
                </div>
            </div>



            {categories.map((category) => (
                <div key={category.id} className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Example Chart Widgets */}
                        {category.name === 'CNAPP Dashboard' && (
                            <>
                                <div className="bg-white border p-4 rounded shadow-lg">
                                    <h3 className="font-semibold mb-2">Cloud Accounts</h3>
                                </div>
                                <div className="bg-white border p-4 rounded shadow-lg">
                                    <h3 className="font-semibold mb-2">Cloud Account Risk Assessment</h3>

                                </div>
                            </>
                        )}

                        {category.name === 'Registry Scan' && (
                            <div className="bg-white border p-4 rounded shadow-lg">
                                <h3 className="font-semibold mb-2">Image Risk Assessment</h3>

                            </div>
                        )}

                        {/* Other Widgets */}
                        {category.widgets.map((widget) => (
                            <div key={widget.id} className="bg-white border p-4 rounded shadow-lg">
                                <h3 className="font-semibold mb-2">{widget.name}</h3>
                                <p>{widget.text}</p>
                                <button
                                    onClick={() => dispatch(removeWidget({ categoryId: category.id, widgetId: widget.id }))}
                                    className="text-red-500 mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Add Widget Modal */}
            {showWidgetModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
                        <select
                            value={selectedCategoryId}
                            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
                            className="border p-2 mb-2 w-full"
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Widget Name"
                            value={newWidgetName}
                            onChange={(e) => setNewWidgetName(e.target.value)}
                            className="border p-2 mb-2 w-full"
                        />
                        <textarea
                            placeholder="Widget Text"
                            value={newWidgetText}
                            onChange={(e) => setNewWidgetText(e.target.value)}
                            className="border p-2 mb-2 w-full"
                        ></textarea>
                        <button
                            onClick={handleAddWidget}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Add Widget
                        </button>
                        <button
                            onClick={() => setShowWidgetModal(false)}
                            className="bg-gray-400 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Dashboard;