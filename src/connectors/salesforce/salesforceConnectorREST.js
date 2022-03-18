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
    getAccessToken(code) {
        const data = {
            grant_type: 'authorization_code',
            code,
            client_id: '3MVG9riCAn8HHkYWhCjpJsP6M7CogzJaVsFgPuLnx8ubjRUAWxfz2FwveQnigPmuOVM1p2khA_Mmqj03tqzjc',
            client_secret: '25D3EAE8C9C5DDE04365A4BF7087115DAA6E0597F79A617A1D5730D7542B7BAF',
            redirect_uri: 'https://cocky-murdock-0e7ad6.netlify.app/#/',
        };

        return new Promise((resolve, reject) => {
            axios.post(
                'https://ec-expedite-dev-ed.my.salesforce.com/services/oauth2/token'+
                this.serialize(data)
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