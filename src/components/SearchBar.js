import React from "react";

function SearchBar({category, setCategory }) {

  function onSelect(e){
    setCategory(e.target.value)
    console.log(category)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onSelect} value={category}>
          <option  value="Tech">Tech</option>
          <option  value="Sportswear">Sportswear</option>
          <option  value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
