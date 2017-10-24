document.addEventListener('DOMContentLoaded', async () => {
  const { query, getOvserber } = await import(/* webpackChunkName:"[request]" */ './util');
  const ovserver = getOvserber();
  const tabs = query('[role="tab"]');
  const panels = query('[role="tabpanel"]');
  let activePanel = panels[0] as HTMLElement;

  tabs.forEach(tab => {
    tab.addEventListener('click', async (event: MouseEvent) => {
      const id = tab.getAttribute('aria-controls') as string;
      const panel = document.getElementById(id) as HTMLElement;
      await import(/* webpackChunkName: "[request]" */'./add');
      panel.setAttribute('aria-hidden', 'true');
      activePanel.setAttribute('aria-hidden', 'false');
      activePanel = panel;
    });
  });

  query('.list-1-item').forEach(item => {
    ovserver.observe(item);
  });
});


