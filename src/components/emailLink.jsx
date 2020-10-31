import React, { Component } from 'react';
import { FaRegEnvelope } from "react-icons/fa";

class EmailLink extends Component {
    state = {  }
    render() { 
        return <span><FaRegEnvelope/> &nbsp; <a
        href="mailto: woojihye2339@gmail.com">woojihye2339@gmail.com</a></span>;
    }
}
 
export default EmailLink;