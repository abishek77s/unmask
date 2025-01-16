"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { companies, type Company } from "@/data/brandData";
import NavBar from "@/components/NavBar";

export default function SubBrand() {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (id) {
      // Find the company matching the `id`
      const company = companies.find((c) => c.id === id);
      setSelectedCompany(company || null);
    }
  }, [id]);

  if (!selectedCompany) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading or no company found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-h-60 bg-gradient-to-r from-orange-200 to-pink-400 ">
        <NavBar />
        <div className="flex">
          <div className="relative px-6 mx-36 mt-40">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-sm flex items-center justify-center">
              <img src={selectedCompany.logo} alt={selectedCompany.name} />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-gray-800">
              {selectedCompany.name}
            </h1>
            <p className="text-gray-600">{selectedCompany.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {selectedCompany.subsidiaries.map((subsidiary, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src="https://logos-world.net/wp-content/uploads/2022/12/POCO-Logo-500x281.png"
                alt={subsidiary.name}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{subsidiary.name}</h3>
              <p className="text-sm text-gray-600">
                {subsidiary.type === "acquired"
                  ? `Acquired on ${subsidiary.dateOfAcquisition}`
                  : subsidiary.type === "launched"
                  ? "Launched subsidiary"
                  : `Owns ${subsidiary.ownership}%`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
