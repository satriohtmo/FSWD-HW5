let arr = [];

class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

function openCity(evt, cityName) {
  showTable();
  tableResume();
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

async function getStudent(_form) {
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let uang = document.getElementById("uang").value;

  console.log(nama, umur, uang);
  let student = await new Pendaftar(nama, umur, uang);
  // console.log(student);
  await arr.push({ nama: student.nama, umur: student.umur, uang: student.uang });
  // console.log(arr);
  document.getElementById("pendaftaran").reset();
}

function showTable() {
  var outputHTML = "";
  outputHTML += "<table border='2px' width='400'>";

  outputHTML += "<tr><td> Name </td> <td> Umur </td> <td> Uang Saku </td></tr>";
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    outputHTML += "<tr><td>" + arr[i].nama + "</td>" + "<td>" + arr[i].umur + "</td>" + "<td>" + arr[i].uang + "</td></tr>";
  }

  outputHTML += "</table>";

  document.getElementById("table").innerHTML = outputHTML;
}

function tableResume() {
  var outputHTML = "";
  outputHTML += "<table border='2px' width='400'>";
  outputHTML += "<tr><td> Rata Rata Umur </td> <td> Rata Rata Uang Saku </td></tr>";

  let nilaiUmur = 0;
  let pembulatanUmur = 0;
  let nilaiUang = 0;
  let pembulatanUang = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const umur = arr[i].umur;
    const uang = arr[i].uang;
    nilaiUmur += umur / arr.length;
    pembulatanUmur = Math.round(nilaiUmur);
    nilaiUang += uang / arr.length;
    pembulatanUang = Math.round(nilaiUang);
  }
  outputHTML += "<tr><td>" + pembulatanUmur + "</td>" + "<td>" + pembulatanUang + "</td></tr>";
  outputHTML += "</table>";

  document.getElementById("tableResume").innerHTML = outputHTML;
}
