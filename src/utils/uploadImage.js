import { axios } from "../../src/core/axios";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL || "http://localhost:8888/"}upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
