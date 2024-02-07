// hitung selisih antara 2 tanggal

let now = new Date()
let future = new Date("01/01/2025")

// console.log(future)
// untuk mempermudah menghitung selisih waktu pake millisecond
// console.log(now.getTime())
// console.log(future.getTime())

// menemukan selisih antara 2 hari dalam millisecond
let diff = future.getTime() - now.getTime()

// conversi dari millisecond -> hari
let days = Math.floor(diff / (1000 * 60 * 60 * 24))

// console.log(diff)
// console.log(days)
console.log(`${days} hari menuju tahun baru`)

// write code to convert days to year, month and days.

let n = 300
let tahun = Math.floor(n / 365)
let sisa = n - (tahun * 365)
let bulan = Math.floor(sisa / 30)
let hari = sisa - (bulan * 30)

console.log(`${tahun} tahun, ${bulan} bulan & ${hari} hari`)
// console.log(sisa)
// console.log(tahun)
// console.log(bulan)
// console.log(hari)
// console.log(8 % 3)