import axios from "./axios";
export const LoginUser = async (token, changeState) => {
    console.log("TOKEN", token);
    try {
        const res = await axios.get('/api/user/login', {
            headers: {
                "authorization": token
            }
        })
        console.log("data",res.data);
        if (res.status == 200) {
            changeState(res.data.update)
        }
    } catch (error) {
        console.log(error);
    }
}
