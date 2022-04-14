import React, { Component } from "react"

import Header from "../header"

export default class Home extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        
        return (
           
            <div className="page-wrapper">
                <Header/>

                <div className="content-wrapper">
                    <div className="left-column">
                        <div className="image-wrapper">
                            <img src="https://source.unsplash.com/random/?auto"/>
                       </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione. Aut dolore obcaecati, illo aliquid optio nobis eum commodi dolores, 
                            dignissimos, alias ad odit non voluptates dolor consequatur ullam facilis sunt porro esse enim. Nesciunt.
                        </p>
                    </div>

                    <div className="right-column">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolores sed dignissimos? Non dolor sapiente perferendis quia adipisci incidunt, consectetur iure repellat amet eaque nemo quisquam
                            laudantium ullam quo asperiores cumque, architecto saepe possimus consequatur quos reiciendis. Dicta, excepturi libero!
                        </p>
                        <div className="image-wrapper">
                            <img src="https://source.unsplash.com/random/?autoshop"/>
                       </div>

                        
                    </div>

                </div>
            </div>
        )
    }
}