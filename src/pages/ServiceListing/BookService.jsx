import React, { useState } from "react";
import { PawPrint, User, Clock, MessageSquare } from "lucide-react";

export default function BookService() {
  const [service, setService] = useState("");
  const [pets, setPets] = useState(1);
  const [time, setTime] = useState("");
  const [ampm, setAmpm] = useState("AM");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked!");
  };

  return (
       
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Type */}
          <div>
            <label className="flex items-center gap-2 font-medium text-[#4a2f1b]">
              <PawPrint size={18} />
              What type of service?
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              required
            >
              <option value="">Select a service</option>
              <option>Walking</option>
              <option>Grooming</option>
              <option>Training</option>
            </select>
          </div>

          {/* No. of Pets */}
          <div>
            <label className="flex items-center gap-2 font-medium text-[#4a2f1b]">
              <User size={18} />
              No. of pets
            </label>
            <input
              type="number"
              min="1"
              value={pets}
              onChange={(e) => setPets(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              required
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="flex items-center gap-2 font-medium text-[#4a2f1b]">
              <Clock size={18} />
              Pick up time
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="number"
                min="1"
                max="12"
                placeholder="e.g., 9"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                required
              />
              <select
                value={ampm}
                onChange={(e) => setAmpm(e.target.value)}
                className="w-20 rounded-lg border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          {/* Remarks */}
          <div>
            <label className="flex items-center gap-2 font-medium text-[#4a2f1b]">
              <MessageSquare size={18} />
              Remarks/Instructions
            </label>
            <textarea
              placeholder="Any specific instructions for the trainer?"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
            />
          </div>

         </form>
  );
}