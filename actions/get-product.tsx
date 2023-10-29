
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
   
    const res = await fetch(`${URL}/${id}`)

    const{ productPlsc, productMongo } = await res.json()
    
    return productPlsc;
}
 
export default getProduct;