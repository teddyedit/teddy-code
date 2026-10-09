const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(const f of process.argv.slice(2)){await p.goto('file://'+f);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
await p.screenshot({path:f.replace('.html','.png')});}await b.close();})();
