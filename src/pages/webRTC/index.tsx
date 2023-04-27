import React, { useEffect, useRef } from "react";
import SimpleWebRTC from "simplewebrtc"; // 사용할 라이브러리를 import합니다.

const VideoChat = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  //Signaling 서버 구축 (websocket) : 클라이언트 간의 P2P 연결을 설정하기 위한 중계 서버
  //NAT Traversal 서버 구축 : 클라이언트 간의 P2P 통신을 위해 필요한 네트워크 환경 정보를 제공하는 서버
  //필요
  useEffect(() => {
    const webrtc = new SimpleWebRTC({
      // Socket.io 서버의 주소
      url: 'http://localhost:8888',

      // 미디어 스트림을 얻기 위한 옵션
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true,

      // 채팅 메시지 처리를 위한 옵션
      enableDataChannels: true,
      dataChannelConfig: {
        ordered: true,
        maxRetransmits: 3,
      },
      receiveMedia: {
        mandatory: {
          OfferToReceiveAudio: true,
          OfferToReceiveVideo: true,
        },
      },

      // 방 입장 시 자동으로 마이크/카메라를 켤지 여부
      autoAdjustMic: false,
      detectSpeakingEvents: true,
    });

    webrtc.on("readyToCall", () => {
      webrtc.joinRoom("room-name");
    });

    webrtc.on("videoAdded", (video: any, peer: any) => {
      if (video) {
        video.setAttribute("data-peer-id", peer.id);
        videoRef.current?.appendChild(video);
      }
    });

    return () => {
      webrtc.leaveRoom();
    };
  }, []);

  return (
    <div>
      <div ref={videoRef}></div>
    </div>
  );
};

export default VideoChat;
