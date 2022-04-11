const options={
  method:'GET',
  mode:'cors'
};
const fetchData= async ({url, opts={}})=>{
  console.log(url,opts);
  const response=await fetch(url,{...options,...opts});
  const json=await response.json();
  return json
};

export {fetchData}

