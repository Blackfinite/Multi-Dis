import axios from "axios";

const API_BASE = "http://localhost:5000";

export const predictDisease = async (file, disease) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axios.post(`${API_BASE}/predict/${disease}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return { error: "Prediction failed" };
  }
};