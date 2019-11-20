import React from 'react'
import BookList from './BookList'
import { } from "reactstrap";
import FantasyJson  from '../data/fantasy.json'
import HistoryJson  from '../data/history.json'
import HorrorJson  from '../data/horror.json'
import RpmanceJson  from '../data/romance.json'
import ScifiJson  from '../data/scifi.json'
import {Row, Col, FormGroup, Input} from "reactstrap";
import "../style.css";
import SingleBookFaina from './SingleBookFaina.jsx';
import NavBar from './NavBar.jsx';
var arr = [FantasyJson[0], HistoryJson[0], HorrorJson[0], RpmanceJson[0], ScifiJson[0]]

class MainComponent extends React.Component {
    state = {
        searchBook: "",
    }

    searchForBook = (event) => {
        // let latestTrends = document.querySelector(".book-column")
        let sciFi = document.querySelector(".div-with-books")
        this.setState({
            searchBook: event.target.value.toLowerCase()
        })
        console.log(event.value)
        // latestTrends.innerHTML = ""
        if(event.target.value.length > 2){
            sciFi.innerHTML = ""
        }
    }

    render() {
        return (
            <Row>
                <Col md="12">
                    <NavBar />
                </Col>     
                <div className="books-container">
                    <FormGroup className="form-inline">
                        <Input
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="search for a book"
                            value={this.state.searchBook}
                            onChange={this.searchForBook}
                        />
                    </FormGroup>
                    <Col md="12">
                        <h2 className="category-header">Latest trends</h2>
                        <Row className="book-column">
                            {arr
                                .filter(searchedBook => searchedBook.title.toLowerCase().includes(this.state.searchBook))
                                .map((bookEntry, index) =>
                                <SingleBookFaina book={bookEntry} key={index} />
                            )}
                        </Row>
                    </Col>
    
                    <Col md="12" className="div-with-books">
                        <h2 className="category-header">{ScifiJson[0].category.toUpperCase()}</h2>
                        <Row className="book-column">
                            {ScifiJson.map((bookEntry, index) =>
                                <SingleBookFaina book={bookEntry} key={index} />
                            )}
                        </Row>
                    </Col>
                    {/* <Col md="12" className="search-div">
                    <h2 className="category-header">{ScifiJson[0].category.toUpperCase()}</h2>
                        <Row className="book-column">
                            {ScifiJson.map((bookEntry, index) =>
                                <SingleBook book={bookEntry} key={index} />
                            )}
                        </Row>
                    </Col> */}
                </div>
            </Row>

        )
    }
}

