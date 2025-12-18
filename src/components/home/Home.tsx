import { PreJoin } from "@livekit/components-react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <PreJoin
        userLabel="user1"
        onSubmit={(values) => {
          navigate("/user", { state: values, replace: true });
        }}
      />
    </div>
  );
}
