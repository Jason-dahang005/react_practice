import React from 'react'

export default function SideMenu() {
    return (
        <>
            <aside
                class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#1f2937]"
            >
                <div class="sidebar-header flex items-center justify-center py-4 bg-[#111827]">
                    <div class="inline-flex">
                        <a href="#" class="inline-flex flex-row items-center">
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
                        <span class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">Brandname</span>
                        </a>
                    </div>
                </div>
                <div class="sidebar-content px-4 py-6">
                <ul class="flex flex-col w-full">
                    <li class="my-px">
                    <a
                        href="#"
                        class="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-[#111827] hover:text-gray-100 text-gray-100 bg-[#111827]"
                    >
                        <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        </span>
                        <span class="ml-3">Dashboard</span>
                    </a>
                    </li>
                    <li class="my-px">
                    <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Account</span>
                    </li>
                    <li class="my-px">
                    <a
                        href="#"
                        class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-[#111827] hover:text-gray-100"
                    >
                        <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        </span>
                        <span class="ml-3">Profile</span>
                    </a>
                    </li>
                    <li class="my-px">
                    <a
                        href="#"
                        class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-[#111827] hover:text-gray-100"
                    >
                        <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        </span>
                        <span class="ml-3">Notifications</span>
                        <span
                        class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                        >10</span>
                    </a>
                    </li>
                    <li class="my-px">
                    <a
                        href="#"
                        class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-[#111827] hover:text-gray-100"
                    >
                        <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </span>
                        <span class="ml-3">Settings</span>
                    </a>
                    </li>
                    <li class="my-px">
                    <a
                        href="#"
                        class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-[#111827] hover:text-gray-100"
                    >
                        <span class="flex items-center justify-center text-lg text-red-400">
                        <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                        </svg>
                        </span>
                        <span class="ml-3">Logout</span>
                    </a>
                    </li>
                </ul>
                </div>
            </aside>
        </>
    )
}