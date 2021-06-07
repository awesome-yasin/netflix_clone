import "./App.css";

import React, { useState } from "react";
import Dataz from "./dataz.jsx";
import ReactPaginate from "react-paginate";
import StarIcon from '@material-ui/icons/Star';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const Page = function App() {
  const [users, setUsers] = useState(Dataz.slice(0, 1850));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((Dataz) => {
      return (
          <>
        <div class="wrapper yep">

<div class="cards">

  <figure class="card">
 
    <img src={Dataz.img} className = "img"/>
    <p className = "card_rating"><StarIcon className = "star" />{Dataz.likes}</p>
    <figcaption><PlayCircleFilledIcon className= "play" /></figcaption>
    
  </figure>
  

</div>


<a href = "#0" className = 'name'>{Dataz.title}</a>
    <p className = 'category'>{Dataz.category}</p>
    
</div>
</>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="Appz">
      {displayUsers}
      <ReactPaginate className = "paginate"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Page;