import Header from './pages/common/header.jsx'
import Navigation from './pages/common/navigation.jsx'
import Footer from './pages/common/footer.jsx'
import PageHome from './pages/pagehome.jsx'
import PageJavaScript from "./pages/pagejavascript.jsx";
import PageReact from "./pages/pagereact.jsx";
import PageAxios from "./pages/pageaxios.jsx";
import PageSPA from "./pages/pagespa.jsx";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function PageAssembler() {
    return (
        <>
            <Router>
                <Header headerText={"Web Programozás-I Előadás Házi Feladat"}/>
                <Navigation/>
                <Routes>
                    <Route path="/project2/home" element={<PageHome />} />
                    <Route path="/project2/fetch" element={<wipPageFetch />} />
                    <Route path="/project2/axios" element={<PageAxios />} />
                    <Route path="/project2/oojs" element={<wipPageOOJS />} />
                    <Route path="/project2/javascript" element={<PageJavaScript />} />
                    <Route path="/project2/react" element={<PageReact />} />
                    <Route path="/project2/spa" element={<PageSPA />} />
                    <Route path="*" element={<Navigate to={"/project2/home"} />} />
                </Routes>
                <Footer/>
            </Router>
            <script type="text/javascript" src="/scripts/navigationscript.jsx"></script>
        </>
    )
}
export default PageAssembler
