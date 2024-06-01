import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse";
import { Button, Modal, Space } from "antd";
import { useState } from "react";

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
  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달제목"
        open={isModalOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        비밀번호 입력
        <input type="password" />
      </Modal>
    </>
  );
}
