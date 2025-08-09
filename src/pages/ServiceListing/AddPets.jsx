import React, { useState } from "react";

/**
 * A form component for adding a new pet.
 * The form fields are based on the provided Java Pet model.
 * It uses React hooks for state management and Tailwind CSS for styling.
 */
const AddPets = () => {
  // State variables to store form input values
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  /**
   * Handles the form submission event.
   * Prevents the default form behavior, logs the pet data,
   * and resets the form fields.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Log the pet data. In a real application, you would send this to an API.
    console.log("Adding a new pet:", { name, breed, age });

    // Reset the form fields after submission
    setName("");
    setBreed("");
    setAge("");
  };

  return (
    
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Pet Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter pet's name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Pet Breed Input */}
          <div>
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="Enter pet's breed (e.g., Golden Retriever)"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Pet Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter pet's age (e.g., 2 years)"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors transform hover:scale-105"
            >
              Add Pet
            </button>
          </div>
        </form>
     
  );
};

export default AddPets;
