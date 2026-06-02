const Contact =() => {
    return (
        <div id="contact">
            <h3 className="text-2xl bold m-4 p-3">Contact Form</h3>
            <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-md p-2 m-2 w" />
            <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2 m-2 w" />
            <textarea placeholder="Message" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full h-32"></textarea>
            <button className="bg-blue-500 text-white rounded-md p-2 m-2">Submit</button>
        </div>
    )
}

export default Contact;