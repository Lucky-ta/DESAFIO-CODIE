import { getAllPasswords } from "../../services/api/passwordsApi";
import MyContext from "../../context/MyContext";
import { useContext, useEffect } from "react";

export default function FileSystem() {
  const {
    files,
    setShouldRequestPasswords,
    shouldRequestPasswords,
    setPasswords,
  } = useContext(MyContext);

  useEffect(() => {
    const fetchPasswords = async () => {
      const allPasswords = await getAllPasswords();
      setPasswords(allPasswords);
    };
    fetchPasswords();
  }, [shouldRequestPasswords]);

  const keys = Object.keys(files);
  console.log(files);

  return (
    <div>
      {keys.length <= 0 ? (
        <span>Nenhuma senha por aqui.</span>
      ) : (
        keys.map((key) => {
          return (
            <div>
              <span>
                {key} ({files[key].length})
              </span>
              {files[key].map((data, index) => {
                return (
                  <div>
                    <h2>CARD {index}</h2>
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
}
