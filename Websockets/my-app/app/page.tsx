'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/api/ws');

    ws.onopen = () => {
      console.log('Connected!');
      ws.send(JSON.stringify({ author: 'Alice', content: 'Hello!' }));
    };

  ws.onmessage = async (event) => {
  const text = event.data instanceof Blob 
    ? await event.data.text() 
    : event.data;
  
  try {
    const data = JSON.parse(text);
    console.log(`${data.author}: ${data.content}`);
  } catch {
    // plain text message (e.g. from Postman)
    console.log(text);
  }
};

    ws.onclose = () => console.log('Disconnected');
    ws.onerror = (err) => console.error('Error', err);

    return () => ws.close();
  }, []);

  return <div>WebSocket Test</div>;
}