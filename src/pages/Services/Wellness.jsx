import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Wellness = () => {
  const navigate = useNavigate();
   const category = "Wellness";
  const [selectedSubCategory, setSelectedSubCategory] = React.useState(null);
  const [showChoice, setShowChoice] = React.useState(false);
   const [searchTerm, setSearchTerm] = React.useState("");

  const categories = [
    {
      name: "Yoga & Meditation",
      desc: "Enhance flexibility, mindfulness, and inner peace.",
      image: "/images/yoga-meditation.jpeg",
    },
    {
      name: "Spa & Relaxation",
      desc: "Relax your body and rejuvenate your senses.",
      image: "/images/spa-relaxation.jpeg",
    },
    {
      name: "Mental Wellness",
      desc: "Improve focus, clarity, and emotional resilience.",
      image: "/images/mental-wellness.jpeg",
    },
    {
      name: "Fitness",
      desc: "Build strength, stamina, and overall physical health.",
      image: "/images/fitness.jpg",
    },
    {
      name: "Nutrition",
      desc: "Adopt healthy eating habits for better living.",
      image: "/images/nutrition.jpeg",
    },
    {
      name: "Traditional & Alternative Therapies",
      desc: "Explore holistic healing and therapeutic practices.",
      image: "/images/traditional-therapies.jpeg",
    },
    {
      name: "Rehabilitation",
      desc: "Recover and restore physical and mental wellbeing.",
      image: "/images/rehabilitation.jpeg",
    },
    {
      name: "Lifestyle Coaching",
      desc: "Create sustainable habits for long-term wellness.",
      image: "/images/lifestyle-coaching.jpeg",
    },
  ];
            const filteredCategories = categories.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* BACK */}
        <button
          onClick={() => navigate("/categories")}
          className="text-orange-500 text-lg flex items-center gap-2 mb-6 font-medium"
        >
          ← Back to categories
        </button>

{/* TITLE + SEARCH ROW */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
  <div>
    <h1 className="text-4xl font-extrabold">Wellness</h1>
    <p className="text-gray-600 mt-2">
      Strengthen body, mind, and spirit through holistic wellness practices
    </p>
  </div>

  {/* SEARCH INPUT */}
  <div className="relative mt-4 md:mt-0 w-full md:w-64">
    <Search
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      placeholder="Search disciplines..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-0 
                 focus:border-orange-500 
                 transition-all duration-200"
    />
  </div>
</div>

{/* DISCIPLINE COUNT */}
<p className="text-sm text-gray-600 mb-8">
  <span className="text-orange-500 text-lg">•</span>{" "}
  {filteredCategories.length} Disciplines Available
</p>
  

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           {filteredCategories.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setSelectedSubCategory(item.name);
                setShowChoice(true);
              }}
              className="bg-white rounded-2xl border border-orange-200 overflow-hidden cursor-pointer
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:shadow-[0_10px_30px_rgba(249,115,22,0.35)]"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-orange-600 font-bold text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showChoice && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
    <div className="bg-white w-full max-w-md rounded-[12px] shadow-xl p-6 text-center">

      {/* Title */}
     <h2 className="text-[24px] font-bold text-[#0B0B0B] mb-2">
  {category}
</h2>

      {/* Subtitle */}
      <p className="text-[16px] text-[#706862] mb-6">
        What are you looking for ?
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4">

        {/* Find Trainers */}
        <button
          onClick={() => {
            navigate(
              `/viewtrainers?category=${category}&subCategory=${encodeURIComponent(selectedSubCategory)}`
            );
            setShowChoice(false);
          }}
          className="w-full bg-[#FF6A00] text-white py-3 rounded-[5px] font-semibold"
        >
          Find Trainers
        </button>

        {/* Find Institutes */}
        <button
          onClick={() => {
            navigate(
              `/viewinstitutes?category=${category}&subCategory=${encodeURIComponent(selectedSubCategory)}`
            );
            setShowChoice(false);
          }}
          className="w-full border border-[#FF6A00] text-[#FF6A00] py-3 rounded-[5px] font-semibold"
        >
          Find Institutes
        </button>
      </div>

      {/* Cancel */}
      <button
        onClick={() => setShowChoice(false)}
        className="mt-6 text-sm text-gray-500"
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Wellness;