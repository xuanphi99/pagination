import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationPage(props) {

// pagination use react hook  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // value là số thứ tự trang muốn tới
    setPage(value);
    props.sendPageNumber(value)

  };

  return (
    <div className="pagination_page">
    <Stack 
    spacing={2}
   
    >
      <Pagination 
      count={props.totalPage}
      onChange = {handleChange}
      page = {page}
       variant="outlined" 
       color="secondary" 
      
       showFirstButton 
       showLastButton />
    </Stack>
  </div>
  );
}
