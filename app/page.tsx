export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🏟️ New Era of Sports Crossover</span>
          <h1>
            <span className="court">Court</span>{' '}
            <span className="slam">Slam</span>
          </h1>
          <p className="hero-tagline">
            Where the <em>court</em> meets the <em>mat</em>. Two fierce sports. One obsession.
          </p>
          <div className="hero-cta">
            <a href="#articles" className="btn btn-wrestling">🤼 Wrestling</a>
            <a href="#articles" className="btn btn-tennis">🎾 Tennis</a>
            <a href="#newsletter" className="btn btn-outline">Subscribe</a>
          </div>
        </div>
      </section>

      {/* MATCHUP BANNER */}
      <section className="section">
        <div className="matchup-banner">
          <div className="matchup-vs">
            <span className="matchup-sport wrestling">🤼 Wrestling</span>
            <div className="vs-badge">VS</div>
            <span className="matchup-sport tennis">🎾 Tennis</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            One demands you pin your opponent to the mat. The other demands you keep the ball off the court.
            Both demand everything you&apos;ve got. Welcome to the collision.
          </p>
        </div>

        <div className="stats-row">
          <div className="stat">
            <div className="stat-number">2</div>
            <div className="stat-label">Sports</div>
          </div>
          <div className="stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">Intensity</div>
          </div>
          <div className="stat">
            <div className="stat-number">1</div>
            <div className="stat-label">Obsession</div>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="section">
        <div className="section-header">
          <h2>What We Cover</h2>
          <div className="section-divider" />
          <p>The best of both worlds — and everything in between.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💪</div>
            <h3>Athlete Spotlights</h3>
            <p>Deep dives into wrestlers and tennis players who dominate their sport — and the surprising traits they share.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚔️</div>
            <h3>Crossover Breakdowns</h3>
            <p>What happens when wrestling footwork meets tennis agility? We break down the biomechanics of both.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏋️</div>
            <h3>Training Fusion</h3>
            <p>Training programs that blend wrestling conditioning with tennis explosiveness. Become an athlete, not just a player.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Tournament Coverage</h3>
            <p>From Grand Slams to NCAA Championships — we cover the biggest moments in both sports.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Mental Game</h3>
            <p>The psychology of a 1v1 battle. Whether it&apos;s match point or overtime, the mental edge wins.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Hot Takes</h3>
            <p>Could Djokovic survive a wrestling practice? Could Jordan Burroughs return a Nadal serve? We have opinions.</p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section" id="articles">
        <div className="section-header">
          <h2>Latest Stories</h2>
          <div className="section-divider" />
          <p>Fresh off the mat and the court.</p>
        </div>
        <div className="article-grid">
          <article className="article-card">
            <div className="article-thumb wrestling-bg">🤼‍♂️</div>
            <div className="article-body">
              <span className="article-tag tag-wrestling">Wrestling</span>
              <h3>Why Every Tennis Player Should Train Like a Wrestler</h3>
              <p>The explosive hip movement, the grip strength, the mental toughness — wrestling builds athletes that dominate any court.</p>
            </div>
          </article>
          <article className="article-card">
            <div className="article-thumb tennis-bg">🎾</div>
            <div className="article-body">
              <span className="article-tag tag-tennis">Tennis</span>
              <h3>The Footwork Secret Tennis Stole from Wrestling</h3>
              <p>Level changes on the mat translate directly to split-step timing on the baseline. Here&apos;s how the best players move.</p>
            </div>
          </article>
          <article className="article-card">
            <div className="article-thumb mixed-bg">🏟️</div>
            <div className="article-body">
              <span className="article-tag tag-crossover">Crossover</span>
              <h3>1v1: The Loneliest Number in Sports</h3>
              <p>No teammates. No substitutions. Just you and your opponent. Why wrestling and tennis produce the toughest solo competitors.</p>
            </div>
          </article>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" id="newsletter">
        <div className="newsletter">
          <h2>🔔 Join the Slam</h2>
          <p>Weekly stories from the mat and the court. No spam, just slams.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" aria-label="Email address" />
            <button className="btn btn-wrestling">Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-links">
          <a href="#articles">Stories</a>
          <a href="#newsletter">Subscribe</a>
        </div>
        <p>&copy; 2026 Court Slam &middot; A <a href="https://sternanchor.com">Stern Anchor</a> property</p>
      </footer>
    </>
  );
}
