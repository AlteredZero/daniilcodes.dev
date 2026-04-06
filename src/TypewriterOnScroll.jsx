import { useEffect, useRef, useState } from "react";

export default function TypewriterOnScroll({ 
  text, 
  speed = 30, 
  as: Tag = "span",
  className = ""
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (hiddenRef.current) {
      setHeight(hiddenRef.current.offsetHeight);
    }
  }, [text]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <div style={{ minHeight: height }}>
      {}
      <Tag
        ref={hiddenRef}
        className={className}
        style={{ visibility: "hidden", position: "absolute" }}
      >
        {text}
      </Tag>

      {}
      <Tag ref={ref} className={className}>
        {displayed}
        {displayed.length < text.length && <span className="cursor">|</span>}
      </Tag>
    </div>
  );
}