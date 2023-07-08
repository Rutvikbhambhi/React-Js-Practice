import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const RUTVIK = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI";

const header = {
    Authorization: "bearer " + RUTVIK,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get
            (BASE_URL + url, {
                header,
                params
            })
    } catch (err) {
        console.log(err);
        return err;
    }
};