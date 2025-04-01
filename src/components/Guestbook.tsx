// components/Guestbook.tsx
'use client';
import { useState } from 'react';

export default function Guestbook() {
  const [entries, setEntries] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const submit = () => {
    if (message.trim()) {
      setEntries([message, ...entries]);
      setMessage('');
    }
  };

  return (
    <div className='p-4'>
      <textarea
        className='w-full border rounded p-2 mb-2'
        placeholder='축하 메시지를 남겨주세요!'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={submit}
        className='bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-white'
      >
        등록
      </button>
      <ul className='mt-4 space-y-2'>
        {entries.map((entry, i) => (
          <li key={i} className='border p-2 rounded bg-white shadow-sm'>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
