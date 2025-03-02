import { ProductCard } from "@/app/products";
import { products } from "@/app/products/data/products";

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            {/* Products Card */}
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}