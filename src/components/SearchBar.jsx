import PropTypes from "prop-types";
import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <input 
                        type="text" 
                        className="search-bar" 
                        placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
                        value={keyword}
                        onChange={(event) => keywordChange(event.target.value)}
                    />
                )
            }}
        </LocaleConsumer>
    )

    SearchBar.propTypes = {
        keyword: PropTypes.string.isRequired,
        keywordChange: PropTypes.string.isRequired,
    }
}

export default SearchBar