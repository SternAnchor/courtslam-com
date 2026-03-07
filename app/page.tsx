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
            <a href="#spladle" className="btn btn-wrestling">🤼 The Spladle</a>
            <a href="#articles" className="btn btn-tennis">🎾 Tennis</a>
            <a href="#newsletter" className="btn btn-outline">Subscribe</a>
          </div>
        </div>
      </section>

      {/* SPLADLE SPOTLIGHT — FRONT AND CENTER */}
      <section className="section" id="spladle">
        <div className="spladle-hero">
          {/* Hero Banner Image */}
          <div className="spladle-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/spladle-hero.svg" alt="Wrestling spladle pin — dramatic illustration" />
          </div>
          <div className="spladle-badge">⚡ MOVE OF THE MOMENT</div>
          <h2 className="spladle-title">The Spladle</h2>
          <p className="spladle-subtitle">The most humiliating pin in wrestling.</p>

          {/* Action Shot */}
          <div className="spladle-image-main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/spladle-action.svg" alt="Spladle pin being executed on the wrestling mat" />
          </div>

          <div className="spladle-content">
            <div className="spladle-description">
              <p>
                The <strong>spladle</strong> is a pinning combination that turns your opponent&apos;s 
                failed shot into a devastating pretzel. You trap the head, split the legs, and roll 
                them onto their back — all in one fluid, ruthless motion.
              </p>
              <p>
                It starts from a sprawl. Your opponent shoots in, you stuff it, and instead of just 
                defending — you attack. Hook the near leg, cradle the head, and roll through. 
                The crowd goes silent. The ref counts the pin. It&apos;s over.
              </p>
              <p>
                What makes the spladle devastating isn&apos;t just the pin — it&apos;s the 
                <em> psychology</em>. Your opponent thought they were on offense. They shot with 
                confidence. And in two seconds, they&apos;re staring at the ceiling wondering what 
                happened. It&apos;s the wrestling equivalent of a tennis player crushing a return 
                winner off a serve they weren&apos;t supposed to reach.
              </p>
            </div>
            <div className="spladle-breakdown">
              <h3>The Breakdown</h3>
              <div className="spladle-steps">
                <div className="spladle-step">
                  <span className="step-number">1</span>
                  <div>
                    <strong>Sprawl &amp; Stuff</strong>
                    <p>Opponent shoots — you sprawl hard, driving your hips down and killing their penetration.</p>
                  </div>
                </div>
                <div className="spladle-step">
                  <span className="step-number">2</span>
                  <div>
                    <strong>Hook the Leg</strong>
                    <p>Reach through and hook their near leg from the inside. This is where the split begins.</p>
                  </div>
                </div>
                <div className="spladle-step">
                  <span className="step-number">3</span>
                  <div>
                    <strong>Cradle the Head</strong>
                    <p>Lock your hands — one on the leg, one behind the head. You&apos;ve got the cradle. They&apos;re trapped.</p>
                  </div>
                </div>
                <div className="spladle-step">
                  <span className="step-number">4</span>
                  <div>
                    <strong>Roll &amp; Pin</strong>
                    <p>Roll through, splitting their legs apart. Back on the mat. Shoulders down. Match over.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Diagram */}
            <div className="spladle-image-steps">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/spladle-steps.svg" alt="4-step spladle breakdown diagram" />
            </div>
          </div>
          <div className="spladle-callout">
            <p>&ldquo;The spladle doesn&apos;t just beat you — it <em>embarrasses</em> you.&rdquo;</p>
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
              <h3>The Spladle: Wrestling&apos;s Most Savage Pin, Explained</h3>
              <p>From sprawl to pin in two seconds flat. How the spladle became the most feared — and most disrespectful — move on the mat.</p>
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
          <a href="#spladle">The Spladle</a>
          <a href="#articles">Stories</a>
          <a href="#newsletter">Subscribe</a>
        </div>
        <p>&copy; 2026 Court Slam &middot; A <a href="https://sternanchor.com">Stern Anchor</a> property</p>
      </footer>
    </>
  );
}
