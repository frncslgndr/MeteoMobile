export class InfoClimatRequest {
    static API_URL = "https://www.infoclimat.fr/public-api/gfs/json?";

    constructor(latlong = "43.40735,5.05526") {
        this._auth = "AhgCFVIsBiRecwYxB3EBKFM7UGVZLwIlBnoHZA5gA34CZQRgVjIEZVI4UC1Qf1FgBCkCYl5kVGkFZAprCHpeIgJjAm9SOAZhXjIGbAcwASpTf1AtWWcCJQZ6B2EOawNoAn8EYlY2BGdSI1AwUGlRewQyAn1eflRtBWEKbQhsXjoCYAJlUjUGbV41BnsHKAEzU2VQZVluAjgGbQdlDmUDYgJnBDRWPARlUj5QLFBiUWwEMgJlXmJUbQVvCm0Iel4iAhgCFVIsBiRecwYxB3EBKFM1UG5ZMg%3D%3D";
        this._c = "624be648dd331298b057a6909eef0ace";
        this._latlong = latlong;
    }

    generateUrl() {
        return InfoClimatRequest.API_URL + "_ll=" + this._latlong + "&" + "_auth=" + this._auth + "&" + "_c=" + this._c;
    }

    async send(onSuccess) {
        const response = fetch(this.generateUrl())
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(datas => {
                const formattedData = [];

                for (const key in datas) {
                    if (key !== "request_state" && key !== "request_key" && key !== "message" && key !== "model_run" && key !== "source") {
                        const a = [key];
                        a.push(datas[key])
                        formattedData.push(a);
                    }
                }
                onSuccess(formattedData);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
}
