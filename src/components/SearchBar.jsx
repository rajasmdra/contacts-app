import PropTypes from "prop-types";
import React from "react";

function SearchBar({ keyword, keywordChange }) {
    return (
        <input 
            type="text" 
            className="search-bar" 
            placeholder="Cari berdasarkan nama"
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
        />
    )

    SearchBar.propTypes = {
        keyword: PropTypes.string.isRequired,
        keywordChange: PropTypes.string.isRequired,
    }
}

export default SearchBar