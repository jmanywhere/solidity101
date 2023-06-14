const studentABI =  [
    {
      "inputs": [],
      "name": "CursoSolidityGT__ETHTransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CursoSolidityGT__InscripcionCerrada",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CursoSolidityGT__Reentrancy",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CursoSolidityGT__SoloMaestro",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CursoSolidityGT__YaInscrito",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "horaDeCierre",
          "type": "uint256"
        }
      ],
      "name": "AbrirInscripciones",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "InscripcionCompleta",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "abrirInscripciones",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "alumnos",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cantidadDeAlumnos",
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
      "name": "distribuirETH",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "horaDeInscripcion",
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
      "name": "inscribirme",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "inscrito",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
]

export default studentABI;