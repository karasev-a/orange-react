import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardHeader, CardBody, CardTitle, CardText,
} from 'reactstrap';

const CardTask = ({ task }) => {
    const dateEnd = new Intl.DateTimeFormat('en-US').format(new Date(task.date));
    const stylePrice = {
        background: "silver",
        borderRadius: "20%",
        marginLeft: "15px",
        marginRight: "50px",
        padding: "5px"
    };
    return (
        <Card body>
            <CardHeader tag="h3">
                {task.title}
            </CardHeader>
            <CardBody>
                <CardTitle>
                    0 / {task.people} people alredy accept
                </CardTitle>
                <CardText>
                    {task.description}
                </CardText>
                <CardText>
                    {dateEnd}   <span style={stylePrice}>{task.price}$</span> 
                    <Link to={`/`}>
                    <Button color="primary" style={{ marginRight: '10px' }}>
                        Accept
                    </Button>
                </Link>
                </CardText>
            </CardBody>
        </Card >
    )
};

export default CardTask;
