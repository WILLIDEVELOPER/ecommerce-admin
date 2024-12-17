import { db } from "@/lib/db";
import { getUserId } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function SetUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getUserId();

  if (!userId) return null;

  const store = await db.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) redirect(`/${store.id}`);

  return <>{children}</>;
}
