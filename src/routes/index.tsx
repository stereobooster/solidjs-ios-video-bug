import { Title } from "solid-start";
import { createSignal } from "solid-js";

export default function Home() {
  const [source, setSource] = createSignal();
  const getStream = () =>
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: "environment" },
      })
      .then(setSource)
      .catch(alert);

  return (
    <main>
      <Title>Video bug</Title>
      <video
        style={{ border: "1px solid red" }}
        prop:srcObject={source()}
        autoplay
        muted
        playsinline
        onClick={getStream}
      />
    </main>
  );
}
