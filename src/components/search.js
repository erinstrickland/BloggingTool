import React from "react"

class SearchTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <container>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </container>
        )
    }
}

    export default SearchTool