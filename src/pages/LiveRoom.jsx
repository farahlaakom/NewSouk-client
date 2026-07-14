import { useState } from "react";
import { useParams } from "react-router-dom";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import api from "../services/api";

export default function LiveRoom() {
  const [token, setToken] = useState("");
  const { productId } = useParams();

  const startLive = async () => {
    try {
      const res = await api.post("/livekit/token", {
  room: `product-${productId}`,
  identity: `seller-${productId}`,
});
console.log("SELLER TOKEN:", res.data.token);
      setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  if (!token) {
    return (
      <div className="p-8">
        <button
          onClick={startLive}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Live
        </button>
      </div>
    );
  }

  return (
    <LiveKitRoom
      token={token}
      serverUrl="wss://newsouk-dgqbphci.livekit.cloud"
      connect={true}
      video={true}
      audio={true}
    >
      <VideoConference />
    </LiveKitRoom>
  );
}