const Contact = () => {
    return (
        <div className="w-6/12 mx-auto text-center">
            <h1 className="my-4 font-bold">Contact Us at +91 8677024134</h1>
            <div>OR</div>
            <div className="font-bold font-mono">Submit your request below ⬇️</div>
            <div className="flex-col">
                <div><input className="mt-2 border-2 border-gray-700 rounded" placeholder="Name" type="text" /></div>
                <div><input className="mt-2 border-2 border-gray-700 rounded" placeholder="Messages" type="text" /></div>
                <div><button className="px-2 m-2 border-2 bg-gray-800 rounded-lg text-white hover:bg-gray-500 active:bg-gray-700" onClick={()=> window.alert("Request Submitted.📨")}>Submit</button></div>
            </div>
        </div>
    )
}

export default Contact;
