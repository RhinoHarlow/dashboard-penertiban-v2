function updateKPI(data) {

    if (!data || data.length === 0) return;

    // Ambil baris TOTAL (baris terakhir)
    const totalRow = data.find(row => row.NO === "");

    // Kalau tidak ketemu, pakai baris terakhir
    const lastRow = totalRow || data[data.length - 1];

    // Target KPI (dari baris pertama)
    const target = Number(data[0]["TARGET KPI"]) || 0;

    // Total Realisasi
    const total = Number(lastRow["TOTAL"]) || 0;

    // Persentase
    const persen = target > 0 ? ((total / target) * 100).toFixed(1) : 0;

    document.getElementById("targetRupiah").textContent =
        target.toLocaleString("id-ID");

    document.getElementById("realisasiRupiah").textContent =
        total.toLocaleString("id-ID");

    document.getElementById("persentase").textContent =
        persen + "%";

}