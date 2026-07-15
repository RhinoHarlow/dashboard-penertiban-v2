function getCSV(url) {

    return new Promise((resolve, reject) => {

        Papa.parse(url, {

            download: true,

            header: true,

            skipEmptyLines: true,

            complete: function (results) {

                resolve(results.data);

            },

            error: function (err) {

                reject(err);

            }

        });

    });

}

async function loadKubikasi() {

    return await getCSV(CONFIG.KUBIKASI_URL);

}

async function loadRupiah() {

    return await getCSV(CONFIG.RUPIAH_URL);

}