import instance from "../utils/AxiosInstace";

export async function userCreate({ name, email, password, mobile }: { name: string, email: string, password: string, mobile: string }) {
    return instance.post("/api/auth/createuser", { name, email, password, mobile })
}

export async function userLogin({ email, password }: { email: string, password: string }) {
    return instance.post("/api/auth/login", { email, password })
}