// import React from 'react'
// import Layout from './Layout'
// import { useState, useEffect } from 'react'
// import { MdAddShoppingCart } from "react-icons/md";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import firebaseAppConfig from '../util/firebase-config';
// import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
// import Swal from 'sweetalert2';
// // import uploadFile from '../util/storage';

// const db = getFirestore(firebaseAppConfig)

// const Product = (path,) => {

//     const [products, setProducts] = useState([
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 50,
//         //     thumbnail: '/products/a.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/b.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/c.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/d.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/e.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/f.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/g.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/i.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/j.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/k.jpg'
//         // },
//         // {
//         //     title: 'New blue shirts mens',
//         //     price: 1200,
//         //     discount: 15,
//         //     thumbnail: '/products/l.jpg'
//         // }
//     ])
//     const model = {
//         title: '',
//         description: '',
//         price: '',
//         discount: '',

//     }
//     const [productFormValue, setProductFormValue] = useState(model)
//     const [productData, setProductData] = useState(false)

//     // const [image, setImage] = useState(''); // Holds the uploaded image URL
//     // const [url, setUrl] = useState(''); // Temporary state for cloudinary image URL
//     // const [isImageUploaded, setIsImageUploaded] = useState(false); // State to track if the image is uploaded


//     // image uploadFile function calling and modifies
//     // const uploadProductImage = async (e) => {
//     //     const file = e.target.files[0];
//     //     if (!file) {
//     //         return console.log("No file selected");
//     //     }

//     //     const data = new FormData();
//     //     data.append("file", file);
//     //     data.append("upload_preset", "Upload-Image");
//     //     data.append("cloud_name", "dweafkk48");

//     //     try {
//     //         const res = await fetch("https://api.cloudinary.com/v1_1/dweafkk48/image/upload", {
//     //             method: "POST",
//     //             body: data
//     //         });

//     //         const cloudData = await res.json();
//     //         setUrl(cloudData.url); // Set the URL of the uploaded image

//     //         // Update the productFormValue to include the image URL
//     //         setImage({...image,
//     //             image: cloudData.url})
//     //          // Add the image URL to the form data


//     //         console.log("Uploaded image URL:", cloudData.url);
//     //     } catch (err) {
//     //         console.log(err.message);
//     //     }
//     // };
//     const [imageUrl, setImageUrl] = useState([]);

//     // Check localStorage for an existing image URL when the component mounts
//     useEffect(() => {


//         const req = async () => {
//             const cloudData = localStorage.getItem('uploadedImage');

//             if (cloudData) {
//                 try {
//                     // If multiple URLs are stored, parse the string as JSON
//                     const parsedData = JSON.parse(cloudData);

//                     // If it's an array of URLs, set it in the state
//                     if (Array.isArray(parsedData)) {
//                         setImageUrl(parsedData);
//                     } else {
//                         // If it's a single URL, you can set it as an array with one element
//                         setImageUrl([parsedData]);
//                     }
//                 } catch (err) {
//                     console.error("Error parsing image data:", err);
//                 }
//             }
//         }
//         req()

//         //   setImageUrl(prevUrls => [...prevUrls, uploadedImageUrl]); // Add the new image URL to the array
//     }, []);


//     const uploadProductImage = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return console.log("Please upload a file");

//         const data = new FormData();
//         data.append("file", file);
//         data.append("upload_preset", "Upload-Image");
//         data.append("cloud_name", "dweafkk48");

//         try {
//             const res = await fetch("https://api.cloudinary.com/v1_1/dweafkk48/image/upload", {
//                 method: "POST",
//                 body: data,
//             });

//             const cloudData = await res.json();
//             const uploadedImageUrl = cloudData.url;

//             // Assuming you want to store multiple images
//             setImageUrl(prevUrls => {
//                 const newUrls = [...prevUrls, uploadedImageUrl];
//                 // Save the array of URLs in localStorage
//                 localStorage.setItem('uploadedImage', JSON.stringify(newUrls));
//                 return newUrls;
//             });

//             console.log(uploadedImageUrl); // Log the uploaded image URL
//         } catch (err) {
//             console.error("Error uploading image: ", err.message);
//         }
//     };




