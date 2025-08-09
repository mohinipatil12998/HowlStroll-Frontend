import { MapPin, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";

export function ServiceProviderListing({ providers, title, subtitle,setIsModalOpen   }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState(null);

  const uniqueLocations = useMemo(() => {
    const locations = providers.map(provider => provider.location);
    return ['All', ...new Set(locations)];
  }, [providers]);

  const uniqueServices = useMemo(() => {
    const services = providers.flatMap(provider => provider.services);
    return ['All', ...new Set(services)];
  }, [providers]);

  const filteredProviders = useMemo(() => {
    return providers.filter(provider => {
      const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            provider.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = selectedLocation === 'All' || provider.location === selectedLocation;
      
      const matchesService = selectedService === 'All' || provider.services.includes(selectedService);
      
      return matchesSearch && matchesLocation && matchesService;
    });
  }, [searchQuery, selectedLocation, selectedService, providers]);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans p-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Area (Fixed height with internal scrolling) */}
      <div className="flex-1 lg:max-w-2xl xl:max-w-4xl flex flex-col lg:h-screen lg:overflow-hidden">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        {/* Filter and Search Bar (no longer sticky as parent container is fixed height) */}
        <div className="z-10 bg-neutral-50 pb-4">
          <div className="p-6 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={24} />
              </div>
            </div>
            
            <div className="relative w-full md:w-1/3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow bg-white"
              >
                {uniqueLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <MapPin size={20} />
              </div>
            </div>
            
            <div className="relative w-full md:w-1/3">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow bg-white"
              >
                {uniqueServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <Star size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable List of Providers */}
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="flex flex-col gap-8">
            {filteredProviders.map(provider => (
              <div
                key={provider.id}
                className={`bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${selectedProvider?.id === provider.id ? 'border-4 border-accent-500' : ''}`}
                onClick={() => setSelectedProvider(provider)}
              >
                <div className="md:w-1/3">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover min-h-[200px]"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{provider.name}</h2>
                    
                    <div className="flex items-center mt-2 text-yellow-500">
                      <Star size={18} fill="currentColor" className="text-yellow-500" />
                      <span className="ml-2 text-gray-700 font-semibold">{provider.rating} ({provider.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin size={16} className="mr-2 text-accent-500" />
                      <span>{provider.location}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {provider.services.map(service => (
                        <span key={service} className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProviders.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-12">
              No service providers found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className={`w-full lg:w-[40%] p-8 bg-white rounded-3xl shadow-xl flex-shrink-0 transition-all duration-300  lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] ${selectedProvider ? 'block' : 'hidden'} lg:block`}>
        {selectedProvider ? (
          <>
            <div className="text-center">
              <img
                src={selectedProvider.image}
                alt={selectedProvider.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-accent-500 shadow-md object-cover"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProvider.name}</h2>
              <div className="flex items-center justify-center mt-2 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="ml-2 text-gray-700 font-semibold">{selectedProvider.rating} ({selectedProvider.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-center mt-2 text-gray-600">
                <MapPin size={16} className="mr-2 text-accent-500" />
                <span>{selectedProvider.location}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About me</h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedProvider.description}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProvider.services.map(service => (
                  <span key={service} className="bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-1 rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <button onClick={()=>{ 
                setIsModalOpen(true);
              }} className="w-full bg-indigo-600 text-white  font-bold py-3 rounded-full shadow-lg hover:bg-accent-700 transition-colors duration-200">
                Book Now
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 text-lg py-12">
            Click on a provider to view details.
          </div>
        )}
      </div>
    </div>
  );
}