import { Form,Stack,Row,Col, Button, NavLink } from "react-bootstrap"
import CreatableSelect from 'react-select/creatable';
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useRef, useState } from "react";
import { NoteData, Tag } from "../App";

type NoteFormProps = {
    onSubmit:(data: NoteData)
}

export const NoteForm = ({onSubmit}:NoteFormProps) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLInputElement>(null)
    const [selectedTags, setselectedTags] = useState<Tag[]>([])

    const hanndleSubmit = (e:FormEvent) =>{
        e.preventDefault()

        onSubmit()({
            title:titleRef.current!.value,
            markdown:markdownRef.current!.value,
            tags:[],
        })
    }

    return(
        <Form onSubmit={hanndleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableSelect value={
                                selectedTags.map(tag => { 
                                    return {label:tag.label , value:tag.id}
                                })} 
                                onChange ={tags =>{
                                    setselectedTags(
                                        tags.map(tag =>{
                                        return {label:tag.label,value:tag.value}
                                    }))
                                }}
                             isMulti
                             /> 
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markdownRef} required as ="textarea" rows ={15}/>
                    </Form.Group>
                </Row>
                <Stack direction="horizontal" className="justify-content-end" gap={2}>
                    <Button type="submit">Save</Button>
                    <Link to={".."}>
                    <Button type="button" variant="secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>

    )
}