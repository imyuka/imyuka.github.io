const params = new URLSearchParams(window.location.search);
const name = params.get("h");

if (name) {
  document.getElementById("hero-name").textContent = decodeURIComponent(name);
} else {
  document.getElementById("hero-name").textContent = "Stranger";
}

//const knownHashes = [
//  "14cb372debcb56f387eb295b0f65728c8d52bef931b397f79c3af26af18082ca",
//  "46f843559b7015efb3cc6f83ee510f1c00a88873b45a06d3e955a3f3f30cd90a",
//  "22cbe060cbf92ccc4b9a2cd939aae08c2c03bdedeb2231b7baadf2209db0e5c4",
//  "04e77bf8f95cb3e1a36a59d1e93857c411930db646b46c218a0352e432023cf2",
//];
//
//export default knownHashes;
