import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetUpPage = () => {
  return (
    <div className="p-4">
      <Modal title="Test" description="Test desc" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetUpPage;
