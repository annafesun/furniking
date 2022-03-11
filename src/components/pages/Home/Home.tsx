import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
//components
import Benefits from "../../UI/organisms/Benefits";
import Collections from "../../UI/organisms/Collections";
import SpecialOffer from "../../UI/organisms/SpecialOffer";
import Trending from "../../UI/organisms/Trending";
import Testimonials from "../../UI/organisms/Testimonials";
import Blogs from "../../UI/organisms/Blogs";

const Home: React.FC = () => {
    return (
        <>
            <Benefits />
            <Collections />
            <SpecialOffer />
            <Trending />
            <Testimonials />
            <Blogs />
        </>
    );
};

export default withRouter(Home);