//     useEffect(() => {
//         const req = async () => {
//             const snapshot = await getDocs(collection(db, "products"))
//             const temp = []
//             snapshot.forEach((doc) => {
//                 const allProducts = doc.data()
//                 // console.log(allProducts)
//                 temp.push(allProducts)
//             })
//             // all the data are in products 
//             setProducts(temp)
//         }
//         req()
//     }, [])

//     // useEffect to watch for URL change and update the image state
//     //   useEffect(() => {
//     //     if (url) {
//     //         setImage(url); // Set the image state when the URL changes
//     //     }
//     // }, [url]); // Runs when 'url' state changes

//     const handleProductForm = (e) => {
//         const input = e.target
//         const name = input.name
//         const value = input.value
//         setProductFormValue({
//             ...productFormValue,
//             [name]: value
//         })
//     }

//     const createProduct = (e) => {
//         try {
//             e.preventDefault()
//             addDoc(collection(db, "products"), productFormValue)

//             // create hune bittikai khali hunxa yasle
//             setProductFormValue(model)
//             new Swal({
//                 icon: "success",
//                 title: "Add Product Success"
//             })
//         } catch (err) {
//             new Swal({
//                 icon: "Error",
//                 title: "Error occures",
//                 text: err.message
//             })
//         }

//     }



//     return (
//         <>
//             <Layout>
//                 <div>
//                     <div className="flex justify-between items-center">
//                         <h1 className="text-xl font-semibold mb-4">Products</h1>
//                         <button className="bg-indigo-600 text-white rounded py-2 px-4" onClick={() => setProductData(true)}>
//                             <MdAddShoppingCart className='mr-2' />
//                             New Product
//                         </button>
//                     </div>
//                     <div className="grid grid-cols-4 gap-4 mt-2">
//                         {products.map((items, index) => (
//                             <div key={index} className="bg-white rounded-md shadow-lg">
//                                 <div className="image-upload-container ">
//                                     <input
//                                         type="file"
//                                         onChange={uploadProductImage}
//                                         accept="image/*"
//                                         className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                                     />
//                                     {imageUrl ? (
//                                         <div className="img-container">
//                                             <img src={imageUrl} alt="Uploaded Product" className="w-full h-auto" />
//                                         </div>
//                                     ) : (
//                                         <p>Upload an image to see it here.</p>
//                                     )}
//                                 </div>
//                                 <div className="p-4">
//                                     <h1 className="font-semibold text-md capitalize">{items.title}</h1>
//                                     <div className="flex gap-2 mt-2">
//                                         <label>${items.price - (items.price * items.discount) / 100}</label>
//                                         <del className="font-semibold text-red-400">${items.price}</del>
//                                         <label className="text-gray-600">({items.discount}% off)</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>


//                     {
//                         productData &&
//                         <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center">
//                             <div className="bg-white w-5/12 py-5 px-6 rounded-md border border-1 relative">
//                                 <button className="absolute top-2 right-3" onClick={() => setProductData(false)}>
//                                     <IoMdCloseCircleOutline className='text-xl text-black' />
//                                 </button>
//                                 <h1 className="text-lg font-semibold">New Product</h1>
//                                 <form className="grid grid-cols-2 gap-6 mt-4" onSubmit={createProduct}>
//                                     <input
//                                         required
//                                         name="title"
//                                         placeholder="Enter product title here"
//                                         className="p-2 border border-gray-300 rounded col-span-2 text-black"
//                                         onChange={handleProductForm}
//                                         value={productFormValue.title}
//                                     />

//                                     <input
//                                         required
//                                         type="number"
//                                         name="price"
//                                         placeholder="Price"
//                                         className="p-2 border border-gray-300 rounded"
//                                         onChange={handleProductForm}
//                                         value={productFormValue.price}
//                                     />

//                                     <input
//                                         required
//                                         type="number"
//                                         name="discount"
//                                         placeholder="Discount"
//                                         className="p-2 border border-gray-300 rounded"
//                                         onChange={handleProductForm}
//                                         value={productFormValue.discount}
//                                     />

//                                     <textarea
//                                         required
//                                         name="description"
//                                         placeholder="Description"
//                                         className="p-2 border border-gray-300 rounded col-span-2"
//                                         rows={8}
//                                         onChange={handleProductForm}
//                                         value={productFormValue.description}
//                                     />

