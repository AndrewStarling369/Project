import fetch from 'node-fetch';

(async function () {
  try {
    var r = await fetch('http://localhost:3333/products?search=cart');
    console.log(await r.json());
    console.log(r);
  } catch (e) {
    console.log(e);
  }
})();

(async function () {
  try {
    var r = await fetch('http://localhost:3333/product/1111');
    console.log(r);
    if (r.status === 200) {
      console.log(await r.json());
    } else {
      console.log(r.statusText);
    }
  } catch (e) {
    console.log(e);
  }
})();
