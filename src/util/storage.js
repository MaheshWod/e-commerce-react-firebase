// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

// const storage = getStorage()

// const uploadFile = async (file, path)=>{
//     const bucket = ref(storage, path)
//     const snapshot = await uploadBytes(bucket, file)
//     const url = await getDownloadURL(snapshot.ref)
//     return url
// }

// export default uploadFile

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const uploadFile = async (file, path) => {
    if (!path) {
        throw new Error("Path is required for file upload");
    }
    const bucket = ref(storage, path);
    const snapshot = await uploadBytes(bucket, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
};

export default uploadFile;
