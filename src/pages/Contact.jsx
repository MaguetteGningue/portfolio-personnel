import { useState } from "react";

function Contact() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

function handleSubmit(e){
e.preventDefault();
alert("Message envoyé !");
}

return (

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">Contact</h1>

<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">

<input
type="text"
placeholder="Votre nom"
className="border p-2"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Votre email"
className="border p-2"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<textarea
placeholder="Votre message"
className="border p-2"
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button className="bg-blue-500 text-white p-2">
Envoyer
</button>

</form>

</div>

);

}

export default Contact;