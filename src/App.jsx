import './App.css'
import addToDeply from './assets/addToDeploy.png'
import {Component} from './projects/Component'
import { ProjectsPage } from './projects/ProjectsPage'
import { ProjectsPage2 } from './projects/ProjectsPage2'

function App() {

    return (
        <>
            <div className="">
                <h1>To deploy in Docker:</h1>
                <img src={addToDeply} alt="" />
            </div>
            <blockquote cite='MONTESQUIEW'>
                Hay que estudiar mucho para saber poco
            </blockquote>
            <div className="container">
                <ProjectsPage />
                <ProjectsPage2 />
                <Component />
            </div>
        </>
    )
}

export default App
