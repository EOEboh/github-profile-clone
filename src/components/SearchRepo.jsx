import React from 'react';
import './Home.css';

const SearchRepo = ({onChange}) => {
  return (
    <div className='search-div'>
      <input
        type='search'
        className='input-filter'
        placeholder='Find a repository...'
        onChange={onChange}
        />

        <button className='search-btns'>
          Type
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
        </svg>
        </button>

        <button className='search-btns'>
          Language
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
        </svg>
        </button>

        <button className='search-btns'>
          Sort
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
        </svg>
      </button>
    </div>
  )
}

export default SearchRepo