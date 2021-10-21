import axios from 'axios';
import { BookConstant } from '../constant/BookConstant';

const BOOK_API_BASE_URL = BookConstant.BOOK_BASE_URL;

class BookService {
    getBooks(){
        return axios.get(BOOK_API_BASE_URL);
    }
    getBookByCategory(categoryID){
        return axios.get(BOOK_API_BASE_URL+"?categoryID="+categoryID)
    }

    getBookId(bookId){
        return axios.get(BookConstant.GET_DETAIL_BOOK+bookId)
    }

    paginationPage(categoryID,pageCurrent,limit){
        //http://localhost:8080/v1/api/books?
        //http://localhost:8080/v1/api/books/categoryID=1?&_page=1&_limit=5
        return axios.get(BookConstant.PAGINATION_PAGE+"?categoryID="+categoryID+"&_page="+pageCurrent+"&_limit="+limit)
    }

    
}
export default new BookService()