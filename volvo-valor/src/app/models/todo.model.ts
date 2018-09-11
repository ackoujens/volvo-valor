class ToDo {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: String;

    constructor() {
        this.title = '';
        this.description = '';
        this.date = new Date();
        this.status = '';
    }
}

export default ToDo;
