import React, { useState } from "react";

const coreTeam = [
  {
    id: 1,
    name: "Carry Johnshon",
    role: "Web Developer",
    dept: "engineering",
    image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&w=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 3.5,
  },
  {
    id: 2,
    name: "Alex Carry",
    role: "Web Developer",
    dept: "technology",
    image: "https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&w=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 2.5,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Web Developer",
    dept: "operations",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&w=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 5,
  },
  {
    id: 4,
    name: "George Alex",
    role: "Web Developer",
    dept: "skills",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=130&h=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 1.5,
  },
  {
    id: 5,
    name: "Carry Johnshon",
    role: "Web Developer",
    dept: "engineering",
    image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&w=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 3.5,
  },
  {
    id: 6,
    name: "Alex Carry",
    role: "Web Developer",
    dept: "technology",
    image: "https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&w=130",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi.",
    rating: 2.5,
  }
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-amber-500 fill-current inline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    } else if (i === fullStars + 1 && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block w-5 h-5">
          <svg className="w-5 h-5 text-amber-500 stroke-current inline" fill="none" strokeWidth="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="absolute inset-0 overflow-hidden w-[50%]">
            <svg className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </span>
      );
    } else {
      stars.push(
        <svg key={i} className="w-5 h-5 text-slate-200 dark:text-slate-800 stroke-current inline" fill="none" strokeWidth="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};

const TeamMemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pt-16">
      <div className="relative bg-white dark:bg-[#111416] rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-slate-200/60 dark:border-slate-800/60 p-8 flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
        
        {/* Profile Avatar (Top-Right Offset) */}
        <div 
          className="absolute -top-[65px] right-[10%] w-[130px] h-[130px] bg-white dark:bg-[#111416] p-2 shadow-[0_4px_15px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)] overflow-hidden flex items-center justify-center flex-shrink-0"
          style={{ borderRadius: "50%" }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ borderRadius: "50%" }}
          />
        </div>

        {/* Header Content */}
        <div className="pr-[120px] mb-4 flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-snug">
            {member.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            — {member.role}
          </p>
          
          {/* Rating stars */}
          <div className="mt-2">
            <StarRating rating={member.rating} />
          </div>
        </div>

        {/* Bio text */}
        <div className="flex flex-col items-start mt-2">
          <p className={`text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed text-left transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {member.bio}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-bold text-[#002a58] dark:text-[#a9c7ff] hover:text-[#0050a0] dark:hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 focus:outline-none"
          >
            {isExpanded ? "Show less" : "Read more"}
            <svg 
              className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

const AboutCoreTeam = () => {
  return (
    <section
      id="cards"
      className="relative py-10 bg-slate-50/50 dark:bg-[#080b0c] border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-2.5 py-0.5 rounded">
            Our Professionals
          </span>
          <h2 className="text-3xl md:text-4xl text-slate-800 dark:text-white mt-3 font-light tracking-tight leading-tight uppercase">
            Our Core Team Members 
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-4">
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCoreTeam;

