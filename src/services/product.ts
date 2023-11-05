import instance from "../utils/AxiosInstace";

export async function addProduct({ name, category, rating, price }: { name: string, category: string, rating: string, price: string }) {
    return instance.post("/api/auth/createuser", { name, category, rating, price })
}