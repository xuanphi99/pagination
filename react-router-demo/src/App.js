import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Html from './component/book_categories/HtmlBook';
import Css from './component/book_categories/CssBook';
import JavaScript from './component/book_categories/JavaScriptBook';
import NodeJs from './component/book_categories/NodeJsBook';
import Menu from './component/template/Menu';
import Footer from './component/template/Footer';
import PageNotFound from './component/template/PageNotFound';
import ViewBook from './component/book_categories/ViewDetailBook';
import PaginationPage from './component/pagination/PaginationPage';
import { useState } from 'react';
import ReactBook from './component/book_categories/ReactBook';

function App(props) {

  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(1) // currentPage

  // get total page match , send to Pagination
  function callBackFunc(totalPage) {
    setTotalPage(totalPage)
  }
  // Get current Page from Pagination component when click
  function sendPageNumber(page) {
    setPage(page)
  }

  return (

    <Router>

      <div className="container">
        <Menu />
      </div>

      <div className="alert alert-secondary font-weight-bold" role="alert">
        <div className="container">
          <Switch >
            <Route path="/" exact
              render={
                () => (
                  <Html
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              }

            />
            <Route path="/html"
              render={
                () => (
                  <Html
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              } />
            <Route path="/css"
              render={
                () => (
                  <Css
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              } />
            <Route path="/javascript"
              render={
                () => (
                  <JavaScript
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              } />
            <Route path="/react"
              render={
                () => (
                  <ReactBook
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              } />
            <Route path="/nodejs"
              render={
                () => (
                  <NodeJs
                    parentCallback={callBackFunc}
                    page={page}
                  />
                )
              } />

            <Route path="/book-detail/:id" component={ViewBook} />


            <Route path='*' exact={true} component={PageNotFound} />

          </Switch>
          <PaginationPage
            totalPage={totalPage}
            sendPageNumber={sendPageNumber}
          />
        </div>
      </div>


      <Footer />
    </Router>

  );
}

export default App;
