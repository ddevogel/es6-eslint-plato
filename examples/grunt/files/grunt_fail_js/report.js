__report = {
  "info": {
    "file": "/tmp/plato/grunt/lib/grunt/fail.js",
    "fileShort": "grunt/fail.js",
    "fileSafe": "grunt_fail_js",
    "link": "files/grunt_fail_js"
  },
  "complexity": {
    "aggregate": {
      "line": 10,
      "complexity": {
        "sloc": {
          "physical": 75,
          "logical": 48
        },
        "cyclomatic": 13,
        "halstead": {
          "operators": {
            "distinct": 19,
            "total": 131,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 65,
            "total": 159,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 290,
          "vocabulary": 84,
          "difficulty": 23.23846153846154,
          "volume": 1853.7720526058404,
          "effort": 43078.81054555572,
          "bugs": 0.6179240175352801,
          "time": 2393.2672525308735
        }
      }
    },
    "functions": [
      {
        "name": "writeln",
        "line": 28,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 11
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 23,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 72,
            "vocabulary": 35,
            "difficulty": 10.434782608695652,
            "volume": 369.3083772200376,
            "effort": 3853.652631861262,
            "bugs": 0.12310279240667919,
            "time": 214.09181288118123
          }
        }
      },
      {
        "name": "dumpStack",
        "line": 43,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 38,
            "vocabulary": 13,
            "difficulty": 6.25,
            "volume": 140.6167092893615,
            "effort": 878.8544330585094,
            "bugs": 0.04687223642978716,
            "time": 48.8252462810283
          }
        }
      },
      {
        "name": "fail.fatal",
        "line": 54,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 24,
            "vocabulary": 16,
            "difficulty": 3.4090909090909087,
            "volume": 96,
            "effort": 327.27272727272725,
            "bugs": 0.032,
            "time": 18.18181818181818
          }
        }
      },
      {
        "name": "fail.warn",
        "line": 65,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 7
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 57,
            "vocabulary": 29,
            "difficulty": 8.157894736842104,
            "volume": 276.90491672227165,
            "effort": 2258.961162734321,
            "bugs": 0.09230163890742388,
            "time": 125.49784237412895
          }
        }
      },
      {
        "name": "fail.report",
        "line": 78,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 27,
            "vocabulary": 14,
            "difficulty": 3.611111111111111,
            "volume": 102.7985828955553,
            "effort": 371.21710490061633,
            "bugs": 0.03426619429851843,
            "time": 20.623172494478684
          }
        }
      }
    ],
    "maintainability": 116.06407729852288,
    "module": "grunt/fail.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 10,
        "column": 1,
        "message": "Use the function form of \"use strict\".",
        "source": "Use the function form of \"use strict\"."
      },
      {
        "severity": "error",
        "line": 24,
        "column": 13,
        "message": "Extra comma.",
        "source": "Extra comma."
      },
      {
        "severity": "error",
        "line": 12,
        "column": 13,
        "message": "'require' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 15,
        "column": 12,
        "message": "'module' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 46,
        "column": 7,
        "message": "'console' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 48,
        "column": 7,
        "message": "'console' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 57,
        "column": 3,
        "message": "'process' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 73,
        "column": 5,
        "message": "'process' is not defined.",
        "source": "'{a}' is not defined."
      }
    ]
  }
}