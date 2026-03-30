"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useCallback = _React.useCallback;

// ─── localStorage ──────────────────────────────────────────────────────────
var KEYS = {
  lots: "lrm_lots",
  orders: "lrm_orders",
  mapping: "lrm_mapping"
};
var lsGet = function lsGet(k) {
  try {
    var v = localStorage.getItem(k);
    return v ? JSON.parse(v) : null;
  } catch (_unused) {
    return null;
  }
};
var lsSet = function lsSet(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (_unused2) {}
};
var uid = function uid() {
  return Math.random().toString(36).slice(2, 9);
};
var today = function today() {
  return new Date().toISOString().slice(0, 10);
};
var norm = function norm(s) {
  return String(s || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
};
var isVenta = function isVenta(code) {
  return String(code || "").replace(/\s/g, "").length === 9;
};
var boxError = function boxError(unitsPerBox, qty) {
  if (!unitsPerBox || !qty) return null;
  var n = Number(qty);
  if (n <= 0) return null;
  if (n % unitsPerBox !== 0) {
    var prev = Math.floor(n / unitsPerBox) * unitsPerBox;
    var next = prev + unitsPerBox;
    return "M\xFAltiplo de ".concat(unitsPerBox, " uds/caja \u2014 \xBF").concat(prev > 0 ? prev + " o " : "").concat(next, "?");
  }
  return null;
};

// ─── Icons ────────────────────────────────────────────────────────────────
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size;
  var d = {
    tag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      y1: "7",
      x2: "7.01",
      y2: "7"
    })),
    cart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "21",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "21",
      r: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    })),
    dl: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    pkg: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "16.5",
      y1: "9.4",
      x2: "7.5",
      y2: "4.21"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })),
    up: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 8 12 3 7 8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "3",
      x2: "12",
      y2: "15"
    })),
    link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d[name]);
};
var SBar = function SBar(_ref2) {
  var value = _ref2.value,
    _onChange = _ref2.onChange,
    _ref2$placeholder = _ref2.placeholder,
    placeholder = _ref2$placeholder === void 0 ? "Buscar…" : _ref2$placeholder;
  return /*#__PURE__*/React.createElement("div", {
    style: s.sw
  }, /*#__PURE__*/React.createElement("span", {
    style: s.si
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  })), /*#__PURE__*/React.createElement("input", {
    style: s.sin,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }), value && /*#__PURE__*/React.createElement("button", {
    style: s.scl,
    onClick: function onClick() {
      return _onChange("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  })));
};

// ═══════════════════════════════════════════════════════════════════════════
function App() {
  var _useState = useState("orders"),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useState3 = useState(function () {
      var _lsGet;
      return (_lsGet = lsGet(KEYS.lots)) !== null && _lsGet !== void 0 ? _lsGet : [];
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    lots = _useState4[0],
    setLots = _useState4[1];
  var _useState5 = useState(function () {
      var _lsGet2;
      return (_lsGet2 = lsGet(KEYS.orders)) !== null && _lsGet2 !== void 0 ? _lsGet2 : [];
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    orders = _useState6[0],
    setOrders = _useState6[1];
  var _useState7 = useState(function () {
      var _lsGet3;
      return (_lsGet3 = lsGet(KEYS.mapping)) !== null && _lsGet3 !== void 0 ? _lsGet3 : [];
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    mapping = _useState8[0],
    setMapping = _useState8[1];
  // mapping row: { externalCode, laromCode, name, unitsPerBox }

  var upL = useCallback(function (fn) {
    setLots(function (p) {
      var n = fn(p);
      lsSet(KEYS.lots, n);
      return n;
    });
  }, []);
  var upO = useCallback(function (fn) {
    setOrders(function (p) {
      var n = fn(p);
      lsSet(KEYS.orders, n);
      return n;
    });
  }, []);
  var upM = useCallback(function (fn) {
    setMapping(function (p) {
      var n = fn(p);
      lsSet(KEYS.mapping, n);
      return n;
    });
  }, []);
  var getLot = function getLot(id) {
    return lots.find(function (l) {
      return l.id === id;
    });
  };
  var getLotsFor = function getLotsFor(code) {
    return lots.filter(function (l) {
      return l.laromCode === code;
    });
  };
  var getMap = function getMap(ext) {
    return mapping.find(function (m) {
      return m.externalCode === String(ext).trim();
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: s.root
  }, /*#__PURE__*/React.createElement("header", {
    style: s.hdr
  }, /*#__PURE__*/React.createElement("div", {
    style: s.hdrIn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pkg",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: s.hdrT
  }, "LAROME \xB7 Lotes"))), /*#__PURE__*/React.createElement("main", {
    style: s.main
  }, tab === "orders" && /*#__PURE__*/React.createElement(OrdersTab, {
    lots: lots,
    orders: orders,
    upO: upO,
    getLot: getLot,
    getLotsFor: getLotsFor,
    getMap: getMap,
    mapping: mapping
  }), tab === "lots" && /*#__PURE__*/React.createElement(LotsTab, {
    lots: lots,
    upL: upL,
    mapping: mapping,
    getLotsFor: getLotsFor
  }), tab === "mapping" && /*#__PURE__*/React.createElement(MappingTab, {
    mapping: mapping,
    upM: upM,
    lots: lots,
    upL: upL
  })), /*#__PURE__*/React.createElement("nav", {
    style: s.nav
  }, [{
    key: "orders",
    icon: "cart",
    label: "Pedidos"
  }, {
    key: "lots",
    icon: "tag",
    label: "Lotes"
  }, {
    key: "mapping",
    icon: "link",
    label: "Códigos"
  }].map(function (_ref3) {
    var key = _ref3.key,
      icon = _ref3.icon,
      label = _ref3.label;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      style: _objectSpread(_objectSpread({}, s.nb), tab === key ? s.nba : {}),
      onClick: function onClick() {
        return setTab(key);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: s.nl
    }, label));
  })));
}

// ─── ORDERS TAB ──────────────────────────────────────────────────────────────
function OrdersTab(_ref4) {
  var lots = _ref4.lots,
    orders = _ref4.orders,
    upO = _ref4.upO,
    getLot = _ref4.getLot,
    getLotsFor = _ref4.getLotsFor,
    getMap = _ref4.getMap,
    mapping = _ref4.mapping;
  var _useState9 = useState("list"),
    _useState0 = _slicedToArray(_useState9, 2),
    view = _useState0[0],
    setView = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    pending = _useState12[0],
    setPending = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    orderRef = _useState14[0],
    setRef = _useState14[1];
  var _useState15 = useState(today()),
    _useState16 = _slicedToArray(_useState15, 2),
    orderDate = _useState16[0],
    setDate = _useState16[1];
  var handleQualFile = function handleQualFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (evt) {
      try {
        var wb = XLSX.read(evt.target.result, {
          type: "array"
        });
        var ws = wb.Sheets[wb.SheetNames[0]];
        var raw = XLSX.utils.sheet_to_json(ws, {
          defval: ""
        });
        var lines = raw.map(function (row) {
          var r = {};
          Object.keys(row).forEach(function (k) {
            r[norm(k)] = String(row[k]).trim();
          });
          return r;
        }).map(function (r) {
          return {
            id: uid(),
            externalCode: (r.codigo || r.code || "").toString().trim(),
            nameOrig: r.nombre || r.name || r.descripcion || "",
            qty: Number(r.cantidad || r.qty || 0) || 0,
            lotId: ""
          };
        }).filter(function (r) {
          return r.externalCode && r.qty > 0;
        });
        var rr = {};
        Object.keys(raw[0] || {}).forEach(function (k) {
          rr[norm(k)] = String(raw[0][k]).trim();
        });
        setRef(rr.referencia || rr.ref || rr.pedido || "");
        setDate(today());
        setPending(lines);
        setView("import");
      } catch (_unused3) {
        alert("Error. Columnas esperadas: CODIGO, NOMBRE, CANTIDAD");
      }
    };
    reader.readAsArrayBuffer(file);
    e.target.value = "";
  };
  var saveImport = function saveImport() {
    var allLines = pending.map(function (l) {
      var _getMap, _getMap2;
      return {
        id: l.id,
        externalCode: l.externalCode,
        qty: l.qty,
        lotId: l.lotId || null,
        laromCode: ((_getMap = getMap(l.externalCode)) === null || _getMap === void 0 ? void 0 : _getMap.laromCode) || null,
        name: ((_getMap2 = getMap(l.externalCode)) === null || _getMap2 === void 0 ? void 0 : _getMap2.name) || l.nameOrig
      };
    });
    upO(function (o) {
      return [{
        id: uid(),
        ref: orderRef.trim() || "PED-".concat(Date.now()),
        date: orderDate,
        lines: allLines
      }].concat(_toConsumableArray(o));
    });
    setView("list");
    setPending([]);
  };
  var exportCRM = function exportCRM(order) {
    var rows = order.lines.map(function (l) {
      var _getLot;
      return {
        CODIGO: l.externalCode,
        CODIGO_LAROME: l.laromCode || "",
        CANTIDAD: l.qty,
        LOTE: ((_getLot = getLot(l.lotId)) === null || _getLot === void 0 ? void 0 : _getLot.lot) || ""
      };
    });
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Pedido");
    XLSX.writeFile(wb, "".concat(order.ref || "pedido", "_CRM.xlsx"));
  };
  var removeOrder = function removeOrder(id) {
    return upO(function (o) {
      return o.filter(function (x) {
        return x.id !== id;
      });
    });
  };
  var filtered = orders.filter(function (o) {
    return !search || o.ref.toLowerCase().includes(search.toLowerCase()) || o.lines.some(function (l) {
      return (l.externalCode || "").includes(search);
    });
  });

  // ── List ──
  if (view === "list") return /*#__PURE__*/React.createElement("div", {
    style: s.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sh
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.st
  }, "Pedidos"), /*#__PURE__*/React.createElement("label", {
    style: s.btni
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "up",
    size: 15
  }), " Importar Excel", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".xlsx,.xls",
    style: {
      display: "none"
    },
    onChange: handleQualFile
  }))), mapping.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: s.warn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " Primero importa la tabla de c\xF3digos en \"C\xF3digos\""), /*#__PURE__*/React.createElement(SBar, {
    value: search,
    onChange: setSearch,
    placeholder: "Buscar por referencia o c\xF3digo\u2026"
  }), filtered.map(function (order) {
    return /*#__PURE__*/React.createElement(OrderCard, {
      key: order.id,
      order: order,
      getLot: getLot,
      removeOrder: removeOrder,
      exportCRM: exportCRM
    });
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: s.empty
  }, search ? "Sin resultados." : "Importa un Excel de Qualifarma para empezar."));

  // ── Assign lots ──
  var ventaLines = pending.filter(function (l) {
    return isVenta(l.externalCode);
  });
  var otherLines = pending.filter(function (l) {
    return !isVenta(l.externalCode);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: s.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sh
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.st
  }, "Asignar lotes")), /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    placeholder: "Referencia del pedido",
    value: orderRef,
    onChange: function onChange(e) {
      return setRef(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    type: "date",
    value: orderDate,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: s.secLabel
  }, "Productos de venta \u2014 asigna lote"), ventaLines.map(function (line) {
    var m = getMap(line.externalCode);
    var lotes = m ? getLotsFor(m.laromCode) : [];
    var lotObj = getLot(line.lotId);
    var avail = line.lotId ? function () {
      var lt = getLot(line.lotId);
      if (!lt) return 0;
      var used = pending.filter(function (l2) {
        return l2.id !== line.id && l2.lotId === line.lotId;
      }).reduce(function (a, l2) {
        return a + (Number(l2.qty) || 0);
      }, 0);
      return lt.qty - used;
    }() : null;
    var over = avail !== null && line.qty > avail;
    var bErr = m !== null && m !== void 0 && m.unitsPerBox ? boxError(m.unitsPerBox, line.qty) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: line.id,
      style: s.card
    }, /*#__PURE__*/React.createElement("div", {
      style: s.lineHead
    }, /*#__PURE__*/React.createElement("span", {
      style: s.extB
    }, line.externalCode), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: TEXT
      }
    }, (m === null || m === void 0 ? void 0 : m.name) || line.nameOrig), m ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: MUTED
      }
    }, "LAROME ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: AMBER
      }
    }, m.laromCode), m.unitsPerBox ? " \xB7 ".concat(m.unitsPerBox, " uds/caja") : "") : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: DANGER
      }
    }, "\u26A0 Sin correspondencia en tabla")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: TEXT,
        flexShrink: 0
      }
    }, line.qty, " uds")), bErr && /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, s.chip), s.chipWarn)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 12
    }), bErr), m ? lotes.length > 0 ? /*#__PURE__*/React.createElement("select", {
      style: s.inpsm,
      value: line.lotId,
      onChange: function onChange(e) {
        return setPending(function (ls) {
          return ls.map(function (x) {
            return x.id === line.id ? _objectSpread(_objectSpread({}, x), {}, {
              lotId: e.target.value
            }) : x;
          });
        });
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 Selecciona lote \u2014"), lotes.map(function (l) {
      return /*#__PURE__*/React.createElement("option", {
        key: l.id,
        value: l.id
      }, "Lote ", l.lot, " \xB7 ", l.qty, " uds disponibles");
    })) : /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, s.chip), s.chipWarn)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 12
    }), "No hay lotes de ", m.laromCode, " en stock \u2014 a\xF1\xE1delos en \"Lotes\"") : null, line.lotId && /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, s.chip), over ? s.chipWarn : s.chipOk)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: over ? "alert" : "check",
      size: 12
    }), over ? "Solo ".concat(avail, " uds disponibles (lote ").concat(lotObj === null || lotObj === void 0 ? void 0 : lotObj.lot, ")") : "Disponible: ".concat(avail, " uds \xB7 lote ").concat(lotObj === null || lotObj === void 0 ? void 0 : lotObj.lot)));
  }), otherLines.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: s.secLabel
  }, "Otros (testers, expositores \u2014 sin lote)"), otherLines.map(function (line) {
    var m = getMap(line.externalCode);
    return /*#__PURE__*/React.createElement("div", {
      key: line.id,
      style: _objectSpread(_objectSpread({}, s.card), {}, {
        opacity: 0.6
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: s.lineHead
    }, /*#__PURE__*/React.createElement("span", {
      style: _objectSpread(_objectSpread({}, s.extB), {}, {
        borderColor: BORDER,
        color: MUTED
      })
    }, line.externalCode), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: MUTED
      }
    }, (m === null || m === void 0 ? void 0 : m.name) || line.nameOrig), m && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: MUTED
      }
    }, "LAROME ", m.laromCode)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: MUTED,
        flexShrink: 0
      }
    }, line.qty, " uds")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btnp,
    onClick: saveImport
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " Guardar pedido"), /*#__PURE__*/React.createElement("button", {
    style: s.btng,
    onClick: function onClick() {
      setView("list");
      setPending([]);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " Cancelar")));
}
function OrderCard(_ref5) {
  var order = _ref5.order,
    getLot = _ref5.getLot,
    removeOrder = _ref5.removeOrder,
    exportCRM = _ref5.exportCRM;
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open = _useState18[0],
    setOpen = _useState18[1];
  var ventaLines = order.lines.filter(function (l) {
    return isVenta(l.externalCode);
  });
  var sinLote = ventaLines.filter(function (l) {
    return !l.lotId;
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: {
      flex: 1,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: TEXT
    }
  }, order.ref || "Sin referencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED,
      marginTop: 2
    }
  }, order.date, " \xB7 ", order.lines.length, " l\xEDneas", sinLote > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: AMBER,
      marginLeft: 8
    }
  }, "\xB7 ", sinLote, " sin lote"), sinLote === 0 && ventaLines.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: GREEN,
      marginLeft: 8
    }
  }, "\xB7 \u2713 Completo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: _objectSpread(_objectSpread({}, s.btnp), {}, {
      padding: "7px 12px",
      fontSize: 12
    }),
    onClick: function onClick() {
      return exportCRM(order);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dl",
    size: 14
  }), " CRM"), /*#__PURE__*/React.createElement("button", {
    style: s.btnd,
    onClick: function onClick() {
      return removeOrder(order.id);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 14
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      marginTop: 4
    }
  }, order.lines.map(function (l, i) {
    var lot = getLot(l.lotId);
    var venta = isVenta(l.externalCode);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        paddingTop: 5,
        borderTop: "1px solid ".concat(BORDER)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: _objectSpread(_objectSpread({}, s.extB), {}, {
        fontSize: 10,
        padding: "1px 5px"
      }, !venta ? {
        borderColor: BORDER,
        color: MUTED
      } : {})
    }, l.externalCode), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: MUTED,
        fontWeight: 600
      }
    }, l.name || l.laromCode || "—"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: TEXT,
        fontWeight: 700
      }
    }, l.qty, " uds"), venta && (lot ? /*#__PURE__*/React.createElement("span", {
      style: s.lotBsm
    }, lot.lot) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: AMBER,
        fontSize: 11
      }
    }, "sin lote")));
  })));
}

