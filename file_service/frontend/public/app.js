let bytesAmount = 0;
const API_URL = "http://localhost:3000";
const ON_UPLOAD_EVENT = "file-uploaded";

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const kiloBytes = 1024;
  const dm = decimals < 0 ? 0 : decimals;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const sizeValue = Math.floor(Math.log(bytes) / Math.log(kiloBytes));

  const bytesFormatted = parseFloat(
    (bytes / Math.pow(kiloBytes, sizeValue)).toFixed(dm) +
      " " +
      sizes[sizeValue],
  );

  return bytesFormatted;
};


const updateStatus = (size) => {
  const message = `Pending Bytes to Upload <strong> ${formatBytes(size)}<strong/>`;
  document.getElementById("size").innerHTML = message;
};

const showFileSize = () => {
  const { files: fileElements } = document.getElementById("file");
  if (!fileElements.length) return;

  const files = Array.from(fileElements);
  const { size } = files.reduce(
    (prev, next) => ({ size: prev.size + next.size }),
    { size: 0 },
  );

  bytesAmount = size;
  updateStatus(size);

};
const updateMessage = (message) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = message;

  msg.classList.add("alert", "alert-success");

  setTimeout(() => (msg.hidden = true), 3000);
};
const showMessage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serverMessage = urlParams.get("msg");

  if (!serverMessage) return;
  updateMessage(serverMessage);
};

const configreForm = (targetUrl) => {
  const form = document.getElementById("form");
  form.action = targetUrl;
};

const onload = () => {
  showMessage();
  const ioClient = io.connect(API_URL, { withCredentials: false });
  ioClient.on("connect", (msg) => {
    console.log("connected", ioClient.id);
    const targetUrl = API_URL + `?socketId=${ioClient.id}`;
    configreForm(targetUrl);
  });

  ioClient.on(ON_UPLOAD_EVENT, (bytesReceived) => {
    bytesAmount = bytesAmount - bytesReceived;
    updateStatus(bytesAmount);
  });

  updateStatus(0);
};
window.onload = onload;
window.showFileSize = showFileSize;

// 'steeef'
