import { useContext, useState } from "react";

import { IoMdAdd } from "react-icons/io";

import MyContext from "context/MyContext";

import useFetch from "hooks/swrHook";

import { FileSystem } from "components/Pages/Home/FileSystem";
import { LeftModal } from "components/Pages/Home/LeftModal";
import { Header } from "components/Pages/Home/Header";
import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { customHomeButton } from "styles/custom/home/buttons";
import * as S from "styles/home";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { filteredFiles, simpleModalStatus } = useContext(MyContext);

  const { data } = useFetch();
  if (!data) return <span>Carregando...</span>;

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <S.GlobalContainer>
      <Header files={data} />
      <div className="secondary">
        {simpleModalStatus && <LeftModal />}
        <div className="third">
          <h2>Todos os itens</h2>
          <FileSystem files={filteredFiles ? filteredFiles : data} />
        </div>
      </div>
      <ModalComponent files={data} isOpen={isModalOpen} />
      <Button
        customStyle={customHomeButton}
        onClick={openModal}
        type="button"
        text={<IoMdAdd />}
      />
    </S.GlobalContainer>
  );
}
