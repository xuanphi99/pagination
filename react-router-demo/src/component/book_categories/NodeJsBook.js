import React, { Component } from 'react'
import { BookConstant } from '../../constant/BookConstant';
import BookService from '../../service/BookService';
import BookIntro from './BookIntro'

export default class NodeJs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            pageSize : 1,
            dataCurrent : []



        };
    }
    parentCallback  = (pageSize) => {
        this.props.parentCallback(Math.ceil (pageSize));
      }

    componentDidMount() {
        BookService.getBookByCategory(5)
            .then((res) => {
                this.setState({ 
                    dataCurrent: res.data ,
                    pageSize : Math.ceil (res.data.length / BookConstant.TOTAL_PAGE_LIMIT )

                 });
                 this.parentCallback(this.state.pageSize); 

            })
            .catch(function (err) {
                if (err.response) {
                    console.log("CALL API FAIL ");
                } else if (err.request) {
                    console.log(err.message+ "ERROR NET NOT WORKING");

                } else {
                    console.log(err.message +" SERVER IS BUSY ..");
                }
            })

            this.callAPIPagination(this.props.page)


    }

    callAPIPagination = (nextProps) => {
        BookService.paginationPage(5,nextProps.page,  BookConstant.TOTAL_PAGE_LIMIT)
        .then((res) => {
            this.setState({
                dataCurrent: res.data 

                });
            
        })
        .catch(function (err) {
            if (err.response) {
                console.log("CALL API FAIL ");
            } else if (err.request) {
                console.log(err.message+ "ERROR NET NOT WORKING");

            } else {
                console.log(err.message +" SERVER IS BUSY ..");
            }
        })
     }



// Pagination
componentWillReceiveProps(nextProps) {
    // get API pagination
    this.callAPIPagination(nextProps);

}

    render() {
        return (
            <div className="container"> 
            NodeJS BOOK
            <div className="row">
               
                {
                    this.state.dataCurrent.map((book, index) => {
                        return (
                            <BookIntro
                            key = {index}
                            id =  {book.id}
                            author = {book.author}
                            img = {book.img}
                            title = {book.title} 

                            />

                           
                        )
                    })
                }


            </div>
        </div>
        )
    }
}
