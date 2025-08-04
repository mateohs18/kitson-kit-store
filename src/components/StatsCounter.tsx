import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="font-gaming font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsCounter = () => {
  const stats = [
    { label: "Clientes Satisfechos", value: 15000, suffix: "+" },
    { label: "Productos Entregados", value: 50000, suffix: "+" },
    { label: "Años de Experiencia", value: 3, suffix: "+" },
    { label: "Calificación Promedio", value: 4.9, suffix: "/5" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-muted/10 to-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-2">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};