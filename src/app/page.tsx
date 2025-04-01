'use client';
import { motion } from 'framer-motion';
import InvitationCard from '../components/InvitationCard';
import FamilySection from '../components/FamilySection';
import MapSection from '../components/MapSection';
import PhotoGallery from '../components/PhotoGallery';
import Guestbook from '../components/Guestbook';
import WeddingCountdown from '../components/WeddingCountdown';

export default function HomePage() {
  return (
    <main className='w-full bg-white text-gray-800'>
      <div className='px-4'>
        {/* 인삿말 / 커플 정보 */}
        <motion.section
          className='py-6 border-b'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <InvitationCard />
        </motion.section>

        {/* 가족 소개 */}
        <motion.section
          className='py-6 border-b'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FamilySection />
        </motion.section>

        <motion.section
          className='py-6 border-b'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <WeddingCountdown />
        </motion.section>

        {/* 사진 슬라이드 */}
        <motion.section
          className='py-6 border-b'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='text-xl font-bold mb-2 text-center'>우리의 이야기</h2>
          <PhotoGallery />
        </motion.section>

        {/* 오시는 길 */}
        <motion.section
          className='py-6 border-b'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='text-xl font-bold mb-4 text-center'>오시는 길</h2>
          <MapSection />
        </motion.section>

        {/* 방명록 */}
        <motion.section
          className='py-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='text-xl font-bold mb-4 text-center'>축하 메시지</h2>
          <Guestbook />
        </motion.section>
      </div>
    </main>
  );
}
