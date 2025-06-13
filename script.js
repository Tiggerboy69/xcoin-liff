function showQR() {
  const amount = document.getElementById('bahtInput').value || 100;
  document.getElementById('popupAmount').innerText = amount;
  document.getElementById('qrImage').src = `https://promptpay.io/0105562033673/${amount}.png`;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("คัดลอกเรียบร้อยแล้ว");
  });
}

function downloadQR() {
  const img = document.getElementById('qrImage');
  const link = document.createElement('a');
  link.href = img.src;
  link.download = "promptpay-qr.png";
  link.click();
}
