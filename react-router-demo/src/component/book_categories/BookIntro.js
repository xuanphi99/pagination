import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookIntro extends Component {
    render() {
        return (
            <div className="col-6 col-md-3 mb-2" >
                <div className="card card--size" >
                    <div className="img--wrapper">
                        <img className="img-fluid card-img-top img--size"
                            alt='book html'
                            src={this.props.img} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Title :{this.props.title}</h5>
                        <p className="card-text">Author :{this.props.author}</p>
                        <Link
                            to={{
                                pathname: '/book-detail/' + this.props.id,
                            }}

                            className="btn btn-outline-primary">Detail
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
