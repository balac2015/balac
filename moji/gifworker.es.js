import { GIFEncoder as l, quantize as p, applyPalette as f } from "gifenc";
const d = self, t = l();
d.addEventListener("message", (e) => {
  if (e.data.addFrame) {
    const { data: a, transparent: n, width: s, height: o, delay: r } = e.data.addFrame, i = p(a, 256, { oneBitAlpha: n }), c = f(a, i);
    t.writeFrame(c, s, o, { palette: i, delay: r, transparent: n });
  } else
    e.data.finish && (t.finish(), d.postMessage(new Blob([t.bytes()], { type: "image/gif" })));
});
//# sourceMappingURL=gifworker.es.js.map
