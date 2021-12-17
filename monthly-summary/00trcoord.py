#! /usr/bin/env python3

# for spec title via browser-specs json, download index.json 
# and place at running directory
#   https://w3c.github.io/browser-specs/index.json

import sys
import os
import json

BROWSER_SPECS = 'index.json'


def LoadBrowserSpecs():
  try:
    obj_specs = open(BROWSER_SPECS)
    specs_data = json.load(obj_specs)
    obj_specs.close()
  except:
    raise Exception("json format parse error")
  specs = {}
  for spec in specs_data:
    specs[spec['shortname']] = spec['title']
  return specs


if __name__ == "__main__":
  list_spec = {}
  specs = None
  if os.path.isfile(BROWSER_SPECS):
    specs = LoadBrowserSpecs()
  for line in sys.stdin:
    if line[0:-10] not in list_spec.keys():
      list_spec[line[0:-10]] = []
    list_spec[line[0:-10]].append(line[-9:-1])
  for spec in list_spec.keys():
    last = list_spec[spec][-1]
    out = '  * ['
    if specs is not None:
      short = spec[spec.find('-')+1:]
      if short in specs:
        out += specs[short]
    out += '](https://www.w3.org/TR/{}/{}-{}/)'.format(last[0:4], spec, last)
    out += ' ({}/{}'.format(last[4:6], list_spec[spec][0][6:8])
    del list_spec[spec][0]
    for date in list_spec[spec]:
      out += ', {}'.format(date[6:8])
    out += ')'
    print(out)

