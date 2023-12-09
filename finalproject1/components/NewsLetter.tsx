'use client'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import React, { useRef, useState } from 'react';

export default function NewsLetter() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null); // Specify the type as HTMLInputElement
  // 2. Hold a message in state to handle the response from our API.
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputEl.current) {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    
    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  }
  };

  return (
    <form onSubmit={subscribe}>
      <div className="flex w-full flex-wrap md:flex-nowrap flex-col gap-4" >
        <p className="mb-2 font-head">Subscribe to our Newsletter</p>
        <Input ref={inputEl} type="email" label="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <Button type='submit' color="primary" variant="bordered">
        Subscribe
      </Button>
      <div className="text-green-500 mt-2">{message}</div>
    </form>
  );
}