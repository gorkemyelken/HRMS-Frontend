import axios from "axios"

export default class jobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }
    getByJobPosition(position){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyjobposition?position=" + position)
    }
}
