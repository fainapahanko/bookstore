import ScifiJson  from '../data/scifi.json'
import React from 'react'
import SingleBookFaina from './SingleBookFaina'
import {Row, Col} from "reactstrap";

class BookList extends React.Component{
    render(){
        return(
            <>
            <Col md="12" className="div-with-books">
                <h2 className="category-header">{ScifiJson[0].category.toUpperCase()}</h2>
                <Row className="book-column">
                    {ScifiJson
                        .filter(searchedBook => searchedBook.title.toLowerCase().includes(this.props.search))
                        .map((bookEntry, index) =>
                        <SingleBookFaina book={bookEntry} key={index} />
                    )}
                </Row>
            </Col>
            </>
        )
    }
}

export default BookList