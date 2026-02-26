import axios from "axios";

async function free(){
  const a=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return a.data;
}
export default async function Home() {
  const ans = await free();
    return <div>
      hi its me bye!!
      {ans.email}
      {ans.name}
    </div>
  
}
