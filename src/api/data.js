import React from 'react'
import axios from "axios";
import { Card, ListGroup } from 'react-bootstrap';

class data extends React.Component {
    state = {
        results: [],
    }
    componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/users')
             .then(res => {
                 console.log(res)
                 this.setState({ results: res.data });
             })
    }

    render() {
        return (
            <Card style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                left: 200,
                top: 30,
                width: '50rem',

                shadowOpacity: 0.5,
                shadowRadius: 2,
                borderRadius: 10,
                marginRight: 20,
                marginLeft: 20,

                borderWidth: 2,
                shadowColor: 'gray',
                shadowOffset: { width: 2, height: 2 },


            }}  >
                <Card.Body>
                    <Card.Title className="mb-1 text-muted" style={{
                        position: "relative",
                        justifyContent: "center",
                        textAlign: "center"
                    }}> Définitions </Card.Title>
                    <Card.Text>
                        <ListGroup as="ul">
                        {this.state.results.map(result =>
                        <ListGroup.Item as="li">{result.name}</ListGroup.Item>
                        )}
                        </ListGroup>
                        
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
};



export default data;