import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    NavLink,
    useLocation,
    useNavigate,
    useParams,
    useMatch
} from 'react-router-dom';

const Nav = () => (
    <nav>
        <NavLink to="/" activeclassname="active" className="me-5">Home</NavLink>
        <NavLink to="/contact#email" activeclassname="active" className="me-5">Contact</NavLink>
        <NavLink exact="true" to="/products" activeclassname="active" className="me-5">Products</NavLink>
        <NavLink to="/products/12?orderby=price" activeclassname="active" className="me-5">Product Details</NavLink>
    </nav>
);

const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);


const HomePage = () => (
    <>
        <div>Home Page</div>
    </>
)

const ContactPage = () => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    navigate("/products/12")
    console.log(location, params)
    return (
        <>
            <div>Contact Page</div>
        </>
    )
}


const ProductPage = () => {
    return (
        <>
            <div>Product Page</div>
        </>
    )
}
const ProductDetailsPage = () => {
    console.log(useParams())
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    return (
        <>
            <div>Product Details Page</div>
            <div>{id}</div>
        </>
    )

}
const NotFound = () => (
    <>
        <div>404 Page</div>
    </>
)
const AppRoouter = () => (
    <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='products' >
                <Route path=':id' element={<ProductDetailsPage />} />
                <Route path='me' element={<ProductPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoouter;