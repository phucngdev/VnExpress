import { storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function upload(file) {
  const fileObj = file.files[0];
  let fileUrl = "";
  if (fileObj) {
    const storageRef = ref(storage, `upload/${fileObj.name}`);
    try {
      const snapshort = await uploadBytes(storageRef, fileObj);
      const downloadUrl = await getDownloadURL(snapshort.ref);
      fileUrl = downloadUrl;
    } catch (error) {
      console.log("Đã có lỗi xảy ra");
    }
  } else {
    console.log("Tên hình ảnh không được để trống");
  }
  return fileUrl;
}
export default upload;
