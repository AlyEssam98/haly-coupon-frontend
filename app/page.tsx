"use client";
import { useEffect, useState } from "react";
import CouponCard from "../components/CouponCard";

export default function Home() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://haly-coupon-backend-production.up.railway.app/api/coupons")
      .then((r) => r.json())
      .then((data) => {
        // Ensure it's always an array (even if backend returns a map)
        const flat = Array.isArray(data) ? data : Object.values(data).flat();
        setCoupons(flat);
      })
      .catch((err) => console.error("Failed to load coupons", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <section className="hero-gradient rounded-lg p-10 text-white shadow-lg">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold">Discover the best deals near you</h1>
          <p className="mt-3 text-lg opacity-90">
            Save on restaurants, gyms, travel, and shopping with exclusive coupon codes curated daily.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Featured Deals</h2>
        <p className="text-muted-foreground mt-2">
          Top trending coupons handpicked for you.
        </p>

        {loading ? (
          <div className="mt-6">Loading...</div>
        ) : coupons.length === 0 ? (
          <div className="mt-6 text-gray-500">No coupons available yet.</div>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((c) => (
              <CouponCard key={c.productId} coupon={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
