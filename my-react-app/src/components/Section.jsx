import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Section() {
    return (
        <div className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <Header />
            <div class="flex flex-col flex-grow p-4">
                <h1 class="self-start font-semibold text-2xl text-gray-700">Dashboard</h1>

                <div
                class="flex flex-col flex-grow border-4 border-gray-300 border-dashed bg-gray-100 rounded mt-4"
                ></div>
            </div>
            <Footer />
        </div>
    )
}