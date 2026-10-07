"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealOnView({
  children,
  className = "",
  delay = 0,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"reveal-on-view " + (visible ? "is-visible " : "") + className}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
