import { useState } from "react";
import { axiosInstance } from "../utils";
import { toast } from "react-toastify";

function useDatabase() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, newData) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.post(url, newData);
      setData((prev) =>
        Array.isArray(prev) ? [...prev, res.data] : [res.data]
      );
      toast("Recipe added ✅");
    } catch (error) {
      setError(error.message);
      toast(error.message || "Something went wrong ❌"); 
    } finally {
      setIsPending(false);
    }
  };

  const deletePost = async (url, id) => {
    try {
      setIsPending(true);
      await axiosInstance.delete(url);
      setData((prev) =>
        Array.isArray(prev) ? prev.filter((item) => item.id !== id) : []
      );
      toast("Recipe deleted 🗑️");
    } catch (error) {
      setError(error.message);
      toast(error.message || "Something went wrong ❌");
    } finally {
      setIsPending(false);
    }
  };

  const putData = async (url, updatedData) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.put(url, updatedData);
      setData((prev) =>
        Array.isArray(prev)
          ? prev.map((item) => (item.id === res.data.id ? res.data : item))
          : res.data
      );
      toast("Recipe updated ✅");
    } catch (error) {
      setError(error.message);
      toast(error.message || "Something went wrong ❌");
    } finally {
      setIsPending(false);
    }
  };

  const getData = async (url) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.get(url);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { postData, deletePost, getData, putData, data, isPending, error };
}

export default useDatabase;