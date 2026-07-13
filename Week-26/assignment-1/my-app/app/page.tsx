import Link from "next/dist/client/link"

export default function Home() { 
  
    const links = {
        "Home" :'/',
        "CSR-page": '/static-page',
        "SSR-page": '/interactive-page',
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen  py-2"> 
            <h1 className="text-6xl font-bold">
                Welcome to Next.js! <span className="text-blue-500">Home page</span>  
            </h1>
            <p className="mt-3 text-2xl">
                Explore different pages built with Next.js:
    Server Page: Optimized for SEO with pre-rendered content.
    Client Page: Provides client-side interactivity.
            </p>
            
        </div>
        </>
    )
 }
