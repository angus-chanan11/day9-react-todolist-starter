import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
})

instance.interceptors.request.use(
    (config) => {
        config.metadata = {startTime: Date.now()}
        console.log("Request: ", config)
        return config
    },
    (error) => {
        console.error("Request Error: ", error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        const responseTime = Date.now() - response.config.metadata.startTime
        console.log("time taken: ", responseTime)
        console.log("Response: ", response)
        return response
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = "/not-found"
        }
        if (error.response && error.response.status === 500) {
            window.location.href = "/hard-stop"
        }
        console.error("Response Error: ", error)
        return Promise.reject(error)
    }
)