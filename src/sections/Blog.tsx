import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import { blogConfig, navigationConfig } from '../config';

const Blog = () => {
  if (!blogConfig.heading && blogConfig.posts.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 bg-[#fafafa]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {blogConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {blogConfig.heading}
          </h2>
          {blogConfig.subtitle && (
            <p
              className={`max-w-xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {blogConfig.subtitle}
            </p>
          )}
        </div>

        {/* Lifestyle Image Grid - Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogConfig.posts.map((post, index) => {
            const instagramLink = navigationConfig.socialLinks.find(link => link.icon === 'Instagram')?.href || '#';
            return (
              <div
                key={post.id}
                className={`relative h-[400px] overflow-hidden group transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-1000" />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-white text-xl md:text-2xl font-serif text-center opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-700">
                    {post.excerpt}
                  </p>
                </div>

                {/* Instagram Button */}
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-white text-[#8b6d4b] font-light tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 hover:bg-[#8b6d4b] hover:text-white"
                >
                  <Instagram size={18} />
                  <span>Voir plus sur Instagram</span>
                </a>
              </div>
            );
          })}
        </div>
        {/* View More Button */}
        {blogConfig.viewAllText && (
          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-[#8b6d4b] text-white font-light tracking-widest text-sm btn-hover transition-all duration-300 shadow-md hover:bg-[#7a5c3c]">
              {blogConfig.viewAllText}
            </button>
          </div>
        )}

        {/* View All Link */}
      </div>
    </section>
  );
};

export default Blog;
