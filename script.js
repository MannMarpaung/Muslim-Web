const city = 1104
const date = new Date()
const dd = String(date.getDate()).padStart(2, "0") //padStart itu buat didepan angka ada angka 0 jika digitnya kurang dari batasan yang kita tentukan.
const mm = String(date.getMonth() + 1).padStart(2, "0")
const yyyy = date.getFullYear()

const now = yyyy + '-' + mm + '-' + dd

// Jadwal Sholat API
const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalApi)
.then(function (response) {
    if (!response.ok) {
        throw new Error("API tidak dapat diakses, ada yang salah!")
    }
    return response.json()
})
.then((data) => {
    const jadwal = data.data
    const list = jadwal.jadwal
    const listJadwal = document.getElementById('list-jadwal')
    const kota = document.getElementById('city')
    const prov = document.getElementById('prov')

    kota.innerHTML = jadwal.lokasi
    prov.innerHTML = jadwal.daerah

    list.forEach((el) => {
        const tr = document.createElement("tr")
        if (el.date === now) {
            tr.classList.add("table-primary")
        }

        //Tanggal
        const dd = document.createElement("td")
        dd.innerText = el.tanggal
        dd.classList.add("date")

        //Imsak
        const imsak = document.createElement("td")
        imsak.innerHTML = el.imsak;

        //Subuh
        const subuh = document.createElement("td")
        subuh.innerHTML = el.subuh;

        //Terbit
        const terbit = document.createElement("td")
        terbit.innerHTML = el.terbit;
        
        //Dzuhur
        const dzuhur = document.createElement("td")
        dzuhur.innerHTML = el.dzuhur;

        //Ashar
        const ashar = document.createElement("td");
        ashar.innerHTML = el.ashar;

        //Maghrib
        const maghrib = document.createElement("td");
        maghrib.innerHTML = el.maghrib;

        //Isya
        const isya = document.createElement("td");
        isya.innerHTML = el.isya;

        listJadwal.appendChild(tr)
        tr.appendChild(dd);
        tr.appendChild(imsak);
        tr.appendChild(subuh);
        tr.appendChild(terbit);
        tr.appendChild(dzuhur);
        tr.appendChild(ashar);
        tr.appendChild(maghrib);
        tr.appendChild(isya);
    });
})