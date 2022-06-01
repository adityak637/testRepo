import React from 'react';
import { Input } from 'reactstrap';
import { Link } from "react-router-dom";
import './searchbox.scss';
import user from '../../assets/img/user.svg';

const SearchBox = (props) => {

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <Input type="text" name="search" />
      </div>

      <div className="search-list">
        <ul>
          <li>
            <Link to="/">
              <img src={user} alt="" />
              <span>Text label</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default SearchBox;
