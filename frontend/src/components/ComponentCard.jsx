import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Component map to dynamically render components based on their name
const componentMap = {
    button: () => (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button Preview
        </button>
    ),
    card: () => (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h4 className="font-bold">Card Preview</h4>
            <p>This is a preview of the card component.</p>
        </div>
    ),
    modal: () => <div className="modal">Modal Preview</div>,
    // Add more components here
};

export const ComponentCard = ({ component }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal
    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Dynamically render the component preview based on the component name
    const renderPreview = componentMap[component.name.toLowerCase()] || (() => <div>No Preview Available</div>);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm">
            <h3 className="text-xl font-bold mb-2">{component.name}</h3>
            <p className="text-gray-600 mb-4">{component.description}</p>

            <div className="mb-4">{renderPreview()}</div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleModalToggle}
            >
                View Details
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-3/4">
                        <h3 className="text-2xl font-bold mb-4">{component.name} Details</h3>

                    
                        <SyntaxHighlighter language="jsx" style={oneDark}>
                            {component.code}
                        </SyntaxHighlighter>

                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleModalToggle}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
