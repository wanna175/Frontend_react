import { Button, Modal, Space } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = () => {
    Modal.success({
      content: "some messages...some messages...",
    });
  };
  const onClickError = () => {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  };
  return (
    <>
      <button onClick={onClickSuccess}>성공했을 때</button>
      <button onClick={onClickError}>실패했을 때</button>
    </>
  );
}
