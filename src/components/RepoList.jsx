import React from 'react';
import './Home.css';

console.log(Math.ceil((new Date().getTime() - new Date("2022-01-12T13:05:16Z").getTime()) / 86400000))

const RepoList = ({repo}) => {

  // converting the time stamp to readable format
  let timeUpdated = Math.ceil(new Date().getTime() - new Date(`${repo.updated_at}`).getTime()) / 86400000;

  return (
    <>
<section className='repos'> 
<div className='inner-container'>
          <div className='repo-data-container'> 
            <h4 className='repo-name'>{repo.name} <span className='repo-visibility'>{repo.visibility}</span></h4>
            <div className='repo-description'>
              {repo.description}
            </div>
            <div className='repo-data'>
             { repo.language && (<span className='repo-language-color'></span>)} 

              <span className='repo-language'> {repo.language}</span> 
              <span className='repo-forks'>
              <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
              <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>
                {repo.forks_count}
            </span>
              <span className='repo-updated-at'>Updated {Number(`${timeUpdated.toFixed(0)}`)} days ago</span>
            </div>
          </div>
<button className='star-btn'>
          <div className='btn-container'> 
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-1">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
          </svg> &nbsp;
          <div className='star-text'> 
          Star
          </div> &nbsp;
          <div className='vertical-line'></div> &nbsp;  
          <svg className='star'  aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
          <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
        </svg>
      </div>
  </button>
</div>
  
        </section>
    </>
  )
}

export default RepoList;