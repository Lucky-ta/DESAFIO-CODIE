import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";
import { DataShape } from "../../interfaces/interfaces";
import { getAllPasswords } from "../../services/api/passwordsApi";

export default function FileSystem() {
  const {
    files,
    setShouldRequestPasswords,
    shouldRequestPasswords,
    newCurrentFile,
  } = useContext(MyContext);
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      const allPasswords = await getAllPasswords();
      setPasswords(allPasswords);
    };
    fetchPasswords();
  }, [shouldRequestPasswords]);

  useEffect(() => {
    const validateFiles = (data: DataShape[] = []) => {
      const findFile = data.find(({ file }) => file === newCurrentFile.file);

      if (findFile) {
        // Adiciona senha ao arquivo existente
        console.log(findFile);
        console.log(files);
        files[findFile.file] = [...files[findFile.file], newCurrentFile];
        return console.log("o arquivo já existe");
      }
      // Cria novo arquivo
      files[newCurrentFile.file] = [newCurrentFile];
      return console.log("arquivo criado");
    };

    validateFiles(passwords);
    setShouldRequestPasswords(false);
  }, [shouldRequestPasswords, passwords, files, newCurrentFile]);

  const keys = Object.keys(files);
  console.log(files);

  return (
    <div>
      {keys.length <= 0 ? (
        <span>Nenhuma senha por aqui.</span>
      ) : (
        <span>{keys}</span>
      )}
    </div>
  );
}
