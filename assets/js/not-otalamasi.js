let kacadet = prompt("Kaç adet sayı toplamak istersiniz?");
let toplam = 0;
for (let i =1;i <= kacadet;i++)  {
  toplam += Number(prompt(i + ". sayıyı giriniz"));
  ortalama = toplam / kacadet;
}

alert("ortalamanız " + ortalama);
