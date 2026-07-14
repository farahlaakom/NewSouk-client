import {
  LiveKitRoom,
  VideoConference
} from "@livekit/components-react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ViewerLive() {

  const { productId } = useParams(); // ← ici

  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    axios.post(
      "http://127.0.0.1:8000/api/livekit/token",
      {
        room: `product-${productId}`
      }
    )
    .then(res => {

      console.log("LIVEKIT TOKEN:", res.data.token);

      setToken(res.data.token);

    })
    .catch(err => {
      console.log(err);
    });

  }, [productId]);

  if (!token) {
    return <div>Connecting to live...</div>;
  }

  return (
    <div className="w-full h-screen">
      <LiveKitRoom
        token={token}
        serverUrl="wss://newsouk-dgqbphci.livekit.cloud"
        connect={true}
        video={false}
        audio={false}
      >
        <VideoConference />
        <div className="fixed bottom-6 right-6">
  <button
  onClick={() => navigate(`/checkout/${productId}`)}
  className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold"
>
  🛒 Buy Now
</button>
</div>
      </LiveKitRoom>
    </div>
  );
}