import FormData from "form-data";
import fs from "fs";
import axios from "axios";

export async function uploadFileToBackend(filePath: string) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  await axios.post("http://localhost:8000/api/upload", form, {
    headers: form.getHeaders(),
  });
}
