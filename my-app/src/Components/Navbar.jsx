import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="Navbar">
                <Link to='/'>
                    <h2>Workout Buddy</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar