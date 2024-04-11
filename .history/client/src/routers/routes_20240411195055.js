import React, { Suspense, lazy, useState } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "../components/notFound/notFound";
import Sidebar from "../components/layout/sidebar/sidebar";
import LoadingScreen from "../components/loading/loadingScreen";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import styled from "styled-components";

const { Content } = Layout;

const Login = lazy(() => {
    return Promise.all([
        import("../pages/Login/login"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const AccountManagement = lazy(() => {
    return Promise.all([
        import("../pages/AccountManagement/accountManagement"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const ChangePassword = lazy(() => {
    return Promise.all([
        import("../pages/ChangePassword/changePassword"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const Profile = lazy(() => {
    return Promise.all([
        import("../pages/Profile/profile"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const AssetCategory = lazy(() => {
    return Promise.all([
        import("../pages/Admin/AssetCategory/assetCategory"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const ResetPassword = lazy(() => {
    return Promise.all([
        import("../pages/ResetPassword/resetPassword"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const Notification = lazy(() => {
    return Promise.all([
        import("../pages/Admin/Notification/notification"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const AssetManagement = lazy(() => {
    return Promise.all([
        import("../pages/Rentals/AssetManagement/assetManagement"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const CurrentlyRented = lazy(() => {
    return Promise.all([
        import("../pages/Rentals/CurrentlyRented/currentlyRented"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const VehicleApproval = lazy(() => {
    return Promise.all([
        import("../pages/Rentals/VehicleApproval/vehicleApproval"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const DashBoard = lazy(() => {
    return Promise.all([
        import("../pages/DashBoard/dashBoard"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const NewsList = lazy(() => {
    return Promise.all([
        import("../pages/News/news"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});

const FacultyManager = lazy(() => {
    return Promise.all([
        import("../pages/Admin/Faculty/facultyManager"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});
const ArticleManager = lazy(() => {
    return Promise.all([
        import("../pages/Admin/Ariticle/articleManager"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});
const ArticleStudent = lazy(() => {
    return Promise.all([
        import("../pages/ArticleStudent/articleStudent"),
        new Promise((resolve) => setTimeout(resolve, 0)),
    ]).then(([moduleExports]) => moduleExports);
});
const StyledContent = styled(Content)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 55px;

    @media (max-width: 1024px) {
        margin-left: ${(props) => (props.collapsed ?  "200px")};
    }

    @media (max-width: 768px) {
        margin-left: ${(props) => (props.collapsed ? "50px" : "100%")};
    }

    @media (max-width: 480px) {
        margin-left: ${(props) => (props.collapsed ? "40px" : "100%")};
    }
`;
const RouterURL = withRouter(({ location }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const LoginContainer = () => (
        <div>
            <PublicRoute exact path="/">
                <Suspense fallback={<LoadingScreen />}>
                    <Login />
                </Suspense>
            </PublicRoute>
            <PublicRoute exact path="/login">
                <Login />
            </PublicRoute>
            <PublicRoute exact path="/reset-password/:id">
                <ResetPassword />
            </PublicRoute>
        </div>
    );

    const DefaultContainer = () => (
        <PrivateRoute>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar
                    isSidebarCollapsed={isSidebarCollapsed}
                    setIsSidebarCollapsed={setIsSidebarCollapsed}
                />
                <Layout>
                    <Header />
                    <StyledContent collapsed={isSidebarCollapsed}>
                        <Content>
                            <PrivateRoute exact path="/account-management">
                                <Suspense fallback={<LoadingScreen />}>
                                    <AccountManagement />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute exact path="/faculty">
                                <Suspense fallback={<LoadingScreen />}>
                                    <FacultyManager />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute exact path="/article">
                                <Suspense fallback={<LoadingScreen />}>
                                    <ArticleManager />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute exact path="/article-student">
                                <Suspense fallback={<LoadingScreen />}>
                                    <ArticleStudent />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute exact path="/profile">
                                <Suspense fallback={<LoadingScreen />}>
                                    <Profile />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/change-password/:id">
                                <Suspense fallback={<LoadingScreen />}>
                                    <ChangePassword />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/acdemicyear">
                                <Suspense fallback={<LoadingScreen />}>
                                    <AssetCategory />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/notifications">
                                <Suspense fallback={<LoadingScreen />}>
                                    <Notification />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/asset-management">
                                <Suspense fallback={<LoadingScreen />}>
                                    <AssetManagement />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/dash-board">
                                <Suspense fallback={<LoadingScreen />}>
                                    <DashBoard />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/currently-rented">
                                <Suspense fallback={<LoadingScreen />}>
                                    <CurrentlyRented />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/vehicle-approval">
                                <Suspense fallback={<LoadingScreen />}>
                                    <VehicleApproval />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/news-list">
                                <Suspense fallback={<LoadingScreen />}>
                                    <NewsList />
                                </Suspense>
                            </PrivateRoute>

                            <PrivateRoute exact path="/notfound">
                                <NotFound />
                            </PrivateRoute>
                        </Content>
                    </StyledContent>
                    <Footer />
                </Layout>
            </Layout>
        </PrivateRoute>
    );

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginContainer />
                    </Route>

                    <Route exact path="/login">
                        <LoginContainer />
                    </Route>

                    <Route exact path="/reset-password/:id">
                        <LoginContainer />
                    </Route>

                    <Route exact path="/asset-management">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/profile">
                        <DefaultContainer />
                    </Route>
                    <Route exact path="/faculty">
                        <DefaultContainer />
                    </Route>
                    <Route exact path="/article">
                        <DefaultContainer />
                    </Route>
                    <Route exact path="/article-student">
                        <DefaultContainer />
                    </Route>
                    <Route exact path="/change-password/:id">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/dash-board">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/account-management">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/asset-management">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/acdemicyear">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/notifications">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/dash-board">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/currently-rented">
                        <DefaultContainer />
                    </Route>
                    <Route exact path="/vehicle-approval">
                        <DefaultContainer />
                    </Route>

                    <Route exact path="/news-list">
                        <DefaultContainer />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
});

export default RouterURL;
