import { SessionDescriptionHandler } from "./sessionDescriptionHandler";
import { WebPhoneSession } from "./session";
import { MediaStreamFactory } from 'sip.js/lib/platform/web/session-description-handler/media-stream-factory';
import { SessionDescriptionHandlerConfiguration } from 'sip.js/lib/platform/web/session-description-handler/session-description-handler-configuration';
import { SessionDescriptionHandlerFactoryOptions } from 'sip.js/lib/platform/web';
import { Logger } from "sip.js/lib/core";
import { VDISessionDescriptionHandler } from "webadapter-vdisdh/src/VDISessionDescriptionHandler";
var Enums_1 = require("../Enums");

export interface WebPhoneSessionDescriptionHandlerConfiguration extends SessionDescriptionHandlerConfiguration {
    enableDscp?: boolean;
}

export interface WebPhoneSessionDescriptionHandlerFactoryOptions extends SessionDescriptionHandlerFactoryOptions {
    enableDscp?: boolean;
}

export class vdisdh extends VDISessionDescriptionHandler {

    public static defaultSessionDescriptionFactory = (
        session: WebPhoneSession,
        options?: WebPhoneSessionDescriptionHandlerFactoryOptions
    ) => {
        const mediaStreamFactory = defaultMediaStreamFactory();
    
        // make sure we allow `0` to be passed in so timeout can be disabled
        const iceGatheringTimeout = options?.iceGatheringTimeout !== undefined ? options?.iceGatheringTimeout : 5000;
    
        // merge passed factory options into default session description configuration
        const sessionDescriptionHandlerConfiguration: WebPhoneSessionDescriptionHandlerConfiguration = {
            iceGatheringTimeout,
            enableDscp: options.enableDscp,
            peerConnectionConfiguration: {
                ...defaultPeerConnectionConfiguration(),
                ...options?.peerConnectionConfiguration
            }
        };
    
        const logger = session.userAgent.getLogger('sip.VDISessionDescriptionHandler');
    
        return new SessionDescriptionHandler(logger, mediaStreamFactory, sessionDescriptionHandlerConfiguration);
    };
}

function defaultPeerConnectionConfiguration(): RTCConfiguration {
    return {
        bundlePolicy: 'balanced', // Note: max-bundle is not supported by the demo backend currently (5/15/17)
        certificates: undefined,
        iceCandidatePoolSize: 0,
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }], // TURN URL example: "turn:88.88.88.0:3478", "test", "test"
        iceTransportPolicy: 'all',
        peerIdentity: undefined,
        rtcpMuxPolicy: 'require'
    } as RTCConfiguration;
}
function defaultMediaStreamFactory(): MediaStreamFactory {
    return (constraints: MediaStreamConstraints): Promise<MediaStream> => {
        // if no audio or video, return a media stream without tracks
        if (!constraints.audio && !constraints.video) {
            return Promise.resolve(new MediaStream());
        }
        // getUserMedia() is a powerful feature which can only be used in secure contexts; in insecure contexts,
        // navigator.mediaDevices is undefined, preventing access to getUserMedia(). A secure context is, in short,
        // a page loaded using HTTPS or the file:/// URL scheme, or a page loaded from localhost.
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Privacy_and_security
        if (navigator.mediaDevices === undefined) {
            return Promise.reject(new Error('Media devices not available in insecure contexts.'));
        }
        return navigator.mediaDevices.getUserMedia.call(navigator.mediaDevices, constraints);
    };
}
