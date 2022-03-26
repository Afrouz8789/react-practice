import React,{useState,useEffect} from "react";
import MovieCard from "./MovieCard"
import "./App.css"
import SearchIcon from "./search.svg"
// 74bcaa39
const ApiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=74bcaa39'

const App = () =>{
    const [movies,setMovies] =useState([])
    const [search,setSearch]=useState('')
    const searchMovies = async(title) => {
        const response= await fetch(`${ApiUrl}&s=${title}`)
        const data= await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman')
    },[])
    return <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
        <input 
        placeholder="Search for Movies"
        value={search}
        onChange={(e) => (setSearch(e.target.value))}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => (searchMovies(search))}
        />
        
        </div>
        {
            movies?.length >0 ? (<div className="container">
                {movies.map((movie) => (<MovieCard movie1={movie}/>))}
            
            </div>) : (<div className="empty"> 
            <h2>No movies found</h2>
            </div>)
        }
        
        
    </div>
}
export default App;