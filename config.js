var isNode = new Function("try {return this===global;}catch(e){return false;}");
var isBrowser = new Function(
  "try {return this===self;}catch(e){ return false;}"
);

var _global = null;

if (isNode()) {
  _global = global;
} else if (isBrowser()) {
  _global = self;
} else {
  throw Error(`unknow environment!`);
}

_global.CWP_CONFIG = {
  title: "XX检查站"
};
