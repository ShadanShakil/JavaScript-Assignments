import {
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  app,
  auth,
  db,
  storage,
  initializeApp,
  getFirestore,
  getStorage,
} from "../utils/utils.js";


const profileCollection = collection(db, "userProfile");
// console.log(storage);

const profile_img = document.getElementById("car_img");
const save_file = document.getElementById("save_file");
const container = document.getElementById("container");

save_file.addEventListener("click", () =>{
  console.log(profile_img.files[0]);

  const profileRef = ref(storage, profile_img.files[0].name);

    //upload file to the storage
    save_file.disabled = true;
    uploadBytes(profileRef, profile_img.files[0])
      .then((snapshot) => {
        console.log("Uploaded  file!");

        // get url from the same storage ref
      getDownloadURL(profileRef)
      .then((url) => {
        console.log("url=>", url);
      
         //add url + category to the db
         addDoc(profileCollection, { url, category: "User" }).then(() => {
          console.log("Document updated to the DB");
          getImagesFromDB();
          save_file.disabled = false;
        });
      })
      .catch((err) => {
        console.log("Error in download=>", err), (save_file.disabled = false);
      });
  })
  .catch((err) => {
    console.log(err), (save_file.disabled = false);
  });
});


async function getImagesFromDB() {
  const querySnapshot = await getDocs(profileCollection);
  container.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`);

    console.log(doc.data());

    const img = `<img
    id = ${doc.id}
    src = ${doc.data().url}
    style="height: 300px; width: 300px; border-radius: 12px; margin: 10px"
  />`;
    // container.innerHTML = "";
    container.innerHTML += img;
  });
}