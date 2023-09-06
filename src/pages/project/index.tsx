import React from 'react'
import {useParams} from "react-router-dom";
import {Layout} from "../../components/ui/layout";


const ProjectPage = () => {
  const params = useParams()




  return (
    <Layout>
      <div>Project Id - {params.id}</div>
    </Layout>
  )
}

export {
  ProjectPage
}