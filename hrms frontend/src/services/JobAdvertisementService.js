import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/findbyid?id=" + id)
    }

    getByEmployer(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyemployer?companyName=" + companyName)
    }

}
