// import React from 'react'
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./details.scss"
import DetailsBanner from "./DetailsBanner/DetailsBanner"

const Details = () => {
  // const { mediaType, id } = useParams();
  // const {data, loading} = useFetch(`/${mediaType}/${id}`)
  return (
    <div>
      <DetailsBanner />
    </div>
  )
}

export default Details