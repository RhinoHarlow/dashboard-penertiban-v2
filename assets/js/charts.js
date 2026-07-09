document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // TARGET VS REALISASI
    // =========================
    createBarChart(
        "chartTarget",
        ["Target", "Realisasi"],
        [100, 75],
        ["#2563EB", "#22C55E"],
        "Rupiah"
    );

    // =========================
    // TREND BULANAN
    // =========================
    createLineChart(
        "chartTrend",
        ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        [15, 22, 18, 28, 35, 40],
        "#2563EB",
        "Trend"
    );

    // =========================
    // RUPIAH
    // =========================
    createBarChart(
        "chartRupiah",
        ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        [12, 18, 25, 22, 30, 35],
        "#16A34A",
        "Juta Rupiah"
    );

    // =========================
    // KUBIKASI
    // =========================
    createLineChart(
        "chartKubikasi",
        ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        [5, 8, 12, 18, 16, 21],
        "#0891B2",
        "Kubikasi"
    );

    // =========================
    // PENERTIBAN WILAYAH
    // =========================
    createBarChart(
        "chartWilayah",
        ["Utara", "Selatan", "Timur", "Barat", "Pusat"],
        [24, 18, 35, 20, 28],
        "#F59E0B",
        "Penertiban"
    );

});


// =========================
// BAR CHART
// =========================

function createBarChart(id, labels, data, colors, label) {

    const ctx = document.getElementById(id);

    if (!ctx) return;

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: label,

                data: data,

                backgroundColor: colors,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}


// =========================
// LINE CHART
// =========================

function createLineChart(id, labels, data, color, label) {

    const ctx = document.getElementById(id);

    if (!ctx) return;

    new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: label,

                data: data,

                borderColor: color,

                backgroundColor: color,

                fill: false,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}