import logo from './logo.svg';
import './App.css';
import axios, {Axios} from 'axios'
import Header from './components/Header';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from './components/Spinner';
import Item from './components/Item';

function App() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
  const baseUrl=`${process.env.REACT_APP_BACKEND_URL}fetchItems`;
    const fetchData=async()=>{
      setLoading(true);
        try{
          const response=await axios.get(baseUrl);
          
          setData(response?.data?.data);
          setLoading(false);
        }catch(err){
          toast.error(err?.data?.message);
        }
    }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <Header data={data} setData={setData} loading={loading} fetchData={fetchData} setLoading={setLoading} />
     
      {
        loading?(
          <Spinner/>
        ):(
          <div className=' bg-slate-600 pt-20 w-screen min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 pb-10 gap-5'>
            {

          data.map((item,index)=>(
            <Item  key={index} item={item}/>
          ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
