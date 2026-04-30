import React, { Suspense } from 'react';
import Section from '../common/Section';

const BlogHistory = React.lazy(() => import('../BlogHistory'));

// Construct hero image URL from post date and slug
// Pattern: /blog/YYYY-MM-DD-slug.webp
const getHeroImage = (post) => {
  // Priority 1: Use the image field from the post metadata if available (JSON Feed standard)
  if (post.image) return post.image;
  if (post.banner_image) return post.banner_image;

  // Priority 2: Fallback to the automated path used by the previous owner
  if (!post.date_modified || !post.id) return null;
  const date = new Date(post.date_modified);
  // Use UTC methods to avoid timezone issues
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  // Extract slug from URL like "https://khalid-options.com/blog/my-slug"
  const slug = post.id.split('/blog/')[1];
  if (!slug) return null;
  return `/blog/${yyyy}-${mm}-${dd}-${slug}.webp`;
};

function LatestPosts({ allPosts, postsHighlight, isDesktop, isTablet }) {
  // Ensure we never display more than 3 highlight posts with hero images
  const highlights = (postsHighlight || [])
    .map(post => ({ ...post, image: getHeroImage(post) }))
    .filter(post => post.image)
    .slice(0, 3);

  return (
    <Section title="Latest posts." subtitle="I write so I can think and communicate better.">
      {allPosts && allPosts.length > 0 && (
        <Suspense fallback={<div className="h-[200px] flex items-center justify-center">Loading History...</div>}>
          <BlogHistory posts={allPosts} isDesktop={isDesktop} />
        </Suspense>
      )}
      {isDesktop ? (
        <div className="relative overflow-hidden max-w-[814px] mx-auto">
          <div className="flex animate-scroll gap-8">
            {(highlights.length > 3 ? highlights.concat(highlights) : highlights).map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="flex-shrink-0 w-[250px]"
              >
                <a href={`${post.id}`} className="block h-full">
                  <div className="overflow-hidden rounded-xl mb-3">
                    <img
                      className="w-full h-[180px] object-cover transition-transform duration-300 hover:scale-110"
                      src={post.image}
                      alt={`Strategic visualization of: ${post.title}`}
                      width={250}
                      height={180}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-left text-sm font-semibold">{post.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : isTablet ? (
        <div className="flex justify-center gap-8 mb-4">
          {highlights.slice(0, 2).map((post) => (
            <div key={post.id} className="w-[250px]">
              <a
                href={`${post.id}`}
                className="group block h-full transition-transform duration-300 hover:scale-105"
              >
                <div className="overflow-hidden rounded-xl mb-3">
                  <img
                    className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-110"
                    src={post.image}
                    alt={`Strategic visualization of: ${post.title}`}
                    width={250}
                    height={180}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-left text-sm font-semibold group-hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
          {highlights.map((post) => (
            <div key={post.id} className="snap-center shrink-0 w-[260px] mx-auto text-center">
              <a href={`${post.id}`} className="group block pt-4">
                <img
                  className="rounded-xl h-[120px] w-full object-cover"
                  src={post.image}
                  alt={`Strategic visualization of: ${post.title}`}
                  width={260}
                  height={120}
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-center text-sm font-semibold mt-2 group-hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

export default LatestPosts; 