//                                     <div>
//                                         <button className="bg-indigo-600 text-white rounded px-4 py-2">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     }
//                 </div>
//             </Layout>
//         </>
//     )
// }

// export default Product


import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import firebaseAppConfig from '../util/firebase-config';
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { text } from '@cloudinary/url-gen/qualifiers/source';

const db = getFirestore(firebaseAppConfig);

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productFormValue, setProductFormValue] = useState(
    { title: '', 
    description: '',
    price: '', 
    discount: '' 
});
  const [productData, setProductData] = useState(false);
// const [editbutton,setEditbutton] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const productsArray = snapshot.docs.map(doc => (
        { ...doc.data(),
         id: doc.id }));
      setProducts(productsArray);
    };
    fetchProducts();

  }, []);

  const handleProductForm = (e) => {
    const { name, value } = e.target;
    setProductFormValue(
        { ...productFormValue, 
        [name]: value 
    });
  
  };
 

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Upload-Image');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dweafkk48/image/upload', formData);
      const url = response.data.secure_url;

      await updateDoc(doc(db, "products", products[index].id),
       { imageUrl: url });
      setProducts(prevProducts => {
        const updated = [...prevProducts];
        updated[index].imageUrl = url;
        return updated;
      });

      new Swal({
        icon:'Success',
        title:"Successfully Upploaded Image"
      })
    } catch (error) {
    //   console.error(error);
    //   alert('Failed to upload image');
    new Swal({
        icon:'Error',
        title:"Error Uploaded Images",
        text:error.message
    })
    }
  };

  const handleNewProductClick = () => {
    setProductFormValue({
      title: '',
      description: '',
      price: '',
      discount: ''
    });
    setEditingProduct(null); // Reset editing state
    setProductData(true); // Show the form for creating a new product
  };

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "products"), productFormValue);
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...productFormValue, id: docRef.id }
    ]);
    // yasle turantai update or new product create garne bittikai banai dinxa, prevProducts jastako testai ra productFormValue ra docRef ko id lai combine rakheko ho update huda khera


      setProductFormValue({ title: '',
         description: '',
          price: '', 
          discount: '' 
        });
    //   Swal.fire("Success", "Product added!", "success");
    new Swal({
        icon:'Success',
        title:"Successfully Product Added"
      })
      setProductData(false);
    } catch (err) {
    //   Swal.fire("Error", "Failed to add product", "error");
    new Swal({
        icon:'Success',
        title:"Error in Product Added"

      })
    }
  };


  const deleteProducts =async(id)=>{
 try{
 const ref = doc(db, 'products', id)
 await deleteDoc(ref)
 setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id)); // Update the state
 new Swal ({
  icon:"Success ",
  title:"Success Deleted"
 })
 }
 catch(err){
  new Swal ({
    icon:"Delete Error",
    title:"Error in deleted",
    text:err.message
  })
 }
  }

//   const editProducts = (items)=>{
//     console.log(items)
//     setProductFormValue(items) 
//     // {yaslae purano data lai box ma dekhai diyo as a same line or input box ma}
//     setProductData(true)
//     // yasle New Product box open garyo
//     const handleEditProduct = async (id, updatedData) => {
//   try {
//     const productRef = doc(db, "products", id); // Reference to the product document
//     await updateDoc(productRef, updatedData);   // Update the document with new data

//     // Update the local state to reflect the changes
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id ? { ...product, ...updatedData } : product
//       )
//     );

//     // Show success message
//     Swal.fire({
//       icon: "success",
//       title: "Product Updated Successfully!",
//     });
//   } catch (err) {
//     // Show error message
//     Swal.fire({
//       icon: "error",
//       title: "Error Updating Product",
//       text: err.message,
//     });
//   }
// };

//   }

const [editingProduct, setEditingProduct] = useState(null); // Holds the product to be edited

const handleEditButtonClick = (item) => {
  setEditingProduct(item); // Set the selected product for editing
  setProductFormValue(item); // Pre-fill the form with the product's current details
  setProductData(true); // Open the modal for editing
  // setEditbutton(true)

};

