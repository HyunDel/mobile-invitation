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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <InvitationCard />
        </motion.section>

        {/* 가족 소개 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FamilySection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <WeddingCountdown />
        </motion.section>

        {/* 사진 슬라이드 */}
        <motion.section
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MapSection />
        </motion.section>
      </div>
    </main>
  );
}
