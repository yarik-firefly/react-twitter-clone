import { useDispatch, useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home, { useHomeStyles } from "./pages/Home";
import { getMe } from "./redux/slices/authSlice";
import React from "react";
import TwitterIcon from "./components/TwitterIcon";
import styles from "./App.module.scss";

function App() {
  const { open } = useSelector((state) => state.modalSlice);
  const { auth, statusMe } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isReady = statusMe !== "loading";

  const checkAuth = () => {
    try {
      dispatch(getMe());
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (Boolean(auth)) {
      navigate("/home*");
    } else {
      navigate("/signin*");
    }
  }, [auth]);

  if (!isReady) {
    return (
      <div className={styles.root}>
        <TwitterIcon style={{ justifyContent: "center" }} />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
