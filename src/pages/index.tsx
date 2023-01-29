import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import { getAllPasswords } from "../services/passwordsApi";

export default function Home() {
  const { setIsModalOpen, shouldRequestPasswords } = useContext(MyContext);
  const [passwords, setPasswords] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchPasswords = async () => {
      const allPasswords = await getAllPasswords();
      setPasswords(allPasswords);
    };
    fetchPasswords();
  }, [shouldRequestPasswords]);

  console.log(passwords);

  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <HeaderComponent />
      <ModalComponent />
      <StyledButton.AddPasswordButton
        data-testid="openModal"
        onClick={openModal}
        type="button"
      >
        {<IoMdAdd />}
      </StyledButton.AddPasswordButton>
    </GlobalContainer.GlobalContainer>
  );
}
