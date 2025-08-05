export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex text-center flex-col justify-center text-center w-[50rem] h-[20rem] p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
                <a href="/" className="mt-6 text-blue-500 hover:underline">
                    Go Back to Home
                </a>
            </div>
        </div>
    );
}