const handleEditProduct = async (e) => {
  e.preventDefault(); // Prevent the default form submission
  if (!editingProduct) return; // If no product is selected for editing, exit

  try {
    const productRef = doc(db, "products", editingProduct.id); // Reference to the product in Firestore

    // Update the product in Firestore
    await updateDoc(productRef, productFormValue);

    // Update the local state with the edited product
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingProduct.id ? { ...product, ...productFormValue } : product
      )
    );

    // Reset form and editing state
    setProductFormValue({ title: '', description: '', price: '', discount: '' });
    setEditingProduct(null);
    // setProductData(false);

    // Show success notification
    Swal.fire({
      icon: "success",
      title: "Product Updated Successfully!",
    });
  } catch (err) {
    // Show error notification
    Swal.fire({
      icon: "error",
      title: "Error Updating Product",
      text: err.message,
    });
  }
};

  
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold  md:mb-4">Products</h1>
          
          <button className="bg-indigo-600 text-white rounded md:py-2 md:px-4 px-2 hover:bg-green-600" onClick={handleNewProductClick}>
             <div className='flex md:my-2 my-1 '><MdAddShoppingCart className=" mt-1" />
             <h3>New Product</h3></div>
          </button>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-3 ">

          {
            products.map((item, index) => ( 
            <div key={index} className="bg-white rounded-md shadow-lg">
              <div className="relative">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title || "Product"} className="rounded-t-md h-[300px] w-full object-cover" />
                ) : (
                  <div className="h-[300px] w-full bg-gray-300 flex items-center justify-center">
                    <span>Upload Image</span>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
              <div className="p-4">
              {/* Edit And Delete button wala part pani xa yasma */}
                <div className='flex justify-between items-center'>
                <h1 className="font-semibold text-md capitalize">{item.title}</h1>

                <div className='flex space-x-2'>
                <button onClick={()=>handleEditButtonClick(item)}
                className='bg-green-500 p-1 rounded px-[14px] text-white  hover:bg-blue-600' >Edit</button>

                <button onClick={()=>deleteProducts(item.id)}
                 className='bg-red-500 p-1 rounded text-white hover:bg-black'>Delete</button>
              </div>
                </div>
                <h2 className="text-md capitalize">{item.description.slice(0,20)}...</h2>
                <div className="flex gap-2 mt-2">
                  <label className='font-bold'>${item.price - (item.price * item.discount) / 100}</label>
                  <del className="font-semibold text-red-400">${item.price}</del>
                  <label className="text-gray-600">({item.discount}% off)</label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {productData && (
          <div className=" bg-black bg-opacity-80   absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white md:w-5/12 md:py-5 py-2 md:px-6 rounded-md border mx-2 px-2  border-1 relative">
              <button className="absolute md:top-2 right-3" onClick={() => setProductData(false)}>
                <IoMdCloseCircleOutline className="md:text-xl text-black" />
              </button>
              <h1 className="md:text-lg font-semibold hover:bg-blue0">New Product</h1>
              <form 
              className="grid grid-cols-2 md:gap-6 gap-3 md:mt-4" 
              onSubmit={editingProduct ? handleEditProduct :createProduct}>
              {/* when i clicked on submit button then check the , if the editinProduct edit the the edit box then all handleEditProduct if the editing isnot calling then the create function is calls */}
                <input 
                required 
                name="title" 
                placeholder="Enter product title" 
                className="md:p-2 p-1 border border-gray-300 rounded col-span-2" 
                onChange={handleProductForm} 
                value={productFormValue.title} />

                <input 
                required 
                type="number" 
                name="price" 
                placeholder="Price" 
                className="md:p-2 p-1 border border-gray-300 rounded" 
                onChange={handleProductForm} 
                value={productFormValue.price} />

                <input 
                required 
                type="number" 
                name="discount" 
                placeholder="Discount" 
                className="md:p-2 p-1 border border-gray-300 rounded" 
                onChange={handleProductForm} 
                value={productFormValue.discount} />

                <textarea 
                required
                name="description" 
                placeholder="Description" 
                className="p-2 border border-gray-300 rounded col-span-2" 
                rows={8} 
                onChange={handleProductForm} 
                value={productFormValue.description} />
                
                   
                   {editingProduct ? <button className="bg-green-600 text-white rounded px-4 py-2">Save</button>: <button className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-green-600">Submit</button>}
                
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;

