import axios from 'axios';

export default class SalesforceConnectorREST {
    /** ****************      Auth Start by Bala ******************   */
    getoAuthCode(url, cKey, redirectUrl) {
        window.location.replace(`${url}client_id=${cKey}&redirect_uri=${
            encodeURI(redirectUrl)
        }&response_type=code`);
        // return new Promise((resolve, reject) => {
        //     axios.get(
        //         `${url}client_id=${cKey}&redirect_uri=${
        //             encodeURI('https://login.salesforce.com/services/oauth2/callback')
        //         }&response_type=code`
        //     )
        //     .then(r => {
        //         resolve(r.data);
        //     })
        //     .catch(e => {
        //         reject(e);
        //     })

        // });
    }

    serialize(obj) {
        var str = [];
        for (var p in obj)
          // eslint-disable-next-line no-prototype-builtins
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    }
    /** ****************      Auth Start by Bala ******************   */
    getAccessToken(data, reqUrl) {

        return new Promise((resolve, reject) => {
            axios.post(
                reqUrl,
                data,
                { 
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    } 
                }
            )
            .then(r => {
                resolve(r.data);
            })
            .catch(e => {
                reject(e);
            })

        });
    }

    getResponseUsingAccessToken(url, atoken) {

        return new Promise((resolve, reject) => {
            axios.get(
                url,
                { 
                    headers: {
                        "Authorization": "Bearer " + atoken,
                    } 
                }
            )
            .then(r => {
                resolve(r.data);
            })
            .catch(e => {
                reject(e);
            })

        });
    }
    // https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_refresh_token_flow.htm&type=5

    
    /** ****************      Auth Stop by Bala ******************   */
}