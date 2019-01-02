import React, { Component } from 'react';
import {
    Container, CardDeck, Row, Col, CardGroup,
} from 'reactstrap';

import CardTask from './task-card';
import TaskService from '../../services/task-service';


export default class TripsList extends Component {
    taskService = new TaskService();
    state = {
        tasks: []
    }
    constructor() {
        super();
        this.getAllTasks();
    }
    getAllTasks(){
        this.taskService.getAllTaskWithoutParams()
            .then((allTasks) => {
                this.setState({
                    tasks: allTasks
                })
            });
            
    };
    render() {
        const {tasks} = this.state 
        return (
            <div>
                <h2>
                    All Tasks
                </h2>
                <Container fluid>
                    <Row>
                        <CardGroup>
                            <CardDeck>
                                {tasks.map(task => (
                                    <Col key={task.id} xs="auto" style={{ padding: '20px 0 0 20px' }}>
                                        <CardTask key={task.id} task={task} />
                                    </Col>
                                ))}
                            </CardDeck>
                        </CardGroup>
                    </Row>
                </Container>
            </div>
        );
    }
}