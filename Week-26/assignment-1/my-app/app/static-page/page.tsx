export default function ServerPage() { 
    return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen  py-2"> 
        <h1 className="text-6xl font-bold">
        Welcome to the<span className="text-purple-500"> Server Page   </span>     </h1>
        <p className="w-2/3 text-xl m-3 text-center overflow-hidden">This page is statically generated using Next.js. The content is **pre-rendered on the server** and then sent to the client for a fast and efficient user experience.</p>
    </div>
    </>
    )
 }
