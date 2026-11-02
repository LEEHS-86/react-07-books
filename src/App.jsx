import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Detail from "./pages/Detail.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} /> {/* 검색화면 */}
                <Route path={"/search"} element={<Search />} /> {/* 목록화면 */}
                <Route path={"/detail/:id"} element={<Detail />} />{" "}
                {/* 상세화면 , 동적라우팅은 Route에 '/:id' 경로에 써줌*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
