

const Navbar = () =>{

    return(
        <header>

            
            <div className="container">
                <div className="wrapper">

                    {/*  the Logo and image of berbin Enterprise */}

                    <div className="logo">
                        <img src="../svgs/e69f07f1-627c-4c06-9f7d-7ca833811579.jpeg" alt="The image Logo of Berbin" />
                        <h2 className="berbin-logo" >Berbin Enter<span>prise</span></h2>
                    </div>

                    {/* This is the Section for the Inputs */}

                    <div className="searchInputs" >
                        <input type="text" placeholder="Berbin Search.in.." />
                        <button className="searchButton">Search</button>

                    </div>

                    <button className="navbar-toggle" id="toggle-menu">☰</button>

                    <div className="carts-accounts">
                        <img src="" alt="An svg of Carts" />
                        <img src="" alt="An svg of Accounts" />
                    </div>


                    
                </div>
            </div>
        </header>
    );
}

export default Navbar