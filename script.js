// Optional enhancement: the page remains complete if GitHub is unavailable.
// Only the featured project's release version is displayed here.
(async () => {
  const version = document.querySelector('[data-gh="version"]');
  if (!version) return;
  try {
    const response = await fetch('https://api.github.com/repos/lxj808624/dsh-tool-git/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return;
    const release = await response.json();
    if (typeof release.tag_name === 'string') version.textContent = release.tag_name;
  } catch { /* Keep the npm link usable without live data. */ }
})();
