// 1
function aHarfiSoni(soz) {
  let count = 0;
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] == "a") {
      count++;
    }
  }
  return count;
}

// 2
function oxirgiUchHarf(soz) {
  return soz.substring(soz.length - 3);
}

// 3
function birinchiHarfniKattaQil(soz) {
  let sozlar = soz.split(" ");
  let natija = sozlar.map((soz) => {
    if (soz.length > 0) {
      return soz[0].toUpperCase() + soz.slice(1);
    } else {
      return soz;
    }
  });
  return natija.join(" ");
}

// 4
function boshJoylarniOlib(soz) {
  let result = "";
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] != " ") {
      result += soz[i];
    }
  }
  return result;
}

// 5
function teskariSoz(soz) {
  let result = "";
  for (let i = soz.length - 1; i >= 0; i--) {
    result += soz[i];
  }
  return result;
}

// 6
function belgilarSoni(soz) {
  let count = 0;
  for (let i = 0; i < soz.length; i++) {
    count++;
  }
  return count;
}

// 7
function uchMartaTakrorla(soz) {
  return soz + soz + soz;
}

// 8
function faqatSonlar(soz) {
  let result = "";
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] >= "0" && soz[i] <= "9") {
      result += soz[i];
    }
  }
  return result;
}

// 9
function birinchiSoz(soz) {
  let result = "";
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] == " ") {
      break;
    }
    result += soz[i];
  }
  return result;
}

// 10
function jsQidirish(soz) {
  return soz.toLowerCase().indexOf("js") !== -1;
}

// 1
function engKattaElement(massiv) {
  let max = massiv[0];
  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] > max) {
      max = massiv[i];
    }
  }
  return max;
}

// 2
function juftSonlar(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] % 2 == 0) {
      result.push(massiv[i]);
    }
  }
  return result;
}

// 3
function yigindi(massiv) {
  let sum = 0;
  for (let i = 0; i < massiv.length; i++) {
    sum += massiv[i];
  }
  return sum;
}

// 4
function ikkilashtir(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    result.push(massiv[i] * 2);
  }
  return result;
}

// 5
function musbatSonlar(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] >= 0) {
      result.push(massiv[i]);
    }
  }
  return result;
}

// 6
function noyobElementlar(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    if (!result.includes(massiv[i])) {
      result.push(massiv[i]);
    }
  }
  return result;
}

// 7
function massivlarniQosh(massiv1, massiv2) {
  let result = [];
  for (let i = 0; i < massiv1.length; i++) {
    result.push(massiv1[i]);
  }
  for (let i = 0; i < massiv2.length; i++) {
    result.push(massiv2[i]);
  }
  return result;
}

// 8
function teskariMassiv(massiv) {
  let result = [];
  for (let i = massiv.length - 1; i >= 0; i--) {
    result.push(massiv[i]);
  }
  return result;
}

// 9
function toqIndeksliElementlar(massiv) {
  let result = [];
  for (let i = 1; i < massiv.length; i += 2) {
    result.push(massiv[i]);
  }
  return result;
}

// 10
function ortachaQiymat(massiv) {
  let sum = 0;
  for (let i = 0; i < massiv.length; i++) {
    sum += massiv[i];
  }
  return sum / massiv.length;
}

// 1
function engKattaYoshliOdam(odamlar) {
  let maxYosh = odamlar[0].yosh;
  let maxIsm = odamlar[0].ism;
  for (let i = 1; i < odamlar.length; i++) {
    if (odamlar[i].yosh > maxYosh) {
      maxYosh = odamlar[i].yosh;
      maxIsm = odamlar[i].ism;
    }
  }
  return maxIsm;
}

// 2
function yoshdanKattaOdamlar(odamlar, yosh) {
  let result = [];
  for (let i = 0; i < odamlar.length; i++) {
    if (odamlar[i].yosh > yosh) {
      result.push(odamlar[i]);
    }
  }
  return result;
}

// 3
function ismlarRoyxati(odamlar) {
  let result = [];
  for (let i = 0; i < odamlar.length; i++) {
    result.push(odamlar[i].ism);
  }
  return result;
}

// 4
function yoshlarYigindisi(odamlar) {
  let sum = 0;
  for (let i = 0; i < odamlar.length; i++) {
    sum += odamlar[i].yosh;
  }
  return sum;
}

// 5
function ismdagiOdamniTop(odamlar, ism) {
  for (let i = 0; i < odamlar.length; i++) {
    if (odamlar[i].ism == ism) {
      return odamlar[i];
    }
  }
  return undefined;
}

// 6
function ortachaYosh(odamlar) {
  let sum = 0;
  for (let i = 0; i < odamlar.length; i++) {
    sum += odamlar[i].yosh;
  }
  return sum / odamlar.length;
}

// 7
function ayollarniTop(odamlar) {
  let result = [];
  for (let i = 0; i < odamlar.length; i++) {
    if (odamlar[i].jins == "ayol") {
      result.push(odamlar[i]);
    }
  }
  return result;
}

// 8
function yoshniOshir(odamlar) {
  let result = [];
  for (let i = 0; i < odamlar.length; i++) {
    result.push({
      ...odamlar[i],
      yosh: odamlar[i].yosh + 1,
    });
  }
  return result;
}
