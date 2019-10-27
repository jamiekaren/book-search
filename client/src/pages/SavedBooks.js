import React, { Component } from "react";
// import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import {
    Col, Row, Container,
    Jumbotron,
} from 'reactstrap';
// import { Link } from "react-router-dom";


class SavedBooks extends Component {
    state = {
        books: [],
        image: "",
        title: "",
        author: [],
        description: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    componentDidUpdate(){
        console.log("Current updated state", this.state.books);
    }


    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));

        console.log(this.state.books);
    };




    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <center>
                                    <h1 className="display-3">Book Lovers welcomed here.</h1>
                                    <br></br>

                                    <p className="lead">Ever wish you had your own personal butler for books? </p>

                                    <p className="lead">With Bookmarker Pro you can search for your favorite books, and even save them for later.
                                We take reading seriously.</p>
                                </center>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1>Saved Books</h1>
                       

                        {/* 
                        {this.state.books.map(books =>
                            <SearchResults
                                key={books.data.id}
                                title={books.data.title}
                                authors={books.data.authors[0]}
                                description={books.data.description}
                                info={books.data.link}
                                image={books.data.image ? books.data.image : ""}

                            />
                        
                    )} */}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default SavedBooks;