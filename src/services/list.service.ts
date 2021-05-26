import http from "../http-common";

class ListDataService{
  getAll() {
    return http.get("/posts");
  }

  get(id: string) {
    return http.get(`/posts/${id}`);
  }
}

export default new ListDataService();