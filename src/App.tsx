import { useEffect, useReducer, useState } from 'react'
import './App.css'
import React from 'react'
import { useRandom } from './hooks/useRandom'

 

export const App = () => {

  const query = useRandom()
  
  return (
    <div className="App">
      {
        query.isFetching
        ? (<h2>Cargando...</h2>)
        : (<h2>Numero Aleatorio: {query.data}</h2>)
      }

      {
        !query.isLoading && query.isError && <h3>{`${query.error}`}</h3>
      }
      
      <button onClick={ () => query.refetch() } disabled={query.isFetching}>
        {
          query.isFetching
          ? '...'
          : 'Nuevo numero'
        }
      </button>
    </div>  
  )
}