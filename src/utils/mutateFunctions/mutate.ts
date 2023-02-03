import { DataShape, FileShape } from "interfaces/interfaces";

export const updateMutate = (data, formData, mutate) => {
    const originalFileIndex = data.findIndex(
        (file) => file.fileName === formData.file
    );
    if (originalFileIndex === -1) {
        data.push({
            fileName: formData.file,
            passwords: [
                {
                    url: formData.url,
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                },
            ],
        });
    } else {
        const originalFile = data[originalFileIndex];
        const passwordIndex = originalFile.passwords.findIndex(
            (password) =>
                password.url === formData.url && password.email === formData.email
        );

        if (passwordIndex === -1) {
            originalFile.passwords.push({
                url: formData.url,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                file: formData.file,
            });
        } else {
            originalFile.passwords[passwordIndex] = {
                url: formData.url,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                file: formData.file,
            };
        }

        const targetFileIndex = data.findIndex(
            (file) => file.fileName === formData.file
        );
        if (targetFileIndex !== -1 && targetFileIndex !== originalFileIndex) {
            const targetFile = data[targetFileIndex];
            targetFile.passwords.push(
                originalFile.passwords.splice(passwordIndex, 1)[0]
            );
        }
    }
    mutate(data, false);
}

export const createMutate = (data, formData, mutate) => {
    const file = data.find((file: FileShape) => file.fileName === formData.file);

    if (!file) {
        const newFile = {
            fileName: formData.file,
            passwords: [
                {
                    url: formData.url,
                    name: formData.name,
                    email: formData.email,
                    id: formData.id,
                    password: formData.password,
                },
            ],
        };
        data.push(newFile);
    } else {
        file.passwords.push({
            url: formData.url,
            name: formData.name,
            email: formData.email,
            id: formData.id,
            password: formData.password,
        });
    }

    mutate(data, false);
}

export const deleteMutate = (data, password, mutate) => {
    const file = data.find((file: FileShape) => file.fileName === password.file);
    const updatedPasswords = file.passwords.filter(
        (filterPass: DataShape) => filterPass.id !== password.id
    );

    const fileIndex = data.findIndex(
        ({ fileName }) => fileName === password.file
    );

    if (data[fileIndex].passwords.length !== 1) {
        data[fileIndex].passwords = updatedPasswords;
    } else {
        data.splice(fileIndex, 1);
    }

    mutate(data, false);
}
