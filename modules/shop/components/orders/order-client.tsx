"use client";

import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "@/modules/shop/components/orders/columns";
import { DataTable } from "@/components/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage Orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
