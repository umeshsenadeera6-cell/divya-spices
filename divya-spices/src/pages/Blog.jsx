import { blogPosts } from '../data/products';

export default function Blog() {
  return (
    <div className="page">
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #0a1f0d 0%, #14532d 60%, #16a34a 100%)' }}>
        <div className="page-header__inner">
          <div className="section-tag" style={{ color: '#4ade80' }}>Knowledge Hub</div>
          <h1 className="page-header__title">Spice Stories</h1>
          <p className="page-header__sub">Recipes, health guides, and tales from the spice gardens of Ceylon</p>
        </div>
        <div className="page-header__orb page-header__orb--1" />
        <div className="page-header__orb page-header__orb--2" />
      </div>

      <section className="section">
        {/* Featured Post */}
        <div className="blog-featured">
          <div className="blog-featured__img" style={{ background: blogPosts[0].gradient }}>
            <span className="blog-featured__emoji">{blogPosts[0].emoji}</span>
          </div>
          <div className="blog-featured__content">
            <span className="blog-cat">{blogPosts[0].cat}</span>
            <h2 className="blog-featured__title">{blogPosts[0].title}</h2>
            <p className="blog-featured__desc">{blogPosts[0].desc}</p>
            <div className="blog-meta">
              <span>{blogPosts[0].date} · {blogPosts[0].readTime}</span>
              <span className="read-more">Read Article →</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ marginTop: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>More Articles</h2>
          <div className="blog-grid">
            {blogPosts.slice(1).map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card__img" style={{ background: post.gradient }}>
                  <span className="blog-card__emoji">{post.emoji}</span>
                </div>
                <div className="blog-card__body">
                  <span className="blog-cat">{post.cat}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__desc">{post.desc}</p>
                  <div className="blog-meta">
                    <span>{post.date} · {post.readTime}</span>
                    <span className="read-more">Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
