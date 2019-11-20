import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../style.css'


class MyJumbotron extends React.Component {
    state = {}
    render() {
        return(
            <div>
                <Jumbotron className="jumbotron">
                    <h1 className="display-3">Hello, books!</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ipsum natus explicabo saepe corrupti provident harum unde beatae dicta, tempore minus quo eum nulla enim magni numquam dignissimos et minima?</p>
                    <hr className="my-2" />
                    <p>Books for books lovers</p>
                    <p className="lead">
                        <Button color="info">Read More</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default MyJumbotron;