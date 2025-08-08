import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Star,
  Zap,
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Hotel,
  PawPrint,
  Bone,
  Scissors,
  Car,
  Search,
} from "lucide-react";
import { Footer } from "../../component/layouts/Footer";
import { useNavigate } from "react-router";
import { fetchBreeds } from "../../lib/dog";

function Home() {

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [dogBreed, setDogBreed] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedService, setSelectedService] = useState("Dog Walking");
  const [location, setLocation] = useState("");
  const [petType, setPetType] = useState("Dog");

  // eslint-disable-next-line no-unused-vars
  const handleSearch = () => {
    console.log("Searching for dog walkers for breed:", dogBreed);
   };

   const SERVICE_MAPPING = {
    "Dog Walking": 'dog-walkers',
    "Dog Vets": 'vets',
   }

  const handleComprehensiveSearch = () => {
    console.log("Searching with the following criteria:");
    console.log("Service:", selectedService);
    console.log("Location:", location);
    console.log("Pet Type:", petType);

    navigate(`/service-provider/${SERVICE_MAPPING[selectedService]}`)
    // Here you would typically call an API to search for services
  };

  const [data, setData] = useState([]);
  // const [breedInfo, setBreedInfo] = useState([]);
  // const [selectedBreedId, setSelectedBreedId] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
     
        // setIsLoading((loading) => !loading);
        const fetchedData = await fetchBreeds();
        // const fetchedBreedInfo = await fetchBreeds();
        // setBreedInfo(fetchedBreedInfo);
        setData(fetchedData);
        // setIsLoading((loading) => !loading);
      
    };

    loadData();
  }, []);
 const services = [
    { name: 'Dog Walking', icon: <> </> },
    { name: 'Dog Vets', icon: <> </> },
  ];
  return (
    <>
      <section
        className="relative bg-white h-screen flex flex-col items-center justify-center gap-10"
        style={{
          backgroundImage: `url(https://veterinary-clinic.weblium.site/res/5f66341807730000225f82ac/5f69efd3c0c73d0021df2614?nowebp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Hero Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              We Take Care of Your Pets as if They Were Our Own.
            </h1>
          </div>

          {/* Empty right column for the image placement */}
          <div className="md:w-1/2 hidden md:block">
            {/* This space is reserved for the dog image from the original design */}
          </div>
        
        </div>
        <div className="flex w-full gap-4 justify-center ">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 w-full max-w-5xl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              I am looking for 
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-300
                      ${selectedService === service.name
                        ? 'bg-indigo-600 text-white transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {service.icon}
                    <span className="mt-2 text-sm font-semibold text-center">{service.name}</span>
                  </button>
                ))}
              </div>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="font-bold text-sm font-medium text-gray-600 mb-2 block">
                  Near me in
                </label>
                <input
                  type="text"
                  placeholder="Pimpri-chinchwad, Maharashtra, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="font-bold text-sm font-medium text-gray-600 mb-2 block">
                  Dog Breed
                </label>
                <div className="relative">
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white appearance-none focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                  >
                    {
                      data.breeds?.map(({name}) => (
                        <option key={name} value={name}>{name}</option>
                      ))
                    }                    
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
                <div className="pt-5">
              <button
                onClick={handleComprehensiveSearch}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                <Search size={20} />
                Search
              </button>
            </div>
            </div>

          
          </div>
        </div>
        
      </section>
       <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Discover what makes our platform stand out from the rest.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Verified Pet Sitters */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  <Shield size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Verified Dog Walker
                </h3>
                <p className="text-gray-600 text-center">
                  All our sitters undergo a rigorous verification process, including background checks, to ensure your pet is in safe hands.
                </p>
              </div>

              {/* Feature 2: 24/7 Customer Support */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  <Zap size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-600 text-center">
                  Our dedicated team is available around the clock to help with any questions or emergencies that may arise.
                </p>
              </div>

              {/* Feature 3: Secure and Easy Payments */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  <Star size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Secure and Easy Payments
                </h3>
                <p className="text-gray-600 text-center">
                  Book and pay securely through our platform, with multiple payment options for your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step One
                </h3>
                <p className="text-gray-600">
                  Description of the first step. Explain what users need to do to get started.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step Two
                </h3>
                <p className="text-gray-600">
                  Description of the second step. Detail the next part of the process for your users.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step Three
                </h3>
                <p className="text-gray-600">
                  Description of the final step. Describe what happens after the process is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

      <section className="bg-indigo-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied users and start building something
            amazing today.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Sign Up Now
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
