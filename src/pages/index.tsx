import { useContext, useState } from "react";

import { IoMdAdd } from "react-icons/io";

import MyContext from "context/MyContext";

import useFetch from "hooks/swrHook";

import { DataShape, FileShape } from "interfaces/interfaces";

import { FileSystem } from "components/Pages/Home/FileSystem";
import { LeftModal } from "components/Pages/Home/LeftModal";
import { Header } from "components/Pages/Home/Header";
import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { customHomeButton } from "styles/custom/home/buttons";
import * as S from "styles/home";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { simpleModalStatus, filterWord } = useContext(MyContext);

  const { data } = useFetch();
  if (!data) return <span>Carregando...</span>;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterData = () => {
    const wordToLowerCase = filterWord.toString().toLowerCase();

    return data.reduce((filteredFiles, object: FileShape) => {
      const filteredPasswords = object.passwords.filter((pass: DataShape) => {
        return Object.values(pass).some((val) =>
          val.toString().toLowerCase().includes(wordToLowerCase)
        );
      });
      if (filteredPasswords.length > 0) {
        filteredFiles.push({ ...object, passwords: filteredPasswords });
      }
      return filteredFiles;
    }, [] as FileShape[]);
  };

  return (
    <S.GlobalContainer>
      <Header />
      <div className="secondary">
        {simpleModalStatus && <LeftModal />}
        <div className="third">
          <h2>Todos os itens</h2>
          <FileSystem files={filterData()} />
        </div>
      </div>
      <ModalComponent
        requestType="POST"
        closeModal={closeModal}
        isOpen={isModalOpen}
      />
      <Button
        customStyle={customHomeButton}
        onClick={openModal}
        type="button"
        text={<IoMdAdd />}
      />
    </S.GlobalContainer>
  );
}
