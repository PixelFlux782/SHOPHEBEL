"use client";
import { motion } from "framer-motion";

interface BrandCardProps {
  title: string;
  value: string;
  trend?: string;
}

export const BrandCard = ({ title, value, trend }: BrandCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-card-border p-6 rounded-xl hover:border-brand-blue/30 transition-colors group"
    >
      <p className="text-brand-muted text-sm font-medium mb-2 group-hover:text-brand-blue transition-colors">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-semibold tracking-tighter">{value}</h3>
        {trend && <span className="text-brand-blue text-xs font-mono">{trend}</span>}
      </div>
    </motion.div>
  );
};