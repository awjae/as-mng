declare module 'simplewebrtc' {
  export default class SimpleWebRTC {
    constructor(options: {
      // SimpleWebRTC의 옵션 정의
      // 예: url, socketio, localVideo, remoteVideos 등
    });

    on(event: 'readyToCall', handler: () => void): void;
    on(event: 'videoAdded', handler: (video: HTMLVideoElement, peer: any) => void): void;
    joinRoom(roomName: string): void;
    leaveRoom(): void;
    // SimpleWebRTC의 메소드 정의
    // 필요한 경우 추가
  }
}