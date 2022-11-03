// Getting things from html
const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const alinks = document.getElementsByClassName("links")[0];
const informationsubmissionbutton = document.getElementById("infosub");
const results = document.getElementById("result");
const homea = document.getElementById("homea");
const servicesa = document.getElementById("servicesa");
const reviewsa = document.getElementById("reviewsa");
const averagerat = document.getElementById("averagerat");
const ratingsubmissionbutton = document.getElementById("ratsub");
const thx = document.getElementById("thx");
const nameinputed = document.getElementById("nameinputed");
const ageinputed = document.getElementById("ageinputed");
const res1 = document.getElementsByClassName("res1")[0];
const res1name = document.getElementById("res1name");
const res1number = document.getElementById("res1number");
const res1location = document.getElementById("res1location");
const res2name = document.getElementById("res2name");
const res2number = document.getElementById("res2number");
const res2location = document.getElementById("res2location");
const res3name = document.getElementById("res3name");
const res3number = document.getElementById("res3number");
const res3location = document.getElementById("res3location");
const locationinputed = document.getElementById("locationinputed")
const carinputed = document.getElementById("carinputed")
const probleminputed = document.getElementById("probleminputed")



// after every sec
setInterval(() => {
    if (window.scrollY < 599) {
        homea.classList.add("activated");
        servicesa.classList.remove("activated");
        reviewsa.classList.remove("activated");
    } else if (window.scrollY < 1199) {
        servicesa.classList.add("activated");
    homea.classList.remove("activated");
    reviewsa.classList.remove("activated");
  } else if(1199 < window.scrollY ) {
    reviewsa.classList.add("activated");
    homea.classList.remove("activated");
    servicesa.classList.remove("activated");
  }
}, 500);



// Declaring Data Table
p1 = {
  name: "Aahan",
  number: "02223007800",
  new_location: "Kudasan",
};
p2 = {
  name: "Parth",
  number: "00223406644 ",
  new_location: "Kudasan",
};
p3 = {
  name: "Aakil",
  number: "41210786854",
  new_location: "Kudasan",
};


p4 = {
  name: "Kiaan",
  number: "08026562884",
  new_location: "Raysan",
};
p5 = {
  name: "Mahir",
  number: "02224322993",
  new_location: "Raysan",
};
p6 = {
  name: "Nandin",
  number: "02226188242",
  new_location: "Raysan",
};


p7 = {
  name: "Rajubhai",
  number: "95120251342",
  new_location: "Nikol",
};
p8 = {
  name: "Rahul",
  number: "08022683175",
  new_location: "Nikol",
};
p9 = {
  name: "Akshay",
  number: "02226460695",
  new_location: "Nikol",
};


p10 = {
  name: "Sharubhai",
  number: "08022683175",
  new_location: "Nana-Chiloda",
};
p11 = {
  name: "Amitabh",
  number: "02223861408",
  new_location: "Nana-Chiloda",
};
p12 = {
  name: "Jigabhai",
  number: "02225786284",
  new_location: "Nana-Chiloda",
};


p13 = {
  name: "Madhav",
  number: "02222613079",
  new_location: "Sargasan",
};
p14 = {
  name: "Tarak",
  number: "02256683155",
  new_location: "Sargasan",
};
p15 = {
  name: "Iyer",
  number: "01123353657",
  new_location: "Sargasan",
};


p16 = {
  name: "Lalubhai",
  number: "02256249761",
  new_location: "Sector-1,2,3",
};
p17 = {
  name: "Vivaan",
  number: "04424941403",
  new_location: "Sector-1,2,3",
};
p18 = {
  name: "Vishal",
  number: "00222676297",
  new_location: "Sector-1,2,3",
};


p19 = {
    name: "Badhur",
    number: "02225644992",
    new_location: "Sector-4,5,6",
};
p20 = {
    name: "Prakash",
    number: "07926421188",
    new_location: "Sector-4,5,6",
};
p21 = {
    name: "Rambhai",
    number: "02226420511",
    new_location: "Sector-4,5,6",
};


p22 = {
    name: "Deepakbhai",
    number: "01123525287",
    new_location: "Sector-7,8,9",
};
p23 = {
    name: "Pandu",
    number: "22253322878",
    new_location: "Sector-7,8,9",
};
p24 = {
    name: "Jayesh",
    number: "00222676297",
    new_location: "Sector-7,8,9",
};


p25 = {
    name: "Mukesh",
    number: "02266366121 ",
    new_location: "Sector-10,11,12",
  };
p26 = {
    name: "Amit",
    number: "04424941403",
    new_location: "Sector-10,11,12",
  };
p27 = {
    name: "Pravind",
    number: "9989979965",
    new_location: "Sector-10,11,12",
};


x = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27
];



// adding eventlistnener
togglebtn.addEventListener("click", () => {
    alinks.classList.toggle("active");
});

informationsubmissionbutton.addEventListener("click", () => {
    let alldataarray = []
    if (nameinputed.value != "" && ageinputed.value != "" && locationinputed.value != "Location") {
        event.preventDefault();
        results.classList.remove("hider");
        let locationarry = [];
        for (let i = 0; i < x.length; i++) {
            if (x[i]["new_location"] == locationinputed.value) {
                locationarry.push(x[i]);
            }
        }
        res1name.innerHTML = "Name: " + locationarry[0]["name"];
        res1number.innerHTML = "Phone number: " + locationarry[0]["number"];
        res1location.innerHTML = "Location: " + locationarry[0]["new_location"];
        
        res2name.innerHTML = "Name: " + locationarry[1]["name"];
        res2number.innerHTML = "Phone number: " + locationarry[1]["number"];
        res2location.innerHTML = "Location: " + locationarry[1]["new_location"];
        
        res3name.innerHTML = "Name: " + locationarry[2]["name"];
        res3number.innerHTML = "Phone number: " + locationarry[2]["number"];
        res3location.innerHTML = "Location: " + locationarry[2]["new_location"];


        let allinputeddataofperson  = {
            namein : nameinputed.value,
            numberin : ageinputed.value,
            carin : carinputed.value,
            problemin : probleminputed.value,
            locationin : locationinputed.value
        }
        alldataarray.push(allinputeddataofperson)
    }
    else if(locationinputed.value == "Location"){
        alert("Please Enter Your Location")
        event.preventDefault();
    }
    
});

homea.addEventListener("click", () => {
  homea.classList.add("activated");
  servicesa.classList.remove("activated");
  reviewsa.classList.remove("activated");
  event.preventDefault();
  window.scrollTo(0, 0);
});

servicesa.addEventListener("click", () => {
  servicesa.classList.add("activated");
  homea.classList.remove("activated");
  reviewsa.classList.remove("activated");
  event.preventDefault();
  window.scrollTo(0, 600);
});

reviewsa.addEventListener("click", () => {
  reviewsa.classList.add("activated");
  homea.classList.remove("activated");
  servicesa.classList.remove("activated");
  event.preventDefault();
  window.scrollTo(0, 1400);
});

ratingsubmissionbutton.addEventListener("click", () => {
  thx.classList.remove("thx");
});



// Inner html
averagerat.innerHTML = "Average Rating is 4.6 / 5";
