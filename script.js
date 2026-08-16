// Live GitHub data for the portfolio site — same source of truth as the
// GitHub profile README's auto-updated stats, so the two stay in sync.
// Falls back to the static text baked into the HTML when the API is
// unreachable (e.g. rate limit), so the page never shows broken numbers.
(async () => {
  const set = (sel, text) => {
    const el = document.querySelector(sel)
    if (el) el.textContent = String(text)
  }

  try {
    const [user, repo] = await Promise.all([
      fetch('https://api.github.com/users/lxj808624').then(r => r.json()),
      fetch('https://api.github.com/repos/lxj808624/dsh-tool-git').then(r => r.json()),
    ])
    if (user.followers !== undefined) set('[data-gh="followers"]', user.followers)
    if (repo.stargazers_count !== undefined) set('[data-gh="stars"]', repo.stargazers_count)
    if (repo.forks_count !== undefined) set('[data-gh="forks"]', repo.forks_count)
  } catch { /* keep static fallback */ }

  try {
    const rel = await fetch('https://api.github.com/repos/lxj808624/dsh-tool-git/releases/latest').then(r => r.json())
    if (rel.tag_name) set('[data-gh="version"]', rel.tag_name.replace(/^v/, ''))
  } catch { /* keep static fallback */ }
})()
