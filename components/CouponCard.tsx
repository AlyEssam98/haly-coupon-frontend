'use client';
import { motion } from 'framer-motion';
import CopyButton from './CopyButton';
import { useState } from 'react';

export default function CouponCard({ coupon }: { coupon: any }) {
										  const [open, setOpen] = useState(false);
  if (!coupon) return null;

  const {
    productId = 'Untitled Product',
    description = '',
    percentage = '',
    code = '',
    link = '#',
    imageUrl,
  } = coupon;

  const fallbackImage = `/images/${productId}.png`; // make sure to have this in /public/images

  return (
    <>
      {/* Coupon Card */}	  
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl bg-white shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className="h-44 w-full bg-gray-100">
        <img
          src={imageUrl || fallbackImage}
          alt={productId}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">{productId}</h3>
            

          </div>
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-3 py-1 text-sm font-bold text-white">
            {percentage ? `${percentage}%` : 'Special Offer'}
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {description || 'Exclusive offer for you.'}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Code: <span className="font-mono">{code || 'N/A'}</span>
          </div>
          <div className="flex gap-2">
            {code && <CopyButton text={code} />}
            <button
                onClick={() => setOpen(true)}
              className="rounded bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm font-semibold text-white transition-colors"
            >
              View
              </button>
          </div>
        </div>
      </div>
	</motion.div>
{/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl max-w-lg w-full shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl || fallbackImage}
              alt={productId}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{productId}</h2>
              <p className="text-gray-600 mb-3">{description}</p>
              <div className="text-sm text-gray-500 mb-4">
                Percentage: <span className="font-semibold">{percentage || 'N/A'}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Code: <span className="font-mono">{code || 'N/A'}</span>
                </div>
                {code && <CopyButton text={code} />}
              </div>
              
            </div>
          </motion.div>
        </div>
      )}
    </>


  );
}
