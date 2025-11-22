import { ChevronDown, CircleUser, Search, ShoppingCart, X } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <div className="bg-black text-white w-full flex flex-row content-center justify-center py-2">
                <div className="w-full justify-center flex gap-3">
                    <span>Sign up and get 20% off to your first order.</span>
                    <a className="underline">Sign Up Now</a>
                </div>
                <div className="flex items-center">
                    <X className="size-6"></X>
                </div>
            </div>
            <div className="flex flex-row gap-4 py-4 items-center">
                <h1>SHOP.CO</h1>
                <div className="flex flex-row gap-2 items-center">
                    <a>Shop</a>
                    <ChevronDown/>
                </div>
                <a>On Sale</a>
                <a>New Arrivals</a>
                <a>Brands</a>
                <div className="bg-[#F0F0F0] w-full flex flex-row gap-6 text-black opacity-40 p-3 rounded-4xl">
                    <Search />
                    <span>Search for products...</span>
                </div>
                <ShoppingCart className="size-6 text-black" />
                <CircleUser className="size-6 text-black"/>
            </div>
        </>
    )
}   

export default Navbar;