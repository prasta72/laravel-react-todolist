import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakAction";


export default function addContak({data}) {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [nomor ,setNomor] = useState('');
    const [provider, setProvider] = useState('');
    const [image , setImage] = useState('')
    const { addKontakResult, showKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(showKontakResult){
          dispatch(updateKontak({id:id,name:name,nomor:nomor,provider:provider,image:image}));
        }else{
           dispatch(
             addKontak({ name: name, nomor: nomor, provider: provider,image:image })
           );
        }
       
    }
    const onImageChoose = (ev) => {
      const file = ev.target.files[0];
      const reader = new FileReader()
      console.log(reader.result)
      reader.onload = () => {
       setImage(reader.result)
        ev.target.value = "";
      };
      reader.readAsDataURL(file);
    }
    useEffect(() => {
        if(addKontakResult){
            dispatch(getListKontak())
        }
         if (showKontakResult) {
           setName(showKontakResult.name);
           setNomor(showKontakResult.nomor);
           setProvider(showKontakResult.provider);
           setId(showKontakResult.id);
         }
         if(updateKontakResult){
          dispatch(getListKontak());
            setName('');
            setNomor('');
            setProvider('');
            setId('');
         } ;
    },[addKontakResult,showKontakResult,updateKontakResult,  dispatch])
  return (
    <>
      <div className="p-4 ">
        <form
          onSubmit={(event) => handleSubmit(event)}
          action=""
          className="flex flex-col gap-4 "
        >
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nomor
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={nomor}
              onChange={(event) => setNomor(event.target.value)}
            />
          </div>
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Provider
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={provider}
              onChange={(event) => setProvider(event.target.value)}
            />
          </div>
          <div>
            {image && (
              <div className="p-2">
                <div>
                  <img className="w-32 rounded" src={image} alt="" />
                </div>
              </div>
            )}

            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Image
            </label>
            <input
              type="file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value=""
              onChange={onImageChoose}
            />
          </div>
          <button className="rounded p-2 bg-green-600 text-white font-semibold">
            {id ? "Update Kontak" : "Add Kontak"}
          </button>
        </form>
      </div>
    </>
  );
}
