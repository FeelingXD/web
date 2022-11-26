import { Form,Stack,Row,Col } from "react-bootstrap"
import CreatableSelect from 'react-select/creatable';
export const NoteForm = () => {
    return(
    
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableSelect isMulti/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group>
                        
                    </Form.Group>
                </Row>
            </Stack>
        </Form>

    )
}