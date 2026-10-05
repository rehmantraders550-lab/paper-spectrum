(() => {
  const dataUrl = './data/materials.json';
  const familyLabel = (value) => value.replace(/-/g, ' ');
  const params = new URLSearchParams(location.search);

  async function getMaterials() {
    const response = await fetch(dataUrl);
    if (!response.ok) throw new Error('Material data could not be loaded.');
    return response.json();
  }

  function createCard(material) {
    const article = document.createElement('article');
    article.className = 'material-card';
    article.dataset.family = material.family;
    const gsm = material.physical.gsm.join(' / ');
    article.innerHTML = `
      <a class="material-card__plate" href="./material.html?id=${encodeURIComponent(material.id)}" data-family="${familyLabel(material.family)}" aria-label="Open ${material.name} material record"></a>
      <div class="material-card__body">
        <p class="material-card__meta">${familyLabel(material.family)} · ${gsm} gsm</p>
        <h2 class="material-card__title"><a href="./material.html?id=${encodeURIComponent(material.id)}">${material.name}</a></h2>
        <p class="material-card__summary">${material.summary}</p>
      </div>`;
    return article;
  }

  async function initIndex() {
    const grid = document.querySelector('[data-material-grid]');
    if (!grid) return;
    try {
      const materials = await getMaterials();
      const count = document.querySelector('[data-material-count]');
      const filters = [...document.querySelectorAll('[data-family-filter]')];

      const render = (family = 'all') => {
        const visible = family === 'all' ? materials : materials.filter((item) => item.family === family);
        grid.replaceChildren(...visible.map(createCard));
        if (count) count.textContent = `${visible.length} materials`;
      };

      filters.forEach((button) => {
        button.addEventListener('click', () => {
          filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
          render(button.dataset.familyFilter);
        });
      });
      render();
    } catch (error) {
      grid.innerHTML = '<p class="ps-copy">Material records are temporarily unavailable.</p>';
    }
  }

  function valueOrPending(value, suffix = '') {
    return value === null || value === undefined || value === '' ? 'Pending verification' : `${value}${suffix}`;
  }

  async function initDetail() {
    const root = document.querySelector('[data-material-detail]');
    if (!root) return;
    try {
      const materials = await getMaterials();
      const id = params.get('id') || materials[0]?.id;
      const material = materials.find((item) => item.id === id) || materials[0];
      if (!material) throw new Error('No material records available.');

      document.title = `${material.name} — Paper Spectrum`;
      root.querySelector('[data-name]').textContent = material.name;
      root.querySelector('[data-family]').textContent = familyLabel(material.family);
      root.querySelector('[data-summary]').textContent = material.summary;
      root.querySelector('[data-shade]').textContent = valueOrPending(material.visual.shade);
      root.querySelector('[data-surface]').textContent = valueOrPending(material.visual.surface);
      root.querySelector('[data-gsm]').textContent = material.physical.gsm.length ? material.physical.gsm.join(' / ') + ' gsm' : 'Pending verification';
      root.querySelector('[data-caliper]').textContent = valueOrPending(material.physical.caliper_um, ' µm');
      root.querySelector('[data-fiber]').textContent = valueOrPending(material.physical.fiber);
      root.querySelector('[data-opacity]').textContent = valueOrPending(material.optical.opacity_percent, '%');
      root.querySelector('[data-print]').textContent = material.print.methods.join(' · ');
      root.querySelector('[data-finishing]').textContent = material.finishing.compatible.join(' · ');
      root.querySelector('[data-applications]').textContent = material.applications.join(' · ');
      root.querySelector('[data-provenance]').textContent = `Status: ${material.provenance.status}. ${material.provenance.notes}`;
    } catch (error) {
      root.innerHTML = '<p class="ps-copy">This material record could not be loaded.</p>';
    }
  }

  initIndex();
  initDetail();
})();