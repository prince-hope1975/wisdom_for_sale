// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v95], secs: v97, time: v96, didSend: v28, from: v94 } = txn1;
  ;
  const v101 = stdlib.protect(ctc1, await interact.confirmPurchase(v95), {
    at: './index.rsh:31:60:application',
    fs: ['at ./index.rsh:30:11:application call to [unknown function] (defined at: ./index.rsh:30:15:function exp)'],
    msg: 'confirmPurchase',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v94, v95, v101],
    evt_cnt: 1,
    funcNum: 1,
    lct: v96,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v103], secs: v105, time: v104, didSend: v41, from: v102 } = txn2;
      
      ;
      if (v103) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v103], secs: v105, time: v104, didSend: v41, from: v102 } = txn2;
  ;
  if (v103) {
    const txn3 = await (ctc.sendrecv({
      args: [v94, v95, v102],
      evt_cnt: 0,
      funcNum: 2,
      lct: v104,
      onlyIf: true,
      out_tys: [],
      pay: [v95, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v133, time: v132, didSend: v56, from: v131 } = txn3;
        
        sim_r.txns.push({
          amt: v95,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v133, time: v132, didSend: v56, from: v131 } = txn3;
    ;
    const v136 = stdlib.addressEq(v102, v131);
    stdlib.assert(v136, {
      at: './index.rsh:40:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v95), {
      at: './index.rsh:41:46:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportPayment',
      who: 'Buyer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v71, from: v141 } = txn4;
    ;
    const v145 = stdlib.addressEq(v94, v141);
    stdlib.assert(v145, {
      at: './index.rsh:47:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    ;
    stdlib.protect(ctc2, await interact.reportWisdom(v142), {
      at: './index.rsh:51:28:application',
      fs: ['at ./index.rsh:51:28:application call to [unknown function] (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:51:28:application call to "liftedInteract" (defined at: ./index.rsh:51:28:application)'],
      msg: 'reportWisdom',
      who: 'Buyer'
      });
    
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:35:55:application',
      fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:25:function exp)'],
      msg: 'reportCancellation',
      who: 'Buyer'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v94, v95, v102],
      evt_cnt: 0,
      funcNum: 4,
      lct: v104,
      onlyIf: true,
      out_tys: [],
      pay: [v95, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v111, time: v110, didSend: v56, from: v109 } = txn3;
        
        sim_r.txns.push({
          amt: v95,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v111, time: v110, didSend: v56, from: v109 } = txn3;
    ;
    const v114 = stdlib.addressEq(v102, v109);
    stdlib.assert(v114, {
      at: './index.rsh:40:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v95), {
      at: './index.rsh:41:46:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportPayment',
      who: 'Buyer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v120], secs: v122, time: v121, didSend: v71, from: v119 } = txn4;
    ;
    const v123 = stdlib.addressEq(v94, v119);
    stdlib.assert(v123, {
      at: './index.rsh:47:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    ;
    stdlib.protect(ctc2, await interact.reportWisdom(v120), {
      at: './index.rsh:51:28:application',
      fs: ['at ./index.rsh:51:28:application call to [unknown function] (defined at: ./index.rsh:51:28:function exp)', 'at ./index.rsh:51:28:application call to "liftedInteract" (defined at: ./index.rsh:51:28:application)'],
      msg: 'reportWisdom',
      who: 'Buyer'
      });
    
    return;
    
    
    
    
    }
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const v90 = stdlib.protect(ctc0, interact.price, 'for Seller\'s interact field price');
  const v91 = stdlib.protect(ctc1, interact.wisdom, 'for Seller\'s interact field wisdom');
  
  const txn1 = await (ctc.sendrecv({
    args: [v90],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v95], secs: v97, time: v96, didSend: v28, from: v94 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v95], secs: v97, time: v96, didSend: v28, from: v94 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.reportReady(v95), {
    at: './index.rsh:27:27:application',
    fs: ['at ./index.rsh:27:27:application call to [unknown function] (defined at: ./index.rsh:27:27:function exp)', 'at ./index.rsh:27:27:application call to "liftedInteract" (defined at: ./index.rsh:27:27:application)'],
    msg: 'reportReady',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v103], secs: v105, time: v104, didSend: v41, from: v102 } = txn2;
  ;
  if (v103) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v133, time: v132, didSend: v56, from: v131 } = txn3;
    ;
    const v136 = stdlib.addressEq(v102, v131);
    stdlib.assert(v136, {
      at: './index.rsh:40:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v95), {
      at: './index.rsh:41:46:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportPayment',
      who: 'Seller'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v94, v95, v91],
      evt_cnt: 1,
      funcNum: 3,
      lct: v132,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:47:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v142], secs: v144, time: v143, didSend: v71, from: v141 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v94,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v71, from: v141 } = txn4;
    ;
    const v145 = stdlib.addressEq(v94, v141);
    stdlib.assert(v145, {
      at: './index.rsh:47:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    ;
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:35:55:application',
      fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:25:function exp)'],
      msg: 'reportCancellation',
      who: 'Seller'
      });
    
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v111, time: v110, didSend: v56, from: v109 } = txn3;
    ;
    const v114 = stdlib.addressEq(v102, v109);
    stdlib.assert(v114, {
      at: './index.rsh:40:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v95), {
      at: './index.rsh:41:46:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportPayment',
      who: 'Seller'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v94, v95, v91],
      evt_cnt: 1,
      funcNum: 5,
      lct: v110,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:47:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v120], secs: v122, time: v121, didSend: v71, from: v119 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v94,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v120], secs: v122, time: v121, didSend: v71, from: v119 } = txn4;
    ;
    const v123 = stdlib.addressEq(v94, v119);
    stdlib.assert(v123, {
      at: './index.rsh:47:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    ;
    return;
    
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEFIAIDBiYCAQAAIjUAMRhBAnQpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEAA6UmBBAxAAJxJJAxAAEgkEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEs4nnazT+ULA0/zEAEkSxIrIBNAMlW7III7IQNP+yB7NCAaFIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEkSc087A0/ogB4jQDVyggMQASRDT/NP4WUChLAVcAKGdIIQY1ATIGNQJCAW5IIQU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABGJ6Q7g0/lCwNP8xABJEsSKyATQDJVuyCCOyEDT/sgezQgENSSMMQADGSSEEDEAAT0ghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEQbFATbA0/ogBQDQDVyggMQASRDT/NP4WUChLAVcAKGdIIQU1ATIGNQJCAMxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAED7/GNDT9FlEHCFCwNP1BABw0/zT+FlAxAFAoSwFXAEhnSCEENQEyBjUCQgB3NP80/hZQMQBQKEsBVwBIZ0gkNQEyBjUCQgBcSIGgjQaIAKYiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADT/FlAoSwFXAChnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v103",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v120",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v103",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v120",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200100c3803806200100c8339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b610d6580620002a76000396000f3fe6080604052600436106100795760003560e01c80639a3e39121161004b5780639a3e3912146100e1578063a7661d54146100f4578063ab53f2c614610107578063f662edcc1461012a57005b80631e93b0f1146100825780631f95d6b3146100a65780637eea518c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610ab0565b61013d565b6100806100c7366004610ae5565b6102c1565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610ae5565b610469565b610080610102366004610ae5565b610656565b34801561011357600080fd5b5061011c6107d8565b60405161009d929190610b01565b610080610138366004610ab0565b610875565b61014d600660005414601961099d565b6101678135158061016057506001548235145b601a61099d565b60008080556002805461017990610b5e565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610b5e565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610baf565b90507fbe691a17bbf6c1ef0b8a92c382b3f0edf1861bd037a238a3cd2c36ac52acafc0338360405161023d929190610c14565b60405180910390a16102513415601761099d565b8051610269906001600160a01b03163314601861099d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a6573d6000803e3d6000fd5b50600080805560018190556102bd906002906109c2565b5050565b6102d1600260005414600d61099d565b6102eb813515806102e457506001548235145b600e61099d565b6000808055600280546102fd90610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461032990610b5e565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b505050505080602001905181019061038e9190610c5c565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103c1929190610cdf565b60405180910390a16103da81602001513414600b61099d565b60408101516103f5906001600160a01b03163314600c61099d565b6040805180820182526000808252602080830182815285516001600160a01b0316808552868301518252600390935543600155845191820192909252905192810192909252906060015b604051602081830303815290604052600290805190602001906104639291906109ff565b50505050565b610479600160005414600961099d565b6104938135158061048c57506001548235145b600a61099d565b6000808055600280546104a590610b5e565b80601f01602080910402602001604051908101604052809291908181526020018280546104d190610b5e565b801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b50505050508060200190518101906105369190610baf565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610569929190610cdf565b60405180910390a161057d3415600861099d565b61058d6040830160208401610d14565b156105f45760408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452338352600290955543600155875193840194909452905195820195909552935116908301529060800161043f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452338352600590955543600155875193840194909452905195820195909552935116908301529060800161043f565b610666600560005414601561099d565b6106808135158061067957506001548235145b601661099d565b60008080556002805461069290610b5e565b80601f01602080910402602001604051908101604052809291908181526020018280546106be90610b5e565b801561070b5780601f106106e05761010080835404028352916020019161070b565b820191906000526020600020905b8154815290600101906020018083116106ee57829003601f168201915b50505050508060200190518101906107239190610c5c565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610756929190610cdf565b60405180910390a161076f81602001513414601361099d565b604081015161078a906001600160a01b03163314601461099d565b6040805180820182526000808252602080830182815285516001600160a01b03168085528683015182526006909355436001558451918201929092529051928101929092529060600161043f565b6000606060005460028080546107ed90610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461081990610b5e565b80156108665780601f1061083b57610100808354040283529160200191610866565b820191906000526020600020905b81548152906001019060200180831161084957829003601f168201915b50505050509050915091509091565b610885600360005414601161099d565b61089f8135158061089857506001548235145b601261099d565b6000808055600280546108b190610b5e565b80601f01602080910402602001604051908101604052809291908181526020018280546108dd90610b5e565b801561092a5780601f106108ff5761010080835404028352916020019161092a565b820191906000526020600020905b81548152906001019060200180831161090d57829003601f168201915b50505050508060200190518101906109429190610baf565b90507fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a3383604051610975929190610c14565b60405180910390a16109893415600f61099d565b8051610269906001600160a01b0316331460105b816102bd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546109ce90610b5e565b6000825580601f106109de575050565b601f0160209004906000526020600020908101906109fc9190610a83565b50565b828054610a0b90610b5e565b90600052602060002090601f016020900481019282610a2d5760008555610a73565b82601f10610a4657805160ff1916838001178555610a73565b82800160010185558215610a73579182015b82811115610a73578251825591602001919060010190610a58565b50610a7f929150610a83565b5090565b5b80821115610a7f5760008155600101610a84565b600060a08284031215610aaa57600080fd5b50919050565b600060a08284031215610ac257600080fd5b610acc8383610a98565b9392505050565b600060408284031215610aaa57600080fd5b600060408284031215610af757600080fd5b610acc8383610ad3565b82815260006020604081840152835180604085015260005b81811015610b3557858101830151858201606001528201610b19565b81811115610b47576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b7257607f821691505b60208210811415610aaa57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610baa57600080fd5b919050565b600060408284031215610bc157600080fd5b6040516040810181811067ffffffffffffffff82111715610bf257634e487b7160e01b600052604160045260246000fd5b604052610bfe83610b93565b8152602083015160208201528091505092915050565b6001600160a01b038316815260c08101610acc602083018480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b600060608284031215610c6e57600080fd5b6040516060810181811067ffffffffffffffff82111715610c9f57634e487b7160e01b600052604160045260246000fd5b604052610cab83610b93565b815260208301516020820152610cc360408401610b93565b60408201529392505050565b80358015158114610baa57600080fd5b6001600160a01b038316815281356020808301919091526060820190610d06908401610ccf565b151560408301529392505050565b600060208284031215610d2657600080fd5b610acc82610ccf56fea2646970667358221220dc0d6eff4c1479ac86f3284896417442f183d423bf445eab64f959277641de8a64736f6c634300080c0033`,
  BytecodeLen: 4108,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:42:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:49:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:36:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:42:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:49:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
