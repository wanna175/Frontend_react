import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOK = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleComplete = (data: Address) => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      {/*모달 종료 방식 1 - 모달 숨기는 방법*/}
      <Modal open={isModalOpen} onOk={handleOK} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/*모달 종료 방식 1 - 모달 삭제하는 방법*/}
      {isModalOpen && (
        <Modal open={true} onOk={handleOK} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
