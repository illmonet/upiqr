function clearForm() {
    document.getElementById("myForm").reset();
    document.getElementById("submissionName").textContent = "";
    document.getElementById("submissionUpiId").textContent = "";
    document.getElementById("qrcode").innerHTML = "";
  }
  
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const district = document.getElementById("district").selectedOptions[0].text;
  
    const districtAbbreviations = {
      "Alappuzha": "al",
      "Ernakulam": "er",
      "Idukki": "id",
      "Kannur": "kn",
      "Kasaragod": "ks",
      "Kollam": "kl",
      "Kottayam": "kt",
      "Kozhikode": "kz",
      "Malappuram": "ma",
      "Palakkad": "pl",
      "Pathanamthitta": "pt",
      "Thiruvananthapuram": "tv",
      "Thrissur": "ts",
      "Wayanad": "wa"
    };
  
    const districtAbbreviation = districtAbbreviations[district];
  
    let upiId;
    if (id < 10) {
      upiId = id + districtAbbreviation + "110@fbl";
    } else if (id < 100) {
      upiId = id + districtAbbreviation + "10@fbl";
    } else if (id < 1000) {
      upiId = id + districtAbbreviation + "1@fbl";
    } else {
      upiId = id + districtAbbreviation + "@fbl";
    }
  
    const qrCodeElement = document.getElementById("qrcode");
    qrCodeElement.innerHTML = "";
    new QRCode(qrCodeElement, {
      text: "upi://pay?pa=" + upiId,
      width: 200,
      height: 200
    });
  
    document.getElementById("submissionName").textContent = name;
    document.getElementById("submissionUpiId").textContent = upiId;
  });
  
