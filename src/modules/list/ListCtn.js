import React, { Component }  from 'react'
import Loader from '../loader/Loader'
import List from './List'
import Error from '../error/Error'
import { parseData } from './listHelpers'

class ListCtn extends Component {
    constructor (props) {
        super(props)
        this.state={}
    }

    componentDidMount () {
        if (!this.state.list) {
            this.fetchList()
        }
    }

    fetchList = async () => {
        try {
            debugger
            const response = await fetch('https://www.leshabitues.fr/testapi/shops')
            const result = await response.json()
            const list = parseData( result )
            this.setState({ list })
        } catch (error) {
            this.setState({ error })
        }
    }


    render () {
        const { list, error } = this.state

        if (error) return <Error error={error}/>

        if (!list) return <Loader/>

        return (
            <List
                list={list}
                fetchList={this.fetchList}
            />
        )
    }
}

export default ListCtn