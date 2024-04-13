import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "7bc70553ee0249eda6a9e11df74a562a"
    }
})