import { db } from "@/lib/db";
import { ProductForm } from "@/modules/shop/components/products/product-form";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string; storeId: string }>;
}) => {
  const { storeId, productId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      images: true,
    },
  });

  // Convert product price to a plain number
  const formattedProduct = product
    ? {
        ...product,
        price: product.price.toNumber(), // Convert Decimal to number
      }
    : null;

  const categories = await db.category.findMany({
    where: {
      storeId: storeId,
    },
  });

  const sizes = await db.size.findMany({
    where: {
      storeId: storeId,
    },
  });

  const colors = await db.color.findMany({
    where: {
      storeId: storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductForm
          initialData={formattedProduct}
          colors={colors}
          sizes={sizes}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default ProductPage;
