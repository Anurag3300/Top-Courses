import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Sipnner from "./component/Sipnner";

import { toast } from "react-toastify";

const App = () => {
  const[courses,setcourses] = useState(null);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        setcourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  useEffect(()=>{
    fetchData();
  },[])

  return (
      <div className="min-h-screen flex flex-col bg-bgDark2">
          <div>
            <Navbar/>
          </div>
        
        
          <div>
            <Filter 
              filterData ={filterData}
              category ={category}
              setCategory = {setCategory}
            />
          </div>


          <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h[50vh]">
            {
              loading ? (<Sipnner/>) : (<Cards courses={courses} category = {category}/>)
            }
          </div>
        


    
      </div>
  );
};

export default App;
