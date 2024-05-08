export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const cnt = Number(document.getElementById("cnt").innerText) + 1;
    document.getElementById("cnt").innerText = cnt;
  }
  function onClickCountDown() {
    const cnt = Number(document.getElementById("cnt").innerText) - 1;
    document.getElementById("cnt").innerText = cnt;
  }

  return (
    <div>
      <div id="cnt">0</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
