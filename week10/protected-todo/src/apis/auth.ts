const USER_DB = [{ username: 'Eunie', password: 'password' }]

type TLogin = {
    username: string,
    password: string
};
export const getAuth = async ({username, password}:TLogin) => {
    return new Promise<{ username: string }>((resolve, reject) => {
        setTimeout(() => {
            const user = USER_DB.find((user)=>user.username===username
            && user.password===password);

            if (user) {
                document.cookie = `username=${user.username}`;
                resolve({ username: user.username });
            } else {
                reject(new Error('로그인 실패'));
            }
        }, 1_000);
    })
}