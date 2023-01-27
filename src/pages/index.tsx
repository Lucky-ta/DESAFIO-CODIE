import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import * as StyledModal from "../components/Modal/index";
import * as GlobalContainer from "../styles/global";
import * as StyledButtons from "../components/Buttons";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ModalComponent from "../components/Modal/Modal";
import MyContext from "../context/MyContext";
import { useContext } from 'react';

export default function Home() {
  const { setIsModalOpen } = useContext(MyContext);
  
  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <HeaderComponent />
      <ModalComponent />
      <StyledButton.AddPasswordButton onClick={openModal} type="button">
        {<IoMdAdd />}
      </StyledButton.AddPasswordButton>
    </GlobalContainer.GlobalContainer>
  );
}
