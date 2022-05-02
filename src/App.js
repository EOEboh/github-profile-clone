import React, { createContext, useReducer } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { initialState, reducer } from "./store/reducer";
import './App.css'

export const AuthContext = createContext();

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
      > 
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route
          path='*'
          element={
            <Navigate to='/' replace />
          }
          />
      </Routes>
      
    </div>
    </AuthContext.Provider>
  )
}

export default App