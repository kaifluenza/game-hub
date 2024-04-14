import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]; //array of objects; each object has a property called platform (of type Platform)
    metacritic:number;
}

interface FetchGamesResponse{
    count:number;
    results:Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(()=>{
    //for handling cancelation
    const controller = new AbortController();

    apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
    .then(res=>setGames(res.data.results))
    .catch((err)=>{
        if(err instanceof CanceledError) return;
        setError(err.message)
    });

    //return clean up function
    return () => controller.abort();
  },[]);//array of dependencies

  return {games, error};
}
export default useGames;