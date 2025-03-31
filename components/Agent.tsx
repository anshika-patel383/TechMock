import Image from "next/image";

const Agent = () => {
  const isSpeaking = true;
  return (
    <div className="call-view">
      <div className="card-interviewer">
        <div className="avatar">
          <Image
            src="/ai-avatar.png"
            alt="vapi"
            width={65}
            height={54}
            className="object-cover"
          />
          {isSpeaking && <span className="animate-speak" />}
        </div>
        <h3>AI Interviewer</h3>
      </div>
      <div className="card-border">
        <div className="card content">
          <Image
            src="/user-avtar.png"
            alt="user avtar"
            width={540}
            height={540}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Agent;
