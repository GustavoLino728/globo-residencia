import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL && process.env.BACKEND_URL.trim().length > 0
    ? process.env.BACKEND_URL.replace(/\/+$/, "")
    : "http://localhost:8000";

export async function uploadFileToBackend(filePath: string) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  await axios.post(`${backendUrl}/api/upload`, form, {
    headers: form.getHeaders(),
  });
}
