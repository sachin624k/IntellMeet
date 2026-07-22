/* ---------------------------------------------------------
   Loader component
   Toggles .loading on a button (shows spinner, disables it),
   simulates a network call, then resolves.
--------------------------------------------------------- */
function setLoading(btn, isLoading){
  btn.disabled = isLoading;
  btn.classList.toggle('loading', isLoading);
}

function showToast(message){
  const toast = document.getElementById('toast');
  if(!toast) return;
  document.getElementById('toast-text').textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ---------------------------------------------------------
   Dummy submit handler — every form (login/register/forgot)
   calls this. No backend / no fetch calls: per the auth-ui
   task, this only reads field values and console.logs a
   dummy payload, then shows a toast.
--------------------------------------------------------- */
function handleSubmit(event, formName){
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const data = {};
  form.querySelectorAll('input').forEach(el => {
    if(el.type === 'checkbox'){ data[el.id] = el.checked; }
    else { data[el.id] = el.value; }
  });

  setLoading(btn, true);
  console.log(`[${formName}] submitted:`, data);

  setTimeout(() => {
    setLoading(btn, false);
    const messages = {
      login: 'Signed in (dummy) — dashboard not wired yet.',
      register: 'Workspace created (dummy) — you are Admin.',
      forgot: 'Reset link sent (dummy) to ' + (data['forgot-email'] || 'your email') + '.'
    };
    showToast(messages[formName] || 'Submitted.');
  }, 900);

  return false;
}

/* ---------------------------------------------------------
   Feedback ticker — the signature visual element.
   Dummy feedback rows, duplicated once so the CSS scroll
   loop (translateY -50%) is seamless. Call renderFeed() with
   the id of any .feed-track element on the page.
--------------------------------------------------------- */
const dummyFeedback = [
  { text: "Onboarding took forever — couldn't figure out how to invite my team.", tag: "support", mood: "neg" },
  { text: "The new dashboard is gorgeous and finally fast.", tag: "app store", mood: "pos" },
  { text: "It does the job, but the mobile experience needs work.", tag: "nps", mood: "neu" },
  { text: "Prospect wants SSO before they'll sign — third time this month.", tag: "sales call", mood: "neg" },
  { text: "Love the new export feature, saved me an hour today.", tag: "community", mood: "pos" },
  { text: "Billing page keeps timing out on invoice download.", tag: "support", mood: "neg" },
  { text: "Search finally finds what I'm looking for.", tag: "csat", mood: "pos" },
  { text: "Would like a bulk-action button in the inbox.", tag: "support", mood: "neu" },
];

function renderFeed(elementId){
  const el = document.getElementById(elementId);
  if(!el) return;
  const items = [...dummyFeedback, ...dummyFeedback].map(f => `
    <div class="feed-item ${f.mood}">
      <p>${f.text}</p>
      <div class="feed-tag"><span class="chip ${f.mood}">${f.mood === 'pos' ? 'positive' : f.mood === 'neg' ? 'negative' : 'neutral'}</span>#${f.tag}</div>
    </div>
  `).join('');
  el.innerHTML = items;
}

// Auto-render any ticker present on the current page.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feed-track[id]').forEach(el => renderFeed(el.id));
});
