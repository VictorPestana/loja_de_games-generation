import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


function Contact () {
	<div className="bg-green-400 flex justify-center py-8">
	<div className='container text-white'>
		<h2 className='text-4xl font-bold text-center mb-4'>
			Contact Us
		</h2>
		<form className='flex flex-col gap-4'>
			<input type='text' placeholder='Your Name' className='p-2 rounded' />
			<input type='email' placeholder='Your Email' className='p-2 rounded' />
			<textarea placeholder='Your Message' className='p-2 rounded'></textarea>
			<button type='submit' className='bg-white text-green-400 p-2 rounded'>
				Send Message
			</button>
		</form>
	</div>
</div>
}
