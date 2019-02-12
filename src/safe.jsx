import React, {Component} from 'react';


class SafeExample extends Component{
    state = {
        example:true
    }
    _isMounted = false
    componentDidMount(){
        this._isMounted = true;
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    safeSetState = (...args) => {
        return this._isMounted && this.setState(...args)
    }
    onClick = () => {
        this.safeSetState({example:false})
    }

    render(){
        return(
            <div>
                dafads
            </div>
        )
    }
}

export default SafeExample