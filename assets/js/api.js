async function loadSheet() {

    return new Promise((resolve) => {

        Papa.parse(CONFIG.DATA_URL, {

            download: true,

            header: true,

            skipEmptyLines: true,

            complete: function(results) {

                console.table(results.data);

                resolve(results.data);

            }

        });

    });

}