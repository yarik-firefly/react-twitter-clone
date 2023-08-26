import { useDispatch, useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import Home, { useHomeStyles } from "./pages/Home";

function App() {
  const { open } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  // const clickOnBody = () => {
  //   dispatch(setOpen(false));
  // };
  // document.body.addEventListener("click", clickOnBody);
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
