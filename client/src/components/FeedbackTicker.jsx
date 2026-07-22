const dummyFeedback = [
  { text: "Onboarding took forever — couldn't figure out how to invite my team.", tag: 'support', mood: 'neg' },
  { text: 'The new dashboard is gorgeous and finally fast.', tag: 'app store', mood: 'pos' },
  { text: "It does the job, but the mobile experience needs work.", tag: 'nps', mood: 'neu' },
  { text: "Prospect wants SSO before they'll sign — third time this month.", tag: 'sales call', mood: 'neg' },
  { text: 'Love the new export feature, saved me an hour today.', tag: 'community', mood: 'pos' },
  { text: 'Billing page keeps timing out on invoice download.', tag: 'support', mood: 'neg' },
  { text: "Search finally finds what I'm looking for.", tag: 'csat', mood: 'pos' },
  { text: 'Would like a bulk-action button in the inbox.', tag: 'support', mood: 'neu' }
]

const moodLabel = { pos: 'positive', neu: 'neutral', neg: 'negative' }

export default function FeedbackTicker() {
  const items = [...dummyFeedback, ...dummyFeedback] // duplicated for seamless scroll loop

  return (
    <div className="feed-mask" style={{ height: '100%' }}>
      <div className="feed-track">
        {items.map((f, i) => (
          <div className={`feed-item ${f.mood}`} key={i}>
            <p>{f.text}</p>
            <div className="feed-tag">
              <span className={`chip ${f.mood}`}>{moodLabel[f.mood]}</span>#{f.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
