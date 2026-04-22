import Header from './pages/common/header.jsx'
import Navigation from './pages/common/navigation.jsx'
import Footer from './pages/common/footer.jsx'
import PageHome from './pages/pagehome.jsx'
import PageJavaScript from "./pages/pagejavascript.jsx";
import PageReact from "./pages/pagereact.jsx";
//import PageSPA from "./pages/pagespa.jsx";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function PageAssembler() {
    return (
        <>
            <Router>
                <Header headerText={"Web Programozás-I Előadás Házi Feladat"}/>
                <Navigation/>
                <Routes>
                    <Route path="/home" element={<PageHome />} />
                    <Route path="/fetch" element={<wipPageFetch />} />
                    <Route path="/axios" element={<wipPageAxios />} />
                    <Route path="/oojs" element={<wipPageOOJS />} />
                    <Route path="/javascript" element={<PageJavaScript />} />
                    <Route path="/react" element={<PageReact />} />
                    <Route path="/spa" element={<wipPageSPA />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
                <Footer/>
            </Router>
            <script type="text/javascript" src="/scripts/navigationscript.jsx"></script>
        </>
    )
}
export default PageAssembler
