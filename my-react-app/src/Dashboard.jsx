import React from 'react'
import Section from './components/Section'
import SideMenu from './components/SideMenu'

export default function Dashboard() {
    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
            <SideMenu />
            <Section />
        </div>
    )
}