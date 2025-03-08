// let,const ve var arasındaki farklar ve örnekler :

//let : let type safe bir değişken tanımlama yöntemidir.Değişken tanımlandıktan sonra girilen değer değiştirilebilir.
let a = 2;
console.log(a); // çıktımız 2 
a = 5;
console.log(a); // çıktımız 5 
function lettest() {
    if (true) {
        let b = 10;
    }
    //console.log(b); //Let type safe olduğu için tanımlı olduğu kapsam dışından erişmeye çalışınca hata alırız. 
}
lettest();

//var : var type safe bir değişken tanımlama yöntemi değildir .Değişken tanımlandıktan sonra girilen değer değiştirilebilir.Çıktımız 10.
let x = 2;
console.log(x); // çıktımız 2 
x = 5;
console.log(x); // çıktımız 5 
function vartest() {
    if (true) {
        var y = 10;
    }
    console.log(y); //var type safe olmadığı için tanımlı olduğu kapsam dışından erişmeye çalışınca hata almayız.çıktımız 10.
}
vartest();

//const: Değişken tanımlandıktan sonra girilen değer değiştirilemez.
const e = 2.71828;
console.log(e);
//e = 3; eğer const ile tanımlanmış bi değişkeni değiştirmeye çalışırsak TypeError: Assignment to constant variable. tarzında bi hata alırız.

//veri Türleri ve TypeOf ile yazdırma

let str = "Acun Medya Akademi";
let sayi = 29;
let bool = false;
let belirsiz;
let object1 = {name : "sefa",age : 19}
let dizi = [1,2,3,4];
let fonksiyon = function(){return "Acun Medya Akademi"}

console.log(typeof str);
console.log(typeof sayi);
console.log(typeof bool);
console.log(typeof belirsiz);
console.log(typeof object1);
console.log(typeof dizi);
console.log(typeof fonksiyon);

//Kullanıcıdan prompt ile iki sayı alıp, bunların toplamını alert ile göster.

let say1 = Number(prompt("1. Sayıyı Giriniz"));
let say2 = Number(prompt("2. Sayıyı Giriniz"));
alert("Sonuç : " + (say1+ say2));