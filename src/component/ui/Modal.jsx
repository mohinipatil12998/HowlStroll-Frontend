import React from 'react';

// eslint-disable-next-line no-unused-vars
export const Modal = ({ show, submitText, onClick, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-transparent h-[90vh] bg-opacity-10 flex items-center justify-center z-99 p-4 font-sans">
      <div className="bg-white rounded-xl shadow-2xl flex flex-col w-full max-w-6xl p-8 transform transition-all duration-300 scale-95 opacity-0 animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center flex-grow">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
         <div className="relative p-8 pt-4 overflow-y-auto h-full"> {/* Added padding, overflow-y-auto, and max-h */}
          {children}
        </div>
          <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150"
          >
           {submitText || 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