// ─── LOTS TAB ────────────────────────────────────────────────────────────────
function LotsTab(_ref6) {
  var lots = _ref6.lots,
    upL = _ref6.upL,
    mapping = _ref6.mapping,
    getLotsFor = _ref6.getLotsFor;
  var _useState19 = useState({
      laromCode: "",
      lot: "",
      qty: "",
      date: today()
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    form = _useState20[0],
    setForm = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    open = _useState22[0],
    setOpen = _useState22[1];
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    search = _useState24[0],
    setSearch = _useState24[1];
  var add = function add() {
    if (!form.laromCode || !form.lot.trim()) return;
    upL(function (l) {
      return [].concat(_toConsumableArray(l), [{
        id: uid(),
        laromCode: form.laromCode,
        lot: form.lot.trim(),
        qty: Number(form.qty) || 0,
        date: form.date
      }]);
    });
    setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, {
        lot: "",
        qty: ""
      });
    });
    setOpen(false);
  };
  var getInfo = function getInfo(code) {
    return mapping.find(function (m) {
      return m.laromCode === code;
    });
  };
  var filtered = lots.filter(function (l) {
    if (!search) return true;
    var t = search.toLowerCase();
    var m = getInfo(l.laromCode);
    return l.laromCode.toLowerCase().includes(t) || ((m === null || m === void 0 ? void 0 : m.name) || "").toLowerCase().includes(t) || l.lot.includes(t);
  });

  // Unique LAROME codes in mapping for the selector
  var laromCodes = _toConsumableArray(new Set(mapping.map(function (m) {
    return m.laromCode;
  }))).sort();
  return /*#__PURE__*/React.createElement("div", {
    style: s.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sh
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.st
  }, "Lotes en stock"), /*#__PURE__*/React.createElement("button", {
    style: s.btnp,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " A\xF1adir")), /*#__PURE__*/React.createElement(SBar, {
    value: search,
    onChange: setSearch
  }), open && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: s.cTitle
  }, "Nuevo lote"), laromCodes.length > 0 ? /*#__PURE__*/React.createElement("select", {
    style: s.inp,
    value: form.laromCode,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          laromCode: e.target.value
        });
      });
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 Selecciona producto \u2014"), laromCodes.map(function (code) {
    var m = getInfo(code);
    return /*#__PURE__*/React.createElement("option", {
      key: code,
      value: code
    }, (m === null || m === void 0 ? void 0 : m.name) || code, " \u2014 ", code, m !== null && m !== void 0 && m.unitsPerBox ? " (".concat(m.unitsPerBox, "/caja)") : "");
  })) : /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    placeholder: "C\xF3digo LAROME (ej. 111301)",
    value: form.laromCode,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          laromCode: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    placeholder: "N\xBA Lote (ej. 6325)",
    value: form.lot,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          lot: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    type: "number",
    placeholder: "Cantidad (uds.)",
    value: form.qty,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          qty: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.inp,
    type: "date",
    value: form.date,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          date: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btnp,
    onClick: add
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " Guardar"), /*#__PURE__*/React.createElement("button", {
    style: s.btng,
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " Cancelar"))), filtered.map(function (lot) {
    var m = getInfo(lot.laromCode);
    return /*#__PURE__*/React.createElement("div", {
      key: lot.id,
      style: s.listItem
    }, /*#__PURE__*/React.createElement("div", {
      style: s.lotB
    }, lot.lot), /*#__PURE__*/React.createElement("div", {
      style: s.lib
    }, /*#__PURE__*/React.createElement("div", {
      style: s.lit
    }, (m === null || m === void 0 ? void 0 : m.name) || lot.laromCode, /*#__PURE__*/React.createElement("span", {
      style: s.laromB
    }, lot.laromCode)), /*#__PURE__*/React.createElement("div", {
      style: s.lis
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: TEXT
      }
    }, lot.qty, " uds"), " \xB7 ", lot.date)), /*#__PURE__*/React.createElement("button", {
      style: s.btnd,
      onClick: function onClick() {
        return upL(function (l) {
          return l.filter(function (x) {
            return x.id !== lot.id;
          });
        });
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 14
    })));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: s.empty
  }, search ? "Sin resultados." : "No hay lotes todavía."));
}

