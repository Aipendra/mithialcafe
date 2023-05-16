export const Header=()=>{
    return(
        <nav id="header" className="bg-black text-white">
            {/* <div className=" w-full container mx-auto flex flex-wrap items-centerjustify-content-between mt-0 py-2"> */}
                {/* <div div className="logo-wrapper pl-4 flex items -center"> */}
                    <img src={"/"} alt ="logo"/>
                    {/* </div> */}
                    {/* <div className="nev menu wrapper flex items-center justify-between space-x-10"> */}
                    <diV>Home</diV>
                    <div>About</div>
                    {/* </div> */}
                     {/* <div className="flex item-center justify -center space-x-4"> */}
                        <div>Cart</div>
                        <div>LoginIn</div>
                        <div>Sign</div>

                     {/* </div> */}

                    {/* </div> */}
            
        </nav>
    )
};