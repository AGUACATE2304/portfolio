import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import {
    Header,
    Footer,
    Contact,
    Curriculum,
    Projects,
    LandingPage,
    NotFound
} from '../../assets/components/index.js'

const AppProvider = () => {

    return (
        <>
        {/* <Header /> */}
        <Router>
            <Routes>
                <Route
                    path="/portfolio/"
                    element={<LandingPage />}
                />
                <Route 
                    path="/portfolio/home"
                    element={<LandingPage />}
                />
                <Route
                    path="/portfolio/contact"
                    element={<Contact />}
                />
                <Route
                    path="/portfolio/curriculum"
                    element={<Curriculum />}
                />
                <Route
                    path="/portfolio/projects"
                    element={<Projects />}
                />
                <Route path="/portfolio/404" element={<NotFound />} />
            </Routes>
        </Router>
        <Footer />
        </>
    )
}

export default AppProvider;