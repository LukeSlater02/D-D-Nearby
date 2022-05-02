import React, { useState } from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ClassList } from "./components/classes/ClassList"
import { SheetEdit } from "./components/characterSheet/SheetEdit"
import { SheetForm } from "./components/characterSheet/SheetForm"
import { Tavern } from "./components/Tavern"
import { NavBar } from "./components/nav/NavBar"
import { SheetNav } from "./components/nav/SheetNav"

export const ApplicationViews = ({setAuthUser, clearUser , isAuthenticated}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    
	}
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>}>
        <Route path='/home' element={<><NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/><ClassList/></>}/>
        <Route path="/character-edit/:characterId" element={<><NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/><SheetEdit/></>}/>
        <Route path="/character/:characterId" element={<><SheetNav clearUser={clearUser} isAuthenticated={isAuthenticated}/><SheetForm/></>}/>
        <Route path="/the-tavern" element={<Tavern/>}/>
      </Route>

      <Route path="/login" element={<><NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/><Login setAuthUser={setAuthUser}/></>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}