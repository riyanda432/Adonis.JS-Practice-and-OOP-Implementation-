
/**
 * 
 * Sebuah galangan kapal ingin membuat aplikasi untuk menyimpan data/denah kapal yang telah dibuat.

Dengan konsep pemrograman berorientasi objek, buatlah class beserta abstraksi, 
function dan properties untuk beberapa tipe kapal(perahu motor, perahu layar & kapal pesiar) 
dan mengimplementasikan beberapa konsep dasar seperti enkapsulasi & polimorfisme.
Class harap di upload ke PRIVATE GitHub repository dan tambahkan/invite fandywie sebagai Collaborator. 
Apabila ada pertanyaan dapat menghubungi tech.career@sirclo.co.id

enkapsulasi
polimorphism
abstract class
function
properties (speed, muatan, )

 */

abstract class Kapal  {
    public name:   string;
    private _muatan: number;
    private _speed:  number;
    public jenis:  string;

    public set kecepatan(_speed : number) {
        this._speed = _speed;
    }

    public get kecepatan():number {
        return this._speed;
    }

    public set muatan(muatan: number) {
        this._muatan = muatan
    }

    public get muatan(): number {
        return this._muatan
    }

    public set nama(nama: string) {
        this.name = nama
    }

    public get nama(): string {
        return this.name
    }

    public set jeniss(jenis: string) {
        this.jenis = jenis
    }

    public get jeniss(): string {
        return this.jenis;
    }

    sayHello() {
        console.log(`Hello, saya adalah kapal jenis ${this.jenis} dan nama saya kapal ${this.name}!`);
    }
    
}

class PerahuMotor extends Kapal {
    public super_speed: number;
    
    public set superSpeeds(super_speed: number) {
        this.super_speed = super_speed
    }

    public get superSpeeds():number {
        return this.super_speed
    }

    superSpeed () {
        return `Hallo kelebihan ku ada speed tambahan yaitu ${this.super_speed}`
    }
}

class KapalPesiar extends Kapal {
    private _keyKapalPesiar: number;
    public muatan_besar:number;

    public set privateKeyKapalPesiar(_keyKapalPesiar: number) {
        this._keyKapalPesiar = _keyKapalPesiar
    }

    public get privateKeyKapalPesiar():number {
        return this._keyKapalPesiar
    }

    muatanBesar () {
        return `Hallo kelebihan ku muatan besar yaitu ${this.muatan_besar}`
    }
   
}

class PerahuLayar extends Kapal {

    menangkapIkan () {
        return `Hallo kelebihan aku biasa digunakan untuk menangkap ikan `
    }
}

const pl = new PerahuLayar()
const kp = new KapalPesiar()
const pm = new PerahuMotor()

console.log(pl.menangkapIkan())

// General Regist Kapal Pesiar 
kp.jeniss = 'Kapal Pesiar'
kp.kecepatan = 100
kp.muatan = 500
kp.nama = 'Kapal Pesiar Barokah'

// General Regist Perahu Layar
pl.jeniss = 'Perahu Layar'
pl.kecepatan = 15
pl.muatan = 10
pl.nama = 'Perahu Layar Sejahtera'

// General Regist Perahu Motor
pm.jeniss = 'Perahu Motor'
pm.kecepatan = 50
pm.muatan = 6
pm.nama = 'Perahu Motor Sentosa'


/** 
 * Kapal pesiar mempunyai private key untuk menyebrangi antar negara 
 * Kapal pesiar juga mempunyai muatan yang besar loh
*/
kp.privateKeyKapalPesiar = 33355515351
kp.muatanBesar()

/** 
 * Perahu motor punya kecepatan yang handal
*/
pm.superSpeeds = 5555
pm.superSpeed()

