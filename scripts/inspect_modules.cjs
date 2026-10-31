const fs = require('fs');
const path = require('path');

const lessonsDir = path.resolve('src/content/lessons');
const dirs = fs.readdirSync(lessonsDir);

for (const d of dirs) {
  const p = path.join(lessonsDir, d);
  if (!fs.statSync(p).isDirectory()) continue;
  const files = fs.readdirSync(p).filter(f => f.endsWith('.md'));
  const list = files.map(f => {
    const c = fs.readFileSync(path.join(p, f), 'utf8');
    const order = parseInt((c.match(/order:\s*(\d+)/) || [])[1] || '0');
    const title = (c.match(/title:\s*['"]?([^'"\r\n]+)/) || [])[1] || f;
    return { f, order, title, lines: c.split('\n').length };
  }).sort((a,b) => a.order - b.order);

  console.log(`\n### ${d} (${files.length} dars):`);
  list.forEach(item => {
    console.log(`  [order: ${item.order}] ${item.f} (${item.lines} qator) - "${item.title}"`);
  });
}
