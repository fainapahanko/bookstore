import React from 'react'
import BookList from './BookList'
import MyJumbotron from './MyJumbotron' 
import FantasyJson  from '../data/fantasy.json'
import HistoryJson  from '../data/history.json'
import HorrorJson  from '../data/horror.json'
import RpmanceJson  from '../data/romance.json'
import ScifiJson  from '../data/scifi.json'
import WarningSign from './WarningSign.jsx'
import {Row, Col, FormGroup, Input} from "reactstrap";
import "../style.css";
import SingleBookFaina from './SingleBookFaina.jsx';
import NavBar from './NavBar.jsx';
import MyBadge from './MyBadge.jsx'
var arr = [FantasyJson[0], HistoryJson[0], HorrorJson[0], RpmanceJson[0], ScifiJson[0]]

class MainComponent extends React.Component {
    state = {
        searchBook: "",
    }
    searchForBook = (event) => {
        this.setState({
            searchBook: event.target.value.toLowerCase()
        })
        console.log(event.value)
    }

    render() {
        return (
            
            <Row>
                <Col md="12">
                    <NavBar />
                </Col>  
                <Col md="12">
                    <MyJumbotron />
                </Col>
                <div className="books-container">
                    <WarningSign className="warning-sign" text="The best books ever"/>   
                    <MyBadge className="badge" />
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
                    <BookList search={this.state.searchBook}/>
                </div>
            </Row>

        )
    }
}

export default MainComponent