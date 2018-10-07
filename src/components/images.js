import React from "react"
import SearchTool from "./search"

class Images extends React.Component {
    constructor(props) {
        super(props)
    }
    
    parseImages = () => {
        const display = this.props.imageList.map(image => {
            return <img src={image} />
        })
        return display
    }

    render() {
        return <div>
            {this.parseImages()}
        </div>
    }
}

export default Images