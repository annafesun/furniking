import React, {Suspense} from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Layout from "../components/Layout";
import {routes} from "../constants/routes";

const Home = React.lazy(() => import('components/pages/Home/Home'));
const Test = React.lazy(() => import('components/pages/Test/Test'));

const AppRoutes = () => {
    return (
        <Suspense
            fallback={<div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    fontSize: "50px"
                }}
            >Loading...</div>}
        >
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.shop} component={Home} />
                        <Route exact path={routes.blog} component={Home} />
                        <Route exact path={routes.about} component={Home} />
                        <Route exact path={routes.contact} component={Home} />
                        <Redirect to={routes.home} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoutes;