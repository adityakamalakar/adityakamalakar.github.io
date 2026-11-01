import React from 'react';
import { ProjectCategory } from '../../types';
import { projectCategories } from '../../data/projectsData';

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | 'All';
  onSelectCategory: (cat: ProjectCategory | 'All') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  return (
    <div className="mb-10 space-y-6">
      {/* Top Bar: Search and Results Counter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#2A2A2A]">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#B8976C] block">
            Filter by Typology & Discipline
          </span>
          <p className="text-sm text-[#8C8C8C]">
            Showing <span className="text-white font-medium">{totalCount}</span> architectural & visualization works
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, software, city..."
            className="w-full bg-[#181818] border border-[#333333] text-white text-xs px-3.5 py-2.5 pl-9 focus:outline-none focus:border-[#B8976C] transition-colors"
          />
          <svg
            className="w-4 h-4 text-[#737373] absolute left-3 top-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2.5 text-xs text-[#737373] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filterable Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
        {projectCategories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 text-xs tracking-wider transition-all duration-200 border ${
                isSelected
                  ? 'bg-[#B8976C] text-[#141414] border-[#B8976C] font-semibold shadow-sm'
                  : 'bg-[#181818]/60 text-[#A0A0A0] border-[#2E2E2E] hover:border-[#555555] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
