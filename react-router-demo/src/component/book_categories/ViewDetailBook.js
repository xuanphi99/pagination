import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import BookService from '../../service/BookService';

export default class ViewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: this.props.match.params.id,
            book: {},
            exceptionError : false 

        };
    }

    componentDidMount() {

        BookService.getBookId(this.state.id)
            .then((res) => {

                if (res.data.length !== 0) {
                    this.setState({
                        book: res.data.shift(),

                    })
                }

                else {
                  this.setState({
                      exceptionError : true
                  })
                    

                }

            });

    }

    render() {
        // var data = this.state.book.shift();
        const  exceptionError  = this.state.exceptionError;
        console.log(exceptionError);
        if (exceptionError === true) {
            
          return <Redirect to='/page-not-found'/>;
        }
   
        return (


            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <img className="img-fluid card-img-top "
                            alt='book detail'
                            src={this.state.book.img}
                        />

                    </div>
                    <div className="col-12 col-md-6">

                        <div className="jumbotron">
                            <h1 className="display-5">Title book :{this.state.book.title}</h1>
                            <p className="lead">
                                Author :  {this.state.book.author}</p>
                            <hr className="my-4" />
                            <p>
                                Content book : {this.state.book.content}

                            </p>
                            <p className="lead">
                            </p>
                        </div>

                    </div>
                    {/* Block rating */}
                    <div className="col-12 col-md-3">

                        <span className="rating">
                            <span className="totalRating" htmlFor="total">(12)</span>
                            <input type="radio" name="rating" value="5" id="5" />
                            <label htmlFor="5">☆</label>
                            <input className="rate--style" type="radio" name="rating" value="4" id="4" />
                            <label htmlFor="4" >☆</label>
                            <input type="radio" name="rating" value="3" id="3" />
                            <label htmlFor="3">☆</label>
                            <input type="radio" name="rating" value="2" id="2" />
                            <label htmlFor="2">☆</label>
                            <input type="radio" name="rating" value="1" id="1" />
                            <label htmlFor="1">☆</label>
                        </span>


                    </div>

                </div>
            </div>
        )
    }
}
