import { useEffect, useState } from "react"
import styles from './List.module.css'
const List = ({genre})=>{
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd9e4409626msh17b0632a7c90e90p1b766djsn2226816136dd', //PLEASE use your API KEY as my API KEY IS limited you can find your API KEY from "https://rapidapi.com/SAdrian/api/moviesdatabase/"
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
        <p className={styles.heading}>{genre}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"20vw", height:"100%",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default List
