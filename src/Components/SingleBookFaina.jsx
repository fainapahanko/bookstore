import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import '../style.css'

class SingleBookFaina extends React.Component {
    state = {}
    render(){
        return(
            <Col md="3">
                <Card className="my-3">
                <CardImg top height="400px" src={this.props.book.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="text-truncate">{this.props.book.title}</CardTitle>
                        <CardSubtitle>${this.props.book.price}</CardSubtitle>
                        <Button>Buy</Button>
                </CardBody>
                </Card>
            </Col>
        )
    }
}

export default SingleBookFaina