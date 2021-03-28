# Sirclo Technical Test

## Repository ini terdiri dari 3 project yang berbeda :

- Implementasi Data Structure - Shopping Cart
- Membuat aplikasi untuk CRUD index berat badan 
- Programming Paradigm - Shipping Yard

### Implementasi Data Structure - Shopping Cart
Software Library Shopping Cart yang memilik fungsi:

- void tambahProduk(string kodeProduk, int kuantitas)
- Menambahkan produk dengan kuantitas yang ditentukan.
- Apabila produk sudah ada di dalam Cart, tambahkan kuantitasnya.
- void hapusProduk(string kodeProduk)
- Menghapus produk dari Cart.
- void tampilkanCart()
- Menampilkan isi Cart dengan format {kodeProduk} ({kuantitas})

Program terdapat unit testing dengan menggunakan jest, pastikan sudah menginstall jest dengan:
```
 npm i --save-dev @types/jest

```

### Membuat aplikasi untuk CRUD index berat badan 

** Program berisi: **

- Sebuah laman index yang menampilkan berat badan per hari.
- Perbedeaan berat badan di dapat dengan cara max - min.
- Data harus di urut secara menurun.
- Data rata-rata.
- Sebuah laman detail yang menampilkan berat badan pada hari tertentu.
- Sebuah laman create & edit untuk membuat / update data berat badan.

** Formnya harus mempunyai: **
- Tanggal
- Berat Max
- Berat Min

#### Pada sisi server side menggunakan framework adonis.js dengan mengimplementasikan MVC Architectural 

###### Cara menjalankan servernya

```js
cd BeratBadan/server/berat-badan/ 
npm install 
copy file .env.example dan ganti menjadi .env 
isi konfigurasi postgres 

adonis migration:run
npm run start
maka akan berjalan di http://127.0.0.1:3333
```

#### Pada sisi client side menggunakan framework angular 
###### Cara menjalankan servernya
```js
cd BeratBadan/client 
npm install 
ng serve 
maka akan berjalan di http://127.0.0.1:3333

```


### Programming Paradigm - Shipping Yard

Pemrograman paradigma OOP dengan menggunakan bahasa pemrograman typescript.

Pada projek ini saya telah mengimplementasikan konsep - konsep OOP seperti:
- Abstract class 
- Polymorphism 
- Encapsulation

Cara menjalankan program ini 

```
masuk ke directory ShippingYard 
tsc -t es5 Ship.ts
node Ship.js

```













