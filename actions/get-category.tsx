
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string): Promise<Category> => {
   
    const res = await fetch(`${URL}/${id}`)

    const{ categoryPlsc, categoryMongo } = await res.json()
    
    return categoryMongo;
}
 
export default getCategory;