// ─── MAPPING TAB ─────────────────────────────────────────────────────────────
function MappingTab(_ref7) {
  var mapping = _ref7.mapping,
    upM = _ref7.upM,
    lots = _ref7.lots,
    upL = _ref7.upL;
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    search = _useState26[0],
    setSearch = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    preview = _useState28[0],
    setPreview = _useState28[1];
  var handleFile = function handleFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (evt) {
      try {
        var wb = XLSX.read(evt.target.result, {
          type: "array"
        });
        var ws = wb.Sheets[wb.SheetNames[0]];
        var raw = XLSX.utils.sheet_to_json(ws, {
          defval: ""
        });
        var parsed = raw.map(function (row) {
          var r = {};
          Object.keys(row).forEach(function (k) {
            r[norm(k)] = String(row[k]).trim();
          });
          return r;
        }).map(function (r) {
          return {
            externalCode: (r.codigo || r.codigoqualifarma || r.codigoexterno || "").toString().trim(),
            laromCode: (r.codigolarome || r.larome || r.codigointerno || r.codigoproducto || "").toString().trim(),
            name: (r.nombre || r.name || r.descripcion || "").trim(),
            unitsPerBox: Number(r.unidadescaja || r.udscaja || r.unidadesxcaja || r.cajauds || 0) || 0
          };
        }).filter(function (r) {
          return r.externalCode && r.laromCode;
        });
        setPreview(parsed);
      } catch (_unused4) {
        alert("Error. Columnas: codigo, codigo_larome, nombre, unidades_caja");
      }
    };
    reader.readAsArrayBuffer(file);
    e.target.value = "";
  };
  var confirmImport = function confirmImport() {
    upM(function () {
      return preview;
    });
    setPreview(null);
  };
  var exportTemplate = function exportTemplate() {
    var rows = [{
      codigo: "951617392",
      codigo_larome: "111202",
      nombre: "Body Mist Rose",
      unidades_caja: 24
    }, {
      codigo: "951617404",
      codigo_larome: "111203",
      nombre: "Body Mist Yellow",
      unidades_caja: 24
    }, {
      codigo: "36210",
      codigo_larome: "118004",
      nombre: "Expositor Banco",
      unidades_caja: 1
    }];
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Correspondencias");
    XLSX.writeFile(wb, "plantilla_correspondencias.xlsx");
  };
  var filtered = mapping.filter(function (m) {
    return !search || m.externalCode.includes(search) || m.laromCode.toLowerCase().includes(search.toLowerCase()) || (m.name || "").toLowerCase().includes(search.toLowerCase());
  });
  return /*#__PURE__*/React.createElement("div", {
    style: s.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sh
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.st
  }, "C\xF3digos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btng,
    onClick: exportTemplate
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dl",
    size: 15
  }), " Plantilla"), /*#__PURE__*/React.createElement("label", {
    style: s.btni
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "up",
    size: 15
  }), " Importar", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".xlsx,.xls",
    style: {
      display: "none"
    },
    onChange: handleFile
  })))), /*#__PURE__*/React.createElement("div", {
    style: s.infoBox
  }, "Tabla de correspondencias: c\xF3digo Qualifarma \u2192 c\xF3digo LAROME + nombre corto + uds/caja. Descarga la plantilla, rell\xE9nala e imp\xF3rtala."), preview && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: s.cTitle
  }, "Importar ", preview.length, " correspondencias"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED
    }
  }, "Se reemplazar\xE1 la tabla actual."), preview.slice(0, 4).map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: s.mapRow
    }, /*#__PURE__*/React.createElement("span", {
      style: s.extB
    }, m.externalCode), /*#__PURE__*/React.createElement("span", {
      style: {
        color: AMBER,
        fontWeight: 700,
        fontSize: 12
      }
    }, m.laromCode), /*#__PURE__*/React.createElement("span", {
      style: {
        color: TEXT,
        fontSize: 12,
        flex: 1
      }
    }, m.name), m.unitsPerBox > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: MUTED,
        fontSize: 11
      }
    }, m.unitsPerBox, "/caja"));
  }), preview.length > 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MUTED
    }
  }, "\u2026y ", preview.length - 4, " m\xE1s"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btnp,
    onClick: confirmImport
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " Confirmar"), /*#__PURE__*/React.createElement("button", {
    style: s.btng,
    onClick: function onClick() {
      return setPreview(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " Cancelar"))), /*#__PURE__*/React.createElement(SBar, {
    value: search,
    onChange: setSearch,
    placeholder: "Buscar c\xF3digo\u2026"
  }), mapping.length === 0 && !preview && /*#__PURE__*/React.createElement("div", {
    style: s.hint
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: 14
  }), "\xA0Sin correspondencias. Descarga la plantilla, rell\xE9nala e imp\xF3rtala.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", {
    style: s.hintCode
  }, "codigo \xB7 codigo_larome \xB7 nombre \xB7 unidades_caja")), filtered.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: s.mapRow
    }, /*#__PURE__*/React.createElement("span", {
      style: s.extB
    }, m.externalCode), /*#__PURE__*/React.createElement("span", {
      style: {
        color: AMBER,
        fontWeight: 700,
        fontSize: 13
      }
    }, m.laromCode), /*#__PURE__*/React.createElement("span", {
      style: {
        color: TEXT,
        fontSize: 13,
        flex: 1
      }
    }, m.name), m.unitsPerBox > 0 && /*#__PURE__*/React.createElement("span", {
      style: _objectSpread({}, s.boxB)
    }, m.unitsPerBox, "/cj"), /*#__PURE__*/React.createElement("button", {
      style: _objectSpread(_objectSpread({}, s.btnd), {}, {
        padding: 4
      }),
      onClick: function onClick() {
        return upM(function (mp) {
          return mp.filter(function (_, j) {
            return j !== i;
          });
        });
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 13
    })));
  }), filtered.length === 0 && mapping.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: s.empty
  }, "Sin resultados."));
}

