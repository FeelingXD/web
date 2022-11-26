import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component ,useState} from "react"
import { ReactDOM } from "react"
import { Container } from "react-bootstrap"
import { Routes,Route,Navigate, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { NewNote } from "./components/NewNote"
import { useLocalStorage } from "./func/useLocalStorage"

export type Note={
    id:string
}&NoteData

export type NoteData={
    title:string,
    markdown:string,
    tag:Tag[]
}

export type Tag={
    id:string,
    label:string
}

function App(){
    const [notes,setNotes] = useLocalStorage("notes",[])
    return(
    <Container className="my-4">
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<h1>Hi</h1>}/>
                <Route path="/new" element ={<NewNote/>}/>
                <Route path="*" element ={<Navigate to ="/"/>}/>
                <Route path="/:id">
                <Route index element={<h1>show</h1>}></Route>
                    <Route path="edit" element={<h1>Edit</h1>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Container>
    )
}

export default App