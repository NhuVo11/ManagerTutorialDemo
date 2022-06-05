import http from './http-common'

const getAll = () => {
    return http.get("/tutorials");
}
const remove = (id) =>{
    return http.delete(`/tutorials/${id}`);
}
const get = (id) => {
    return http.get(`/tutorials/${id}`)
}
const create = (data) =>{
    return http.post("/tutorials", data);
}
const update = (data, id) =>{
    return http.put(`/tutorials/${id}`,data);
}
const findByTitle  = (title) =>{
    return http.get(`/tutorials?title=${title}`)
}
const TutorialService = {
     getAll,
     get,
     create,
     update,
     remove,
     findByTitle
};

export default TutorialService;
