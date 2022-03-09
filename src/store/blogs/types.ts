export interface BlogsStateType {
    blogs: Blog[]
}

export interface Blog {
    img: string;
    date?: string;
    title?: string;
    text: string;
}