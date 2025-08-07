import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const Footer = ()=>{
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
           
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">HowIStroll</h3>
              <p className="text-sm">
                We care for dogs
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                  <Twitter size={24} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Dog Walking</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Service Provider</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Become Dog Walker</a></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm">
            &copy; 2025 HowIStroll. All rights reserved.
          </div>
        </div>
      </footer> 
    )
} 