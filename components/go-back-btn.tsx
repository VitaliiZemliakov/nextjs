'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function GoBackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}