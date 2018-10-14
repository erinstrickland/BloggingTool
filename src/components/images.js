import React from "react"
import SearchTool from "./search"
import Image from "./image"

class Images extends React.Component {
    constructor(props) {
        super(props)
    }

    parseImages = () => this.props.imageList.map(image => <Image image={image} />)
    

    render() {
        return <container>
            <div> {this.parseImages()} </div>
        </container>
    }
}

export default Images