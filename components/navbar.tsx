import Link from "next/link";

import getCategories from "@/actions/get-categories";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";

export const revalidate = 0

interface NavbarProps {
    label   : string
    logo    : string
}

const Navbar: React.FC<NavbarProps> = async ({
    label,
    logo
}) => {

    const categories = await getCategories()
    
    return ( 
        <div className="border-b sticky top-0 z-50 hover:bg-white transition delay-200">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-14 items-center">
                                      
                        <Link href="/" className="flex items-center ml-4 lg:ml-0 gap-x-0">
                            <Image                                                        
                                src={ logo }
                                alt={ label }
                                width={100}
                                height={100}
                                className="h-20 w-20"
                            />
                            <p className="font-bold text-xl">{ label }</p>
                        </Link>
                   

                    <MainNav data={ categories } />

                    <NavbarActions />
                </div>
            </Container>            
        </div>
    );
}
 
export default Navbar;