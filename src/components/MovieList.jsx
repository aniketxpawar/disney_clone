/* eslint-disable react/prop-types */
import {useEffect, useState, useRef} from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';

const MovieList = ({genreId, index_}) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null)
    useEffect(() => {
        getMovieListByGenre();
    })
    const getMovieListByGenre = async () => {
        const response = await GlobalApi.getMovieByGenreId(genreId)
        setMovieList(response.data.results)
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList?.map((item,index) => (
            <MovieCard key={index} movie={item} />
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList