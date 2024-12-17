import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const resolvedParams = await params; // Asegúrate de que params esté resuelto si es una promesa
  const { storeId } = resolvedParams;

  const session = await auth();
  const userId = session?.user?.id ?? null;

  if (!userId) return null;

  const store = await db.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) redirect("/");

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
