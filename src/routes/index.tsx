import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Video bug</Title>
      <video
        id="video"
        style={{border: "1px solid red"}}
        autoplay
        muted
        playsinline
        onclick={() => {
          navigator.mediaDevices
            .getUserMedia({
              audio: false,
              video: { facingMode: "environment" },
            })
            .then((stream) => {
              const video = document.getElementById(
                "video"
              ) as HTMLVideoElement;
              video.srcObject = stream;
            })
            .catch((error) => alert(error));
        }}
      ></video>
    </main>
  );
}
