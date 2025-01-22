import { TTodo } from "../types/todoType";

export const getTodoList = async (): Promise<TTodo[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve([
                {
                    id: 1,
                    text: 'todo 1',
                    checked: false,
                },
                {
                    id: 2,
                    text: 'todo 2',
                    checked: false,
                }
            ]);
        });
    });
}