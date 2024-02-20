import { ref, child, get } from "firebase/database";
import { database } from "../firebase/config";

const getFirebase = async (collections) => {
  let getData = null;
  const dbRef = ref(database);
  await get(child(dbRef, collections))
    .then((snapshot) => {
      if (snapshot.exists()) {
        getData = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return getData;
};

export default getFirebase;
