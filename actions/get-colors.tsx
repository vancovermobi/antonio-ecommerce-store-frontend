import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL)

    const{ colorsPlsc, colorsMongo } = await res.json()
    
    return colorsPlsc;
}
 
export default getColors;