import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import HomeLayout from "./HomeLayout";
import EmployerLayout from "./EmployerLayout";
import CandidateLayout from "./CandidateLayout";
import Navi from "./Navi";
import Footer from './Footer';
import JobAdvertisementLayout from './JobAdvertisementLayout';
import CandidateSignUp from '../pages/CandidateSignUp';
import Letscallyou from '../pages/Letscallyou';
import CandidateDetail from '../pages/CandidateDetail';
import EmployerDetail from '../pages/EmployerDetail';
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail';
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd';
import AboutUsPage from '../pages/AboutUsPage';

export default function Dashboard() {
    return (

        <div >
            <Container className="dashboard">
                <Navi />
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/companies" component={EmployerLayout} />
                <Route exact path="/companies/:id" component={EmployerDetail} />
                <Route exact path="/candidates" component={CandidateLayout} />
                <Route exact path="/candidates/:id" component={CandidateDetail} />
                <Route exact path="/jobadvertisements" component={JobAdvertisementLayout} />
                <Route exact path="/jobadvertisements/:id" component={JobAdvertisementDetail} />
                <Route exact path="/jobadvertisementadd" component={JobAdvertisementAdd} />
                <Route exact path="/individualsignup" component={CandidateSignUp} />
                <Route exact path="/aboutus" component={AboutUsPage} />
                <Route exact path="/letscallyou" component={Letscallyou} />
                <Footer/>
            </Container>
        </div>
    )
}
