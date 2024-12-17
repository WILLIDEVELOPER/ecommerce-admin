
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { UserButton } from "@/components/user-button";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/modules/shop/components/store-switcher";

const Navbar = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  const stores = await db.store.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="ml-6"/>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
