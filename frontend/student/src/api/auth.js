import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post("`${process.env.REACT_APP_BASE_URL}/api/student/auth/login", {
      username,
      password
    })

    const { data } = response;

    localStorage.setItem("studentToken", data.data.token);

    console.log("Login Success", data);
    return data;
  } catch (error) {
    console.log("Login Failed:", error);
  }
}

export default { login };