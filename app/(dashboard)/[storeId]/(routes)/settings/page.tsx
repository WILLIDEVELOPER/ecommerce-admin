import { db } from "@/lib/db";
import { getUserId } from "@/lib/utils";
import { SettingsForm } from "@/modules/shop/components/settings-form";
import { redirect } from "next/navigation";

interface SettingsPageProps {
  params: { storeId: string };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const userId = await getUserId();
  const { storeId } = await params;

  if (!userId) return null;

  const store = await db.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) redirect("/");

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
