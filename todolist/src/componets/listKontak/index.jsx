import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteKontak, getListKontak, showKontak } from '../../actions/kontakAction';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { AddKontak } from '..';

export default function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult} = useSelector((state) => state.KontakReducer)
  // const {id} = useParams();
    let i = 1;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListKontak());
    },[dispatch])

    const handleDelete = (id) => {
      dispatch(deleteKontak(id))
    }
    const handleUpdate = (id) => {
      dispatch(showKontak(id));
    }

    useEffect(() => {
      if (deleteKontakResult) {
        dispatch(getListKontak());
      }
    }, [deleteKontakResult, dispatch]);
  return (
    <>
      <div className='text-xl p-2 bg-slate-400 flex flex-col gap-4 '>
        <div className='w-full flex text-center mb-2 bg-slate-600 text-white uppercase justify-center items-center p-2 rounded'>
          List Kontak 
        </div>
        {getListKontakResult ? (getListKontakResult.map((kontak) => {
          return (
            <ul key={kontak.id} className="p-2 bg-slate-500 rounded text-white">
              <li><img className='w-24 rounded-full' src={kontak.image} alt="" /></li>
              <li>{i++}</li>
              <li>{kontak.name}</li>
              <li>{kontak.nomor}</li>
              <li>{kontak.provider}</li>
              <li>
                <button
                  onClick={() => handleDelete(kontak.id)}
                  className="px-2 text-white text-sm font-normal bg-red-600 rounded"
                >
                  delete
                </button>
              </li>
              <li>
              
                  <button onClick={() => handleUpdate(kontak.id)} className="px-2 text-white text-sm font-normal bg-green-600 rounded">
                    update
                  </button>

              </li>
            </ul>
          );
          {
          }
        }) 
        ): getListKontakLoading ? (
          <p>loading...</p>
        ) : (
          <p>{getListKontakError ? getListKontakError : "data Kosong"}</p>
        )
      }
      </div>
    </>
  );
}
