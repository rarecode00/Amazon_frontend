import instance from "../utils/AxiosInstace";

export async function addProduct({ name, category, rating, price }: { name: string, category: string, rating: string, price: string }) {
    return instance.post("/api/product/add-product", { name, category, rating, price })
}