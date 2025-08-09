import { useState } from "react";

export const ServiceProviderTraitsForm = () => {
    const [trait, setTrait] = useState("WALKER");
    const [rating, setRating] = useState(0);
    const [photoUrl, setPhotoUrl] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");

    const handleTraitSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting service provider traits:", { trait, rating, photoUrl, cost, description });
        setTrait("WALKER");
        setRating(0);
        setPhotoUrl("");
        setCost("");
        setDescription("");
    };

    const serviceProviderTraits = [
      "WALKER",
      "SITTER",
      "GROOMER",
      "TRAINER",
    ];

    return (
            <form onSubmit={handleTraitSubmit} className="space-y-6">
                <div>
                    <label htmlFor="trait" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Provider Type
                    </label>
                    <select
                      id="trait"
                      name="trait"
                      value={trait}
                      onChange={(e) => setTrait(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      {serviceProviderTraits.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      placeholder="Enter rating (1-10)"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        Photo URL
                    </label>
                    <input
                      type="text"
                      id="photoUrl"
                      name="photoUrl"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      placeholder="Enter a URL for the profile photo"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>
                
                <div>
                    <label htmlFor="cost" className="block text-sm font-medium text-gray-700 mb-1">
                        Cost
                    </label>
                    <input
                      type="text"
                      id="cost"
                      name="cost"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                      placeholder="Enter cost (e.g., 20)"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your experience and services..."
                      rows="4"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors transform hover:scale-105"
                    >
                        Save Service Provider Traits
                    </button>
                </div>
            </form>
    );
};