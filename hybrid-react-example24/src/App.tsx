import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Single from "./views/Single";
import Upload from "./views/Upload";
import Layout from "./views/Layout";

const App = () => {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