// ─── Styles ──────────────────────────────────────────────────────────────────
var AMBER = "#f59e0b",
  TEAL = "#2dd4bf",
  DARK = "#0d1b2a",
  CARD = "#132233",
  BORDER = "#1e3448",
  TEXT = "#e2eaf4",
  MUTED = "#6b8099",
  DANGER = "#ef4444",
  GREEN = "#22c55e";
var s = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100dvh",
    background: DARK,
    color: TEXT,
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    maxWidth: 480,
    margin: "0 auto"
  },
  hdr: {
    background: CARD,
    borderBottom: "1px solid ".concat(BORDER),
    padding: "14px 20px",
    flexShrink: 0,
    paddingTop: "max(14px,env(safe-area-inset-top))"
  },
  hdrIn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: AMBER
  },
  hdrT: {
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: "0.02em",
    color: TEXT
  },
  main: {
    flex: 1,
    overflowY: "auto",
    paddingBottom: "calc(70px + env(safe-area-inset-bottom))"
  },
  sec: {
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  sh: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4
  },
  st: {
    fontSize: 20,
    fontWeight: 700,
    color: TEXT,
    margin: 0
  },
  nav: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: 480,
    background: CARD,
    borderTop: "1px solid ".concat(BORDER),
    display: "flex",
    paddingBottom: "env(safe-area-inset-bottom)"
  },
  nb: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    padding: "12px 4px",
    border: "none",
    background: "transparent",
    color: MUTED,
    cursor: "pointer"
  },
  nba: {
    color: AMBER
  },
  nl: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
  },
  sw: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  si: {
    position: "absolute",
    left: 10,
    color: MUTED,
    display: "flex",
    pointerEvents: "none"
  },
  sin: {
    background: "#0a1520",
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    padding: "9px 32px",
    color: TEXT,
    fontSize: 13,
    width: "100%",
    boxSizing: "border-box",
    outline: "none"
  },
  scl: {
    position: "absolute",
    right: 8,
    background: "transparent",
    border: "none",
    color: MUTED,
    cursor: "pointer",
    display: "flex",
    padding: 2
  },
  card: {
    background: CARD,
    border: "1px solid ".concat(BORDER),
    borderRadius: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  cTitle: {
    fontWeight: 700,
    fontSize: 14,
    color: AMBER
  },
  secLabel: {
    fontWeight: 600,
    fontSize: 12,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginTop: 4
  },
  inp: {
    background: "#0a1520",
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    padding: "10px 12px",
    color: TEXT,
    fontSize: 14,
    width: "100%",
    boxSizing: "border-box",
    outline: "none"
  },
  inpsm: {
    background: "#0a1520",
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    padding: "8px 10px",
    color: TEXT,
    fontSize: 13,
    width: "100%",
    boxSizing: "border-box",
    outline: "none"
  },
  btnp: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "9px 16px",
    background: AMBER,
    color: "#0d1b2a",
    border: "none",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  btng: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "9px 14px",
    background: "transparent",
    color: MUTED,
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer"
  },
  btnd: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    background: "transparent",
    color: DANGER,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    flexShrink: 0
  },
  btni: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "9px 14px",
    background: "transparent",
    color: TEAL,
    border: "1px solid ".concat(TEAL),
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: CARD,
    border: "1px solid ".concat(BORDER),
    borderRadius: 10,
    padding: "12px 14px"
  },
  lib: {
    flex: 1,
    minWidth: 0
  },
  lit: {
    fontWeight: 600,
    fontSize: 14,
    color: TEXT,
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap"
  },
  lis: {
    fontSize: 12,
    color: MUTED
  },
  lotB: {
    background: "#1a3a4a",
    border: "1px solid ".concat(TEAL),
    color: TEAL,
    borderRadius: 6,
    padding: "4px 10px",
    fontWeight: 700,
    fontSize: 13,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    flexShrink: 0
  },
  lotBsm: {
    background: "#1a3a4a",
    border: "1px solid ".concat(TEAL),
    color: TEAL,
    borderRadius: 4,
    padding: "2px 7px",
    fontWeight: 700,
    fontSize: 11,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap"
  },
  extB: {
    background: "#1a2030",
    border: "1px solid ".concat(AMBER, "44"),
    color: AMBER,
    borderRadius: 4,
    padding: "2px 7px",
    fontWeight: 700,
    fontSize: 11,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    flexShrink: 0
  },
  laromB: {
    background: "#1a1a2a",
    border: "1px solid #6b809944",
    color: MUTED,
    borderRadius: 4,
    padding: "1px 6px",
    fontWeight: 600,
    fontSize: 11
  },
  boxB: {
    background: "#1a2a3a",
    border: "1px solid ".concat(BORDER),
    color: MUTED,
    borderRadius: 4,
    padding: "1px 6px",
    fontWeight: 600,
    fontSize: 11
  },
  chip: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    borderRadius: 6,
    padding: "5px 9px",
    fontSize: 12,
    fontWeight: 600
  },
  chipOk: {
    background: "#0d2218",
    color: GREEN,
    border: "1px solid #22c55e33"
  },
  chipWarn: {
    background: "#2a0d0d",
    color: DANGER,
    border: "1px solid #ef444433"
  },
  lineHead: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  mapRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: CARD,
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    padding: "10px 14px"
  },
  empty: {
    textAlign: "center",
    color: MUTED,
    padding: "32px 0",
    fontSize: 14
  },
  warn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#2a1a00",
    border: "1px solid ".concat(AMBER, "44"),
    borderRadius: 8,
    padding: "10px 12px",
    color: AMBER,
    fontSize: 12,
    fontWeight: 600
  },
  infoBox: {
    background: "#0a1520",
    border: "1px solid ".concat(BORDER),
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 12,
    color: MUTED,
    lineHeight: 1.6
  },
  hint: {
    textAlign: "center",
    color: MUTED,
    fontSize: 12,
    lineHeight: 1.8,
    padding: "20px 10px",
    border: "1px dashed ".concat(BORDER),
    borderRadius: 10
  },
  hintCode: {
    fontFamily: "monospace",
    color: AMBER,
    fontSize: 11
  }
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
if ("serviceWorker" in navigator) window.addEventListener("load", function () {
  return navigator.serviceWorker.register("/sw.js");
});
