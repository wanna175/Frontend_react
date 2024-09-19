import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message); //사진주소
      setDog(result.data.message);
    };
    void onClickSync();
  }, []);
  return (
    <div>
      <img src={dog} />
    </div>
  );
}
