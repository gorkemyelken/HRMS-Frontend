import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import HomeLayout from "./HomeLayout";
import EmployerLayout from "./EmployerLayout";
import CandidateLayout from "./CandidateLayout";
import Navi from "./Navi";
import Footer from './Footer';
import JobAdvertisementLayout from './JobAdvertisementLayout';
import AboutUsLayout from './AboutUsLayout';
import CandidateSignUp from '../pages/CandidateSignUp';
import Letscallyou from '../pages/Letscallyou';
import CandidateDetail from '../pages/CandidateDetail';
import EmployerDetail from '../pages/EmployerDetail';
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail';

export default function Dashboard() {
    return (

        <div >
            <Container className="dashboard">
                <Navi />
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/companies" component={EmployerLayout} />
                <Route path="/companies/:id" component={EmployerDetail} />
                <Route exact path="/candidates" component={CandidateLayout} />
                <Route path="/candidates/:id" component={CandidateDetail} />
                <Route exact path="/jobadvertisements" component={JobAdvertisementLayout} />
                <Route path="/jobAdvertisements/:id" component={JobAdvertisementDetail} />
                <Route exact path="/aboutus" component={AboutUsLayout} />
                <Route exact path="/individualsignup" component={CandidateSignUp} />
                <Route exact path="/letscallyou" component={Letscallyou} />
                <Footer/>
            </Container>
        </div>
    )
}
