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
    getAccessToken(data) {

        return new Promise((resolve, reject) => {
            axios.post(
                'https://ec-expedite-dev-ed.my.salesforce.com/services/oauth2/token',
                data,
                { crossorigin: true }
            )
            .then(r => {
                resolve(r.data);
            })
            .catch(e => {
                reject(e);
            })

        });
    }
    /** ****************      Auth Stop by Bala ******************   */
}