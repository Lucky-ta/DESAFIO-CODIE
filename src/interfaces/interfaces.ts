export interface DataShape {
    url: string,
    name: string,
    file: string,
    email: string,
    password: string,
    id?: number,
};

export interface FileShape {
    [key: string]: DataShape[];
}
