import {RCBidirectionalWebsocketRouter} from 'ringcentral-media-redirection-sdk/src/RCBidirectionalWebsocketRouter';
import {RCRpcMessageDecoder} from 'ringcentral-media-redirection-sdk/src/RCRpcMessageDecoder';
import {RCRpcMessageEncoder} from 'ringcentral-media-redirection-sdk/src/RCRpcMessageEncoder';
const JSONRPC = require('jsonrpc-bidirectional');

export default {
    connectionUrl: 'ws://localhost:8235/api',
    router: JSONRPC.BidirectionalWebsocketRouter,
    serverPlugins: [JSONRPC.Plugins.Server.AuthenticationSkip, JSONRPC.Plugins.Server.AuthorizeAll],
    clientPlugins: []
};