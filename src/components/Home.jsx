import React, { useState, useEffect, useContext} from 'react';
import { useGetProfileQuery, useGetReposQuery } from '../services/githubApi';
import { AuthContext } from '../App';
import SearchRepo from './SearchRepo';

import './Home.css'
import Navbar from './Navbar';
import Profile from './Profile';
import RepoList from './RepoList';
import { Navigate } from 'react-router-dom';


const Home = () => {
    const { data: reposList } = useGetReposQuery();
    console.log(reposList)
    // state to contain filtered repos
  const [repos, setRepos ] = useState();
  // state to receive search terms
  const [searchTerm, setSearchTerm] = useState('');
  
  // destructuring the fetched data
  const { data: profileList, isLoading } = useGetProfileQuery();
  console.log(profileList)
  

  useEffect(() => {
    setRepos(reposList);
  
    const filteredRepos = reposList?.filter((item)=> item.name.toLowerCase().includes(searchTerm) );
  
    setRepos(filteredRepos)
  }, [reposList, searchTerm]);

// using Context API to manage the state globally
    const { state } = useContext(AuthContext);

    // this will redirect the app if the user has not logged in with Github
  if (!state.isLoggedIn) {
    return <Navigate to="/login" />;
  }




const handleChange = (e)=> {
    setSearchTerm(e.target.value.toLowerCase())
}
// console.log(searchTerm)

// Loading state
if(isLoading) return (<h4>Loading...</h4>);

  return (
    <main>
        <Profile profileList={profileList}/>
      <section>
        <Navbar />
        <SearchRepo onChange={handleChange}/>
      {repos?.slice(0, 19)?.map((repo) => (
         <RepoList  repo={repo}/>
      ))}
      </section>
    </main>
  )
}

export default Home;