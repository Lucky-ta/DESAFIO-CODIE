import { useState } from "react";

import {
  ContextMenu,
  ContextMenuTrigger,
  MenuItem,
  SubMenu,
} from "react-contextmenu";

import { BiTrash, BiChevronRight } from "react-icons/bi";
import { TiSpanner } from "react-icons/ti";
import { FaClone } from "react-icons/fa";

import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { IPasswordCard } from "./interface";

import PasswordManager from "utils/fileSystemFunctions";

import { getFiles } from "services/api/filesApi";

import useFetch from "hooks/swrHook";

import * as S from "./styles";

export function FolderCard({ password }: IPasswordCard) {
  const { data, mutate } = useFetch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const clonePassword = async () => {
    const CLONE_ID = 999;
    const passwordClone = {
      ...password,
      id: password.id + CLONE_ID,
    };

    await PasswordManager.createUserPassword(passwordClone, passwordClone.file);
    const allFiles = await getFiles();
    mutate(allFiles);
  };

  const handleMovePassword = async (_e, { item: fileName }) => {
    await PasswordManager.movePassword(fileName, password);
    const allFiles = await getFiles();
    mutate(allFiles);
  };

  const handleDeleteCard = async () => {
    await PasswordManager.deleteUserPassword(password);
    const allFiles = await getFiles();
    mutate(allFiles);
  };

  const getFileNames = (): string[] => {
    let fileNames: string[] = [];
    data.map(({ fileName }) => {
      fileNames = [...fileNames, fileName];
    });

    return fileNames;
  };

  const redirectToUrl = () => {
    window.open(password.url, "_blank");
  };

  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.FolderCard>
      <ContextMenuTrigger id={JSON.stringify(password.id)}>
        <div className="card-header">
          <Button onClick={redirectToUrl} type="button" text="Iniciar" />
        </div>

        <div className="card-content">
          <div>
            <h3 className="name">{password.name}</h3>
            <h3 className="email">{password.email}</h3>
          </div>
          <div className="card-buttons">
            <Button onClick={openModal} type="button" text={<TiSpanner />} />
            <Button
              onClick={handleDeleteCard}
              type="button"
              text={<BiTrash />}
            />
          </div>
        </div>
      </ContextMenuTrigger>

      <ContextMenu className="context-menu" id={JSON.stringify(password.id)}>
        <MenuItem className="menu-item" onClick={openModal}>
          <TiSpanner className="menu-item-icon" />
          <span className="menu-item-text">Editar</span>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleDeleteCard}>
          <BiTrash className="menu-item-icon" />
          <span className="menu-item-text">Excuir</span>
        </MenuItem>
        <MenuItem className="menu-item" onClick={clonePassword}>
          <FaClone className="menu-item-icon" />
          <span className="menu-item-text">Clonar</span>
        </MenuItem>

        <div className="submenu">
          <SubMenu title="Mover para a pasta">
            <BiChevronRight />
            <div className="submenu-item-container">
              {!getFileNames().includes("NONE") && (
                <MenuItem
                  onClick={handleMovePassword}
                  className="submenu-item menu-item"
                >
                  NONE{" "}
                </MenuItem>
              )}
              {getFileNames().map((fileName, index) => {
                return (
                  <MenuItem
                    key={index}
                    data={{ item: fileName }}
                    onClick={handleMovePassword}
                    className="submenu-item menu-item"
                  >
                    {fileName}
                  </MenuItem>
                );
              })}
            </div>
          </SubMenu>
        </div>

        <MenuItem
          className="menu-item"
          onClick={() => copyToClipBoard(password.password)}
        >
          Copiar senha
        </MenuItem>
        <MenuItem
          className="menu-item"
          onClick={() => copyToClipBoard(password.url)}
        >
          Copiar URL
        </MenuItem>
        <MenuItem className="menu-item" onClick={redirectToUrl}>
          Ir para URL
        </MenuItem>
      </ContextMenu>

      <ModalComponent
        requestType="PATCH"
        initialValue={password}
        isOpen={isModalOpen}
        closeModal={closeModal}
        folder={password}
      />
    </S.FolderCard>
  );
}
