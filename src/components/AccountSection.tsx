'use client';

import { useState } from 'react';

interface AccountInfo {
  bank: string;
  name: string;
  number: string;
}

const groomAccounts: AccountInfo[] = [
  { bank: '카카오뱅크', name: '박상현', number: '3333102710968' },
  { bank: '농협은행', name: '박종석', number: '12103956000163' },
  { bank: '부산은행', name: '김영희', number: '169120083538' },
];

const brideAccounts: AccountInfo[] = [
  { bank: '신한은행', name: '김지희', number: '12341234' },
  { bank: '농협은행', name: '김용백', number: '12341234' },
  { bank: '농협은행', name: '이인순', number: '12341234' },
];

export default function AccountSection() {
  const [selected, setSelected] = useState<'groom' | 'bride' | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('계좌번호가 복사되었습니다.');
  };

  const renderAccounts = (accounts: AccountInfo[]) =>
    accounts.map((account, idx) => (
      <div key={idx} className='mb-4'>
        <p className='text-sm text-gray-600'>
          {account.bank} (예금주: {account.name})
        </p>
        <div className='flex items-center mt-1'>
          <input
            readOnly
            className='flex-1 border px-2 py-1 rounded bg-gray-50 text-sm'
            value={account.number}
          />
          <button
            onClick={() => handleCopy(account.number)}
            className='ml-2 px-3 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300'
          >
            복사하기
          </button>
        </div>
      </div>
    ));

  return (
    <section className='px-6 py-10 text-center text-gray-800'>
      <div className='mb-4 text-2xl font-semibold'>💗 마음 전하실 곳</div>
      <p className='text-sm text-gray-600 leading-relaxed mb-6'>
        멀리서도 축하의 마음을
        <br />
        전하고 싶으신 분들을 위해
        <br />
        계좌번호를 안내드립니다.
      </p>

      <div className='flex justify-center gap-3 mb-6'>
        <button
          onClick={() => setSelected('groom')}
          className={`px-4 py-2 rounded text-white text-sm ${
            selected === 'groom' ? 'bg-[#355865]' : 'bg-gray-300'
          }`}
        >
          신랑측 계좌번호 보기
        </button>
        <button
          onClick={() => setSelected('bride')}
          className={`px-4 py-2 rounded text-white text-sm ${
            selected === 'bride' ? 'bg-[#713c44]' : 'bg-gray-300'
          }`}
        >
          신부측 계좌번호 보기
        </button>
      </div>

      <div className='text-left max-w-xs mx-auto'>
        {selected === 'groom' && renderAccounts(groomAccounts)}
        {selected === 'bride' && renderAccounts(brideAccounts)}
      </div>
    </section>
  );
}
