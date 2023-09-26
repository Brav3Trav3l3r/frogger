import styled from "styled-components";
import Frogger from "./components/Frogger";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <h2>Frogger</h2>
      <Frogger />
    </RecoilRoot>
  );
}

export default App;
