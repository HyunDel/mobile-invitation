'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';
import localFont from 'next/font/local';

interface AccountInfo {
  bank: string;
  name: string;
  number: string;
}

const groomAccounts: AccountInfo[] = [
  { bank: '부산', name: '박상현', number: '036121306256' },
  { bank: '농협', name: '박종석', number: '12103956000163' },
  { bank: '부산', name: '김영희', number: '169120083538' },
];

const brideAccounts: AccountInfo[] = [
  { bank: '신한', name: '김지희', number: '110456960249' },
  { bank: '농협', name: '김용백', number: '3513601010313' },
  { bank: '새마을', name: '이인순', number: '9003249491986' },
];

const pretendard = localFont({
  src: '../../public/fonts/GowunDodum-Regular.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function AccountAccordionSection() {
  const [open, setOpen] = useState<'groom' | 'bride' | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('계좌번호가 복사되었습니다.');
  };

  const renderAccounts = (accounts: AccountInfo[]) => (
    <div className='overflow-hidden transition-all duration-300 text-center'>
      {accounts.map((acc, i) => (
        <div
          key={i}
          className='flex items-center justify-between px-4 py-3 bg-white border-t text-sm'
        >
          {/* 복사 + 예금주 */}
          <div className='flex items-center gap-2 text-gray-700'>
            <button onClick={() => handleCopy(acc.number)}>
              <Copy size={16} className='text-gray-500 hover:text-gray-700' />
            </button>
            <span className='font-semibold'>
              {acc.name} ({acc.bank})
            </span>
          </div>

          {/* 은행 + 번호 */}
          <div className='text-gray-700 font-mono'>{acc.number}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className={`text-center py-10 px-4 text-gray-800 ${pretendard.className}`}
    >
      <h4 className='text-xs tracking-widest text-pink-300 font-semibold mb-1'>
        ACCOUNT
      </h4>
      <h2 className='text-xl font-bold text-pink-300 mb-4'>마음 전하실 곳</h2>
      <p className='text-sm text-gray-600 leading-relaxed mb-6'>
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </p>

      {/* 아코디언 */}
      <div className='space-y-3'>
        <div className='rounded-xl overflow-hidden border bg-gray-100'>
          <button
            className='flex justify-between items-center w-full px-4 py-3 text-gray-700 font-medium'
            onClick={() => setOpen(open === 'groom' ? null : 'groom')}
          >
            <span className='mx-auto'>신랑측</span>
            {open === 'groom' ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {open === 'groom' && renderAccounts(groomAccounts)}
        </div>

        <div className='rounded-xl overflow-hidden border bg-gray-100'>
          <button
            className='flex justify-between items-center w-full px-4 py-3 text-gray-700 font-medium'
            onClick={() => setOpen(open === 'bride' ? null : 'bride')}
          >
            <span className='mx-auto'>신부측</span>
            {open === 'bride' ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {open === 'bride' && renderAccounts(brideAccounts)}
        </div>
      </div>
    </section>
  );
}
