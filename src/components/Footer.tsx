import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="border-t-2 text-label bg-white h-40 md:h-12 flex justify-center items-center rounded-t-lg">
            <div className="flex flex-col md:flex-row text-sm"> 
                <div className="text-2xl font-semibold md:hidden mb-3 flex justify-center items-center">
                <Link to="/">DeFiVest</Link>
                </div>
                <div className="mr-3 flex justify-center items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-1"></div>
                    Latest Block: 12844327
                </div>
                <div className="flex">
                    <div className="mr-3">Markets</div>
                    <div className="mr-3">Governance</div>
                    <div className="mr-3">Support</div>
                    <div className="">Terms</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
