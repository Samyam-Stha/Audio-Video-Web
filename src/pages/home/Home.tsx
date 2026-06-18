import { PreJoin } from "@livekit/components-react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "../../index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <div className="home-card-wrapper">
        <header className="brand-header">
          <h1 className="brand-title">Ready to connect?</h1>
          <p className="brand-subtitle">Configure your camera, microphone, and set your display name before joining the session.</p>
        </header>

        <div className="prejoin-wrapper">
          <PreJoin
            onSubmit={(values) => {
              navigate("/user", { state: values, replace: true });
            }}
          />
        </div>
      </div>
    </div>
  );
}
