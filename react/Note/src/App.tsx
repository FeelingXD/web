import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component ,useMemo,useState} from "react"
import { ReactDOM } from "react"
import { Container } from "react-bootstrap"
import { Routes,Route,Navigate, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { NewNote } from "./components/NewNote"
import { useLocalStorage } from "./func/useLocalStorage"
import {v4 as uuidV4} from "uuid"

export type Note = {
    id: string
  } & NoteData
  
  export type RawNote = {
    id: string
  } & RawNoteData
  
  export type RawNoteData = {
    title: string
    markdown: string
    tagIds: string[]
  }
  
  export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
  }
  
  export type Tag = {
    id: string
    label: string
  }
function App(){
    const [notes,setNotes] = useLocalStorage<RawNote[]>("notes",[])
    const [tags,setTags] = useLocalStorage<Tag[]>("TAGS",[])

    const noteWithTags = useMemo(()=>{
        return notes.map(note => {
            return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
        })
    },[notes,tags])

    const onCreateNote = ({tags,...data}:NoteData) =>{
        setNotes(prevNotes  => {
            return [...prevNotes,
                {...data,id:uuidV4(), tagIds: tags.map(tag=>tag.id) },
            ]
        })
    }

    const addTag = (tag:Tag) =>{
        setTags(prev => {return [...prev,tag]})
    }

    return(
    <Container className="my-4">
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<h1>Hi</h1>}/>
                <Route path="/new" element ={<NewNote
                onSubmit={onCreateNote}
                onAddTag={addTag}
                availableTags={tags}  />}/>
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