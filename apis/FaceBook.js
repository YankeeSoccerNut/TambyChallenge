import FBSDK, { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


class FacebookGraph {
    
    // default is get logged in users name and picture
    async getProfile(callback, query='/me?fields=name,picture'){

    // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
            query,
            null,
            callback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
    }
};

module.exports = FacebookGraph;
