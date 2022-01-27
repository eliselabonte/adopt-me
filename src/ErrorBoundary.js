import { Component } from "react/cjs/react.production.min";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('Error Boundary caught an error', error, info)
        setTimeout(() => this.setState({redirect: true}), 5000)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        } else if (this.state.hasError) {
            return(
                <h2>This listing has an error. Click <Link to='/'>here</Link> to go back to the home page, or wait five seconds.</h2>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;