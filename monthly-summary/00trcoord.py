#! /usr/bin/env python3

import sys


if __name__ == "__main__":
  list_spec = {}
  for line in sys.stdin:
    if line[0:-10] not in list_spec.keys():
      list_spec[line[0:-10]] = []
    list_spec[line[0:-10]].append(line[-9:-1])
  for spec in list_spec.keys():
    last = list_spec[spec][-1]
    out = '  * [](https://www.w3.org/TR/{}/{}-{}/)'.format(last[0:4], spec, last)
    out += ' ({}/{}'.format(last[4:6], list_spec[spec][0][6:8])
    del list_spec[spec][0]
    for date in list_spec[spec]:
      out += ', {}'.format(date[6:8])
    out += ')'
    print(out)

