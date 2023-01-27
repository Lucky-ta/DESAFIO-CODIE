import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as GlobalContainer from '../styles/global'

export default function Home() {
  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <HeaderComponent />
    </GlobalContainer.GlobalContainer>
  );
}
