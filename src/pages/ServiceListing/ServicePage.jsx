import { useParams } from "react-router";
import {ServiceProviderListing} from "./ServiceProviderListing";
const mockDogWalkers = [
  {
    id: 1,
    name: 'John Smith',
    image: 'https://placehold.co/400x300/A0A0A0/FFFFFF?text=JS',
    location: 'Pimpri-chinchwad, India',
    rating: 4.8,
    reviews: 55,
    services: ['Golden Retriever', 'Labrador', 'German Shepherd'],
    description: 'Experienced and reliable dog walker with 5+ years of experience. Specializes in long walks and playful fetch sessions.',
    serviceType: 'Dog Walker',
  },
  {
    id: 2,
    name: 'Sarah Lee',
    image: 'https://placehold.co/400x300/C0C0C0/333333?text=SL',
    location: 'Pune, India',
    rating: 4.9,
    reviews: 72,
    services: ['Poodle', 'Bulldog', 'Beagle'],
    description: 'Certified pet sitter and walker who loves all breeds. Offers custom walking routes and basic training reinforcement.',
    serviceType: 'Dog Walker',
  },
  {
    id: 3,
    name: 'Tom Evans',
    image: 'https://placehold.co/400x300/808080/FFFFFF?text=TE',
    location: 'Mumbai, India',
    rating: 4.7,
    reviews: 41,
    services: ['Golden Retriever', 'Poodle', 'Beagle'],
    description: 'Passionate dog lover available for daily walks and weekend adventures. Your dog\'s safety and happiness are my top priority!',
    serviceType: 'Dog Walker',
  },
];

const mockVets = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    image: 'https://placehold.co/400x300/33A0A0/FFFFFF?text=PS',
    location: 'Pune, India',
    rating: 5.0,
    reviews: 150,
    services: ['Vaccinations', 'Surgery', 'Dental Care'],
    description: 'Experienced and compassionate veterinarian specializing in preventative care and advanced surgical procedures for all pets.',
    serviceType: 'Veterinarian',
  },
  {
    id: 2,
    name: 'Dr. Rohan Patel',
    image: 'https://placehold.co/400x300/5050C0/FFFFFF?text=RP',
    location: 'Mumbai, India',
    rating: 4.8,
    reviews: 90,
    services: ['Emergency Care', 'Wellness Exams', 'Nutrition'],
    description: 'A friendly vet who provides expert care in a calm and comforting environment. Focuses on holistic wellness and urgent care needs.',
    serviceType: 'Veterinarian',
  },
];

export const ServicePage = () => {
  const { serviceType } = useParams();

  // Define data and titles based on the URL parameter
  let providersData;
  let pageTitle;
  let pageSubtitle;

  switch (serviceType) {
    case 'dog-walkers':
      providersData = mockDogWalkers;
      pageTitle = 'Find a Dog Walker';
      pageSubtitle = 'Browse a selection of verified and highly-rated pet sitters and walkers.';
      break;
    case 'vets':
      providersData = mockVets;
      pageTitle = 'Find a Veterinarian';
      pageSubtitle = 'Connect with top-rated vets for all your pet\'s health needs.';
      break;
    default:
      // Handle the case where the service type is not found
      providersData = [];
      pageTitle = 'Service Not Found';
      pageSubtitle = 'Please select a valid service from the home page.';
      break;
  }

  return (
    <ServiceProviderListing
      providers={providersData}
      title={pageTitle}
      subtitle={pageSubtitle}
    />
  );
};