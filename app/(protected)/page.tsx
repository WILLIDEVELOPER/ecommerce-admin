"use client"; 
import { Modal } from "@/components/modal";

const SetUpPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="test description"
        isOpen={true}
        onClose={() => console.log("close")}
      >
        children
      </Modal>
    </div>
  );
};

export default SetUpPage;
