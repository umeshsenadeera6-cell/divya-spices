export default function About({ navigate }) {
  return (
    <div className="page">
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #0d0500 0%, #3a2010 60%, #5c3d1e 100%)' }}>
        <div className="page-header__inner">
          <div className="section-tag" style={{ color: '#e8b95c' }}>Est. 2005</div>
          <h1 className="page-header__title">Our Story</h1>
          <p className="page-header__sub">Three generations of passion for Ceylon's finest spices, shared with the world.</p>
        </div>
        <div className="page-header__orb page-header__orb--1" />
        <div className="page-header__orb page-header__orb--2" />
      </div>

      <section className="section">
        <div className="about-story">
          <div className="about-story__text">
            <div className="section-tag">Est. 2005</div>
            <h2 className="section-title">Rooted in Sri Lankan Soil</h2>
            <p className="about-story__para">
              Divya Spices was born in the fertile valleys of Sri Lanka, where our family has farmed spices for generations. What started as a small village trade has grown into an internationally recognised brand — yet our heart remains in the soil of our homeland.
            </p>
            <p className="about-story__para">
              We work directly with smallholder farmers across Sri Lanka's spice-growing regions — Kandy, Matale, Kurunegala — ensuring fair wages, sustainable practices, and the highest quality at every step.
            </p>
            <p className="about-story__para">
              Every product carries a piece of Ceylon's 3,000-year spice heritage. When you cook with Divya Spices, you taste that legacy.
            </p>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Get in Touch →
            </button>
          </div>

          <div className="about-visual">
            <div className="about-visual__emoji">🌿🌶️⚫🫚</div>
            <div className="about-stats">
              {[
                { num: '18+', label: 'Years of Excellence' },
                { num: '40+', label: 'Countries Exported To' },
                { num: '50+', label: 'Farm Partners' },
                { num: '12K+', label: 'Happy Customers' },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat__num">{s.num}</div>
                  <div className="about-stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Journey</h2>
          {[
            { year: '2005', title: 'Founded in Negombo', desc: 'Divya Spices begins as a small family operation in Negombo, exporting chilli and pepper to regional markets.' },
            { year: '2010', title: 'First International Export', desc: 'We ship our first container of Ceylon Black Pepper to European buyers, marking our entry into global markets.' },
            { year: '2016', title: 'Organic Certification', desc: 'After years of sustainable farming practices, Divya Spices receives international organic certification.' },
            { year: '2020', title: 'Direct-to-Consumer Launch', desc: 'We launch our online store, connecting directly with spice lovers worldwide across 40+ countries.' },
            { year: '2025', title: 'Award-Winning Quality', desc: 'Divya Spices is recognized at the International Spice Awards for excellence in Ceylon Pepper and Tea.' },
          ].map((t, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
              <div className="timeline-item__dot" />
              <div className="timeline-item__card">
                <span className="timeline-item__year">{t.year}</span>
                <h3 className="timeline-item__title">{t.title}</h3>
                <p className="timeline-item__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={{ marginTop: '5rem' }}>
          <div className="section__header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-tag">What We Stand For</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🌱', title: 'Sustainability', desc: 'Zero-waste processing, biodegradable packaging, and carbon-neutral shipping.' },
              { icon: '🤝', title: 'Fair Trade', desc: 'We pay 30% above market rate to our farmers, empowering rural communities.' },
              { icon: '🔬', title: 'Lab-Tested Quality', desc: 'Every batch is tested for purity, potency, and safety by certified labs.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
