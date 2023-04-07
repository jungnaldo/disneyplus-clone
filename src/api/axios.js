///인스턴스 생성
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "85ed3ead9e989434fb97895d0a287e6e",
    language: "ko_KR",
  },
});

export default instance;
