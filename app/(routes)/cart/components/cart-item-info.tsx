
interface CartItemInfoProps {
    product: Record<string, any>
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
    product
}) => {
    return (
    <div>
        <div className="flex justify-between">
            <p className="text-sm font-semibold text-black">
                { product.name }
            </p>
        </div>

        <div className="mt-1 flex text-sm">
            {/* Color */}
            <p className="text-gray-500">
                { product.color }
            </p>
            {/* Size */}
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                { product.size }
            </p>
        </div>

        {/* Price */}
        <p className="mt-1 text-sm font-medium text-gray-900">
            { product.price }
        </p>
    </div>
    );
}
 
export default CartItemInfo;