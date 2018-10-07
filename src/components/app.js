import React from "react"
import Images from "./images"
import SearchTool from "./search"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { imageList: [] }
    }

    updateImageState = (imgList) => {
        this.setState({ imageList: imgList})
    }

    render() {
        return <div>
            <div><SearchTool updateHandler={this.updateImageState}/></div>
            <div><Images imageList={this.state.imageList}/></div>
        </div>
    }
}

export default App