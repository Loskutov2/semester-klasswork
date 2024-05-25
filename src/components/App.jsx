import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hello!</h1>}/>
      </Routes>
    </>
  );
};
