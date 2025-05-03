// (Un)secure gate
const knownHashes = [
  '14cb372debcb56f387eb295b0f65728c8d52bef931b397f79c3af26af18082ca',
  '46f843559b7015efb3cc6f83ee510f1c00a88873b45a06d3e955a3f3f30cd90a',
  '22cbe060cbf92ccc4b9a2cd939aae08c2c03bdedeb2231b7baadf2209db0e5c4',
  '04e77bf8f95cb3e1a36a59d1e93857c411930db646b46c218a0352e432023cf2'
];

async function sha256(text) {
  const buffer = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 3000);
}

function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.innerText = message;
  modal.classList.add('active');
}

function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

document.getElementById('gate-form').addEventListener('sumbit', async function (e) {
  e.preventDefault();
  const name = document.getElementById('access-name').value.trim();
  const hash = await sha256(name);
  if (knownHashes.includes(hash)) {
    showToast('Welcome, ${name}');
    setTimeout(() => {
      const hHash = '8aca4f36774f82a67c507cb9c96679482e2cc767f2d38502269557a566b092fb';
      const encodedName = encodeURIComponent(name);
      window.location.href = 'vita-nova/${hHash}.html?h=${encodedName}';
    }, 2000);
  } else {
    showModal('Access Denied.');
  }
});

