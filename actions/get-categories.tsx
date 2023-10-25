import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL)

    const{ categoriesPlsc, categoriesMongo } = await res.json()
    
    return categoriesPlsc;
}
 
export default getCategories;