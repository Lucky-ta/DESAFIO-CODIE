import { useState } from "react";

import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

import { TiSpanner } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";

import useFetch from "hooks/swrHook";

import PasswordManager from "utils/fileSystemFunctions";

import { getFiles } from "services/api/filesApi";

import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { IPasswordCard } from "./interface";

import * as S from "./styles";

export function FolderCard({ password }: IPasswordCard) {
  const { mutate } = useFetch();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDeleteCard = async () => {
    await PasswordManager.deleteUserPassword(password);
    const allFiles = await getFiles();
    mutate(allFiles);
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
          Editar
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleDeleteCard}>
          Excluir
        </MenuItem>
        <MenuItem className="menu-item">Clonar</MenuItem>
        <MenuItem divider />
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
