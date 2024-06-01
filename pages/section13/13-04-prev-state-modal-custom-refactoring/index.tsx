import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleComplete = (data: Address) => {
    console.log(data);
    onToggleModal();
  };
  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      {/*모달 종료 방식 1 - 모달 숨기는 방법*/}
      <Modal open={isModalOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/*모달 종료 방식 1 - 모달 삭제하는 방법*/}
      {isModalOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
