import React from 'react';
//components
import Layout from "./components/Layout";
import Trending from "./components/UI/organisms/Trending";
import SpecialOffer from "./components/UI/organisms/SpecialOffer";
import Collections from "./components/UI/organisms/Collections";
import Benefits from "./components/UI/organisms/Benefits";
import Blogs from "./components/UI/organisms/Blogs";
import Testimonials from "./components/UI/organisms/Testimonials";
import SectionMenu from "./components/UI/organisms/SectionMenu";


function App() {
    // const {counter} = useAppSelector(({counterReducer}) => counterReducer)
    // const dispatch = useDispatch()
    //
    // const addCounter = () => {
    //     dispatch(CounterActions.addCounterRequest())
    // }

    return (
       <Layout theme="white">
           <SectionMenu />
           <Benefits />
           <Collections />
           <SpecialOffer />
           <Trending />
           <Testimonials />
           <Blogs />
       </Layout>
    );
}

export default App;
