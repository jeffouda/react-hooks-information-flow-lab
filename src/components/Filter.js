import React from 'react'

export default function Filter({selectedCategory,onCategoryChange}) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
