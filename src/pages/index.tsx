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
  if (!data) return <span>Loading...</span>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredData = () => {
    const lowercaseFilter = filterWord.toString().toLowerCase();
    return data.reduce((filteredFiles, file: FileShape) => {
      const filteredPasswords = file.passwords.filter((password: DataShape) =>
        Object.values(password).some((val) =>
          val.toString().toLowerCase().includes(lowercaseFilter)
        )
      );
      if (filteredPasswords.length > 0) {
        filteredFiles.push({ ...file, passwords: filteredPasswords });
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
          <h2>All items</h2>
          <FileSystem files={filteredData()} />
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
