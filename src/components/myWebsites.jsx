import React, { Component } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { IconContext } from "react-icons";


class MyWebsites extends Component {
    state = {  }
    render() { 
        return(
        
            <IconContext.Provider value={{ color: "black", size : "2.5em",  style: {marginLeft: '0.8rem'}}}>
            <div>
                <a href="https://github.com/woo0073">
                    <AiFillGithub />
                </a>
                <a href="https://jihyewoo.tistory.com/"><FcHome/></a>
            </div>
          </IconContext.Provider>
        );
    }
}
 
export default MyWebsites;