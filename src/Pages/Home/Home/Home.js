import React from 'react';
import { useTitle } from '../../../CustomHook/useTitle';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Stats from '../Stats/Stats';

const Home = () => {
    useTitle('Home - ');
    return (
        <div>
           <Carousel></Carousel>
           <Categories></Categories>
           <Stats></Stats>
        </div>
    );
};

export default Home;