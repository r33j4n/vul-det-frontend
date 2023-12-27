import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ImageContainer from '../Components/ImgContainer';
import PromptUI from '../Components/PromptUI';
const Home = () => {
    return ( <React.Fragment>
    <NavBar />
    <ImageContainer />
    <PromptUI />
    </React.Fragment> );
}
 
export default Home;